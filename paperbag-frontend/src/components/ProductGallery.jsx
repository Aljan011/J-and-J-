// src/ProductGallery.jsx
"use client";
import React, { useState } from "react";

export default function ProductGallery({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return <div className="pd-main-img">No Image</div>;

  return (
    <div className="pd-gallery">
      {/* Thumbnails */}
      <div className="pd-thumbs">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            className={`pd-thumb ${activeIndex === i ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="pd-main-img">
        <img src={images[activeIndex]} alt={`Product Image ${activeIndex + 1}`} />
      </div>
    </div>
  );
}
