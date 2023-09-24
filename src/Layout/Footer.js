// Footer.js
import React from 'react';
import '../Styles/Footer.css'; // Import your CSS file
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="location-info">
        <h3>Our Locations</h3>
        <p>Main Street</p>
        <p>Downtown Avenue</p>
        <p>City Center</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-links">
            <SocialIcon url="https://facebook.com" />
            <SocialIcon url="https://twitter.com" />
            <SocialIcon url="https://instagram.com" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
