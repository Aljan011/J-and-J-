"use client";

import React from "react";
import { useParams } from "next/navigation";

import ProductDetailsClient from "../../../components/ProductDetailsClient.jsx";
import RelatedProducts from "../../../components/PackagingServices/Realtedproduct/RelatedProducts.jsx";

import "../../../styles/product-details/product-details.css";

import { products as productList } from "../../../data/products.js";

export default function PackagingDetailPage() {
  const { slug } = useParams();

  // 1. Get clicked product
  const product = productList.find((p) => p.slug === slug);

  if (!product) return <div>Product not found</div>;

  // 2. Generate related products (same category, excluding itself)
  const relatedProductsArray = productList.filter(
    (p) => p.slug !== slug && p.category === product.category
  );

  // 3. Return page
  return (
    <main className="pd-page">
      <ProductDetailsClient product={product} />

      <RelatedProducts
        products={relatedProductsArray}
        addToCart={(p) => console.log("Add to cart:", p)}
      />
    </main>
  );
}
