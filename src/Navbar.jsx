import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">ABZENO</div>
      <nav className="nav">
        <a href="#">ABOUT US</a>
        <a href="#">PRODUCT & SERVICES</a>
        <a href="#">CAREER</a>
      </nav>
      <button className="reach-us-btn">REACH US</button>
    </header>
  );
}