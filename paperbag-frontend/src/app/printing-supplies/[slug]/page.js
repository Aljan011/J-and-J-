import React from "react";
import { sanityClient, urlFor } from "../../../../lib/sanity.js";

import "../../../styles/product-details/product-details.css";

import ProductContainer from "../../../components/PrintingSupplies/[slug]/ProductContainer.jsx";

export default async function ProductDetailPage({ params }) {
  const { slug } = params;

  const query = `*[_type == "product" && slug.current == $slug][0]{ ... }`;

  let product = await sanityClient.fetch(query, { slug });

  if (!product) {
  product = {
    _id: "sample-3",
    title: "Sampxle Packaging Box",
    slug: { current: slug || "sample-pxackaging-box" },
    price: "2500",
    currency: "NPR",
    sku: "PS-0021",
    shortDescription: "Dura1ble packaging box suitable for shipping and storage.",
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
    ...(product.images?.map((i) => i.asset?.url) ?? []),
  ].filter(Boolean);

  return (
    <main className="pd-page">
      <ProductContainer product={product} images={images} />
    </main>
  );
}
