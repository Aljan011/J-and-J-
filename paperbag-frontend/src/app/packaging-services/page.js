"use client";

import React from "react";
import Image from "next/image";
import "../../styles/packaging-services.css";
import BlogInternalSection from "@/app/components/BlogInternalSection";

export default function PackagingServicesPage() {
  const products = [
    {
      title: "Corrugated Shipping Box",
      desc: "Durable and eco-friendly corrugated boxes ideal for shipping goods.",
      img: "/packaging-services/corrugated-box.jpg",
      slug: "corrugated-shipping-box",
    },
    {
      title: "Bubble Wrap Roll",
      desc: "Protect your fragile items with high-quality air bubble cushioning.",
      img: "/packaging-services/bubble-wrap.jpg",
      slug: "bubble-wrap-roll",
    },
    {
      title: "Stretch Film Roll",
      desc: "Strong cling film for pallet wrapping and secure packaging.",
      img: "/packaging-services/stretch-film.jpg",
      slug: "stretch-film-roll",
    },
    {
      title: "Packaging Tape - Clear",
      desc: "Industrial strength tape for sealing and labeling packages.",
      img: "/packaging-services/tape-clear.jpg",
      slug: "packaging-tape-clear",
    },
    {
      title: "Kraft Wrapping Paper",
      desc: "Eco kraft wrapping sheets for wrapping and protection.",
      img: "/packaging-services/kraft-paper.jpg",
      slug: "kraft-wrapping-paper",
    },
    {
      title: "Foam Sheet Roll",
      desc: "Soft foam padding roll to protect delicate items during transit.",
      img: "/packaging-services/foam-sheet.jpg",
      slug: "foam-sheet-roll",
    },
    {
      title: "Plastic Courier Bag",
      desc: "Lightweight tamper-proof courier bags for e-commerce parcels.",
      img: "/packaging-services/courier-bag.jpg",
      slug: "plastic-courier-bag",
    },
    {
      title: "Strapping Roll & Buckle Set",
      desc: "Heavy-duty strapping roll for box bundling and load securing.",
      img: "/packaging-services/strapping-roll.jpg",
      slug: "strapping-roll-buckle",
    },
  ];

  return (
    <>
      <main className="pk-page page-offset">
        {/* HERO SECTION */}
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
                src="/packaging-services/hero.webp"
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

        {/* PRODUCTS SECTION */}
        <section id="pk-products" className="pk-products">
          <div className="pk-products-inner">
            <h2 className="pk-section-title">Our Packaging Range</h2>

            <div className="pk-products-grid">
              {products.map((p, i) => (
                <article className="pk-card" key={i}>
                  <div className="pk-card-image">
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={800}
                      height={520}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 48vw, 30vw"
                    />
                  </div>

                  <div className="pk-card-body">
                    <h3 className="pk-card-title">{p.title}</h3>
                    <p className="pk-card-desc">{p.desc}</p>

                    <div className="pk-card-actions">
                      <a href={`/packaging-services/${p.slug}`} className="pk-link">
                        View details
                      </a>
                      <a href="/contact" className="pk-cta">
                        Rs 200 - Rs 500
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BlogInternalSection />
    </>
  );
}
