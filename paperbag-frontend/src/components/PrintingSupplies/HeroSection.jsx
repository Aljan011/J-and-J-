import React from 'react'
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="ps-hero" aria-labelledby="ps-hero-title">
            <div className="ps-hero-inner">
              <div className="ps-hero-text">
                <h1 id="ps-hero-title" className="ps-hero-title">Premium Printing Supplies</h1>
                <p className="ps-hero-sub">
                  High-quality inks, toners, papers and tools for commercial & home printing. Durable products, trusted brands — ready to ship.
                </p>
                <a href="#ps-products" className="ps-hero-cta">Explore Products</a>
              </div>
    
              <div className="ps-hero-img" role="img" aria-label="Printing supplies hero image">
                <Image
                  src="/printing-supplies/hero.webp"
                  alt="Printing supplies and tools"
                  width={700}
                  height={490}
                  priority={true}
                  style={{ width: "100%", height: "auto", borderRadius: 14, objectFit: "cover" }}
                />
              </div>
            </div>
          </section>
  )
}

export default HeroSection