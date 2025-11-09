"use client";

import React from "react";
import "../../styles/corogated-box.css"; 
import BlogInternalSection from "@/app/components/BlogInternalSection";

export default function CorrugatedBoxPage() {
  const products = [
    {
      title: "Regular Slotted Corrugated Box",
      desc: "Cost-effective & durable design suitable for most packaging needs.",
      img: "/corrugated-box/box1.jpg",
      slug: "regular-slotted-box",
    },
    {
      title: "Custom Printed Corrugated Box",
      desc: "Brand-focused printing with strong structural protection.",
      img: "/corrugated-box/box2.jpg",
      slug: "custom-printed-box",
    },
    {
      title: "Die-Cut Corrugated Box",
      desc: "Precision-cut boxes crafted with industry-specific shapes.",
      img: "/corrugated-box/box3.jpg",
      slug: "die-cut-box",
    },
    {
      title: "Heavy Duty Corrugated Box",
      desc: "Designed for extra strength and export-grade shipment.",
      img: "/corrugated-box/box4.jpg",
      slug: "heavy-duty-box",
    },
  ];

  return (
    <>
    <section className="cb-products">
      <div className="cb-container">
        <h2 className="cb-title">Corrugated Boxes</h2>

        <div className="cb-grid">
          {products.map((item, index) => (
            <div className="cb-card" key={index}>
              <div className="cb-image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="cb-content">
                <h3 className="cb-card-title">{item.title}</h3>
                <p className="cb-desc">{item.desc}</p>
                <a href={`/corrugated-box/${item.slug}`} className="cb-link">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <BlogInternalSection />
    </>
  );
}
