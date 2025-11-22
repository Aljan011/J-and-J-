import React from "react";

function OrderSummary({ cart, subtotal, placeOrder }) {
  return (
    <aside className="order-summary">
      <h2>Your Order</h2>

      <ul className="summary-items">
        {cart.map((item) => (
          <li key={`${item.slug}-${item.color || "no-color"}-${item.packSize || "no-pack"}-${item._uuid || crypto.randomUUID()}`}>
            <span>
              {item.title} × {item.qty}
              {item.color ? ` | Color: ${item.color}` : ""}
              {item.packSize ? ` | Pack: ${item.packSize}` : ""}
            </span>
            <strong>
              {item.currency || "NPR"} {item.price * item.qty}
            </strong>
          </li>
        ))}
      </ul>

      <div className="summary-total">
        <span>Total</span>
        <strong>
          {cart[0]?.currency || "NPR"} {subtotal}
        </strong>
      </div>

      <button className="checkout-btn place-order" onClick={placeOrder}>
        Place Order with eSewa
      </button>
    </aside>
  );
}

export default OrderSummary;
