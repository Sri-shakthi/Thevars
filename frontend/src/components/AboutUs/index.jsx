import React from "react";
import "./index.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container fade-in">
        <div className="about-image">
          <img src="https://ik.imagekit.io/qbnsahjpu/assets/fff.png?updatedAt=1759688764210" loading="lazy"  alt="New Thevars Hotel - Kandiyur 1965" />
          <p className="owner-name">K.R.G MUTHU</p>
        </div>
        <div className="about-text">
          <h2>All About New Thevars</h2>
          <p>
            The story of <strong>New Thevars Hotel</strong> began in{" "}
            <strong>1965</strong> at <strong>Kandiyur</strong>, founded as a
            humble South Indian restaurant known for its authentic traditional
            flavors — especially the legendary{" "}
            <strong>Seeraga Samba Biryani</strong>.
          </p>
          <p>
            By <strong>1990</strong>, under the vision of{" "}
            <strong>S. Palani</strong> in Thanjavur, the restaurant grew in
            popularity as <strong>Thevars Biryani</strong>, drawing food lovers
            from near and far and building a reputation that would span
            generations.
          </p>
        </div>
      </div>

      {/* Second container - Text left, Image right */}
      <div className="about-container fade-in reverse">
        <div className="about-image">
          <img src="https://ik.imagekit.io/qbnsahjpu/assets/ss.png?updatedAt=1759688763561" loading="lazy"  alt="New Thevars - Continuing Legacy" />
        </div>
        <div className="about-text">
          <h2>Carrying Forward the Legacy</h2>
          <p>
            In <strong>2007</strong>, <strong>K.R.G Muthu</strong> took the
            reins and rebranded the restaurant as{" "}
            <strong>New Thevars</strong>, preserving the heritage while
            introducing modern hospitality and dining experiences.
          </p>
          <p>
            Under his leadership, <strong>New Thevars</strong> continues to
            uphold the same authenticity and quality that began in 1965 — now
            blending tradition with modern tastes. From{" "}
            <strong>signature non-vegetarian dishes</strong> to{" "}
            <strong>authentic vegetarian delicacies</strong>, every meal is a
            reflection of our passion for flavor and culture.
          </p>
          <p>
            Today, <strong>K.R.G Muthu</strong> proudly runs New Thevars,
            ensuring that every dish continues the rich legacy that has defined
            the brand for over five decades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
