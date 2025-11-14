import React from 'react'

import ProductGallery from "@/app/components/ProductGallery";
import ProductDetailsClient from "@/app/components/ProductDetailsClient";

function ProductDetails( { product, images = [] } ) {
  return (
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
  )
}

export default ProductDetails