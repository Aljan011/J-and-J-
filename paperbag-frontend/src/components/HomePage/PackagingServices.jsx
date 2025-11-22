import React from 'react'

function PackagingServices() {
  return (
    <section className="hm-biodegradable-section">
        <div className="hm-container">
            <div className="hm-section-header">
                <h2 className="hm-main-title">Packaging Services</h2>
                <svg className="hm-leaf-icon" viewBox="0 0 24 24" fill="#4a9b5e">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6L16,12L12,18L8,12L12,6Z"/>
                </svg>
                <p className="hm-description">
                   At J and J’s Packaging, we provide high-quality packaging box Nepal solutions that protect your products and enhance your brand. From corrugated boxes for shipping to custom and eco-friendly packaging, our solutions are ideal for e-commerce, retail, food, gifting, and corporate businesses.
                </p>
            </div>

            <div className="hm-products-grid">
                
                <div className="hm-product-card">
                    <h3 className="hm-product-title">Corrugated Packaging Box</h3>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23d4a574'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-family='Arial' font-size='16'%3ELunch Packaging Image%3C/text%3E%3C/svg%3E" 
                         alt="Corrugated Packaging Box" 
                         className="hm-product-image"/>
                    <div className="hm-product-features">
                        <p>Strong and durable packaging box Nepal solutions designed for shipping, storage, and product protection. Ideal for e-commerce, logistics, and retail.</p>
                    </div>
                </div>

                <div className="hm-product-card">
                    <h2 className="hm-product-title">Custom Packaging Box</h2>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23d4a574'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-family='Arial' font-size='16'%3ESalad Container Image%3C/text%3E%3C/svg%3E" 
                         alt="Clear disposable salad containers with fresh vegetables" 
                         className="hm-product-image"/>
                    <div className="hm-product-features">
                        <p>Tailor-made packaging box Nepal options with unique designs, sizes, and branding to match your business needs and product identity.</p>
                    </div>
                </div>

                <div className="hm-product-card">
                    <h2 className="hm-product-title">Eco-Friendly Packaging</h2>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%235fb3d8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-family='Arial' font-size='16'%3EDisposable Cutlery Image%3C/text%3E%3C/svg%3E" 
                         alt="White biodegradable cutlery set on blue background" 
                         className="hm-product-image"/>
                    <div className="hm-product-features">
                        <p>Sustainable and recyclable packaging box Nepal choices that protect the environment while giving your brand a modern, responsible image.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PackagingServices