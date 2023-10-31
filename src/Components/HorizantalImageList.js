import React from 'react';
import '../Styles/HorizantalImageList.css'

const HorizontalImageList = ({ imageUrls }) => {
  return (
    <div className="horizontal-image-list">
      <div className="image-container">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalImageList;
