import React from 'react';
import './Fruits.css'; // Import the CSS for styling
import MyFooter from './MyFooter';
// Import fruit images
import BlackPeppercornsImage from '../images/SpicesImages/BlackPeppercorns.jpg';
import CardamomImage from '../images/SpicesImages/Cardamom.jpg';
import ChaatMasalaImage from '../images/SpicesImages/ChaatMasala.jpg';
import CinnamonImage from '../images/SpicesImages/Cinnamon.jpg';
import Cloves from '../images/SpicesImages/Cloves.jpg';
import CorianderPowder from '../images/SpicesImages/CorianderPowder.jpg';
import corianderseeds from '../images/SpicesImages/Corianderseeds.jpg';
import CuminPowder from '../images/SpicesImages/CuminPowder.jpg';
import cuminseeds from '../images/SpicesImages/cuminseeds.jpg';
import CurryPowder from '../images/SpicesImages/CurryPowder.jpg'; 
import FennelSeeds from '../images/SpicesImages/FennelSeeds.jpg';
import FenugreekSeeds from '../images/SpicesImages/FenugreekSeeds.jpg';
import GaramMasala from '../images/SpicesImages/GaramMasala.jpg';
import greenchillipowder from '../images/SpicesImages/greenchillipowder.jpg'; 
import MustardSeeds from '../images/SpicesImages/MustardSeeds.jpg';
import Nutmeg from '../images/SpicesImages/Nutmeg.jpg';
import redchillipowder from '../images/SpicesImages/redchillipowder.jpg';
import Saffron from '../images/SpicesImages/Saffron.jpg';
import StarAnise from '../images/SpicesImages/StarAnise.jpg';
import TurmericPowder from '../images/SpicesImages/TurmericPowder.jpg';
import moreproducts from '../images/fruits/moreproducts.jpg';
// Fruit data with imported images
const coconutsData = [
  { id: 1, src: BlackPeppercornsImage, alt: 'Apple', text: 'BlackPeppercorns' },
  { id: 2, src: CardamomImage, alt: 'Banana', text: 'Cardamom' },
  { id: 3, src: ChaatMasalaImage, alt: 'Cherry', text: 'ChaatMasala' },
  { id: 4, src: CinnamonImage, alt: 'Sapota', text: 'Cinnamon' },
  { id: 5, src: Cloves, alt: 'Guva', text: 'Cloves' },
  { id: 6, src: CorianderPowder, alt: 'Guva', text: 'CorianderPowder' },
  { id: 7, src: corianderseeds, alt: 'Guva', text: 'Corianderseeds' },
  { id: 8, src: CuminPowder, alt: 'Guva', text: 'CuminPowder' },
  { id: 9, src: cuminseeds, alt: 'Guva', text: 'Cuminseeds' },
  { id: 10, src: CurryPowder, alt: 'Guva', text: 'CurryPowder' },
  { id: 11, src: FennelSeeds, alt: 'Guva', text: 'FennelSeeds' },
  { id: 12, src: FenugreekSeeds, alt: 'Guva', text: 'FenugreekSeeds' },
  { id: 13, src: GaramMasala, alt: 'Guva', text: 'GaramMasala' },
  { id: 14, src: greenchillipowder, alt: 'Guva', text: 'greenchillipowder' },
  { id: 15, src: MustardSeeds, alt: 'Guva', text: 'MustardSeeds' },
  { id: 16, src: Nutmeg, alt: 'Guva', text: 'Nutmeg' },
  { id: 17, src: redchillipowder, alt: 'Guva', text: 'redchillipowder' },
  { id: 18, src: Saffron, alt: 'Guva', text: 'Saffron' },
  { id: 19, src: StarAnise, alt: 'Guva', text: 'StarAnise' },
  { id: 20, src: TurmericPowder, alt: 'Guva', text: 'TurmericPowder' },
  { id: 21, src: moreproducts, alt: 'Guva', text: 'Many More Spices' },
  

  // Add more fruit images here
];

const SpicesCollections = () => {
  return (
    <>
      <div className="fruit-page">
        
      <div className="intro-message">
          <h2>Welcome to Fresh Spices Market!</h2>
          <p>
            At <strong>Sri Pushpa Exim </strong>, we pride ourselves on delivering the highest quality Spices that are fresh, organic, and handpicked. Whether you're looking for a TurmericPowder , red chilli powder, green chilli powder, etc.., we've got the perfect Spicey for you. Our Spices are sourced directly from local farms to ensure that every bite is packed with flavor.
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

export default SpicesCollections;
