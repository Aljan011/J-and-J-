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
    (sum, item) => sum + Number(item.unitPrice || 0) * Number(item.qty || 1),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = true;
    if (!form.lastName.trim()) newErrors.lastName = true;
    if (!form.street.trim()) newErrors.street = true;
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

// 2️⃣ Build order payload for API
const buildOrderPayload = (cartItem, form) => {
  if (!cartItem.colors || cartItem.colors.length === 0) {
    console.warn("No colors available for cartItem:", cartItem);
    cartItem.colors = [{ name: "Default", packPrices: [{ packSize: 1, price: cartItem.price || 0 }] }];
  }

  // Ensure selected color exists; fallback to first color if not
  let selectedColor = cartItem.color;
  const colorObj = cartItem.colors.find(c => c.name === selectedColor);
  if (!colorObj) {
    console.warn(
      "Selected color not found, defaulting to first color:",
      selectedColor,
      cartItem.colors
    );
    selectedColor = cartItem.colors[0].name;
  }

  // Ensure selected pack exists; fallback to first pack if not
  let selectedPack = cartItem.packSize;
  const packObj = (cartItem.colors.find(c => c.name === selectedColor)?.packPrices || []).find(
    p => Number(p.packSize) === Number(selectedPack)
  );
  if (!packObj) {
    console.warn(
      "Selected pack size not found, defaulting to first pack:",
      selectedPack,
      cartItem.colors.find(c => c.name === selectedColor)?.packPrices
    );
    selectedPack = cartItem.colors.find(c => c.name === selectedColor)?.packPrices?.[0]?.packSize || 1;
  }

  const price = (cartItem.colors.find(c => c.name === selectedColor)?.packPrices || []).find(
    p => Number(p.packSize) === Number(selectedPack)
  )?.price || cartItem.price || 0;

  const payload = {
  // Customer info
  firstName: form.firstName || "",
  lastName: form.lastName || "",
  company: form.company || "",
  street: form.street || "",
  landmark: form.landmark || "",
  city: form.city || "Kathmandu",
  phone: form.phone || "",
  email: form.email || "",
  notes: form.notes || "",

  // Product info
  productId: cartItem.id || "",
  productName: cartItem.title || "",
  mainImage: cartItem.image || "",
  productColors: cartItem.colors || [],        // all available colors
  selectedColor: selectedColor || cartItem.colors?.[0]?.name || "Default", 
  selectedPack: selectedPack || cartItem.packSizes?.[0]?.size || 1,
  quantity: cartItem.qty || 1,
  unitPrice: cartItem.unitPrice || 0,
  subtotal: price || cartItem.unitPrice * (cartItem.qty || 1),

  // For eSewa payment
  totalAmount: price || cartItem.unitPrice * (cartItem.qty || 1),
  productPack: selectedPack || cartItem.packSizes?.[0]?.size || 1,
  productColor: selectedColor || cartItem.colors?.[0]?.name || "Default",
};

  console.log("Payload sent to Sanity:", payload);
  return payload;
};

// 3️⃣ Save orders in Sanity
const saveOrders = async () => {
  try {
    const savedIds = [];
    for (const item of cart) {
      const payload = buildOrderPayload(item, form);

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        console.error("Save order error:", data);
        throw new Error(data.message || "Order saving failed");
      }

      savedIds.push(data.localOrderId);
    }
    return savedIds;
  } catch (err) {
    console.error("Save order error:", err);
    alert("Failed to save order: " + err.message);
    return null;
  }
};


 const placeOrder = async () => {
  if (!validateForm()) {
    alert("Please correct highlighted fields.");
    return;
  }

  const orderIds = await saveOrders();
  if (!orderIds) return;

  try {
    const response = await fetch("/api/payment/initiate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: subtotal, cart, billing: form }),
    });

    const data = await response.json(); // read once
    console.log("Payment API response:", data);

    if (!response.ok) {
      alert(data.error || "Payment failed");
      return;
    }

    const { paymentUrl, params } = data;

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
