"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

import Details_container from "./Products-detail/Details_container.jsx";

export default function ProductDetailsClient({ product }) {
  const router = useRouter();

  /* -------------------- STATES -------------------- */
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPack, setSelectedPack] = useState(null);

  /* -------------------- TEMP PACK PRICES (editable) -------------------- */
  const PACK_PRICES = {
    100: 100,
    500: 400,
    1000: 700,
    2000: 1200,
  };

  const getPackPrice = (size) => {
    if (!size) return null;
    if (product.packPrices && product.packPrices[size])
      return Number(product.packPrices[size]);
    return PACK_PRICES[size] ?? null;
  };

  /* -------------------- PRICE PER UNIT OR PACK -------------------- */
  const pricePer = useMemo(() => {
    if (selectedPack) {
      const packPrice = getPackPrice(selectedPack);
      return packPrice != null ? packPrice : Number(product.price ?? 0);
    }
    return Number(product.price ?? 0);
  }, [selectedPack, product]);

  /* -------------------- CART HELPERS -------------------- */
  const getCart = () => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

  /* -------------------- ADD TO CART -------------------- */
  const addToCart = (goToCart = false) => {
    if (!product?.slug) {
      alert("Product information missing.");
      return;
    }

    const item = {
      id:
        product._id ||
        product.slug?.current ||
        `${product.title}-${Date.now()}`,
      slug: product.slug?.current ?? product.slug,
      title: product.title,
      price: pricePer,
      currency: product.currency ?? "NPR",
      image:
        product.mainImage?.asset?.url ||
        product.images?.[0]?.asset?.url ||
        null,
      qty: qty,
      color: selectedColor || null,
      packSize: selectedPack || null,
      _uuid:
        typeof crypto !== "undefined"
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random()}`,
    };

    const cart = getCart();

    const existingIndex = cart.findIndex(
      (c) =>
        c.slug === item.slug &&
        (c.color || null) === (item.color || null) &&
        (c.packSize || null) === (item.packSize || null)
    );

    if (existingIndex > -1) {
      cart[existingIndex].qty += item.qty;
    } else {
      cart.push(item);
    }

    saveCart(cart);

    if (goToCart) return router.push("/cart");

    if (
      confirm(
        `${item.title} (${item.color || "Default"}, ${
          item.packSize ? `Pack of ${item.packSize}` : "Single"
        }) added to cart. Go to cart now?`
      )
    ) {
      router.push("/cart");
    }
  };

  /* -------------------- BUY NOW -------------------- */
  const handleBuyNow = () => addToCart(true);

  return (
    <Details_container
      product={product}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
      selectedPack={selectedPack}
      setSelectedPack={setSelectedPack}
      qty={qty}
      setQty={setQty}
      addToCart={addToCart}
      handleBuyNow={handleBuyNow}
    />
  );
}
