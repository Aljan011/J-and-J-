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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.qty || 1),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // remove error when fixed
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  // ----------------------------
  // VALIDATION FUNCTION
  // ----------------------------
  const validateForm = () => {
    let newErrors = {};

    // Required fields
    if (!form.firstName.trim()) newErrors.firstName = true;
    if (!form.lastName.trim()) newErrors.lastName = true;
    if (!form.street.trim()) newErrors.street = true;

    // Phone: must be 10 digits
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = true;

    // Email: must match regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = true;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const placeOrder = async () => {
    // Run validation
    if (!validateForm()) {
      alert("Please correct highlighted fields.");
      return;
    }

    try {
      const orderData = { customer: form, cart, subtotal };

      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

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
        <BillingForm form={form} handleChange={handleChange} errors={errors} />
        <OrderSummary cart={cart} subtotal={subtotal} placeOrder={placeOrder} />
      </div>
    </main>
  );
}
