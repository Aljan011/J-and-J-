"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/cart-page.css";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    const parsed = raw ? JSON.parse(raw) : [];
    setCart(parsed);
  }, []);

  const save = (nextCart) => {
    setCart(nextCart);
    localStorage.setItem("cart", JSON.stringify(nextCart));
  };

  const updateQty = (slug, qty) => {
    const next = cart.map((it) =>
      it.slug === slug ? { ...it, qty: Math.max(1, Number(qty)) } : it
    );
    save(next);
  };

  const removeItem = (slug) => {
    const next = cart.filter((it) => it.slug !== slug);
    save(next);
  };

  const clearCart = () => {
    save([]);
  };

  const subtotal = cart.reduce(
    (s, it) => s + Number(it.price || 0) * Number(it.qty || 1),
    0
  );

  if (!cart.length) {
    return (
      <main className="cart-page">
        <div className="cart-container">
          <h1>Your Cart</h1>
          <p>Your cart is empty.</p>
          <button
            onClick={() => router.push("/")}
            className="cart-btn primary"
          >
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-container">
        <h1>Your Shopping Cart</h1>

        <div className="cart-items">
          {cart.map((it) => (
            <div key={it.slug} className="cart-item">
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

                <div className="cart-price">
                  {it.currency || "NPR"} {it.price}
                </div>

                <div className="cart-edit">
                  <label>
                    Qty:
                    <input
                      type="number"
                      min="1"
                      value={it.qty}
                      onChange={(e) => updateQty(it.slug, e.target.value)}
                    />
                  </label>

                  <button
                    className="cart-btn remove"
                    onClick={() => removeItem(it.slug)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="left-btns">
            <button
              onClick={() => router.push("/")}
              className="cart-btn outline"
            >
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
            <button
              onClick={() => router.push("/checkout")}
              className="cart-btn primary"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
