import React from "react";
import "../../styles/packaging-services.css";

import BlogInternalSection from "../../components/BlogInternalSection.jsx";
import HeroSection from "../../components/PackagingServices/HeroSection.jsx";
import ProductSection from "../../components/PackagingServices/ProductSection.jsx";

import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "jz6c1suz",
  dataset: process.env.SANITY_DATASET || "production",
  useCdn: true,
});

async function getProducts() {
  try {
    const products = await client.fetch(`
      *[_type == "product"]{
        _id,
        id,
        slug,
        name,
        brand,
        size,
        material,
        shape,
        usage,
        recyclable,
        customPrinting,
        mainImage,
        images,
        packs,
        defaultPack,
        colors,
        discountRate,
        seo,
        shortDescription,
        longDescription
      }
    `);
    return products;
  } catch (err) {
    console.error("Failed to fetch products", err);
    return [];
  }
}

export default async function PackagingServicesPage() {
  const products = await getProducts();

  return (
    <>
      <main className="pk-page page-offset">
        <HeroSection />
        <ProductSection products={products} />
      </main>
      <BlogInternalSection />
    </>
  );
}
