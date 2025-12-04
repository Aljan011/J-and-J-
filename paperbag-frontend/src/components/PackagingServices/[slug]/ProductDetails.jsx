import React from "react";
import ProductDetailsClient from "../../ProductDetailsClient.jsx";
import '../../../styles/product-details/product-details.css';

function ProductDetails({ product }) {
  return (
    <div className="pd-details-page">

      {/* Breadcrumbs */}
      <nav className="pd-breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a> <span>/</span>
        <a href="/packaging-services">Packaging Services</a> <span>/</span>
        <span>{product.name || product.title}</span>
      </nav>

      {/* Top Section: Gallery + Buy Box */}
      <section className="pd-gallery">
        <ProductDetailsClient product={product} />
      </section>

      
    </div>
  );
}

export default ProductDetails;
