import React from 'react'

function BlogSection() {
  return (
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
  )
}

export default BlogSection