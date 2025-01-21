import React from 'react';
import './Fruits.css'; // Import the CSS for styling
import MyFooter from './MyFooter';
// Import fruit images
import tunafish from '../images/SeafoodImages/tunafish.jpg';
import prawns from '../images/SeafoodImages/prawns.jpg';
import crabs from '../images/SeafoodImages/crabs.jpg';
import moreproducts from '../images/fruits/moreproducts.jpg';

// Fruit data with imported images
const coconutsData = [
  { id: 1, src: tunafish, alt: 'Apple', text: 'Fresh Fish' },
  { id: 2, src: prawns, alt: 'Banana', text: 'Fresh prawns' },
  { id: 3, src: crabs, alt: 'Cherry', text: ' Fresh crabs' },
  { id: 4, src: moreproducts, alt: 'Sapota', text: 'Many More Seafoods' },

  // Add more fruit images here
];

const SeaFoods = () => {
  return (
    <>
      <div className="fruit-page">
        
      <div className="intro-message">
          <h2>Welcome to Fresh SeaFood Market!</h2>
          <p>
            At <strong>Sri Pushpa Exim </strong>, we pride ourselves on delivering the highest quality SeaFoods that are fresh. Whether you're looking for a Fish, Prawns, Crabs, etc.,. Our SeaFoods are sourced directly from Sea to ensure that every bite is packed with high quality.
          </p>
          
        
        </div>

        <div className="fruit-grid">
          {coconutsData.map((fruit) => (
            <div className="fruit-item" key={fruit.id}>
              <img src={fruit.src} alt={fruit.alt} className="fruit-image" />
              <div className="overlay">
                <p>{fruit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default SeaFoods;
