import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AuthLogo from '../assets/AuthReseller copy (1).png'


const menuItems = [
  { path: "/", label: "Home" },
  { path: "/mac", label: "Mac" },
  { path: "/ipad", label: "iPad" },
  { path: "/iphone", label: "iPhone" },
  { path: "/watch", label: "Watch" },
  { path: "/airpods", label: "AirPods" },
  { path: "/tv-home", label: "TV & Home" },
  { path: "/entertainment", label: "Entertainment" },
  { path: "/accessories", label: "Accessories" },
  { path: "/support", label: "Support" },
];

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item logo-item">
            <Link to="/" className="nav-link">                
                <img src= {AuthLogo} alt='' className='logo-img'></img>
            </Link>
          </li>
          <li className="nav-item menu-item">
            {menuItems.map((item)=>(
              <Link key={item.path} to={item.path} className='nav-link'>
                {item.label}
              </Link>
            ) )}
          </li>
          <li className="nav-item logo-item search-item">
            <Link to="/search" className="nav-link">
              <SearchIcon className='icon' />
            </Link>
          </li>
          <li className="nav-item logo-item bag-item">
            <Link to="/shopping-bag" className="nav-link">
              <ShoppingCartIcon className='icon' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
