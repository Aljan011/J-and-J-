import React from 'react'

function PrintingServices() {
  return (
    <section className="ps-services">
  <div className="ps-container">
    <h1 className="ps-section-title">Printing Services</h1>
    <p className="ps-description">We provide professional printing services Nepal for leaflets, flyers, brochures, visiting cards, and branded stationery to help your business promote effectively.</p>
    <div className="ps-services-grid">
      <div className="ps-service-card">
        <div className="ps-service-image">
          <img src="/public/business-cards.jpg" alt="Business Cards" />
        </div>
        <div className="ps-service-info">
          <h3 className="ps-service-name">Leaflets & Flyers</h3>
          <p className="ps-service-desc">High-quality printing services Nepal for leaflets and flyers that promote your products and events effectively.</p>
        </div>
      </div>
      <div className="ps-service-card">
        <div className="ps-service-image">
          <img src="/public/flyers.jpg" alt="Flyers" />
        </div>
        <div className="ps-service-info">
          <h3 className="ps-service-name">Brochures & Catalogs</h3>
          <p className="ps-service-desc">Professional printing services Nepal for brochures and catalogs, helping businesses showcase their products in style.</p>
        </div>
      </div>
      <div className="ps-service-card">
        <div className="ps-service-image">
          <img src="/public/posters.jpg" alt="Posters" />
        </div>
        <div className="ps-service-info">
          <h3 className="ps-service-name">Visiting Cards</h3>
          <p className="ps-service-desc">Custom printing services Nepal for visiting cards that create a strong first impression and enhance brand identity.</p>
        </div>
      </div>
      <div className="ps-service-card">
        <div className="ps-service-image">
          <img src="/public/brochures.jpg" alt="Brochures" />
        </div>
        <div className="ps-service-info">
          <h3 className="ps-service-name">Stationery & Promotional Materials</h3>
          <p className="ps-service-desc">Complete range of printing services Nepal including branded stationery, posters, and promotional materials for marketing campaigns.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default PrintingServices