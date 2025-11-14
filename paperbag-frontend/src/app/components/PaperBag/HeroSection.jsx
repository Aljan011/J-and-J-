import React from 'react'
import Image from 'next/image';

function HeroSection( ) {
  return (
    <section className="pb-hero" aria-labelledby="pb-hero-title">
              <div className="pb-hero-inner">
                <div className="pb-hero-text">
                  <h1 id="pb-hero-title" className="pb-hero-title">
                    Premium Paper Bags
                  </h1>
                  <p className="pb-hero-sub">
                    Discover our eco-friendly and customizable paper bags — ideal
                    for packaging, gifting, and branding with a sustainable touch.
                  </p>
                  <a href="#pb-products" className="pb-hero-cta">
                    Explore Products
                  </a>
                </div>
    
                <div
                  className="pb-hero-img"
                  role="img"
                  aria-label="Paper bags hero image"
                >
                  <Image
                    src="/paper-bags/hero.webp"
                    alt="Various eco-friendly paper bags"
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