import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import hooImage from "../../assets/hoo.png";
import shomeImage from "../../assets/shome.png";

export default function HomePage() {
  return (
    <div 
      className="homepage"
      style={{
        '--desktop-bg': `url(${hooImage})`,
        '--mobile-bg': `url(${shomeImage})`
      }}
    >
      <div className="navbar">
        <p>About Us</p>
        <p>Our Menu</p>
        <p>Catering Service</p>
        <p>Contact Us</p>
      </div>

      <div className="hero-button">
        <button className="home-btn">Contact Us</button>
      </div>
    </div>
  );
}
