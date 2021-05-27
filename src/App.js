import './App.css';
import Nav from './Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { formik, form, Field, ErrorMessage } from "formik";
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" component={Home} exact/>
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route component= {PageNotFound} exact/>
      </Switch>
      </div>
    </Router>
  );
}


export default App;

