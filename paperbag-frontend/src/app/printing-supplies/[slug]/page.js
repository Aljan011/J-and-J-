// app/product/[slug]/page.js
import React from "react";
import { sanityClient, urlFor } from "../../../../lib/sanity.js"; 
import ProductGallery from "@/app/components/ProductGallery";
import "../../../styles/printing-supplies/product-details.css";
import ProductDetailsClient from "@/app/components/ProductDetailsClient";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  // GROQ: attempt to fetch product by slug, include images and fields you expect
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    price,
    currency,
    sku,
    shortDescription,
    description,        // long description (portable text or string)
    features,
    specs,              // assume array of { key, value }
    "mainImage": mainImage{asset->{_id, url}},
    "images": images[] { asset->{_id, url} },
    productType
  }`;

  let product = null;
  try {
    product = await sanityClient.fetch(query, { slug });
  } catch (err) {
    console.error("Sanity fetch error:", err);
  }

  // Fallback sample product if nothing returned (still works while you populate Sanity)
  if (!product) {
    product = {
      _id: "sample-1",
      title: "Box Brother - 3 Ply Brown Corrugated Box",
      slug: { current: slug || "box-brother-3-ply-brown-corrugated-box" },
      price: "250",
      currency: "NPR",
      sku: "CB-3PLY-01",
      shortDescription:
        "Strong 3-ply corrugated brown box — perfect for shipping and storage.",
      description:
        "<p>This 3-ply corrugated box offers excellent strength and durability. Designed for retail and shipping, it provides good protection and stackability.</p><p>Material: Kraft corrugated board. Suitable for light to medium weight products.</p>",
      features: [
        "3-ply corrugated construction",
        "Eco-friendly kraft material",
        "Available in multiple sizes",
      ],
      specs: [
        { key: "Material", value: "Kraft corrugated board (3-ply)" },
        { key: "Thickness", value: "5mm (approx.)" },
        { key: "Weight capacity", value: "Up to 15 kg" },
        { key: "Sizes", value: "Multiple standard sizes" },
      ],
      mainImage: { asset: { url: "/corrugated-box/box1.jpg" } },
      images: [
        { asset: { url: "/corrugated-box/box1.jpg" } },
        { asset: { url: "/corrugated-box/box2.jpg" } },
        { asset: { url: "/corrugated-box/box3.jpg" } },
      ],
    };
  }

  // Prepare images array for gallery (main img first)
  const images = [
    ...(product.mainImage?.asset?.url ? [product.mainImage.asset.url] : []),
    ...(Array.isArray(product.images) ? product.images.map((i) => i.asset?.url) : []),
  ].filter(Boolean);

  return (
    <main className="pd-page">
      <div className="pd-container">
        {/* Breadcrumbs */}
        <nav className="pd-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a> <span aria-hidden="true">/</span>
          <a href="/product">Products</a> <span aria-hidden="true">/</span>
          <span>{product.title}</span>
        </nav>

        {/* Top section: gallery + details */}
        <section className="pd-top">
          <div className="pd-gallery-wrap">
            <ProductGallery images={images} />
          </div>

          <ProductDetailsClient product={product} />
        </section>

        {/* Description + specs */}
        <section className="pd-info">
          <div className="pd-desc">
            <h2>Product Description</h2>
            {/* description might be HTML — render safely */}
            <div
              className="pd-desc-body"
              dangerouslySetInnerHTML={{
                __html: product.description || "<p>No description available.</p>",
              }}
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
                  {product.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </>
            )}
          </div>
        </section>

        {/* Internal Recent Blogs (optional insertion) */}
        {/* You can add the BlogInternalSection component here if desired */}
      </div>
    </main>
  );
}
