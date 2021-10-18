import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Specials from './pages/Speicals/Specials';
import Doctors from './pages/Doctors/Doctors';
import Pharmacy from './pages/Pharmacy/Pharmacy';
import Login from './pages/Login/Login';
import AboutUs from './pages/AboutUs/AboutUs';
import QnA from './pages/QnA/QnA';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route  path="/home">
            <Home></Home>
          </Route>

          <Route  path="/services">
            <Services></Services>
          </Route>

          <Route  path="/specials">
            <Specials></Specials>
          </Route>

          <Route  path="/doctors">
            <Doctors></Doctors>
          </Route>

          <Route  path="/pharmacy">
            <Pharmacy></Pharmacy>
          </Route>

          <Route  path="/login">
            <Login></Login>
          </Route>

          <Route  path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>

          <Route  path="/Qna">
            <QnA></QnA>
          </Route>

          <Route  path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

         {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
