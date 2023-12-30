import React from 'react';
import '../Styles/MenuPage.css'

const MenuSection = ({ title, items, isOpen, toggleSection }) => (
    <div className="menu-section">
      <h2 onClick={toggleSection}>{title}</h2>
      {isOpen && (
        <div className="menu-grid">
          {items.map((item) => (
            <div className="menu-item" key={item.id}>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="item-image">
                <img src={`ComicsAndCoasters/Assets/coffee-cup.png`} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

export default MenuSection;
