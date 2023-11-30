import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HeaderStyle.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-section">
        <nav>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">Menu</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-section">
        <div className="logo">
          <h1>Comics & Coasters</h1>
          <p>A Fusion of Comics and Coffee</p>
        </div>
      </div>
      <div className="header-section">
        <nav>
          <ul>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link">About Us</Link>
            </li>
            {/* <li className="nav-item">
            <Link to="/Landing" className="nav-link">About Us</Link>
              <a href="#" className="nav-link">Contact</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
