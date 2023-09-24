// MenuPage.js
import React from 'react';
import '../Styles/MenuPage.css'; // Import your CSS file

const coffeeMenu = [
  {
    id: 1,
    name: 'Espresso',
    description: 'A strong and concentrated coffee',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Espresso with steamed milk',
  },
  {
    id: 4,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
  },
  {
    id: 5,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
  },
  {
    id: 6,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
  },
  {
    id: 7,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
  },
  {
    id: 8,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
  },
  {
    id: 9,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
  },
  // Add more menu items as needed
];

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1>Our Coffee Menu</h1>
      <div className="menu-grid">
        {coffeeMenu.map((item) => (
          <div className="menu-item" key={item.id}>
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <div className="item-image">
              {/* Add an image for each menu item */}
              <img src={`/Assets/coffee-cup.png`} alt={item.name} />
              {/* Example: <img src={`/images/${item.id}.jpg`} alt={item.name} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
