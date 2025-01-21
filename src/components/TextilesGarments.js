import React from 'react';
import './Fruits.css'; // Import the CSS for styling
import MyFooter from './MyFooter';
// Import fruit images
import Childrenswear from '../images/TextilesGarments/Childrenswear.jpg';
import EthnicWear from '../images/TextilesGarments/Ethnicwear.jpg';
import fibers from '../images/TextilesGarments/fibers.jpg';
import HomeTextiles from '../images/TextilesGarments/HomeTextiles.jpg';
import IndustrialTextiles from '../images/TextilesGarments/IndustrialTextiles.jpg';
import kitchentextiles from '../images/TextilesGarments/kitchentextiles.jpg';
import Knittedfabrics from '../images/TextilesGarments/Knittedfabrics.jpg';
import MedicalTextiles from '../images/TextilesGarments/MedicalTextiles.jpg';
import MensWear from '../images/TextilesGarments/MensWear.jpg';
import NonWovenfabrics from '../images/TextilesGarments/NonWovenfabrics.jpg';
import Sportswear from '../images/TextilesGarments/Sportswear.jpg';
import Womenswear from '../images/TextilesGarments/Womenswear.jpg';
import Wovenfabrics from '../images/TextilesGarments/Wovenfabrics.jpg';
import yarns from '../images/TextilesGarments/yarns.jpg';
import moreproducts from '../images/fruits/moreproducts.jpg';

// Fruit data with imported images
const textilesData = [
  { id: 1, src: Childrenswear, alt: 'Apple', text: 'KidsWear' },
  { id: 2, src: EthnicWear, alt: 'Banana', text: 'EthnicWear' },
  { id: 3, src: fibers, alt: 'Cherry', text: 'Fibers' },
  { id: 4, src: HomeTextiles, alt: 'Sapota', text: 'HomeTextiles' },
  { id: 5, src: IndustrialTextiles, alt: 'Guva', text: 'IndustrialTextiles' },
  { id: 6, src: kitchentextiles, alt: 'Guva', text: 'kitchentextiles' },
  { id: 7, src: Knittedfabrics, alt: 'Guva', text: 'Knittedfabrics' },
  { id: 8, src: MedicalTextiles, alt: 'Guva', text: 'MedicalTextiles' },
  { id: 9, src: MensWear, alt: 'Guva', text: 'MensWear' },
  { id: 10, src: NonWovenfabrics, alt: 'Guva', text: 'NonWovenfabrics' },
  { id: 11, src: Sportswear, alt: 'Guva', text: 'Sportswear' },
  { id: 12, src: Womenswear, alt: 'Guva', text: 'Womenswear' },
  { id: 13, src: Wovenfabrics, alt: 'Guva', text: 'Wovenfabrics' },
  { id: 14, src: yarns, alt: 'Guva', text: 'yarns' },
  { id: 15, src: moreproducts, alt: 'Guva', text: 'Many More Textiles' },


  // Add more fruit images here
];

const TextilesGarments = () => {
  return (
    <>
      <div className="fruit-page">
        
      <div className="intro-message">
          <h2>Welcome to Textiles & Garments Market!</h2>
          <p>
            At <strong>Sri Pushpa Exim </strong>, we pride ourselves on delivering the highest quality Textiles & Garments. Whether you're looking for a HomeTextiles , kitchentextiles MensWear,Womenswear, etc.., we've got the perfect textile for you. Our Textile & Garments are sourced directly from local suppliers to ensure that product is high quality.
          </p>
          
        
        </div>

        <div className="fruit-grid">
          {textilesData.map((fruit) => (
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

export default TextilesGarments;
