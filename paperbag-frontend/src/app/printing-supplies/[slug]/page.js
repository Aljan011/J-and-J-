import React from "react";
import { sanityClient, urlFor } from "../../../../lib/sanity.js";
import ProductGallery from "@/app/components/ProductGallery";
import ProductDetailsClient from "@/app/components/ProductDetailsClient";
import "../../../styles/product-details/product-details.css";

export default async function ProductDetailPage({ params }) {
  const { slug } = params;

  const query = `*[_type == "product" && slug.current == $slug][0]{ ... }`;

  let product = await sanityClient.fetch(query, { slug });

  if (!product) {
    product = { /* fallback object */ };
  }

  const images = [
    ...(product.mainImage?.asset?.url ? [product.mainImage.asset.url] : []),
    ...(product.images?.map((i) => i.asset?.url) ?? []),
  ].filter(Boolean);

  return (
    <main className="pd-page">
      <div className="pd-container">
        <nav className="pd-breadcrumbs">
          <a href="/">Home</a> / <a href="/product">Products</a> / <span>{product.title}</span>
        </nav>

        <section className="pd-top">
          <div className="pd-gallery-wrap">
            <ProductGallery images={images} />
          </div>
          <ProductDetailsClient product={product} />
        </section>

        <section className="pd-info">
          <div className="pd-desc">
            <h2>Product Description</h2>
            <div dangerouslySetInnerHTML={{ __html: product.description || "<p>No description.</p>" }} />
          </div>
          <div className="pd-specs">
            <h2>Specifications</h2>
            {/* Specs table and features list */}
          </div>
        </section>
      </div>
    </main>
  );
}
