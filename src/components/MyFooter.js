import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import {FaLinkedin, FaInstagram } from 'react-icons/fa';
import './MyFooter.css';

function MyFooter() {
  return (
    <MDBFooter className='footer'>
      <MDBContainer className='footer-container'>
        <div className='footer-content'>
          <section className='social-icons'>
            <a href='https://in.linkedin.com/in/sri-pushpa-exim-20514455' target='blank' className='social-icon'><FaLinkedin /></a>
            <a href='https://www.instagram.com/kakarlapudi.ravi/profilecard/?igsh=MTNqcm5yYmlhcDl3cQ%3D%3D' target='blank' className='social-icon'><FaInstagram /></a>
          </section>

          <div className='footer-details'>
            <h6><u>Address</u></h6>
            <p>1-31 veerepalli(v/g), Ulavapadu Md, Prakasam District, Andhra Pradesh- 523292 India</p>
            <p>Email: sripushpaexim@sripushpaexim.in</p>
            <p>Mobile: +91 8978236216</p>
          </div>
        </div>

        <div className='stats-block'>
          <div className='stats-item'>
            <h3>100+</h3>
            <p>Products</p>
          </div>
          <div className='stats-item'>
            <h3>20+</h3>
            <p>Suppliers</p>
          </div>
          <div className='stats-item'>
            <h3>10+</h3>
            <p>Countries</p>
          </div>
        </div>
      </MDBContainer>
      <div className='footer-bottom'>
        <p>© 2024 Copyright sripushpaexim - All Rights Reserved</p>
      </div>
    </MDBFooter>
  );
}

export default MyFooter;
