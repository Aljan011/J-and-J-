"use client";

import React, { useMemo } from "react";
import { urlFor } from "../../../lib/sanityImage.js";
import AddToCartToast from "../cart/AddtoCartToast";

const DetailsContainer = ({
  product,
  addToCart,
  selectedColor,
  setSelectedColor,
  selectedPack,
  setSelectedPack,
  qty,
  setQty,
  mainImage,
  setMainImage,
  totalPrice,
  toast,
  setToast,
}) => {
  const colorsArray = product.colors?.map(c => c.name) || [];
  const details = product.details || {};
  const packSizes = product.packs?.filter(p => p >= 100) || [100];

  // Helper: get color hex
  const getColorHex = (colorName) => {
    const colorObj = product.colors?.find(c => c.name === colorName);
    return colorObj?.hex || "#ccc";
  };

  // Helper: get price for selected color & pack
  const getPricePerUnit = (colorName, pack) => {
    const colorObj = product.colors?.find(c => c.name === colorName);
    if (!colorObj || !colorObj.packPrices) return 0;
    const priceObj = colorObj.packPrices.find(p => p.packSize === pack);
    return priceObj?.price || 0;
  };

  const pricePerUnit = useMemo(() => getPricePerUnit(selectedColor, selectedPack), [
    selectedColor,
    selectedPack,
  ]);

  const subtotal = useMemo(() => pricePerUnit * qty, [pricePerUnit, qty]);

  // Fake price logic for showing original price before discount
  const fakePrice = useMemo(() => {
    let percent =
      selectedPack === 100 ? 50 :
      selectedPack === 500 ? 50 :
      selectedPack === 1000 ? 40 : 30;
    return Math.round(subtotal * (1 + percent / 100));
  }, [subtotal, selectedPack]);

  return (
    <div className="pd-container">

      {/* ===== GALLERY + BUY BOX ===== */}
      <div className="pd-top">
        <div className="pd-flex-wrap">

          <div className="pd-gallery-wrap">
            <div className="pd-main-img">
              {mainImage ? (
                typeof mainImage === "string" ? (
                  <img src={mainImage} alt={product.name} />
                ) : (
                  <img src={urlFor(mainImage).url()} alt={product.name} />
                )
              ) : (
                <img src="/placeholder.png" alt={product.name} />
              )}
            </div>

            <div className="pd-thumbs">
              {(product.images || []).map((img, i) => (
                <img
                  key={i}
                  src={img ? urlFor(img).url() : "/placeholder.png"}
                  alt={product.name}
                  className={img === mainImage ? "pd-thumb active" : "pd-thumb"}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="pd-details">
            <h1 className="pd-title">{product.name}</h1>
            <p className="pd-short">{product.shortDescription}</p>

            <div className="pd-price-block">
              <span className="pd-price">
                Rs {subtotal.toLocaleString()} {product.currency || "NPR"}
              </span>
              <span className="pd-fake-price">{fakePrice.toLocaleString()}</span>
            </div>

            {/* Colors */}
            {colorsArray.length > 0 && (
              <div className="pd-colors">
                <h4>Available Colors:</h4>
                {colorsArray.map((c) => (
                  <button
                    key={c}
                    className={`pd-color-btn ${selectedColor === c ? "active" : ""}`}
                    style={{ backgroundColor: getColorHex(c) }}
                    onClick={() => setSelectedColor(c)}
                  />
                ))}
              </div>
            )}

            {/* Pack Sizes */}
            {packSizes.length > 0 && (
              <div className="pd-pack-sizes">
                <h4>Pack Sizes:</h4>
                {packSizes.map((p) => (
                  <button
                    key={p}
                    className={`pd-pack-btn ${selectedPack === p ? "active" : ""}`}
                    onClick={() => setSelectedPack(p)}
                  >
                    Pack of {p}
                  </button>
                ))}
              </div>
            )}

            {/* Quantity & Actions */}
            <div className="pd-actions-row">
              <div className="pd-qty">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                <input type="number" value={qty} readOnly />
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button className="pd-btn pd-add-to-cart" onClick={() => addToCart(false)}>
                Add to Cart
              </button>
              <button className="pd-btn pd-buy-now" onClick={() => addToCart(true)}>
                Buy Now
              </button>
            </div>

            <div className="pd-total-pieces">
              Total Pieces: {selectedPack * qty}
            </div>
            <div className="pd-share">
  <span className="share-label">Share It:</span>
  <div className="share-icons">
    {/* Facebook */}
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="share-icon"
      
    >
      <img src="/icons/facebook.png" alt="Facebook" />
    </a>

    {/* Instagram */}
    <a
      href={`https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="share-icon"

      
    >
      <img src="/icons/instagram.png" alt="Instagram" />
    </a>

    {/* TikTok */}
    <a
      href={`https://www.tiktok.com/share?url=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="share-icon"
    >
      <img src="/icons/tiktok.png" alt="TikTok" />
    </a>
  </div>
</div>


          </div>
        </div>
      </div>

      <AddToCartToast
        show={toast.show}
        productInfo={toast.info}
        onClose={() => setToast({ show: false, info: null })}
      />

      {/* ===== DETAILED SECTIONS ===== */}
      <div className="pd-info-sections">

        {details.commonUses?.length > 0 && (
          <section className="pd-common-uses">
            <h2>Common Uses</h2>
            <ul>
              {details.commonUses.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {details.features?.length > 0 && (
          <section className="pd-features-section">
            <h2>Product Features</h2>
            <table className="pd-features-table">
              <tbody>
                {details.features.map((f, i) => (
                  <tr key={i}>
                    <th>{f.feature}</th>
                    <td>{f.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {details.whyChoose && (
          <section className="pd-why-choose">
            <h2>{details.whyChooseTitle}</h2>
            <p>{details.whyChoose}</p>
          </section>
        )}

        {details.benefits?.length > 0 && (
          <section className="pd-benefits">
            <h2>Benefits</h2>
            <ul>
              {details.benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {product.faqs?.length > 0 && (
          <section className="pd-faq">
            <h2>Frequently Asked Questions</h2>
            {product.faqs.map((faq, i) => (
              <div key={i} className="pd-faq-item">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </section>
        )}

        {details.conclusion && (
          <section className="pd-conclusion">
            <p>{details.conclusion}</p>
          </section>
        )}

      </div>
    </div>
  );
};

export default DetailsContainer;
