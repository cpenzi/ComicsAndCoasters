import React from 'react';
import '../Styles/TextWithImage.css'; 

const ImageWithText = ({ title, text, imageUrl }) => {
  return (
    <div className="image-with-text">
      <div className="text-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="image-content">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default ImageWithText;
