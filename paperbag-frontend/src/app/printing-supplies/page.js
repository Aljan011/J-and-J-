"use client";

import React from "react";
import "../../styles/printing-services.css";

import BlogInternalSection from "../../components/BlogInternalSection.jsx";
import HeroSection from "../../components/PrintingSupplies/HeroSection.jsx";
import ProductContainer from "../../components/PrintingSupplies/ProductContainer.jsx";

export default function PrintingSuppliesPage() {
  // 12 sample products (update image paths to real images in /public/printing-supplies/)
  const products = [
    { title: "Ink Cartridge - Black", desc: "Long-lasting pigment ink for crisp prints.", img: "/printing-supplies/ink1.jpg", slug: "ink-cartridge-black" },
    { title: "Ink Cartridge - Color", desc: "Vivid CMYK cartridges for photo-quality prints.", img: "/printing-supplies/ink2.jpg", slug: "ink-cartridge-color" },
    { title: "Toner Cartridge - Mono", desc: "High-yield toner for office printers.", img: "/printing-supplies/toner1.jpg", slug: "toner-mono" },
    { title: "Toner Cartridge - Color", desc: "Reliable color toner for commercial machines.", img: "/printing-supplies/toner2.jpg", slug: "toner-color" },
    { title: "Coated Paper Roll 24\"", desc: "Gloss finish wide-format roll for signage.", img: "/printing-supplies/paper1.jpg", slug: "coated-paper-roll-24" },
    { title: "Matte Paper Roll 24\"", desc: "Premium matte finish for photography.", img: "/printing-supplies/paper2.jpg", slug: "matte-paper-roll-24" },
    { title: "UV Ink Set", desc: "UV-curable inks for outdoor durability.", img: "/printing-supplies/uv-ink.jpg", slug: "uv-ink-set" },
    { title: "Print Head Cleaner", desc: "Maintains optimal printer head performance.", img: "/printing-supplies/cleaner.jpg", slug: "print-head-cleaner" },
    { title: "Squeegee & Roller Kit", desc: "Essential tools for manual screen printing.", img: "/printing-supplies/tools1.jpg", slug: "squeegee-roller-kit" },
    { title: "Laminating Film (A3)", desc: "Protect and finish prints with glossy lamination.", img: "/printing-supplies/laminate.jpg", slug: "laminating-film-a3" },
    { title: "Large Format Cutter", desc: "Precision cutter for trimming large prints.", img: "/printing-supplies/cutter.jpg", slug: "large-format-cutter" },
    { title: "Printer Maintenance Kit", desc: "Parts & supplies for routine printer servicing.", img: "/printing-supplies/maintenance.jpg", slug: "printer-maintenance-kit" },
  ];

  return (
    <>

    <main className="ps-page page-offset">
      
      <HeroSection />
      <ProductContainer products={products} />

    </main>

    <BlogInternalSection />
    </>
  );
}
