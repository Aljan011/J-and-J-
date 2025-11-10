"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../styles/checkout.css";

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    city: "Kathmandu",
    street: "",
    landmark: "",
    phone: "",
    email: "",
    notes: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const placeOrder = () => {
    if (!form.firstName || !form.lastName || !form.phone || !form.street) {
      alert("Please fill all required fields (*)");
      return;
    }

    // Later → Send data to backend & connect eSewa
    alert("Order placed! eSewa integration coming soon ");
    router.push("/order-success");
  };

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-container">
          <h1>Checkout</h1>
          <p>Your cart is empty!</p>
          <button className="checkout-btn" onClick={() => router.push("/")}>
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        {/* Billing Form */}
        <section className="billing-section">
          <h2>Billing Details</h2>

          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Company Name (optional)</label>
            <input type="text" name="company" value={form.company} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>City *</label>
            <input type="text" value="Kathmandu" disabled />
          </div>

          <div className="form-group">
            <label>Street Address *</label>
            <input type="text" name="street" placeholder="Road name/house no." value={form.street} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Near Landmark (optional)</label>
            <input type="text" name="landmark" value={form.landmark} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone *</label>
            <input type="text" name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Order Notes (optional)</label>
            <textarea name="notes" rows="4" placeholder="Notes about your order…" value={form.notes} onChange={handleChange}></textarea>
          </div>
        </section>

        {/* Order Summary */}
        <aside className="order-summary">
          <h2>Your Order</h2>

          <ul className="summary-items">
            {cart.map((item) => (
              <li key={item.slug}>
                <span>{item.title} × {item.qty}</span>
                <strong>{item.currency || "NPR"} {item.price * item.qty}</strong>
              </li>
            ))}
          </ul>

          <div className="summary-total">
            <span>Total</span>
            <strong>{cart[0]?.currency || "NPR"} {subtotal}</strong>
          </div>

          <button className="checkout-btn place-order" onClick={placeOrder}>
            Place Order with eSewa
          </button>
        </aside>
      </div>
    </main>
  );
}
