import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AuthLogo from '../assets/AuthReseller copy (1).png';
import Dropdown from './Dropdown'; // Import Dropdown component

const menuItems = [
  { 
    path: "/", 
    label: "Home", 
    columns: [
      {title: "Shop the Latest", links: [
        { path: "/mac", label: "Mac" },
        { path: "/ipad", label: "iPad" },
        { path: "/iphone", label: "iPhone" },
        { path: "/watch", label: "Watch" },
        { path: "/airpods", label: "AirPods" },
        { path: "/tv-home", label: "TV & Home" },
        { path: "/accessories", label: "Accessories" }
      ]},
      {title: "Quick Links", links: [
        { path: "/mac", label: "Find a Store" },
        { path: "/ipad", label: "Order Status" },
        { path: "/iphone", label: "Apple Trade In" },
        { path: "/watch", label: "Financing" },
        { path: "/airpods", label: "College Student Offer" },
      ]},
      {title: "Shop Special Storest", links: [
        { path: "/mac", label: "Certified Refurbished" },
        { path: "/ipad", label: "Education" },
        { path: "/iphone", label: "Business" },
        { path: "/watch", label: "Veterans and Military" },
        { path: "/airpods", label: "Government" },
        { path: "/tv-home", label: "TV & Home" },
        { path: "/accessories", label: "Accessories" }
      ]},
    ]
  },
  { path: "/mac", label: "Mac", 
    columns: [
      { title: "Explore Mac", links: [
        { path: "/explore-all-mac", label: "Explore All Mac" },
        { path: "/macbook-air", label: "MacBook Air" },
        { path: "/macbook-pro", label: "MacBook Pro" },
        { path: "/imac", label: "iMac" },
        { path: "/mac-mini", label: "Mac mini" },
        { path: "/mac-studio", label: "Mac Studio" },
        { path: "/mac-pro", label: "Mac Pro" },
        { path: "/displays", label: "Displays" }
      ]},
      { title: "Shop Mac", links: [
        { path: "/shop-mac", label: "Shop Mac" },
        { path: "/help-me-choose", label: "Help Me Choose" },
        { path: "/mac-accessories", label: "Mac Accessories" },
        { path: "/apple-trade-in", label: "Apple Trade In" },
        { path: "/financing", label: "Financing" },
        { path: "/college-student-offer", label: "College Student Offer" }
      ]},
      { title: "More from Mac", links: [
        { path: "/mac-support", label: "Mac Support" },
        { path: "/applecare-for-mac", label: "AppleCare+ for Mac" },
        { path: "/macos-sequoia-preview", label: "macOS Sequoia Preview" },
        { path: "/apple-intelligence", label: "Apple Intelligence" },
        { path: "/apps-by-apple", label: "Apps by Apple" },
        { path: "/continuity", label: "Continuity" },
        { path: "/icloud", label: "iCloud+" },
        { path: "/mac-for-business", label: "Mac for Business" },
        { path: "/education", label: "Education" }
      ]}
    ]
  },
  { path: "/ipad", label: "iPad", subLinks: [{ path: "/ipad-pro", label: "iPad Pro" }, { path: "/ipad-mini", label: "iPad Mini" }] },
  { path: "/iphone", label: "iPhone", subLinks: [{ path: "/iphone-13", label: "iPhone 13" }, { path: "/iphone-se", label: "iPhone SE" }] },
  { path: "/watch", label: "Watch", subLinks: [{ path: "/series-7", label: "Series 7" }, { path: "/se", label: "SE" }] },
  { path: "/airpods", label: "AirPods", subLinks: [{ path: "/airpods-pro", label: "AirPods Pro" }, { path: "/airpods-max", label: "AirPods Max" }] },
  { path: "/tv-home", label: "TV & Home", subLinks: [{ path: "/apple-tv", label: "Apple TV" }, { path: "/homepod", label: "HomePod" }] },
  { path: "/entertainment", label: "Entertainment", subLinks: [{ path: "/apple-music", label: "Apple Music" }, { path: "/apple-tv-plus", label: "Apple TV+" }] },
  { path: "/accessories", label: "Accessories", subLinks: [{ path: "/cases", label: "Cases" }, { path: "/chargers", label: "Chargers" }] },
  { path: "/support", label: "Support", subLinks: [{ path: "/contact-support", label: "Contact Support" }, { path: "/service-repair", label: "Service & Repair" }] },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State quản lý dropdown nào đang mở
  const forceOpenDropdown = 0; // Đặt giá trị để luôn hiển thị dropdown cụ thể cho mục đích styling

  useEffect(() => {
    const handleScroll = () => {
      setOpenDropdown(null); // Ẩn dropdown khi người dùng cuộn trang
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index); // Mở dropdown của item được hover
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null); // Đóng dropdown khi không hover nữa
  };

  return (
    <>
    <header className="header">
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item logo-item">
            <Link to="/" className="nav-link">                
                <img src={AuthLogo} alt='Logo' className='logo-img' />
            </Link>
          </li>
          {menuItems.map((item, index) => (
            <li 
              className="nav-item menu-item" 
              key={index} 
              onMouseEnter={() => handleMouseEnter(index)} 
              onMouseLeave={handleMouseLeave}
            >
              <Link to={item.path} className='nav-link'>
                {item.label}
              </Link>
                {openDropdown === index && item.columns && (
                  <Dropdown id={`dropdown-${index}`} columns={item.columns} />
                )}
            </li>
          ))}
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
      {/* Luôn hiển thị dropdown cho mục đích styling */}
      <Dropdown columns={menuItems[forceOpenDropdown].columns} /> {/* Chọn menu item nào bạn muốn hiển thị */}
      {/* {openDropdown !== null && <div className="overlay"></div>}     */}
    </header>
    <div className='overlay'></div>
    </>
  );
};

export default Header;
