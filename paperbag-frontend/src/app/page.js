'use client';
import "../styles/homepage.css";
import "@fontsource/baloo-2";         
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
            <h1 className="hm-hero-title">Premium Packaging Solutions in Nepal
              <span className="hm-hero-subtitle">Paper Bags, Boxes & Printing Supplies</span>
            </h1>
            <p className="hm-hero-tagline">
              High-quality paper bags, boxes, and printing supplies in Kathmandu,
               Lalitpur, Nepal. Custom, eco-friendly packaging solutions for every business.
            </p>
           <button
  className="hm-hero-cta"
  onClick={() => window.open("https://wa.me/9779843223219", "_blank")}
>
  Chat with our expert
</button>
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
            Trusted by couriers, restaurants, clothing brands, e-commerce, food & beverage, and gift shops for custom, eco-friendly packaging that protects products and boosts brand image.
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

      
{/* our services Section */}
<section className="hm-hot-products">
  <div className="hm-container">
    <h2 className="hm-section-title">Our Services</h2>
    <div className="hm-hot-products-grid">
      
      <div className="hm-hot-selling-products">
        <div className="hm-product-card">
          <div className="hm-product-image">
            <img src="/public/luxury-shopping-bags.jpg" alt="Custom Paper Bags in Nepal" />
          </div>
          <div className="hm-product-info">
            <h3 className="hm-product-name">Custom Paper Bags in Nepal</h3>
            <p className="hm-product-desc">Durable, stylish, and eco-friendly custom paper bags in Nepal, fully customizable to showcase your brand.</p>
          </div>
        </div>
      </div>

      <div className="hm-hot-selling-products">
        <div className="hm-product-card">
          <div className="hm-product-image">
            <img src="/public/eco-friendly-bags.jpg" alt="Corrugated Boxes & Packaging" />
          </div>
          <div className="hm-product-info">
            <h3 className="hm-product-name">Corrugated Boxes & Packaging</h3>
            <p className="hm-product-desc">Strong, reliable, and fully branded corrugated boxes in Nepal, perfect for shipping, storage, and retail display.</p>
          </div>
        </div>
      </div>

      <div className="hm-hot-selling-products">
        <div className="hm-product-card">
          <div className="hm-product-image">
            <img src="/public/food-delivery-bags.jpg" alt="Branding & Custom Packaging Solutions " />
          </div>
          <div className="hm-product-info">
            <h3 className="hm-product-name">Branding & Custom Packaging Solutions </h3>
            <p className="hm-product-desc">Custom packaging and branding solutions in Nepal designed to make your products stand out and leave a lasting impression.</p>
          </div>
        </div>
      </div>

      <div className="hm-hot-selling-products">
        <div className="hm-product-card">
          <div className="hm-product-image">
            <img src="/public/promotional-bags.jpg" alt="Promotional Bags" />
          </div>
          <div className="hm-product-info">
            <h3 className="hm-product-name">Printing Supplies in Nepal</h3>
            <p className="hm-product-desc">High-quality printing supplies in Nepal including leaflets, brochures, flyers, and visiting cards to promote your brand effectively. </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Products Section */}
      <section className="hm-products">
        <div className="hm-container">
          <h2 className="hm-section-title">Paper Bags</h2>
          <div className="hm-products-grid">
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/shopping-bags-category.jpg" alt="food industry paper bags" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Food industry paper bags</h3>
                <p className="hm-category-desc">Eco-friendly paper bag Nepal solutions for restaurants, bakeries, and cafés, perfect for food packaging and takeaways.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/gift-bags-category.jpg" alt="Clothing & Fashion Paper Bag" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Clothing & Fashion Paper Bag </h3>
                <p className="hm-category-desc">Stylish and durable paper bag Nepal designs that add value to clothing, footwear, and boutique stores.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/food-packaging-category.jpg" alt="Cosmetics & Beauty Paper Bag" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Cosmetics & Beauty Paper Bag</h3>
                <p className="hm-category-desc">Premium paper bag Nepal options for cosmetic shops and beauty brands, enhancing packaging and brand image.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/pharmaceutical-bags-category.jpg" alt="Gifting & Lifestyle Paper Bag" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Gifting & Lifestyle Paper Bag</h3>
                <p className="hm-category-desc">Customizable paper bag Nepal choices for gift shops, souvenirs, and lifestyle products, making every gift look special.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/industrial-packaging-category.jpg" alt="Corporate & Promotional Paper Bag" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Corporate & Promotional Paper Bag</h3>
                <p className="hm-category-desc">Branded paper bag Nepal solutions for events, conferences, and promotional giveaways, creating a professional impact.</p>
                <a href="#" className="hm-category-link">View Products</a>
              </div>
            </div>
            <div className="hm-product-category">
              <div className="hm-category-image">
                <img src="/public/custom-printing-category.jpg" alt="Accessories & Retail Paper Bag" />
              </div>
              <div className="hm-category-content">
                <h3 className="hm-category-title">Accessories & Retail Paper Bag</h3>
                <p className="hm-category-desc">Durable and chic paper bag Nepal options for jewelry, watches, and accessory stores, tailored to your brand.</p>
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

    {/* Printing Services Section */}
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


