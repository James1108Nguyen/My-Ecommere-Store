import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <h1>James's Apple Store</h1>
        </div>
        <nav className='nav'>
          <ul>
            <li><a href='/'>Store</a> </li>
            <li><a href='/'>Mac</a> </li>
            <li><a href='/'>Ipad</a> </li>
            <li><a href='/'>Watch</a> </li>
            <li><a href='/'>Airpods</a> </li>
            <li><a href='/'>Phụ kiện</a> </li>
            <li><a href='/'>Hỗ trợ</a> </li>
          </ul>
        </nav>
      </header>
    );
}
export default Header;