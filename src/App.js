import './App.css';
import Nav from './Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Contribution from './Pages/Contribution';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { formik, form, Field, ErrorMessage } from "formik";
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
      <Route path="/About" component={About} />
      <Route path="/Service" component={Service} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Contribution"  component={Contribution} />
      <Route path="/" exact component={Home} />
      <Route component= {PageNotFound} exact/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

