import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import MyFooter from './MyFooter';

function Contact() {
  const handleWhatsappClick = () => {
    const message = `Hi, I have a query.`;
    const whatsappUrl = `https://wa.me/8978236216?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Container className="contact-page" style={{ marginTop: '40px' }}>
        <Row>
          {/* Contact Details Section */}
          <Col md={6} className="contact-details" style={{ padding: '20px', borderRight: '1px solid #ddd' }}>
            <h2>Contact Us</h2>
            <h3>Get in Touch!</h3>
            <p>We love to hear from our customers. Feel free to contact us with any questions or special requests.</p>
            <p><strong>Mobile Number:</strong> +91 8978236216</p>
            <p><strong>Email:</strong> sripushpaexim@sripushpaexim.in</p>
            <hr />
            <h4>Sri Pushpa Exim</h4>
            <p>Poleramma Temple, Veerepalli-523292, Veerepalle, Andhra Pradesh, India</p>
            <h5>Proprietor</h5>
            <p>K Ravi Varma</p>
            <p><strong>Mobile:</strong> +91 8978236216</p>
            <p><strong>Email:</strong> sripushpaexim@sripushpaexim.in</p>
          </Col>

          {/* WhatsApp and Map Section */}
          <Col md={6} className="whatsapp-map-section" style={{ padding: '20px' }}>
            <div className="whatsapp-section">
              <Button variant="success" style={{ display: 'flex', alignItems: 'center' }} onClick={handleWhatsappClick}>
                <FaWhatsapp style={{ marginRight: '8px' }} />
                Message us on WhatsApp
              </Button>
            </div>
            <div className="map-section" style={{ marginTop: '20px' }}>
            
              <iframe 
              title="Sri Pushpa Exim Location" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246647.26278453853!2d79.82217117812503!3d15.00028168284911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6978c29000001%3A0x3c11965213106f5!2sSRI%20PUSHPA%20EXIM!5e0!3m2!1sen!2sin!4v1737383362184!5m2!1sen!2sin" 
              
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"> 
              </iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default Contact;
