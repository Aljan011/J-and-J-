import React from "react";
import { sanityClient } from "../../../../lib/sanity.js";
import "../../../styles/product-details/product-details.css";

import ProductContainer from "@/app/components/PaperBag/[slug]/ProductContainer.jsx";

export default async function PaperBagDetailPage({ params }) {
  const { slug } = params;

  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    price,
    currency,
    sku,
    shortDescription,
    description,
    features,
    specs,
    "mainImage": mainImage{asset->{_id,url}},
    "images": images[] { asset->{_id,url} },
    productType
  }`;

  let product = null;
  try {
    product = await sanityClient.fetch(query, { slug });
  } catch (err) {
    console.error("Sanity fetch error:", err);
  }

  if (!product) {
    product = {
      _id: "sample-1",
      title: "Sample Paper Bag",
      slug: { current: slug || "sample-paper-bag" },
      price: "120",
      currency: "NPR",
      sku: "PB-001",
      shortDescription: "High-quality kraft paper bag for retail use.",
      description:
        "<p>This paper bag is durable, eco-friendly, and perfect for gifting or shopping.</p>",
      features: ["Eco-friendly kraft material", "Strong handles", "Multiple sizes available"],
      specs: [
        { key: "Material", value: "Kraft paper" },
        { key: "Capacity", value: "Up to 5 kg" },
        { key: "Dimensions", value: "Various sizes" },
      ],
      mainImage: { asset: { url: "/paper-bags/paperbag1.jpg" } },
      images: [
        { asset: { url: "/paper-bags/paperbag1.jpg" } },
        { asset: { url: "/paper-bags/paperbag2.jpg" } },
        { asset: { url: "/paper-bags/paperbag3.jpg" } },
      ],
    };
  }

  const images = [
    ...(product.mainImage?.asset?.url ? [product.mainImage.asset.url] : []),
    ...(Array.isArray(product.images) ? product.images.map((i) => i.asset?.url) : []),
  ].filter(Boolean);

  return (
    <main className="pd-page">
      
      <ProductContainer product={product} images={images} />

    </main>
  );
}
