// LandingPage.js
import React from 'react';
import Comic from '../Components/Comic';
import Coaster from '../Components/Coaster';
import '../Styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">  
      <Comic />
      <Coaster />
    </div>
  );
};

export default LandingPage;
