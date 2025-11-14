import React from 'react'
import Image from 'next/image';

function ProductDetails( { products } ) {
  return (
    <section id="pb-products" className="pb-products">
              <div className="pb-products-inner">
                <h2 className="pb-section-title">Our Paper Bag Collection</h2>
    
                <div className="pb-products-grid">
                  {products.map((p, i) => (
                    <article className="pb-card" key={i}>
                      <div className="pb-card-image">
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
    
                      <div className="pb-card-body">
                        <h3 className="pb-card-title">{p.title}</h3>
                        <p className="pb-card-desc">{p.desc}</p>
    
                        <div className="pb-card-actions">
                          <a href={`/paper-bags/${p.slug}`} className="pb-link">
                            View details
                          </a>
                          <a href="/contact" className="pb-cta">
                            Rs 150 - Rs 350
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

export default ProductDetails