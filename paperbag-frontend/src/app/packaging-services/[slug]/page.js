import React from "react";
import { sanityClient, urlFor } from "../../../../lib/sanity.js";
import ProductGallery from "@/app/components/ProductGallery";
import ProductDetailsClient from "@/app/components/ProductDetailsClient";
import "../../../styles/product-details/product-details.css";

export default async function PackagingDetailPage({ params }) {
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
      title: "Sample Packaging Box",
      slug: { current: slug || "sample-packaging-box" },
      price: "250",
      currency: "NPR",
      sku: "PS-001",
      shortDescription: "Durable packaging box suitable for shipping and storage.",
      description:
        "<p>This packaging box is sturdy, eco-friendly, and ideal for both retail and shipping purposes.</p>",
      features: ["Strong cardboard material", "Eco-friendly", "Multiple sizes available"],
      specs: [
        { key: "Material", value: "Corrugated cardboard" },
        { key: "Weight capacity", value: "Up to 10 kg" },
        { key: "Dimensions", value: "Various sizes" },
      ],
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
      <div className="pd-container">
        <nav className="pd-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a> <span>/</span>
          <a href="/packaging-services">Packaging Services</a> <span>/</span>
          <span>{product.title}</span>
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
            <div
              className="pd-desc-body"
              dangerouslySetInnerHTML={{ __html: product.description || "<p>No description available.</p>" }}
            />
          </div>

          <div className="pd-specs">
            <h2>Specifications</h2>
            {Array.isArray(product.specs) && product.specs.length ? (
              <table className="pd-specs-table">
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={i}>
                      <th>{s.key}</th>
                      <td>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No technical specifications available.</p>
            )}

            {Array.isArray(product.features) && product.features.length > 0 && (
              <>
                <h3>Features</h3>
                <ul className="pd-features">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
