"use client";

import React from "react";
import { useMemo } from "react";
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
  pricePerUnit,
}) => {
  const colorsArray = product.colors ? Object.keys(product.colors) : [];
  const details = product.details || {};
  const packSizes = product.packs?.filter((p) => p >= 100) || [100];

  const getColorHex = (c) => {
    const map = {
      brown: "#c48757",
      pink: "#ff80ff",
      royalblue: "#4169e0",
      white: "#fff",
    };
    return map[c.toLowerCase()] || "#ccc";
  };

  const fakePrice = useMemo(() => {
    let percent =
      selectedPack === 100
        ? 50
        : selectedPack === 500
          ? 50
          : selectedPack === 1000
            ? 40
            : 30;
    return Math.round(totalPrice * (1 + percent / 100));
  }, [totalPrice, selectedPack]);

  return (
    <div className="pd-container">
      {/* ================= GALLERY + BUY BOX ================= */}
      <div className="pd-top">
        <div className="pd-flex-wrap">
          <div className="pd-gallery-wrap">
            <div className="pd-thumbs">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={product.name}
                  className={img === mainImage ? "pd-thumb active" : "pd-thumb"}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <div className="pd-main-img">
              <img src={mainImage} alt={product.name} />
            </div>
          </div>

          <div className="pd-details">
            <h1 className="pd-title">{product.name}</h1>
            <p className="pd-short">{product.shortDescription}</p>

            <div className="pd-price-block">
              <span className="pd-price">
                {totalPrice} {product.currency || "NPR"}
              </span>
              <span className="pd-fake-price">{fakePrice}</span>
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
            {/* Quantity & Actions */}
            <div className="pd-actions-row">
              <div className="pd-qty">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                <input type="number" value={qty} readOnly />
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button
                className="pd-btn pd-add-to-cart"
                onClick={() => addToCart(false)}
              >
                Add to Cart
              </button>
              <button
                className="pd-btn pd-buy-now"
                onClick={() => addToCart(true)}
              >
                Buy Now
              </button>
            </div>

            {/* Total pieces text */}
            <div className="pd-total-pieces">
              Total Pieces: {selectedPack * qty}
            </div>

            {/* Share It buttons */}
            <div className="pd-share">
              <span>Share It:</span>

              <button
                className="pd-share-btn facebook"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                    "_blank"
                  )
                }
              >
                <svg viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.7-3.9c1 0 2 .1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12H18l-.5 3h-2.8v7A10 10 0 0 0 22 12z" />
                </svg>
              </button>

              <button
                className="pd-share-btn instagram"
                onClick={() =>
                  window.open(
                    `https://www.instagram.com/?url=${window.location.href}`,
                    "_blank"
                  )
                }
              >
                <svg viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3a2.8 2.8 0 1 1 2.8-2.8A2.8 2.8 0 0 1 12 14.8zM17.3 6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17.3 6z" />
                </svg>
              </button>

              <button
                className="pd-share-btn tiktok"
                onClick={() =>
                  window.open(
                    `https://www.tiktok.com/share?url=${window.location.href}`,
                    "_blank"
                  )
                }
              >
                <svg viewBox="0 0 24 24">
                  <path d="M20 6.5a4.8 4.8 0 0 1-3.4-1.6A5 5 0 0 1 15 2h-3v14.3a2.2 2.2 0 1 1-2.2-2A2.1 2.1 0 0 1 11 15V9.8c-3.5-.1-6.4 2.7-6.4 6.2A6.2 6.2 0 0 0 11 22a6.2 6.2 0 0 0 6.2-6.2V8a7 7 0 0 0 2.8 1.2V6.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddToCartToast
        show={toast.show}
        productInfo={toast.info}
        onClose={() => setToast({ show: false, info: null })}
      />

      {/* ================= DETAILED SECTIONS ================= */}
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

        {details.features && details.features.length > 0 && (
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
