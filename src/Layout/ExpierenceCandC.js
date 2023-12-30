import React from 'react';
import Card from '../Components/Card';

const ExperienceCandC = () => {
  // Sample data for cards
  const cardsData = [
    {
      imageUrl: 'ComicsAndCoasters/Assets/coffee-cup.png',
      title: 'Gourmet Coffee',
      text: 'Comic and Coasters is a unique establishment that seamlessly blends the love for comics and the passion for exceptional coffee. Nestled at the heart of our community, Comic and Coasters offers an extraordinary experience that combines the thrill of reading your favorite comic books with the delight of sipping premium coffee.',
    },
    {
      imageUrl: 'ComicsAndCoasters/Assets/coffee-cup.png',
      title: 'Unique atmophere',
      text: 'At Comic and Coasters, we take coffee seriously. Just like superheroes protecting their cities, we meticulously source gourmet coffee beans to ensure the highest quality brews. Our menu boasts a wide range of options, from rich and robust espressos to carefully crafted gourmet coffee blends. Pair your coffee with a delectable assortment of pastries, light lunches, and mouthwatering desserts that will tantalize your taste buds.',
    },
    {
      imageUrl: 'ComicsAndCoasters/Assets/coffee-cup.png',
      title: 'Comic books',
      text: 'But we\'re not just about coffee; we\'re about creativity. Our shelves are lined with a vast selection of comic books, inviting you to immerse yourself in captivating stories while you enjoy your coffee. Whether you\'re a fan of superheroes, graphic novels, or classic comic strips, we\'ve got something for every comic enthusiast.',
    },
  ];

  return (
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
  );
};

export default ExperienceCandC;
