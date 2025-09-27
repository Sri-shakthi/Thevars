import React, { useEffect } from "react";
import "./index.css";

// Replace with proper Instagram embed URLs
const instagramVideos = [
  "https://www.instagram.com/reel/DKRemNBpd_k/embed",
  "https://www.instagram.com/reel/DJoytsvpESh/embed",
  "https://www.instagram.com/reel/DOlGtuyCazV/embed",
];

const ReviewsStories = () => {
  useEffect(() => {
    // Load Instagram embed script to render videos
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="reviews-stories-section">
      <h2>Our Moments on Instagram</h2>
      <div className="stories-grid">
        {instagramVideos.map((video, index) => (
          <div className="story" key={index}>
            <iframe
              src={video}
              title={`insta-video-${index}`}
              width="100%"
              height="100%"
              allowFullScreen
              style={{ border: "none" }}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsStories;
