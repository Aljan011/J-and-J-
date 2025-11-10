"use client";

import React from "react";
import Image from "next/image";
import "../../styles/paper-bags.css";
import BlogInternalSection from "@/app/components/BlogInternalSection";

export default function PaperBagsPage() {
  const products = [
    {
      title: "Kraft Paper Bag - Small",
      desc: "Eco-friendly brown paper bag, perfect for small items and gifts.",
      img: "/paper-bags/kraft-small.jpg",
      slug: "kraft-paper-bag-small",
    },
    {
      title: "Kraft Paper Bag - Medium",
      desc: "Durable and reusable medium-sized kraft paper bag.",
      img: "/paper-bags/kraft-medium.jpg",
      slug: "kraft-paper-bag-medium",
    },
    {
      title: "Luxury White Paper Bag",
      desc: "Premium glossy white bag ideal for boutiques and brand stores.",
      img: "/paper-bags/luxury-white.jpg",
      slug: "luxury-white-paper-bag",
    },
    {
      title: "Custom Printed Bag",
      desc: "Personalize your paper bags with custom logo and design printing.",
      img: "/paper-bags/custom-printed.jpg",
      slug: "custom-printed-bag",
    },
    {
      title: "Handle Kraft Bag",
      desc: "Strong handle bags designed for takeaways and retail packaging.",
      img: "/paper-bags/handle-bag.jpg",
      slug: "handle-kraft-bag",
    },
    {
      title: "Gift Paper Bag",
      desc: "Vibrant gift paper bags suitable for all occasions.",
      img: "/paper-bags/gift-bag.jpg",
      slug: "gift-paper-bag",
    },
    {
      title: "Colored Paper Bag Set",
      desc: "Stylish multi-color paper bag pack for decorative or shop use.",
      img: "/paper-bags/colored-set.jpg",
      slug: "colored-paper-bag-set",
    },
    {
      title: "Eco Recycled Bag",
      desc: "Made entirely from recycled materials for sustainable packaging.",
      img: "/paper-bags/eco-recycled.jpg",
      slug: "eco-recycled-bag",
    },
  ];

  return (
    <>
      <main className="pb-page page-offset">
        {/* HERO SECTION */}
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

        {/* PRODUCTS SECTION */}
        <section id="pb-products" className="pb-products">
          <div className="pb-products-inner">
            <h2 className="pb-section-title">Our Paper Bag Collection</h2>

            <div className="pb-products-grid">
              {products.map((p, i) => (
                <article className="pb-card" key={i}>
                  <div className="pb-card-image">
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

                  <div className="pb-card-body">
                    <h3 className="pb-card-title">{p.title}</h3>
                    <p className="pb-card-desc">{p.desc}</p>

                    <div className="pb-card-actions">
                      <a href={`/paper-bags/${p.slug}`} className="pb-link">
                        View details
                      </a>
                      <a href="/contact" className="pb-cta">
                        Rs 150 - Rs 350
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
