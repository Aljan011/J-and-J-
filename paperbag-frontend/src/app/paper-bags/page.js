"use client";

import React from "react";
import "../../styles/paper-bags.css"; 
import BlogInternalSection from "@/app/components/BlogInternalSection";

export default function PaperBagsPage() {
  // 🔹 For now using static product data — easy to replace with Sanity API later
  const products = [
    {
      title: "Premium Kraft Paper Bag",
      desc: "Eco-friendly & durable paper bags for retail and gift packing.",
      img: "/paperbags/bag1.jpg",
      slug: "premium-kraft-bag",
    },
    {
      title: "Custom Printed Paper Bag",
      desc: "High-quality print and customizable design for your brand.",
      img: "/paperbags/bag2.jpg",
      slug: "custom-printed-bag",
    },
    {
      title: "Luxury Gift Paper Bag",
      desc: "Elegant finish suitable for premium gift packaging.",
      img: "/paperbags/bag3.jpg",
      slug: "luxury-gift-bag",
    },
    {
      title: "Handle Paper Bag",
      desc: "Comfortable carry handles with reinforced strength.",
      img: "/paperbags/bag4.jpg",
      slug: "handle-paper-bag",
    },
    {
      title: "Recycled Paper Bag",
      desc: "Made from 100% recycled materials, eco-conscious choice.",
      img: "/paperbags/bag5.jpg",
      slug: "recycled-paper-bag",
    },
    {
      title: "Brown Paper Lunch Bag",
      desc: "Perfect for lunches and snacks, biodegradable and sturdy.",
      img: "/paperbags/bag6.jpg",
      slug: "brown-lunch-bag",
    },
    {
      title: "White Paper Shopping Bag",
      desc: "Clean and simple design for everyday shopping needs.",
      img: "/paperbags/bag7.jpg",
      slug: "white-shopping-bag",
    },
    {
      title: "Colored Paper Bag",
      desc: "Vibrant colors to make your packaging stand out.",
      img: "/paperbags/bag8.jpg",
      slug: "colored-paper-bag",
    },
    {
      title: "Large Capacity Paper Bag",
      desc: "Spacious design for bulkier items, strong and reliable.",
      img: "/paperbags/bag9.jpg",
      slug: "large-capacity-bag",
    }
  ];

  return (
    <>
    <section className="pb-products">
      <div className="pb-container">
        <h2 className="pb-section-title">Paper Bags</h2>

        <div className="pb-products-grid">
          {products.map((item, index) => (
            <div className="pb-product-card" key={index}>
              <div className="pb-product-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="pb-product-content">
                <h3 className="pb-product-title">{item.title}</h3>
                <p className="pb-product-desc">{item.desc}</p>
                <a className="pb-product-link" href={`/paperbags/${item.slug}`}>
                  View Details
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
