import React from "react";
import "./form.css";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <h2>GET IN TOUCH<br />WITH US</h2>
      <p className="subtitle">
        The quickest way to collaborate on designing and experience with us.
      </p>
      <div className="form-row">
        <div className="form-group">
          <label>First Name*</label>
          <input type="text" placeholder="Anabel" />
        </div>
        <div className="form-group">
          <label>Last Name*</label>
          <input type="text" placeholder="Enter your last name" className="error" />
        </div>
      </div>
      <div className="form-group">
        <label>Company Name (Optional)</label>
        <input type="text" placeholder="Enter your company name" />
      </div>
      <div className="form-group">
        <label>Email*</label>
        <input type="email" placeholder="Enter your email address" />
      </div>
      <div className="form-group">
        <label>Phone Number*</label>
        <input type="tel" placeholder="Enter your mobile number" />
      </div>
      <div className="form-group">
        <label>Message*</label>
        <textarea placeholder="Enter your message here..."></textarea>
      </div>
      <button type="submit" className="form-submit">REACH US</button>
    </form>
  );
}