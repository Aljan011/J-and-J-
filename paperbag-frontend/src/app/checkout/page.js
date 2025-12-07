"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import "../../styles/checkout.css";

import BillingForm from "../../components/Checkout/BillingForm.jsx";
import OrderSummary from "../../components/Checkout/OrderSummary.jsx";

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [isPlacing, setIsPlacing] = useState(false);

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

  // Load cart from localStorage and normalize fields
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const normalized = parsed.map((it) => ({
          // keep original props but ensure canonical keys the checkout expects
          _uuid: it._uuid || it.id || `${it.title}-${Date.now()}`,
          id: it.id || it._id || it.productId || "",
          title: it.title || it.productName || "",
          image: it.image || it.mainImage || "",
          colors: it.colors || it.productColors || null, // may be null
          color: it.color || it.selectedColor || null,
          packSize: it.packSize || it.selectedPack || null,
          unitPrice: Number(it.unitPrice ?? it.price ?? it.pricePerUnit ?? 0),
          qty: Number(it.qty ?? it.quantity ?? 1),
          currency: it.currency || "NPR",
        }));
        setCart(normalized);
        // keep localStorage consistent with normalized shape
        localStorage.setItem("cart", JSON.stringify(normalized));
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
        setCart([]);
      }
    }
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

  // Build a payload for a single cart item that matches the /api/orders route expectations
  const buildOrderPayload = (cartItem, form) => {
    // Ensure we have some form of productColors shape the backend expects
    let productColors = Array.isArray(cartItem.colors) ? cartItem.colors : null;

    if (!productColors || productColors.length === 0) {
      // create a fallback productColors array from the single color/pack available in cartItem
      productColors = [
        {
          name: cartItem.color || "Default",
          packPrices: [
            {
              packSize: cartItem.packSize || 1,
              price: Number(cartItem.unitPrice || cartItem.price || 0),
            },
          ],
        },
      ];
    } else {
      // normalize packPrices inside productColors (ensure numbers)
      productColors = productColors.map((c) => ({
        ...c,
        packPrices:
          Array.isArray(c.packPrices) && c.packPrices.length
            ? c.packPrices.map((p) => ({
                packSize: Number(p.packSize ?? p.size ?? p.pack ?? 1),
                price: Number(p.price ?? p.amount ?? 0),
              }))
            : [{ packSize: cartItem.packSize || 1, price: Number(cartItem.unitPrice || 0) }],
      }));
    }

    // selectedColor fallback
    const selectedColor = cartItem.color || (productColors[0] && productColors[0].name) || "Default";

    // selectedPack fallback
    let selectedPack = cartItem.packSize || null;
    if (!selectedPack) {
      // try to pick first pack in the selected color
      const colorObj = productColors.find((c) => c.name === selectedColor) || productColors[0];
      selectedPack = colorObj?.packPrices?.[0]?.packSize ?? 1;
    }

    // find price for the selected pack
    const colorObj = productColors.find((c) => c.name === selectedColor) || productColors[0];
    const packObj =
      (colorObj && Array.isArray(colorObj.packPrices) && colorObj.packPrices.find((p) => Number(p.packSize) === Number(selectedPack))) ||
      colorObj?.packPrices?.[0] ||
      { packSize: selectedPack, price: Number(cartItem.unitPrice || 0) };

    const unitPrice = Number(packObj.price ?? cartItem.unitPrice ?? 0);

    const payload = {
      // billing/customer
      firstName: form.firstName || "",
      lastName: form.lastName || "",
      company: form.company || "",
      street: form.street || "",
      landmark: form.landmark || "",
      city: form.city || "Kathmandu",
      phone: form.phone || "",
      email: form.email || "",
      notes: form.notes || "",

      // required product fields (match your route checks)
      productId: String(cartItem.id || ""),
      productName: String(cartItem.title || ""),
      mainImage: String(cartItem.image || ""),
      productColors: productColors, // normalized array with packPrices
      selectedColor: String(selectedColor),
      selectedPack: Number(selectedPack),
      quantity: Number(cartItem.qty || 1),
      unitPrice: Number(unitPrice),

      // convenience values
      subtotal: Number(unitPrice) * Number(cartItem.qty || 1),
      currency: cartItem.currency || "NPR",
    };

    console.log("buildOrderPayload -> payload:", payload);
    return payload;
  };

  // Save one order per cart item (Option B). Returns array of created order IDs or null on failure.
  const saveOrders = async () => {
    if (!cart.length) {
      alert("Cart is empty.");
      return null;
    }

    try {
      const createdIds = [];
      for (const item of cart) {
        const payload = buildOrderPayload(item, form);

        const res = await fetch("/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        // parse body safely
        let data = null;
        try {
          data = await res.json();
        } catch (err) {
          console.error("Non-JSON response while saving order:", err);
          throw new Error("Invalid response from order endpoint");
        }

        if (!res.ok || !data?.ok) {
          console.error("Save order error:", data || "Unknown error");
          throw new Error(data?.message || "Order saving failed");
        }

        createdIds.push(data.localOrderId);
      }

      return createdIds;
    } catch (err) {
      console.error("SaveOrders failed:", err);
      throw err;
    }
  };

  // Single click-safe placeOrder that saves orders then initiates payment
  const placeOrder = async () => {
    if (isPlacing) return; // guard
    if (!validateForm()) {
      alert("Please correct highlighted fields.");
      return;
    }

    setIsPlacing(true);

    try {
      // 1) Save one order per cart item
      const createdOrderIds = await saveOrders(); // will throw on failure
      if (!createdOrderIds || !createdOrderIds.length) {
        throw new Error("Failed to save orders");
      }

      console.log("Orders created:", createdOrderIds);

      // 2) Initiate payment once (send primary item info for display)
      const primary = cart[0] || {};
      const paymentPayload = {
        amount: Number(subtotal),
        cart,
        billing: form,
        // helpful fields for the server to create eSewa params
        productName: primary.title || primary.productName || "Order",
        productColor: primary.color || primary.selectedColor || (primary.colors?.[0]?.name ?? ""),
        productPack: primary.packSize || primary.selectedPack || "",
        orderIds: createdOrderIds, // so server can link payment to created orders if needed
      };

      console.log("Initiating payment with:", paymentPayload);

      const response = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentPayload),
      });

      const paymentData = await response.json(); // parse once
      console.log("Payment initiate response:", paymentData);

      if (!response.ok) {
        alert(paymentData?.error || "Payment initiation failed");
        return;
      }

      const { paymentUrl, params } = paymentData;
      if (!paymentUrl || !params) {
        console.error("Payment response missing paymentUrl/params:", paymentData);
        alert("Payment failed: invalid response");
        return;
      }

      // submit hidden form to eSewa
      const formElement = document.createElement("form");
      formElement.method = "POST";
      formElement.action = paymentUrl;
      formElement.style.display = "none";

      Object.entries(params).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = String(value ?? "");
        formElement.appendChild(input);
      });

      document.body.appendChild(formElement);
      formElement.submit();
    } catch (err) {
      console.error("Place order error:", err);
      alert("Order failed: " + (err.message || "Unexpected error"));
    } finally {
      setIsPlacing(false);
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
        {/* disable button inside OrderSummary by passing isPlacing (update component if you want visual disabled) */}
      </div>
    </main>
  );
}
