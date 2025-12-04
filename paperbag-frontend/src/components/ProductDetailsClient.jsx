"use client";

import { useState, useMemo } from "react";

import DetailsContainer from "./ProductDetail/DetailsContainer.jsx";

export default function ProductDetailsClient({ product }) {
  const [toast , setToast] = useState({show: false, info: null});
  const colorsArray = product.colors ? Object.keys(product.colors) : [];
  const defaultColor = colorsArray.includes("brown")
    ? "brown"
    : colorsArray[0] || "";
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const defaultPack = product.defaultPack || 100;
  const [selectedPack, setSelectedPack] = useState(defaultPack);
  const [qty, setQty] = useState(1);

  const getPriceByColor = (color) => product.colors?.[color]?.pricePerUnit || 0;
  const pricePerUnit = useMemo(
    () => getPriceByColor(selectedColor),
    [selectedColor]
  );

  const totalPrice = useMemo(
    () => pricePerUnit * selectedPack * qty,
    [pricePerUnit, selectedPack, qty]
  );

  const addToCart = (goToCart = false) => {
    const item = {
      id: `${product.slug}-${selectedColor}-${selectedPack}`,
      title: product.name,
      color: selectedColor,
      packSize: selectedPack,
      price: totalPrice,
      qty,
      _uuid: crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`,
    };
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cart.findIndex((c) => c.id === item.id);
    if (existingIndex > -1) cart[existingIndex].qty += qty;
    else cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    if (goToCart) window.location.href = "/cart";
    else {setToast ({show: true,  info: null});}
    
  };

  const [mainImage, setMainImage] = useState(
    product.mainImage || product.images[0]
  );

  return (
    <DetailsContainer
      product={product}
      addToCart={addToCart}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
      selectedPack={selectedPack}
      setSelectedPack={setSelectedPack}
      qty={qty}
      setQty={setQty}
      mainImage={mainImage}
      setMainImage={setMainImage}
      totalPrice={totalPrice}
      toast={toast}
      setToast={setToast}
      pricePerUnit={pricePerUnit}

    />
  );
}
