import React from "react";
import "../../styles/packaging-services.css";

import BlogInternalSection from "../../components/BlogInternalSection.jsx";
import HeroSection from "../../components/PackagingServices/HeroSection.jsx";
import ProductSection from "../../components/PackagingServices/ProductSection.jsx";

import { sanityClient } from "../../../lib/sanity.js";

// Fetch products from Sanity
async function getProducts() {
  try {
    const products = await sanityClient.fetch(`
      *[_type == "producte"]{
       _id,
  name,
  slug,
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
  discountRate,
  seo,
  shortDescription,
  longDescription,
  details,
  faqs,
  colors[]{
    name,
    hex,
    packPrices[]{
      packSize,
      price
    }
  }
}
    `);
    return products;
  } catch (err) {
    console.error("Failed to fetch products", err);
    return [];
  }
}

function getLowestPrice(product) {
  if (!product.colors) return 0;

  let lowest = Infinity;

  product.colors.forEach(c => {
    c.packPrices?.forEach(pp => {
      if (pp.price < lowest) lowest = pp.price;
    });
  });

  return lowest === Infinity ? 0 : lowest;
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
