"use client";

import React from "react";
import Image from "next/image";
import "../../styles/printing-services.css";
import BlogInternalSection from "@/app/components/BlogInternalSection";

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
      {/* HERO */}
      <section className="ps-hero" aria-labelledby="ps-hero-title">
        <div className="ps-hero-inner">
          <div className="ps-hero-text">
            <h1 id="ps-hero-title" className="ps-hero-title">Premium Printing Supplies</h1>
            <p className="ps-hero-sub">
              High-quality inks, toners, papers and tools for commercial & home printing. Durable products, trusted brands — ready to ship.
            </p>
            <a href="#ps-products" className="ps-hero-cta">Explore Products</a>
          </div>

          <div className="ps-hero-img" role="img" aria-label="Printing supplies hero image">
            <Image
              src="/printing-supplies/hero.webp"
              alt="Printing supplies and tools"
              width={700}
              height={490}
              priority={true}
              style={{ width: "100%", height: "auto", borderRadius: 14, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="ps-products" className="ps-products">
        <div className="ps-products-inner">
          <h2 className="ps-section-title">Our Printing Supplies</h2>

          <div className="ps-products-grid">
            {products.map((p, i) => (
              <article className="ps-card" key={i}>
                <div className="ps-card-image">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={520}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 48vw, 30vw"
                  />
                </div>

                <div className="ps-card-body">
                  <h3 className="ps-card-title">{p.title}</h3>
                  <p className="ps-card-desc">{p.desc}</p>

                  <div className="ps-card-actions">
                    <a href={`/printing-supplies/${p.slug}`} className="ps-link">View details</a>
                    <a href="/contact" className="ps-cta">Rs 250 - Rs 300</a>
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
