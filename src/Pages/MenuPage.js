// MenuPage.js
import React from 'react';
import '../Styles/MenuPage.css'; // Import your CSS file

const coffeeMenu = [
  {
    id: 1,
    name: 'Espresso',
    description: 'A strong and concentrated coffee',
    category: 'Hot Drinks',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    category: 'Hot Drinks',
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Espresso with steamed milk',
    category: 'Hot Drinks',
  },
  {
    id: 4,
    name: 'Iced Coffee',
    description: 'Chilled coffee served with ice',
    category: 'Cold Drinks',
  },
  {
    id: 5,
    name: 'Cold Brew',
    description: 'Smooth and cold-brewed coffee',
    category: 'Cold Drinks',
  },
  {
    id: 6,
    name: 'Iced Latte',
    description: 'Espresso with chilled milk and ice',
    category: 'Cold Drinks',
  },
  {
    id: 7,
    name: 'Pumpkin Spice Latte',
    description: 'Seasonal favorite with espresso, milk, and pumpkin spice',
    category: 'Seasonal',
  },
  {
    id: 8,
    name: 'Comic Con Special',
    description: 'A unique coffee blend inspired by your favorite comics',
    category: 'Specials',
  },
  {
    id: 9,
    name: 'Superhero Mocha',
    description: 'A powerful mocha with extra chocolate and a heroic taste',
    category: 'Specials',
  },
  {
    id: 10,
    name: 'Villainous Vanilla Latte',
    description: 'An intriguing vanilla latte with a touch of mischief',
    category: 'Specials',
  },
  {
    id: 11,
    name: 'Wonder Woman Espresso',
    description: 'A legendary espresso that empowers your day',
    category: 'Specials',
  },
  {
    id: 12,
    name: 'Spider-Man Iced Coffee',
    description: 'A web-slinging iced coffee adventure',
    category: 'Specials',
  },
  {
    id: 13,
    name: 'Thor\'s Thunder Latte',
    description: 'A latte that channels the power of the gods',
    category: 'Specials',
  },
  // Add even more special items as needed
];


const MenuPage = () => {
  // Separate the menu items into categories
  const hotDrinks = coffeeMenu.filter((item) => item.category === 'Hot Drinks');
  const coldDrinks = coffeeMenu.filter((item) => item.category === 'Cold Drinks');
  const seasonalItems = coffeeMenu.filter((item) => item.category === 'Seasonal');
  const specialtyItems = coffeeMenu.filter((item) => item.category === 'Specials');

  return (
    <div className="menu-page">
      <div className="hero-image">
        <img src="/Assets/your-hero-image.jpg" alt="Hero Image" />
        <div className="header-text">
          <h1>Coffee menu</h1>
          <p>"Discover a world of rich flavors and aromatic brews at our coffee haven. Our menu is a delightful journey through the art of coffee, featuring a selection of handcrafted beverages that awaken your senses and elevate your day. From the classic elegance of hot espresso to the refreshing chill of iced brews, our menu is a testament to the passion and expertise we pour into every cup. Explore our seasonal specialties and superhero-inspired creations, and let each sip transport you to a realm of coffee bliss. Embrace the extraordinary with our Coffee Shop's menu and savor the extraordinary in every sip."</p>
        </div>
      </div>

      <div className='menu-section'>
      <h2>Specialty Items</h2>
      <div className="menu-grid">
        {specialtyItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-image">
              {/* Add an image for each menu item */}
              <img src={`/Assets/coffee-cup.png`} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
      <h2>Hot Drinks</h2>
      <div className="menu-grid">
        {hotDrinks.map((item) => (
          <div className="menu-item" key={item.id}>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-image">
              {/* Add an image for each menu item */}
              <img src={`/Assets/coffee-cup.png`} alt={item.name} />
            </div>
          </div>
        ))}
      </div>

      <h2>Cold Drinks</h2>
      <div className="menu-grid">
        {coldDrinks.map((item) => (
          <div className="menu-item" key={item.id}>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-image">
              {/* Add an image for each menu item */}
              <img src={`/Assets/coffee-cup.png`} alt={item.name} />
            </div>
          </div>
        ))}
      </div>

      <h2>Seasonal Items</h2>
      <div className="menu-grid">
        {seasonalItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-image">
              {/* Add an image for each menu item */}
              <img src={`/Assets/coffee-cup.png`} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MenuPage;
