// homePage.js

import React from 'react';
import '../Styles/HomePage.css'; // Import your CSS file
import ExperienceCandC from '../Layout/ExpierenceCandC';
import ImageWithText from '../Layout/TextWithImage';
import HorizontalImageList from '../Components/HorizantalImageList';

const HomePage = () => {
  return (
    <>
<div className="container">
  <div className="content">
    <div className="circular-image">
      <img src={`/Assets/SampleLogo.jpeg`} />
    </div>
  </div>
</div>
    <div className="section">
      <h1>Experience what Comics and Coasters has to offer!</h1>
      <ExperienceCandC />
    </div>
    <div className="container">
  <div className="content">
  </div>
</div>
<HorizontalImageList imageUrls={['/Assets/SampleLogo.jpeg', '/Assets/SampleLogo.jpeg','/Assets/SampleLogo.jpeg','/Assets/SampleLogo.jpeg']}/>
    <ImageWithText
  title="Comic Books. Gourmet Coffee."
  text="To ensure that every cup of coffee is a masterpiece, we order fresh coffee beans weekly. Quality and freshness are at the core of what we do. Our mission is simple: to provide high-end products in a welcoming and comfortable setting, where comic book lovers and coffee connoisseurs alike can come together to enjoy the best of both worlds. So, whether you're here to explore the latest adventures in the comic universe or savor a meticulously brewed cup of coffee, Comic and Coasters is your haven of choice."
  imageUrl="/Assets/coffee-cup.png"
/>
    
    </>
    
  );
};

export default HomePage;
