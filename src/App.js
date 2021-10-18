import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './pages/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        {/* <Switch>
          <Route exact path="/">

          </Route>
          <Route  path="/">

          </Route>
          <Route  path="/">

          </Route>
          <Route  path="/">

          </Route>
          <Route  path="/">

          </Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
