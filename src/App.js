import './App.css';
import Nav from './Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Read from './Pages/Read';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { formik, form, Field, ErrorMessage } from "formik";
import PageNotFound from './Pages/PageNotFound';
import Footer from './components/Footer';
import WW1 from './components/WW1';
import Albert from './components/Albert';
import Georgia from './components/Georgia';
import { AuthProvider } from './components/Auth';



function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" component={Home} exact/>
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Read" component={Read} />
      <Route path="Georgia" component={Georgia} />
      <Route path="/WW1" component={WW1} />
      <Route path="/Albert" component= {Albert} />
      <Route component= {PageNotFound} exact />
      </Switch>
      <Footer/>
      </div>
    </Router>
    </AuthProvider>
  );
}


export default App;

