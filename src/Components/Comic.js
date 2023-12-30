// Comic.js
import React from 'react';
import { Link } from 'react-router-dom';

const Comic = () => {
  return (
    <Link to="/comic-link">
      <div className="comic">Comic
      <img src='ComicsAndCoasters/Assets/coffee-cup.png' /></div>
      
    </Link>
  );
};

export default Comic;