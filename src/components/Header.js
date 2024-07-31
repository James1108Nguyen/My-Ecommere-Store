// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Apple_logo_black.png'

const Header = () => {
  return (
    <header className="header">

      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} ></img>
          </Link>

        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Mac</Link></li>
          <li><Link to="/">iPad</Link></li>
          <li><Link to="/">iPhone</Link></li>
          <li><Link to="/">Watch</Link></li>
          <li><Link to="/">AirPods</Link></li>
          <li><Link to="/">TV&Home</Link></li>
          <li><Link to="/">Entertainment</Link></li>
          <li><Link to="/">Accessories</Link></li>
          <li><Link to="/">Support</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
