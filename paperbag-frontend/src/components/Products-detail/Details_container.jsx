import React from "react";

function Details_container({
  product,
  selectedColor,
  setSelectedColor,
  selectedPack,
  setSelectedPack,
  qty,
  setQty,
  addToCart,
  handleBuyNow,
}) {
  const priceForUnit = product.price ? Number(product.price) : 0;

  const priceForPack = () => {
    if (!selectedPack) return priceForUnit;
    switch (selectedPack) {
      case 100:
        return 100;
      case 500:
        return 500;
      case 1000:
        return 1000;
      case 2000:
        return 2000;
      default:
        return priceForUnit;
    }
  };

  const pricePer = priceForPack();

  const computedTotal = Number(pricePer) * Number(qty);

  const COLOR_MAP = {
    Brown: "#c48757",
    Pink: "#ff80ff",
    "Royal Blue": "#4169e0",
    White: "#ffffff",
  };

  return (
    <aside className="pd-details">
      <h1 className="pd-title">{product.title}</h1>

      <div className="pd-meta">
        <span className="pd-sku">SKU: {product.sku || "-"}</span>
        <span className="pd-type">{product.productType || ""}</span>
      </div>

      {/* PRICE DISPLAY */}
      <div className="pd-price">
        <span className="pd-currency">{product.currency || "NPR"}</span>
        <span className="pd-amount">
          {pricePer}{" "}
          {selectedPack ? `(per pack of ${selectedPack})` : `(per unit)`}
        </span>
      </div>

      {/* TOTAL PRICE */}
      <p className="pd-total">
        Total: {product.currency || "NPR"} {computedTotal}
      </p>

      {product.shortDescription && (
        <p className="pd-short">{product.shortDescription}</p>
      )}

      {/* -------------------- COLOR SELECTOR -------------------- */}
      {product.colors?.length > 0 && (
        <div style={{ margin: "16px 0" }}>
          <h4 style={{ marginBottom: "6px" }}>Available Colors:</h4>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {product.colors.map((colorName) => {
              const hex = COLOR_MAP[colorName] ?? "#ddd";

              return (
                <div
                  key={colorName}
                  onClick={() => setSelectedColor(colorName)}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: hex,
                    border:
                      selectedColor === colorName
                        ? "3px solid black"
                        : "2px solid #999",
                    cursor: "pointer",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  title={colorName}
                ></div>
              );
            })}
          </div>
        </div>
      )}

      {/* -------------------- PACK SIZE SELECTOR -------------------- */}
      {product.packSizes?.length > 0 && (
        <div style={{ margin: "16px 0" }}>
          <h4 style={{ marginBottom: "6px" }}>Pack Size:</h4>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={() => setSelectedPack(null)}
              className={!selectedPack ? "pd-pack-btn active" : "pd-pack-btn"}
            >
              Single Unit
            </button>

            {product.packSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedPack(size)}
                className={
                  selectedPack === size ? "pd-pack-btn active" : "pd-pack-btn"
                }
              >
                Pack of {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* -------------------- QTY + BUTTONS -------------------- */}
      <div className="pd-actions">
        <label className="pd-qty">
          Qty
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))}
          />
        </label>

        <button
          className="pd-btn pd-add-to-cart"
          onClick={() => addToCart(false)}
        >
          Add to Cart
        </button>

        <button className="pd-btn pd-enquire" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>

      {/* SHARE BUTTON */}
      <div className="pd-share" style={{ marginTop: 10 }}>
        <button
          className="pd-share-btn"
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: product.title,
                  url: window.location.href,
                })
                .catch(() => {});
            } else {
              navigator.clipboard?.writeText(window.location.href);
              alert("Link copied to clipboard.");
            }
          }}
        >
          Share
        </button>
      </div>
    </aside>
  );
}

export default Details_container;
