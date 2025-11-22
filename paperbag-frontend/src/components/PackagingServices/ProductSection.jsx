import React from 'react'
import Image from 'next/image';

function ProductSection( { products } ) {
  return (
    <section id="pk-products" className="pk-products">
              <div className="pk-products-inner">
                <h2 className="pk-section-title">Our Packaging Range</h2>
    
                <div className="pk-products-grid">
                  {products.map((p, i) => (
                    <article className="pk-card" key={i}>
                      <div className="pk-card-image">
                        <Image
                          src={p.img}
                          alt={p.title}
                          width={800}
                          height={520}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 48vw, 30vw"
                        />
                      </div>
    
                      <div className="pk-card-body">
                        <h3 className="pk-card-title">{p.title}</h3>
                        <p className="pk-card-desc">{p.desc}</p>
    
                        <div className="pk-card-actions">
                          <a href={`/packaging-services/${p.slug}`} className="pk-link">
                            View details
                          </a>
                          <a href="/contact" className="pk-cta">
                            Rs 200 - Rs 500
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
  )
}

export default ProductSection