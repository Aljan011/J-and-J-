import React from "react";

function Cart_container({
  cart,
  updateQty,
  removeItem,
  clearCart,
  subtotal,
  router,
}) {
  return (
    <div className="cart-container">

      {/* PAGE TITLE */}
      <div className="cart-page-title">
        <h1>Shopping Cart</h1>
        <span>{cart.length} Items</span>
      </div>

      {/* TABLE HEADER */}
      <div className="cart-header">
        <div className="h-product">Product Details</div>
        <div className="h-price">Price</div>
        <div className="h-qty">Quantity</div>
        <div className="h-total">Total</div>
      </div>

      {/* CART ITEMS */}
      <div className="cart-items">
        {cart.map((it) => {
          const price = it.unitPrice ?? it.price ?? 0;
          const total = price * Number(it.qty);

          return (
            <div key={it._uuid} className="cart-row">
              <div className="col-product">
                <div className="product-img">
                  {it.image ? (
                    <img src={it.image} alt={it.title} />
                  ) : (
                    <div className="no-img"></div>
                  )}
                </div>

                <div className="product-info">
                  <h4 className="main-title">{it.title}</h4>
                  <p className="pack">Pack of: {it.packSize || "1"}</p>
                  <p className="color">Color: {it.color || "N/A"}</p>
                </div>
              </div>

              <div className="col-price">
                {it.currency || "NPR"} {price}
              </div>

              <div className="col-qty">
                <button
                  className="qty-btn"
                  onClick={() => updateQty(it._uuid, Number(it.qty) - 1)}
                >
                  –
                </button>

                <input
                  type="number"
                  min="1"
                  className="qty-input"
                  value={it.qty}
                  onChange={(e) => updateQty(it._uuid, e.target.value)}
                />

                <button
                  className="qty-btn"
                  onClick={() => updateQty(it._uuid, Number(it.qty) + 1)}
                >
                  +
                </button>
              </div>

              <div className="col-total">
                <span className="total-amount">
                  {it.currency || "NPR"} {total}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => removeItem(it._uuid)}
                >
                  🗑
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="cart-footer">

        <div className="summary">
          <p className="subtotal">Subtotal:</p>
          <h2 className="subtotal-value">
            {cart[0]?.currency || "NPR"} {subtotal}
          </h2>

          <button
            onClick={() => router.push("/checkout")}
            className="cart-btn primary esewa-btn"
            style={{ backgroundColor: "#4CAF50" }}
          >
            <img src="/esewa/esewa-icon-large.webp" className="esewa-logo" />
            Proceed to Payment with eSewa
          </button>
        </div>

        <div className="left-btns">
          <button
            onClick={() => router.push("/")}
            className="cart-btn-outline"
          >
            Continue Shopping
          </button>

          <button onClick={clearCart} className="clear-cart">
            Clear Cart
          </button>
        </div>
      </div>

    </div>
  );
}

export default Cart_container;
