"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "../../styles/cart-page.css";

import Cart_conatiner from "../../components/cart/cart-container.jsx";

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

  // update by _uuid (unique per cart line)
  const updateQty = (_uuid, qty) => {
    const next = cart.map((it) =>
      it._uuid === _uuid ? { ...it, qty: Math.max(1, Number(qty)) } : it
    );
    save(next);
  };

  const removeItem = (_uuid) => {
    const next = cart.filter((it) => it._uuid !== _uuid);
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
          <button onClick={() => router.push("/")} className="cart-btn primary">
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <Cart_conatiner cart={cart} updateQty={updateQty} removeItem={removeItem} clearCart={clearCart} subtotal={subtotal} router={router}/>
    </main>
  );
}
