import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import hoo from '../../assets/hoo.png'

export default function HomePage() {
  return (
    <div className="homepage"
    style={{ backgroundImage: `url(${hoo})` }}
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
