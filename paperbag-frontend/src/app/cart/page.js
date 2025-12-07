"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "../../styles/cart-page.css";

import Cart_conatiner from "../../components/cart/cart-container.jsx";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  // Load cart from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("cart");
    const parsed = raw ? JSON.parse(raw) : [];

    // Normalize immediately
    const normalized = parsed.map(item => ({
      ...item,
      unitPrice: item.unitPrice ?? item.price ?? 0,
    }));

    setCart(normalized);
    localStorage.setItem("cart", JSON.stringify(normalized));
  }, []);

  // General save function
  const save = (nextCart) => {
    // Normalize before saving
    const normalized = nextCart.map(item => ({
      ...item,
      unitPrice: item.unitPrice ?? item.price ?? 0,
    }));

    setCart(normalized);
    localStorage.setItem("cart", JSON.stringify(normalized));
  };

  // Update quantity
  const updateQty = (_uuid, newQty) => {
    if (newQty < 1) return;

    const current = [...cart];
    const index = current.findIndex((c) => c._uuid === _uuid);

    if (index > -1) {
      current[index].qty = Number(newQty);
      save(current);
    }
  };

  // Remove item
  const removeItem = (_uuid) => {
    const next = cart.filter((it) => it._uuid !== _uuid);
    save(next);
  };

  // Clear cart
  const clearCart = () => {
    save([]);
  };

  // Safe subtotal calculation
  const subtotal = cart.reduce((sum, item) => {
    const price = Number(item.unitPrice) || 0;
    const qty = Number(item.qty) || 0;
    return sum + price * qty;
  }, 0);

  console.log("CART LOADED:", cart);

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
      <Cart_conatiner
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        clearCart={clearCart}
        subtotal={subtotal}
        router={router}
      />
    </main>
  );
}
