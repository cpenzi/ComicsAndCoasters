import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-section">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
          </ul>
        </nav>
      </div>
      <div className="header-section">
        <div className="logo">Comics and Coasters</div>
      </div>
      <div className="header-section">
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
