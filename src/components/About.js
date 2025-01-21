import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './About.css';
import cert1 from '../images/cert1.jpg';
import cert2 from '../images/cert2.jpg';
import cert3 from '../images/cert3.jpg';
import cert4 from '../images/cert4.jpg';
import cert5 from '../images/cert5.jpg';
import MyFooter from './MyFooter';


function About() {
  return (
    <>
    <Container className="about-page">
      <div className="about-content text-center">
        <h1>About Us</h1>
          <p className='registration-header'>
            Welcome to <b>Sri Pushpa Exim</b>, a leading merchant exporter based in India, dedicated to providing tailored solutions for all your export and import needs. With a diverse portfolio encompassing garments, textiles, automobile parts, machinery, leather products, agro-products, coconut products, and more, we offer comprehensive services to clients worldwide.
          </p>

          <p className='registration-header'>
            At Sri Pushpa Exim, we go beyond conventional exporting by offering unique tailor-made solutions for orders. Our experienced team works closely with clients to understand their specific requirements, offering personalized services that cater to their exact needs. Whether it's customizing garment designs, sourcing specialized automobile parts, or fulfilling unique machinery specifications, we pride ourselves on our ability to deliver precisely what our clients need, when they need it.
          </p>

          <p className='registration-header'>
            With a strong emphasis on quality, reliability, and customer satisfaction, we ensure that each tailored order meets the highest standards of excellence. Our commitment to innovation and flexibility sets us apart, allowing us to adapt swiftly to changing market demands and deliver bespoke solutions that exceed expectations.
          </p>

          <p className='registration-header'>
            Experience the difference with Sri Pushpa Exim, where every order is treated with care and attention to detail. Trust us to be your partner in international trade, providing customized solutions that propel your business forward.
          </p>
        <h2 >OUR REGISTRACTION CERTIFICATES</h2>
      </div>
      
      <div className="carousel-container">
        <Carousel fade indicators={false} controls={true}>
          <Carousel.Item>
            <img className="d-block w-100" src={cert1} alt="First Certificate" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cert2} alt="Second Certificate" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cert3} alt="Third Certificate" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cert4} alt="Third Certificate" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cert5} alt="Third Certificate" />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
    
        <MyFooter />
      
   </>
  );
}

export default About;
