import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Specials from './pages/Speicals/Specials';
import Pharmacy from './pages/Pharmacy/Pharmacy';
import Login from './pages/Login/Login';
import AboutUs from './pages/AboutUs/AboutUs';
import QnA from './pages/QnA/QnA';
import NotFound from './pages/NotFound/NotFound';
import Ambulance from './Ambulance/Ambulance';
import Footer from './pages/Shared/Footer/Footer';
import Appointment from './pages/Appointment/Appointment/Appointment';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route  path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute  path="/services">
            
            <Services></Services>
          
          </PrivateRoute>

          <Route  path="/appointment/:appointmentId">
            <Appointment></Appointment>
          </Route>

          <Route  path="/specials">
            <Specials></Specials>
          </Route>

          <Route  path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute  path="/ambulance">
            <Ambulance></Ambulance>
          </PrivateRoute>

          <Route  path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>

          <PrivateRoute path="/Qna">
              <QnA></QnA>
          </PrivateRoute>  

          <Route  path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

         <Footer></Footer>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
