"use client";

import React from "react";
import "../../styles/packaging-services.css"; 
import BlogInternalSection from "@/app/components/BlogInternalSection";

export default function PackagingServicesPage() {
  const services = [
    {
      title: "Custom Box Packaging",
      desc: "Durable & fully customizable box packaging tailored for your brand.",
      img: "/packaging-services/service1.jpg",
      slug: "custom-box-packaging",
    },
    {
      title: "Food Grade Packaging",
      desc: "Certified safe packaging solutions for food & beverages.",
      img: "/packaging-services/service2.jpg",
      slug: "food-grade-packaging",
    },
    {
      title: "Retail Packaging Design",
      desc: "High-quality packaging that enhances shelf appeal and branding.",
      img: "/packaging-services/service3.jpg",
      slug: "retail-packaging-design",
    },
    {
      title: "Eco-Friendly Packaging",
      desc: "Sustainable production using recyclable and biodegradable materials.",
      img: "/packaging-services/service4.jpg",
      slug: "eco-friendly-packaging",
    },
    {
        title: "Industrial Packaging Solutions",
        desc: "Robust packaging designed for heavy-duty industrial applications.",
        img: "/packaging-services/service5.jpg",
        slug: "industrial-packaging-solutions",
    }
  ];

  return (
    <>
    <section className="ps-services">
      <div className="ps-container">
        <h2 className="ps-section-title">Packaging Services</h2>

        <div className="ps-grid">
          {services.map((item, index) => (
            <div className="ps-card" key={index}>
              <div className="ps-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="ps-content">
                <h3 className="ps-title">{item.title}</h3>
                <p className="ps-desc">{item.desc}</p>
                <a className="ps-link" href={`/packaging-services/${item.slug}`}>
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
