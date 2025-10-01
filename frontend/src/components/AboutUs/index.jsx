// AboutSection.jsx
import React from "react";
import "./index.css";
import foImage from "../../assets/fo.png";
import ssImage from "../../assets/ss.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* <h1 className="about-text-head">About Us</h1>       */}
      <div className="about-container fade-in">
        <div className="about-image">
          <img src={foImage} alt="First Restaurant in Kandiyur 1965" />
        </div>
        <div className="about-text">
          <h2>Our Journey Began</h2>
          <p>
            The journey of <strong>New Thevars Hotel</strong> began in 1965 at
            Kandiyur, where it was established as a humble traditional South
            Indian restaurant. From the very beginning, the hotel earned a name
            for its authentic flavors, especially the legendary{" "}
            <strong>Seeraga Samba Biryani</strong>.
            <p>
              By 1990, the restaurant’s unique flavors had made it a well-known
              name – <strong>Thevars Biryani</strong> – started by{" "}
              <strong>S. Palani</strong> in Thanjavur, drawing food lovers from
              near and far, and setting the foundation for a legacy.
            </p>
          </p>
        </div>
      </div>

      {/* Second container - Text left, Image right */}
      <div className="about-container fade-in reverse">
        <div className="about-image">
          <img src={ssImage} alt="Thevars Biryani in 1990s" />
        </div>
        <div className="about-text">
          <h2 id="legacy-heading">Carrying Forward the Legacy</h2>
          <p>
            In <strong>2007</strong>, the restaurant was rebranded as
            <strong>New Thevars</strong> by <strong>K R G Muthu</strong>,
            carrying forward the legacy of our{" "}
            <strong>Seeraga Samba Biryani</strong> and authentic South Indian
            flavors.
          </p>

          <p>
            Over time, we expanded beyond{" "}
            <strong>non-vegetarian delicacies</strong> to include{" "}
            <strong>authentic vegetarian dishes</strong>, making
            <strong>New Thevars</strong> a place where every food lover feels at
            home. Today, we blend tradition with modern dining — every recipe is
            prepared with the same care and authenticity that has defined us
            since 1965.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
