import React from 'react'

function Cart_container( {cart, updateQty, removeItem, clearCart, subtotal, router}) {
  return (
    <div className="cart-container">
        <h1>Your Shopping Cart</h1>

        <div className="cart-items">
          {cart.map((it) => (
            <div
              key={it._uuid}
              className="cart-item"
            >
              <div className="cart-img">
                {it.image ? (
                  <img src={it.image} alt={it.title} />
                ) : (
                  <div className="no-img"></div>
                )}
              </div>

              <div className="cart-info">
                <h3>{it.title}</h3>
                <span className="cart-slug">{it.slug}</span>

                <div className="cart-meta">
                  <div>
                    {it.color ? <small>Color: {it.color}</small> : null}
                    <div>
                      {it.packSize ? (
                        <small>Pack: {it.packSize}</small>
                      ) : (
                        <small>Single unit</small>
                      )}
                    </div>
                  </div>
                </div>

                <div className="cart-price">
                  <div>
                    Price per {it.packSize ? `pack` : `unit`}: {it.currency || "NPR"} {it.price}
                  </div>
                  <div>
                    Line total: {it.currency || "NPR"} {Number(it.price) * Number(it.qty)}
                  </div>
                </div>

                <div className="cart-edit">
                  <label>
                    Qty:
                    <input
                      type="number"
                      min="1"
                      value={it.qty}
                      onChange={(e) => updateQty(it._uuid, e.target.value)}
                    />
                  </label>

                  <button className="cart-btn remove" onClick={() => removeItem(it._uuid)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="left-btns">
            <button onClick={() => router.push("/")} className="cart-btn outline">
              Continue Shopping
            </button>
            <button onClick={clearCart} className="cart-btn remove">
              Clear Cart
            </button>
          </div>

          <div className="summary">
            <p className="subtotal">Subtotal:</p>
            <h2 className="subtotal-value">
              {cart[0]?.currency || "NPR"} {subtotal}
            </h2>
            <button onClick={() => router.push("/checkout")} className="cart-btn primary">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
  )
}

export default Cart_container