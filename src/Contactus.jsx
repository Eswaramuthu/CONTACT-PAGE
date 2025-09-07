import React from 'react';
import Navbar from './navbar';
import Content1 from './content1';
import ContactForm from './form';
import Footer from './footer';
import './contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <Content1 />
      <div className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-grid">
            <div></div> {/* Empty div to maintain grid layout */}
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;