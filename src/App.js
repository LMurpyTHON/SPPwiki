import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Contribution from './Contribution';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { formik, form, Field, ErrorMessage } from "formik";

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
      <Route path="/About" component={About} />
      <Route path="/Service" component={Service} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Contribution" component={Contribution} />
      <Route path="/"  component={Home} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

