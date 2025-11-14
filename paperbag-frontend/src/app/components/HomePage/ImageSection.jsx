import React from 'react'

function ImageSection() {
  return (
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
  )
}

export default ImageSection