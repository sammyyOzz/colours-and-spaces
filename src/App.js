import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login';


function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
