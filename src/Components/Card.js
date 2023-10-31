import React from 'react';

const Card = ({ imageUrl, title, text }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Card;
