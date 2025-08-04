// src/pages/Videos.jsx
import React, { useState } from "react";

const categories = [
  { id: "living", label: "Living Room" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bedroom", label: "Bedroom" },
  { id: "office", label: "Office" },
  { id: "outdoor", label: "Outdoor" },
  { id: "other", label: "Other" },
];

const videosData = {
  living: ["dQw4w9WgXcQ", "3JZ_D3ELwOQ"],
  kitchen: ["ZbZSe6N_BXs"],
  bedroom: ["eY52Zsg-KVI"],
  office: ["9bZkp7q19f0"],
  outdoor: ["fJ9rUzIMcZQ"],
  other: [],
};

function Videos() {
  const [activeCategory, setActiveCategory] = useState("living");

  return (
    <section id="video" className="videos" style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <span className="badge">Our Videos</span>
        <h2 className="about-title">See Our Interior Projects in Action</h2>
        <p className="about-description" style={{ maxWidth: "800px", margin: "0 auto 40px", textAlign: "center" }}>
          Browse our categorized video showcase to explore real projects executed by our expert team.
        </p>

        {/* Category Tabs */}
        <div className="about-cards" style={{ marginBottom: "40px", justifyContent: "center" }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`about-card btn ${activeCategory === cat.id ? "btn-primary" : "btn-outline"}`}
              onClick={() => setActiveCategory(cat.id)}
              style={{ minWidth: "100px", textTransform: "capitalize" }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div
          className="services-grid"
          style={{ marginBottom: "0" }}
        >
          {videosData[activeCategory]?.length > 0 ? (
            videosData[activeCategory].map((videoId) => (
              <div className="service-card" key={videoId}>
                <div className="service-header">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={videoId}
                    allowFullScreen
                    frameBorder="0"
                    width="100%"
                    height="200px"
                    style={{ borderRadius: "12px" }}
                  ></iframe>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#666" }}>
              No videos available for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Videos;
