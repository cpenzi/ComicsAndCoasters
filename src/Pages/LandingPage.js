// LandingPage.js
import React from 'react';
import FallingImage from '../Components/FallingImage';
import RisingImage from '../Components/RisingImage';
import '../Styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="container">
      <FallingImage />
      <RisingImage />
    </div>
  );
};

export default LandingPage;
