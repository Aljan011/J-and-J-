"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import "../../styles/checkout.css";
import BillingForm from "../../components/Checkout/BillingForm.jsx";
import OrderSummary from "../../components/Checkout/OrderSummary.jsx";

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

  // subtotal uses price * qty for each line
  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.qty || 1),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const placeOrder = async () => {
    if (!form.firstName || !form.lastName || !form.phone || !form.street) {
      alert("Please fill all required fields (*)");
      return;
    }

    try {
      const orderData = { customer: form, cart, subtotal };

      // Store order first
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      // Initiate eSewa payment
      const response = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: subtotal, cart, billing: form }),
      });

      if (!response.ok) {
        const err = await response.json();
        alert(err.error || "Payment failed");
        return;
      }

      const { paymentUrl, params } = await response.json();

      // Create hidden form to submit to eSewa
      const formElement = document.createElement("form");
      formElement.method = "POST";
      formElement.action = paymentUrl;
      formElement.style.display = "none";

      Object.entries(params).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        formElement.appendChild(input);
      });

      document.body.appendChild(formElement);
      formElement.submit();
    } catch (err) {
      console.error("eSewa Payment Error:", err);
      alert("Payment error!");
    }
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
        <BillingForm form={form} handleChange={handleChange} />
        <OrderSummary cart={cart} subtotal={subtotal} placeOrder={placeOrder} />
      </div>
    </main>
  );
}
