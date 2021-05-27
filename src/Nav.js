import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return(
      <nav>
        <Link to="/">
        <h3 className="h3">Wikipedia v2</h3>
        </Link>
        <ul className="nav-links">
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/Contact">
          <li>Contact</li>
          </Link>
          <Link to="/Login">
            <li>Login</li>
          </Link>
          <Link to="/SignUp">
            <li>Sign Up</li>
          </Link>
        </ul>
      </nav>
    )
}

export default Nav;