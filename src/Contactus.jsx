import React from "react";
import "./contactus.css";

export default function ContactUs() {
  return (
    <div className="contact-info-card">
      <h3>CONTACT INFO</h3>
      <div className="info-block">
        <b>VISIT US</b>
        <p>
          Come and say hello to our office HQ.<br />
          <a href="#">Kampala-Uganda, Plot 6/8</a>
        </p>
      </div>
      <div className="info-block">
        <b>CHAT WITH US</b>
        <p>
          <a href="mailto:info@abzeno.com">info@abzeno.com</a>
        </p>
      </div>
      <div className="info-block">
        <b>CALL US</b>
        <p>
          +256 702 000 000<br />
          MON-FRI 9:00 AM TO 5:00 PM
        </p>
      </div>
      <div className="info-block">
        <b>SOCIAL MEDIA</b>
        <div className="social-icons">
          <a href="#"><img src="facebook.svg" alt="fb" /></a>
          <a href="#"><img src="twitter.svg" alt="tw" /></a>
          <a href="#"><img src="linkedin.svg" alt="in" /></a>
        </div>
      </div>
    </div>
  );
}