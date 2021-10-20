import { getAuth, signInWithPopup, GoogleAuthProvider , signOut, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [error, setError]= useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] =useState(false);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();


        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally(()=> setIsLoading(false));


    } 


    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('Password Must be at least 6 characters long')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Password must contain 2 upper case')
        }
       
        isLogin? processlogin(email, password) : registerNewUser(email, password);
    }
    const processlogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const registerNewUser =(email, password) => {
         createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user= result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }

    // observe state change
    useEffect(() => {
     const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);

            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    const logOut = ()=> {
        setIsLoading(true);
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        signInUsingGoogle,
        logOut,

        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        toggleLogin,
        error,
        isLogin

    }
}

export default useFirebase;