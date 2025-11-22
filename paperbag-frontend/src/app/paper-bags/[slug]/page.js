import React from "react";
import { sanityClient } from "../../../../lib/sanity.js";
import "../../../styles/product-details/product-details.css";

import ProductContainer from "../../../components/PaperBag/ProductContainer.jsx";

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
    _id: "sample-2",
    title: "Samp3le Packaging Box",
    slug: { current: slug || "sample-packaging-box" },
    price: "2250",
    currency: "NPR",
    sku: "PS-0401",
    shortDescription: "Durable packaging box suitable for shipping and storage.",
    description:
      "<p>This packaging box is sturdy, eco-friendly, and ideal for retail and shipping purposes.</p>",
    features: [
      "Strong cardboard material",
      "Eco-friendly",
      "Multiple sizes available",
    ],
    specs: [
      { key: "Material", value: "Corrugated cardboard" },
      { key: "Weight capacity", value: "Up to 10 kg" },
      { key: "Dimensions", value: "Various sizes" },
    ],

    colors: ["Brown", "Pink", "Royal Blue", "White"],
    packSizes: [100, 500, 1000, 2000],

    mainImage: { asset: { url: "/packaging-services/box1.jpg" } },
    images: [
      { asset: { url: "/packaging-services/box1.jpg" } },
      { asset: { url: "/packaging-services/box2.jpg" } },
      { asset: { url: "/packaging-services/box3.jpg" } },
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
