import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="logo">Trevon Shelby</div>
      <ul class="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
