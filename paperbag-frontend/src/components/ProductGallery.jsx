// app/components/ProductGallery.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images = [] }) {
  const [active, setActive] = useState(0);
  if (!images || images.length === 0) {
    // fallback placeholder
    return (
      <div className="pd-gallery">
        <div className="pd-main-img">
          <img src="/images/placeholder-product.jpg" alt="placeholder" />
        </div>
      </div>
    );
  }

  return (
    <div className="pd-gallery">
      <div className="pd-main-img">
        {/* Next/Image provides optimization. We use layout responsive via style */}
        <Image
          src={images[active]}
          alt={`Product image ${active + 1}`}
          width={900}
          height={700}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
        />
      </div>

      <div className="pd-thumbs" aria-hidden={images.length <= 1}>
        {images.map((src, i) => (
          <button
            key={i}
            className={`pd-thumb ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Thumb ${i + 1}`}
              width={120}
              height={80}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
