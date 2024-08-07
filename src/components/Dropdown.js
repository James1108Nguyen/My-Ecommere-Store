import React, { useEffect, useState } from 'react';
import './Dropdown.css'; // Import CSS file cho styling

const Dropdown = ({ id,isClosing, columns }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);


  return (
    <div
      id={id}
      className={`dropdown-container open ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}
    >
      <div className="dropdown-menu">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={`dropdown-column column-${columnIndex + 1}`}>
            <div className="dropdown-column-title">{column.title}</div>
            {column.links.map((link, linkIndex) => (
              <a 
                key={linkIndex} // Key cho mỗi link
                href={link.path} 
                className="dropdown-item"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
