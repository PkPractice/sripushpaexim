import React from 'react';
import './Fruits.css'; // Import the CSS for styling
import MyFooter from './MyFooter';
// Import fruit images
import Automotive from '../images/EngineeringProducts/Automotive.jpg';
import Construction from '../images/EngineeringProducts/Construction.jpg';
import ElectricalAndElectronicsComponents from '../images/EngineeringProducts/ElectricalAndElectronicsComponents.jpg';
import Industrial from '../images/EngineeringProducts/Industrial.jpg';
import IndustrialToolsAndMachinery from '../images/EngineeringProducts/IndustrialToolsAndMachinery.jpg';
import Measurements from '../images/EngineeringProducts/Measurements.jpg';
import Pumps from '../images/EngineeringProducts/Pumps.jpg';
import Renewable from '../images/EngineeringProducts/Renewable.jpg';
import Safety from '../images/EngineeringProducts/Safety.jpg';
import Welding from '../images/EngineeringProducts/Welding.jpg';
import Rawmaterials from '../images/EngineeringProducts/Rawmaterials.jpg';
import Automobile from '../images/EngineeringProducts/Automobile.jpg';
import moreproducts from '../images/fruits/moreproducts.jpg';
// Fruit data with imported images
const engineeringData = [
  { id: 1, src: Automotive, alt: 'Apple', text: 'Automotive and Mechanical Components' },
  { id: 2, src: Construction, alt: 'Banana', text: 'Construction Materials' },
  { id: 3, src: ElectricalAndElectronicsComponents, alt: 'Cherry', text: 'Electrical and Electronics Components' },
  { id: 4, src: Industrial, alt: 'Sapota', text: 'Industrial Products' },
  { id: 5, src: IndustrialToolsAndMachinery, alt: 'Guva', text: 'Industrial Tools and Machinery' },
  { id: 6, src: Measurements, alt: 'Guva', text: 'Measurements' },
  { id: 7, src: Pumps, alt: 'Guva', text: 'Pumps And Valves' },
  { id: 8, src: Renewable, alt: 'Guva', text: 'Renewable Energy' },
  { id: 9, src: Safety, alt: 'Guva', text: 'Safety and PPE' },
  { id: 10, src: Welding, alt: 'Guva', text: 'Welding and Fabrication' },
  { id: 11, src: Rawmaterials, alt: 'Guva', text: 'Raw Materials' },
  { id: 12, src: Automobile, alt: 'Guva', text: 'Automobile Sapre Parts' },
  { id: 13, src: moreproducts, alt: 'Guva', text: 'Many More Engineering Products' },



  // Add more fruit images here
];

const EngineeringCollections = () => {
  return (
    <>
      <div className="fruit-page">
        
      <div className="intro-message">
          <h2>Welcome to Engineering Products Market!</h2>
          <p>
            At <strong>Sri Pushpa Exim </strong>, we pride ourselves on delivering the highest quality Engineering Products. Whether you're looking for a Industerial , Electrical , Construction, etc.., we've got the perfect Engineering product for you. Our Engineering Products are sourced directly from the factories to ensure that product is high quality.
          </p>
          
        
        </div>

        <div className="fruit-grid">
          {engineeringData.map((fruit) => (
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

export default EngineeringCollections;
