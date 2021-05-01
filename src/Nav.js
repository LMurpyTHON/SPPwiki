import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return(
      <nav>
        <h3 className="h3">Wikipedia v2</h3>
        <ul className="nav-links">
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/Service">
          <li>Service</li>
          </Link>
          <Link to="/Contact">
          <li>Contact</li>
          </Link>
          <Link to="/Contribution">
          <li>Contribution</li>
          </Link>
        </ul>
      </nav>
    )
}

export default Nav;