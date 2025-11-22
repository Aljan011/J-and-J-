"use client";

import React from "react";
import "../../styles/packaging-services.css";

import BlogInternalSection from "../../components/BlogInternalSection.jsx";
import HeroSection from "../../components/PackagingServices/HeroSection.jsx";
import ProductSection from "../../components/PackagingServices/ProductSection.jsx";

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
       
       < HeroSection />
       < ProductSection products={products} />
        
      </main>

      <BlogInternalSection />
    </>
  );
}
