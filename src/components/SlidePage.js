import React,{useState} from "react";
import  Carousel from "react-bootstrap/Carousel";
import img1 from '../images/fruits/mango.jpg';
import img2 from '../images/spices.jpg';
import img4 from '../images/TextilesGarments/kitchentextiles.jpg';

import img6 from '../images/coco.jpg';
import img7 from '../images/seafood.jpg';

import img8 from '../images/spices.jpg';
import img9 from '../images/leather.jpg';
import img10 from '../images/garments.jpg';

import Agroproducts from '../images/vg1.jpg';
import seafoods from '../images/seafoods.jpeg';

import './SlidePage.css';
import FooterPage from './MyFooter.js';
import { Container } from "react-bootstrap";
function SlidePage(){
  const [hoveredImage, setHoveredImage] = useState(null);
 return(
 <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          style={{height:"50vh"}}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:"50vh"}}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:"50vh"}}
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:"50vh"}}
          className="d-block w-100"
          src={Agroproducts}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:"50vh"}}
          className="d-block w-100"
          src={seafoods}
          alt="fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className="content">
      <h1 style={{textAlign:"center"}}>SRI PUSHPA EXIM</h1>
      <p style={{textAlign:"center"}}>Expots/Imports</p>
      <div className="row1">
       <p>At Sri Puspha Exim, we specialize in the seamless export and import of high-quality goods, including fresh vegetables, premium seafood, top-notch engineering products, and exquisite textiles. Our global network ensures that you receive the best products, sourced sustainably and delivered efficiently.Trust us to bridge the gap between international markets, providing reliable service and exceptional value with every shipment.</p>
      </div>
    </div>
    <Container>
      <div className="text-center">
        <h3>Our Products</h3>
      </div>
      <div className="row">
        <div className="col-md-4 vegProduct" style={{ padding: "2px" }}>
          <img
            onMouseOver={() => setHoveredImage("Agriculture Products")}
            onMouseOut={() => setHoveredImage(null)}
            src={Agroproducts}
            alt="Agri product"
            style={{ width: "80%", height: "80%" }}
          />
          {hoveredImage === "Agriculture Products" && (
            <span className="hover-text">Agriculture Products</span>
          )}
        </div>
        <div className="col-md-4" style={{ padding: "2px" }}>
          <img
            onMouseOver={() => setHoveredImage("Coconuts")}
            onMouseOut={() => setHoveredImage(null)}
            src={img6}
            alt="Agri product"
            style={{ width: "80%", height: "80%" }}
          />
          {hoveredImage === "Coconuts" && (
            <span className="hover-text">Coconuts</span>
          )}
        </div>
        <div className="col-md-4" style={{ padding: "2px" }}>
          <img
            onMouseOver={() => setHoveredImage("Seafood")}
            onMouseOut={() => setHoveredImage(null)}
            src={img7}
            alt="Agri product"
            style={{ width: "80%", height: "80%" }}
          />
          {hoveredImage === "Seafood" && (
            <span className="hover-text">Seafood</span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" style={{ padding: "2px" }}>
          <img
            onMouseOver={() => setHoveredImage("Spices")}
            onMouseOut={() => setHoveredImage(null)}
            src={img8}
            alt="Agri product"
            style={{ width: "80%", height: "80%" }}
          />
          {hoveredImage === "Spices" && (
            <span className="hover-text">Spices</span>
          )}
        </div>
        <div className="col-md-4" style={{ padding: "2px" }}>
          <img
            onMouseOver={() => setHoveredImage("Leather")}
            onMouseOut={() => setHoveredImage(null)}
            src={img9}
            alt="Agri product"
            style={{ width: "80%", height: "80%" }}
          />
          {hoveredImage === "Leather" && (
            <span className="hover-text">Leather</span>
          )}
        </div>
        <div className="col-md-4" style={{ padding: "2px" }}>
          <img
            onMouseOver={() => setHoveredImage("Textiles")}
            onMouseOut={() => setHoveredImage(null)}
            src={img10}
            alt="Agri product"
            style={{ width: "80%", height: "80%" }}
          />
          {hoveredImage === "Textiles" && (
            <span className="hover-text">Textiles</span>
          )}
        </div>
      </div>
    </Container>
    <FooterPage />
 </div>
 )
}
export default SlidePage