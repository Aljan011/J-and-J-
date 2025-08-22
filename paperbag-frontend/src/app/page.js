'use client';
import "../styles/homepage.css";
import "@fontsource/baloo-2";         // default weight 400
import "@fontsource/baloo-2/400.css";

export default function Homepage() {

  const hmClientsData = [
    { name: 'CaRaRu', logo: '/api/placeholder/120/60' },
    { name: 'Biography', logo: '/api/placeholder/120/60' },
    { name: 'Merobhnu', logo: '/api/placeholder/120/60' },
    { name: 'Sunrise Apartments', logo: '/api/placeholder/120/60' },
    { name: 'YoTi School', logo: '/api/placeholder/120/60' },
    { name: 'Postbase', logo: '/api/placeholder/120/60' },
    { name: 'Dreams & Ideas', logo: '/api/placeholder/120/60' },
    { name: 'Probio', logo: '/api/placeholder/120/60' },
    { name: 'Yeti Nails & Spa', logo: '/api/placeholder/120/60' },
    { name: 'KUDH', logo: '/api/placeholder/120/60' },
  ];

  // Duplicate clients for seamless infinite scroll
  const hmClientsDuplicated = [...hmClientsData, ...hmClientsData];

  return (
    <main className="hm-homepage">
      {/* Hero Section */}
      <section className="hm-hero">
        <div className="hm-hero-bg">
          <img src="/public/hero-bg-paper-bags.jpg" alt="Paper bags background" className="hm-hero-image" />
          <div className="hm-hero-overlay"></div>
        </div>
        <div className="hm-hero-content">
          <div className="hm-container">
            <h1 className="hm-hero-title">Premium Paper Bag Printing & Packaging Solutions</h1>
            <p className="hm-hero-tagline">
              Custom printed paper bags for retail, events, and corporate branding. 
              Quality printing that makes your brand stand out.
            </p>
            <button className="hm-hero-cta">Get Custom Quote</button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="hm-clients">
      <div className="hm-clients__container">
        <div className="hm-clients__header">
          <h1 className="hm-clients__title">
            Trusted by Leading Brands
          </h1>
          <p className="hm-clients__subtitle">
            We're proud to work with these amazing companies
          </p>
        </div>

        <div className="hm-clients__showcase">
          {/* First row - slides left to right */}
          <div className="hm-clients__row">
            <div className="hm-clients__track hm-clients__track--right">
              {hmClientsDuplicated.map((client, index) => (
                <div
                  key={`hm-clients-row1-${index}`}
                  className="hm-clients__card"
                >
                  <div className="hm-clients__card-content">
                    <div className="hm-clients__logo">
                      <span className="hm-clients__logo-text">
                        {client.name.slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                    <p className="hm-clients__name">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - slides right to left */}
          <div className="hm-clients__row">
            <div className="hm-clients__track hm-clients__track--left">
              {hmClientsDuplicated.map((client, index) => (
                <div
                  key={`hm-clients-row2-${index}`}
                  className="hm-clients__card"
                >
                  <div className="hm-clients__card-content">
                    <div className="hm-clients__logo">
                      <span className="hm-clients__logo-text">
                        {client.name.slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                    <p className="hm-clients__name">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fade out edges */}
          <div className="hm-clients__fade hm-clients__fade--left"></div>
          <div className="hm-clients__fade hm-clients__fade--right"></div>
        </div>
      </div>
      </section>

      {/* Hot Selling Products Section */}
{/* Hot Selling Products Section */}
<section className="hm-hot-products">
  <div className="hm-container">
    <h1 className="hm-section-title">Hot Selling Products</h1>
    <div className="hm-hot-products-grid">
      
      <div className="hm-hot-selling-products">
        <div className="hm-product-card">
          <div className="hm-product-image">
            <img src="/public/luxury-shopping-bags.jpg" alt="Luxury Shopping Bags" />
          </div>
          <div className="hm-product-info">
            <h3 className="hm-product-name">Luxury Shopping Bags</h3>
            <p className="hm-product-desc">Premium kraft paper with rope handles and custom foil stamping for high-end retail brands.</p>
          </div>
        </div>
      </div>

      <div className="hm-hot-selling-products">
        <div className="hm-product-card">
          <div className="hm-product-image">
            <img src="/public/eco-friendly-bags.jpg" alt="Eco-Friendly Bags" />
          </div>
          <div className="hm-product-info">
            <h3 className="hm-product-name">Eco-Friendly Bags</h3>
            <p className="hm-product-desc">100% recyclable brown kraft bags with water-based inks, perfect for environmentally conscious businesses.</p>
          </div>
        </div>
      </div>

      <div className="hm-hot-selling-products">
        <div className="hm-product-card">
          <div className="hm-product-image">
            <img src="/public/food-delivery-bags.jpg" alt="Food Delivery Bags" />
          </div>
          <div className="hm-product-info">
            <h3 className="hm-product-name">Food Delivery Bags</h3>
            <p className="hm-product-desc">Grease-resistant paper bags with reinforced bottom, ideal for restaurants and food delivery services.</p>
          </div>
        </div>
      </div>

      <div className="hm-hot-selling-products">
        <div className="hm-product-card">
          <div className="hm-product-image">
            <img src="/public/promotional-bags.jpg" alt="Promotional Bags" />
          </div>
          <div className="hm-product-info">
            <h3 className="hm-product-name">Promotional Bags</h3>
            <p className="hm-product-desc">Custom printed bags for events, trade shows, and marketing campaigns with vibrant full-color printing.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Products Section */}
      <section className="hm-products">
        <div className="hm-container">
          <h1 className="hm-section-title">Our Paper Bags</h1>
          <div className="hm-products-grid">
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/shopping-bags-category.jpg" alt="Shopping Bags" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Shopping Bags</h3>
                <p className="hm-category-desc">Premium shopping bags for retail stores with custom branding and various handle options.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/gift-bags-category.jpg" alt="Gift Bags" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Gift Bags</h3>
                <p className="hm-category-desc">Elegant gift bags for special occasions with decorative finishes and luxury presentation.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/food-packaging-category.jpg" alt="Food Packaging" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Food Packaging</h3>
                <p className="hm-category-desc">Food-safe paper bags and packaging solutions for restaurants, bakeries, and food businesses.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/pharmaceutical-bags-category.jpg" alt="Pharmaceutical Bags" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Pharmaceutical Bags</h3>
                <p className="hm-category-desc">Secure and compliant paper bags for pharmacies and medical supply distribution.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/industrial-packaging-category.jpg" alt="Industrial Packaging" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Industrial Packaging</h3>
                <p className="hm-category-desc">Heavy-duty paper bags for industrial applications with reinforced construction.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/custom-printing-category.jpg" alt="Custom Printing" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Custom Printing</h3>
                <p className="hm-category-desc">Full-color custom printing services with logo placement, brand colors, and design consultation.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*packaging services*/}
      <section className="hm-biodegradable-section">
        <div className="hm-container">
            <div className="hm-section-header">
                <h1 className="hm-main-title">Packaging Services</h1>
                <svg className="hm-leaf-icon" viewBox="0 0 24 24" fill="#4a9b5e">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6L16,12L12,18L8,12L12,6Z"/>
                </svg>
                <p className="hm-description">
                    Our wholesale biodegradable food packaging production mainly including paper food boxes, pastry boxes, transparent fruit and vegetable containers, plastic cups and other packages
                </p>
            </div>

            <div className="hm-products-grid">
                
                <div className="hm-product-card">
                    <h2 className="hm-product-title">Disposable Lunch Packaging</h2>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23d4a574'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-family='Arial' font-size='16'%3ELunch Packaging Image%3C/text%3E%3C/svg%3E" 
                         alt="Disposable lunch packaging containers with multiple compartments" 
                         className="hm-product-image"/>
                    <div className="hm-product-features">
                        <ul className="hm-feature-list">
                            <li className="hm-feature-item">Microwaveable and Anti-Fog</li>
                            <li className="hm-feature-item">More convenience</li>
                        </ul>
                    </div>
                </div>

                <div className="hm-product-card">
                    <h2 className="hm-product-title">Disposable Salad Container</h2>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23d4a574'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-family='Arial' font-size='16'%3ESalad Container Image%3C/text%3E%3C/svg%3E" 
                         alt="Clear disposable salad containers with fresh vegetables" 
                         className="hm-product-image"/>
                    <div className="hm-product-features">
                        <ul className="hm-feature-list">
                            <li className="hm-feature-item">Perfect for Green and Healthy</li>
                        </ul>
                    </div>
                </div>

                <div className="hm-product-card">
                    <h2 className="hm-product-title">Disposable Cutlery</h2>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%235fb3d8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-family='Arial' font-size='16'%3EDisposable Cutlery Image%3C/text%3E%3C/svg%3E" 
                         alt="White biodegradable cutlery set on blue background" 
                         className="hm-product-image"/>
                    <div className="hm-product-features">
                        <ul className="hm-feature-list">
                            <li className="hm-feature-item">Eco-Friendly and disposable</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Printing Services Section */}
<section className="ps-services">
  <div className="ps-container">
    <h1 className="ps-section-title">Printing Services</h1>
    <div className="ps-services-grid">
      <div className="ps-service-card">
        <div className="ps-service-image">
          <img src="/public/business-cards.jpg" alt="Business Cards" />
        </div>
        <div className="ps-service-info">
          <h3 className="ps-service-name">Business Cards</h3>
          <p className="ps-service-desc">Premium matte and glossy finish business cards with custom designs to suit your brand identity.</p>
        </div>
      </div>
      <div className="ps-service-card">
        <div className="ps-service-image">
          <img src="/public/flyers.jpg" alt="Flyers" />
        </div>
        <div className="ps-service-info">
          <h3 className="ps-service-name">Flyers</h3>
          <p className="ps-service-desc">High-quality flyers with vibrant colors, available in multiple paper types and finishes.</p>
        </div>
      </div>
      <div className="ps-service-card">
        <div className="ps-service-image">
          <img src="/public/posters.jpg" alt="Posters" />
        </div>
        <div className="ps-service-info">
          <h3 className="ps-service-name">Posters</h3>
          <p className="ps-service-desc">Large format posters for events, promotions, and branding with sharp detail printing.</p>
        </div>
      </div>
      <div className="ps-service-card">
        <div className="ps-service-image">
          <img src="/public/brochures.jpg" alt="Brochures" />
        </div>
        <div className="ps-service-info">
          <h3 className="ps-service-name">Brochures</h3>
          <p className="ps-service-desc">Custom brochures with professional folding and premium paper stock to showcase your business.</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* About us section*/}
<section>
<div className="hm-about-section">
  <div className="hm-container">
    <div className="hm-about-content">
      <div className="hm-about-text">
        <svg className="hm-leaf-icon" viewBox="0 0 24 24">
          <path d="M12 2L12.09 8.26L18 8L12 22L5.91 16.74L6 8L12 2Z" />
        </svg>

        <h1 className="hm-about-title">About Us</h1>

        <p className="hm-about-description">
          Lesui company is a research and development, production and sales into
          a integrated biodegradable food packaging manufacturer. Our state of
          the art manufacturing Facilities across the region with the latest
          German technology extend to exceed 60,000 square meters in area. With
          the annual output reaches more than 60,000 tons, and the annual output
          value is over 600 million yuan.
        </p>

        <a href="#" className="hm-view-more-btn">
          View More
          <div className="hm-arrow-icon"></div>
        </a>
      </div>

      <div className="hm-about-image-container">
        <div className="hm-floating-circles">
          <div className="hm-floating-circle hm-circle-1"></div>
          <div className="hm-floating-circle hm-circle-2"></div>
          <div className="hm-floating-circle hm-circle-3"></div>
          <div className="hm-floating-circle hm-circle-4"></div>
        </div>
        <div className="hm-main-circle"></div>
      </div>
    </div>

    <div className="hm-stats-section">
      <div className="hm-stat-item">
        <div className="hm-stat-icon hm-icon-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
              stroke="#4CAF50"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M16 10C16 12.21 14.21 14 12 14C9.79 14 8 12.21 8 10"
              stroke="#4CAF50"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="hm-stat-content">
          <h3>18</h3>
          <p>18 years Food packaging production</p>
        </div>
      </div>

      <div className="hm-stat-item">
        <div className="hm-stat-icon hm-icon-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 3V21H21" stroke="#4CAF50" strokeWidth="2" />
            <path d="M7 12L12 7L16 11L21 6" stroke="#4CAF50" strokeWidth="2" />
          </svg>
        </div>
        <div className="hm-stat-content">
          <h3>60,000</h3>
          <p>Plant area exceeds 60,000 square meters</p>
        </div>
      </div>

      <div className="hm-stat-item">
        <div className="hm-stat-icon hm-icon-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#4CAF50"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M8 12H16M12 8V16"
              stroke="#4CAF50"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="hm-stat-content">
          <h3>6,000,000</h3>
          <p>6,000,000 million yuan output value</p>
        </div>
      </div>

      <div className="hm-stat-item">
        <div className="hm-stat-icon hm-icon-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7"
              stroke="#4CAF50"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M21 7L12 13L3 7"
              stroke="#4CAF50"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="hm-stat-content">
          <h3>122</h3>
          <p>Lesui owns above 122 production lines</p>
        </div>
      </div>

      <div className="hm-stat-item">
        <div className="hm-stat-icon hm-icon-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="#4CAF50"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M9 12L11 14L15 10"
              stroke="#4CAF50"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="hm-stat-content">
          <h3>60,000</h3>
          <p>Lesui production capacity of 60,000 tons</p>
        </div>
      </div>

      <div className="hm-stat-item">
        <div className="hm-stat-icon hm-icon-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z"
              stroke="#4CAF50"
              strokeWidth="2"
              fill="none"
            />
            <path d="M7 10H17M9 14H15" stroke="#4CAF50" strokeWidth="2" />
          </svg>
        </div>
        <div className="hm-stat-content">
          <h3>100,000</h3>
          <p>100,000 grade Clear workshop</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

{/* jandj images section */}
<section>
   <div className="hm-factories-section">
      <div className="hm-overlay">
        <h1 className="hm-title">Your Company Name</h1>
        <div className="hm-images-container">
          {/* First Image */}
          <div className="hm-image-card">
            <img
              src="/images/factory1.jpg"
              alt="Factory overview"
              className="hm-factory-img"
            />
            <p className="hm-caption hm-green">
              the total plant area exceeds 60000 square meters
            </p>
          </div>

          {/* Second Image */}
          <div className="hm-image-card">
            <img
              src="homebg.png"
              alt="Kiefel machines"
              className="hm-factory-img"
            />
            <p className="hm-caption hm-orange">
              we have 100 thousand grade clear workshop with advanced kiefer
              machines
            </p>
          </div>

          {/* Third Image */}
          <div className="hm-image-card">
            <img
              src="/images/factory3.jpg"
              alt="Automatic machines"
              className="hm-factory-img"
            />
            <p className="hm-caption hm-green">
              advanced automatic forming cutting and punching machines
            </p>
          </div>
        </div>
      </div>
    </div>
</section>

{/*blog section*/}
{/* this is the blog section which will need to be updated to dynamic*/}
<section className="hm-blog-section">
      {/* Section Title - Replace "J&J Printers" with your company name */}
      <h1 className="hm-blog-title">Latest News & Blog about J&J Printers</h1>
      <div className="hm-blog-icon">🌿</div>
      
      {/* Blog Cards Container */}
      <div className="hm-blog-container">
        
        {/* Blog Card 1 - Replace all data points below when making dynamic */}
        <article className="hm-blog-card">
          {/* Date Box - Replace date dynamically */}
          <div className="hm-blog-date">
            <span className="hm-blog-day">16</span>
            <span className="hm-blog-year-month">2025-01</span>
          </div>
          
          {/* Blog Image - Replace src and alt dynamically */}
          <div className="hm-blog-image-container">
            <img 
              className="hm-blog-image" 
              src="https://images.unsplash.com/photo-1553787762-5cc1b0d7b985?w=400&h=250&fit=crop&crop=center" 
              alt="Plastic Fruit Containers"
            />
          </div>
          
          <div className="hm-blog-content">
            {/* Blog Title - Replace dynamically */}
            <h3 className="hm-blog-card-title">
              Plastic Fruit Containers: Recyclable or Not? Find Out Here
            </h3>
            
            {/* Blog Description - Replace dynamically */}
            <p className="hm-blog-description">
              Plastic fruit containers are recyclable if clean and meet local guidelines. Learn how to prepare containers properly to ensure successful recycling.
            </p>
            
            {/* View More Button - Replace href dynamically */}
            <a href="/blog/plastic-fruit-containers" className="hm-blog-btn">
              View More
              <span className="hm-blog-arrow">→</span>
            </a>
          </div>
        </article>

        {/* Blog Card 2 - Replace all data points below when making dynamic */}
        <article className="hm-blog-card">
          {/* Date Box - Replace date dynamically */}
          <div className="hm-blog-date">
            <span className="hm-blog-day">10</span>
            <span className="hm-blog-year-month">2025-01</span>
          </div>
          
          {/* Blog Image - Replace src and alt dynamically */}
          <div className="hm-blog-image-container">
            <img 
              className="hm-blog-image" 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop&crop=center" 
              alt="Eco-Friendly Food Packaging"
            />
          </div>
          
          <div className="hm-blog-content">
            {/* Blog Title - Replace dynamically */}
            <h3 className="hm-blog-card-title">
              What is Eco-Friendly Food Packaging & Its Advantages in 2025
            </h3>
            
            {/* Blog Description - Replace dynamically */}
            <p className="hm-blog-description">
              Learn about sustainable materials in eco-friendly food packaging: minimize waste, reduce carbon footprints, benefit businesses and the environment.
            </p>
            
            {/* View More Button - Replace href dynamically */}
            <a href="/blog/eco-friendly-packaging" className="hm-blog-btn">
              View More
              <span className="hm-blog-arrow">→</span>
            </a>
          </div>
        </article>

        {/* Blog Card 3 - Replace all data points below when making dynamic */}
        <article className="hm-blog-card">
          {/* Date Box - Replace date dynamically */}
          <div className="hm-blog-date">
            <span className="hm-blog-day">10</span>
            <span className="hm-blog-year-month">2025-01</span>
          </div>
          
          {/* Blog Image - Replace src and alt dynamically */}
          <div className="hm-blog-image-container">
            <img 
              className="hm-blog-image" 
              src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=250&fit=crop&crop=center" 
              alt="Different Types of Food Packaging"
            />
          </div>
          
          <div className="hm-blog-content">
            {/* Blog Title - Replace dynamically */}
            <h3 className="hm-blog-card-title">
              Exploring Different Types of Food Packaging Solutions
            </h3>
            
            {/* Blog Description - Replace dynamically */}
            <p className="hm-blog-description">
              Learn about different food packaging options, including cans, glass jars, cartons, bags, and trays, and how they protect, preserve, and appeal to...
            </p>
            
            {/* View More Button - Replace href dynamically */}
            <a href="/blog/food-packaging-types" className="hm-blog-btn">
              View More
              <span className="hm-blog-arrow">→</span>
            </a>
          </div>
        </article>
        
      </div>
    </section>

      {/* Contact Section */}
      <section className="hm-contact">
        <div className="hm-container">
          <div className="hm-contact-content">
            <div className="hm-contact-info">
              <h2 className="hm-section-title">Get In Touch</h2>
              <p className="hm-contact-text">
                Ready to create custom paper bags for your business? Connect with us through your preferred platform.
              </p>
              <div className="hm-contact-details">
                <div className="hm-contact-item">
                  <strong>Address:</strong> 123 Industrial Avenue, Kathmandu, Nepal
                </div>
                <div className="hm-contact-item">
                  <strong>Phone:</strong> +977-1-234-5678
                </div>
                <div className="hm-contact-item">
                  <strong>Email:</strong> info@jjprinters.com
                </div>
              </div>
            </div>
            <div className="hm-social-media">
              <h3 className="hm-social-title">Follow & Connect</h3>
              <div className="hm-social-icons">
                <a href="#" className="hm-social-icon hm-facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hm-social-icon hm-instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.342-1.297C4.184 14.795 3.654 13.644 3.654 12.347c0-1.297.53-2.448 1.453-3.342.923-.893 2.045-1.365 3.342-1.365 1.297 0 2.448.472 3.342 1.365.893.894 1.365 2.045 1.365 3.342 0 1.297-.472 2.448-1.365 3.344-.894.807-2.045 1.297-3.342 1.297zm7.718 0c-1.297 0-2.448-.49-3.342-1.297-.894-.896-1.365-2.047-1.365-3.344 0-1.297.471-2.448 1.365-3.342.894-.893 2.045-1.365 3.342-1.365 1.297 0 2.448.472 3.342 1.365.894.894 1.365 2.045 1.365 3.342 0 1.297-.471 2.448-1.365 3.344-.894.807-2.045 1.297-3.342 1.297z"/>
                  </svg>
                </a>
                <a href="#" className="hm-social-icon hm-linkedin">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="hm-social-icon hm-whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
