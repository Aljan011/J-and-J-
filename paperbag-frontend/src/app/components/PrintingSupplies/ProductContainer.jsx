import React from 'react'
import Image from 'next/image';

function ProductContainer( { products } ) {
  return (
    <section id="ps-products" className="ps-products">
            <div className="ps-products-inner">
              <h2 className="ps-section-title">Our Printing Supplies</h2>
    
              <div className="ps-products-grid">
                {products.map((p, i) => (
                  <article className="ps-card" key={i}>
                    <div className="ps-card-image">
                      <Image
                        src={p.img}
                        alt={p.title}
                        width={800}
                        height={520}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 48vw, 30vw"
                      />
                    </div>
    
                    <div className="ps-card-body">
                      <h3 className="ps-card-title">{p.title}</h3>
                      <p className="ps-card-desc">{p.desc}</p>
    
                      <div className="ps-card-actions">
                        <a href={`/printing-supplies/${p.slug}`} className="ps-link">View details</a>
                        <a href="/contact" className="ps-cta">Rs 250 - Rs 300</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
  )
}

export default ProductContainer