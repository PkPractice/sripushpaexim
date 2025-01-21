import React from 'react';
import './Fruits.css'; // Import the CSS for styling
import MyFooter from './MyFooter';
// Import fruit images
import coconutPowderImage from '../images/coconut/coconut1.jpg';
import coconutOilImage from '../images/coconut/coconut2.jpg';
import coconutMilkImage from '../images/coconut/coconut3.jpg';
import coconutMilkpImage from '../images/coconut/coconut4.jpg';

// Fruit data with imported images
const coconutsData = [
  { id: 1, src: coconutPowderImage, alt: 'Apple', text: 'Fresh Coconut Powder' },
  { id: 2, src: coconutOilImage, alt: 'Banana', text: 'Fresh Coconut Oil' },
  { id: 3, src: coconutMilkImage, alt: 'Cherry', text: ' Juicy Coconut Milk' },
  { id: 4, src: coconutMilkpImage, alt: 'Sapota', text: 'Coconut Milk Powder' },

  // Add more fruit images here
];

const Coconuts = () => {
  return (
    <>
      <div className="fruit-page">
        
      <div className="intro-message">
          <h2>Welcome to Fresh Coconuts Market!</h2>
          <p>
            At <strong>Sri Pushpa Exim </strong>, we pride ourselves on delivering the highest quality Coconuts that are fresh, organic, and handpicked. Whether you're looking for a Coconut Powder, a Coconut Oil, Coconut Milk, and Coconut Milk Powder, we've got the perfect coconut for you. Our Coconuts are sourced directly from local farms to ensure that every bite is packed with flavor and nutrients.
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

export default Coconuts;
