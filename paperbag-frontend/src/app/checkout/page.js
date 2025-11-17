"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import "../../styles/checkout.css";

import BillingForm from "./../components/Checkout/BillingForm.jsx";
import OrderSummary from "./../components/Checkout/OrderSummary.jsx";

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

  const placeOrder = async () => {
  if (!form.firstName || !form.lastName || !form.phone || !form.street) {
    alert("Please fill all required fields (*)");
    return;
  }

  try {
    const response = await fetch("/api/payment/initiate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: subtotal,
        customer: form,
        cart,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      alert(err.error || "Payment failed");
      return;
    }

    const { paymentUrl, params } = await response.json();

    // Auto-submit eSewa form  
    const formElement = document.createElement("form");
    formElement.method = "POST";
    formElement.action = paymentUrl;
    formElement.style.display = "none";

    const addField = (name, value) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      formElement.appendChild(input);
    };

    Object.entries(params).forEach(([key, value]) => addField(key, value));

    document.body.appendChild(formElement);
    formElement.submit();
  } catch (err) {
    console.error("Esewa Error:", err);
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
