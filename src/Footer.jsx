import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div>ABZENO</div>
          <div>info@abzeno.com</div>
          <div>+256 702 000 000</div>
        </div>
        <div className="footer-social">
          <a href="#"><img src="facebook.svg" alt="fb" /></a>
          <a href="#"><img src="twitter.svg" alt="tw" /></a>
          <a href="#"><img src="linkedin.svg" alt="in" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 ABZENO. All rights reserved.</span>
      </div>
    </footer>
  );
}