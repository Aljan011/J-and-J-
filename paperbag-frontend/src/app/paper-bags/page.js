"use client";

import React from "react";
import "../../styles/paper-bags.css";

import BlogInternalSection from "@/app/components/BlogInternalSection";
import HeroSection from "./../components/PaperBag/HeroSection.jsx";
import ProductDetails from "./../components/PaperBag/ProductDetails.jsx";


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
        
        < HeroSection />
        < ProductDetails products={products} />

      </main>

      <BlogInternalSection />
    </>
  );
}
