// Coaster.js
import React from 'react';
import { Link } from 'react-router-dom';

const Coaster = () => {
  return (
    <Link to="/coaster-link">
      <div className="coaster">Coaster<img src='/Assets/coffee-cup.png'/></div> 
    </Link>
  );
};

export default Coaster;