{/* About us section*/}
<section>
<div className="hm-about-section">
  <div className="hm-container">
    <div className="hm-about-content">
      <div className="hm-about-text">
        <svg className="hm-leaf-icon" viewBox="0 0 24 24">
          <path d="M12 2L12.09 8.26L18 8L12 22L5.91 16.74L6 8L12 2Z" />
        </svg>

        <h3 className="hm-about-title">About Us</h3>

        <p className="hm-about-description">
          At J and J’s Packaging, we are a trusted packaging manufacturer in Nepal offering
           high-quality paper bags, corrugated boxes, custom packaging, and printing services.
            Our mission is to deliver durable, eco-friendly, and professionally designed solutions
             that help businesses showcase their products and strengthen their brand.
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
          <p>18 years of experience in packaging in Nepal.</p>
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
          <h3>1300+</h3>
          <p>1300+ client served till date </p>
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
          <h3>150+ </h3>
          <p>150+ packaging category in Nepal</p>
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
        <h1 className="hm-title">JandJ printers</h1>
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
                Looking for reliable packaging in Nepal? Get in touch with J and J’s Packaging today for custom solutions that fit your business needs..
              </p>
              <div className="hm-contact-details">
                <div className="hm-contact-item">
                  <strong>Address:</strong>   Sankhamul, Kathmandu, Lalitpur, Nepal
                </div>
                <div className="hm-contact-item">
                  <strong>Phone:</strong> +9779843223219
                </div>
                <div className="hm-contact-item">
                  <strong>Email:</strong> jandjsprinting@gmail.com
                </div>
              </div>
            </div>
            <div className="hm-social-media">
              <h3 className="hm-social-title">Follow & Connect</h3>
              <div className="hm-social-icons">
                <a href="https://www.facebook.com/paperbagnepalfactory/" className="hm-social-icon hm-facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
  href="https://www.instagram.com/jandj_paper_bag_nepal/"
  target="_blank"
  rel="noopener noreferrer"
  className="hm-social-icon hm-instagram flex items-center justify-center rounded-full w-10 h-10 border border-gray-400 text-gray-400 hover:text-white transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
</a>


                <a
  href="https://maps.app.goo.gl/r1Rq6ZHzzLMwKRQF8"
  target="_blank"
  rel="noopener noreferrer"
  className="hm-social-icon hm-googlemaps flex items-center justify-center rounded-full w-10 h-10 border border-gray-400 text-gray-400 hover:text-white transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M256 0C150 0 64 86 64 192c0 135 192 320 192 320s192-185 192-320C448 86 362 0 256 0zm0 272a80 80 0 1 1 0-160 80 80 0 0 1 0 160z"/>
  </svg>
</a>

                <a href="https://api.whatsapp.com/send/?phone=9779843223219&text&type=phone_number&app_absent=0" className="hm-social-icon hm-whatsapp">
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
