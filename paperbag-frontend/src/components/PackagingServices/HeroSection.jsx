import React from 'react'
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="pk-hero" aria-labelledby="pk-hero-title">
              <div className="pk-hero-inner">
                <div className="pk-hero-text">
                  <h1 id="pk-hero-title" className="pk-hero-title">
                    Complete Packaging Solutions
                  </h1>
                  <p className="pk-hero-sub">
                    From boxes to wraps, discover our reliable packaging products
                    designed for strength, sustainability, and professional appeal.
                  </p>
                  <a href="#pk-products" className="pk-hero-cta">
                    Explore Products
                  </a>
                </div>
    
                <div
                  className="pk-hero-img"
                  role="img"
                  aria-label="Packaging services hero image"
                >
                  <Image
                    src="/paper-bags/paperbag.jpg"
                    alt="Packaging materials and tools"
                    width={700}
                    height={490}
                    priority={true}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 14,
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </section>
  )
}

export default HeroSection