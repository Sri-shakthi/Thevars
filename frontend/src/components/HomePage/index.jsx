import React, { useState } from "react";
import "./index.css";

// A simple Logo component (replace with your actual Logo if needed)
const Logo = () => (
  <div className="logo-placeholder">
    <img src="https://ik.imagekit.io/qbnsahjpu/assets/lo.png?updatedAt=1759688728186" loading="lazy" alt="New Thevars Hotel" className="logo-image" />
  </div>
);

// Menu items as a separate component for cleaner rendering
const NavMenu = ({ isMobile }) => (
    <ul className={isMobile ? "mobile-menu" : ""}>
        <li><a href="#about">About Us</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#catering">Catering</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#footer">Contact</a></li>
    </ul>
);

const HomePage = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="homepage" loading="lazy">
            {/* Header / Navbar */}
            <header className="header">
                <Logo />
                
                {/* Desktop Menu - Visible on large screens */}
                <nav className="desktop-navbar">
                    <NavMenu isMobile={false} />
                </nav>

                {/* Hamburger Icon - Visible on small screens (max-width: 768px) */}
                <div className="hamburger" onClick={toggleMenu}>
                    {/* Simple hamburger icon using Unicode character (☰) */}
                    <span>{isMenuOpen ? '✕' : '☰'}</span> 
                </div>

                {/* Mobile Menu - Only appears when isMenuOpen is true */}
                {isMenuOpen && (
                    <nav className="mobile-navbar">
                        <NavMenu isMobile={true} />
                    </nav>
                )}
            </header>

            {/* Hero Section */}
            <div className="hero">
            <a href="#catering">
                <button className="book-btn">Book Us</button>
            </a>     
        </div>
        </div>
    );
};

export default HomePage;