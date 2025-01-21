import React from 'react';
import './Fruits.css'; // Import the CSS for styling
import MyFooter from './MyFooter';
// Import fruit images
import appleImage from '../images/fruits/mango.jpg';
import bananaImage from '../images/fruits/banana.png';
import cherryImage from '../images/fruits/lemon.jpg';
import sapotaImage from '../images/fruits/sapota.jpg';
import guva from '../images/fruits/guva.jpg';
import Apple from '../images/fruits/Apple.jpg';
import Promegranate from '../images/fruits/Promegranate.jpg';
import Mosambi from '../images/fruits/Mosambi.jpg';
import tomato from '../images/fruits/tomato.jpg';
import onion from '../images/fruits/onion.jpg';
import carrot from '../images/fruits/carrot.jpg';
import moreproducts from '../images/fruits/moreproducts.jpg';
// Fruit data with imported images
const fruitsData = [
  { id: 1, src: appleImage, alt: 'Apple', text: 'Fresh Mango' },
  { id: 2, src: bananaImage, alt: 'Banana', text: 'Juicy Banana' },
  { id: 3, src: cherryImage, alt: 'Cherry', text: ' Lemon' },
  { id: 4, src: sapotaImage, alt: 'Sapota', text: 'Juicy Sapota' },
  { id: 5, src: guva, alt: 'Guva', text: 'Fresh Guva' },
  { id: 6, src: Apple, alt: 'Apple', text: 'Fresh Apple' },
  { id: 7, src: Promegranate, alt: 'Banana', text: 'Juicy Promegranate' },
  { id: 8, src: Mosambi, alt: 'Cherry', text: ' Mosambi' },
  { id: 9, src: tomato, alt: 'Sapota', text: 'Juicy Tomato' },
  { id: 10, src: onion, alt: 'Guva', text: 'Fresh Onion' },
  { id: 11, src: carrot, alt: 'Apple', text: 'Fresh Carrot' },
  { id: 12, src: moreproducts, alt: 'Banana', text: 'Many More Agriculture Products' },
  // Add more fruit images here
];

const Fruits = () => {
  return (
    <>
      <div className="fruit-page">
        
      <div className="intro-message">
          <h2>Welcome to Fresh Agriculture Products Market!</h2>
          <p>
            At <strong>Sri Pushpa Exim </strong>, we pride ourselves on delivering the highest quality fruits that are fresh, organic, and handpicked. Whether you're looking for a juicy mango, a sweet banana, or a tangy lemon,onions, tomato, and Many more Agriculture products. Our Agriculture products are sourced directly from local farms to ensure that every bite is packed with flavor and nutrients.
          </p>
          
        
        </div>

        <div className="fruit-grid">
          {fruitsData.map((fruit) => (
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

export default Fruits;
