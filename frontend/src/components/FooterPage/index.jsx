import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import "./index.css";

const FooterPage = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      {/* Google Maps Embed */}
      {/* <div className="footer-map">
        <iframe
          title="restaurant-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.865345740774!2d80.24327331482188!3d13.067439190778783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d4d34b7a1d%3A0x6fa81e1a4a1f8bb1!2sChennai%20Restaurant!5e0!3m2!1sen!2sin!4v1638345623456!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}

      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <h1>Hotel New Thevars</h1>
          <p>Authentic South Indian Cuisine Since 1965</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#catering">Catering Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>📍 2908, Srinivasam Pillai Rd, near railway station, Graham Nagar, Shivaji Nagar, Thanjavur, Tamil Nadu 613001</p>
          <p>📞 <a href="tel:+918148862142">+91 8148862142</a></p>
          <p>✉️ <a href="mailto:hotelnewthevarsthanjavur@gmail.com">hotelnewthevarsthanjavur@gmail.com</a></p>
        </div>

        {/* Opening Hours */}
        <div className="footer-hours">
          <h2>Opening Hours</h2>
          <p>Mon – Sun</p>
          <p>8:00 AM – 11:00 PM</p>
        </div>
      </div>

      {/* Social + Newsletter */}
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="https://www.instagram.com/newthevars/"><FaInstagram /></a>
          <a href="https://www.facebook.com/hotelnewthevars"><FaFacebook /></a>
        </div>

        
      </div>

      

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Hotel New Thevars. All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterPage;
