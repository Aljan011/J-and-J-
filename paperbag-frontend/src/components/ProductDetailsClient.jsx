import { useState, useMemo } from "react";
import { urlFor } from "../../lib/sanityImage.js"; // make sure this import exists
import DetailsContainer from "./ProductDetail/DetailsContainer.jsx";

import { getUnitPrice } from "../app/utils/getUnitPrice.js";

export default function ProductDetailsClient({ product }) {
  const [toast, setToast] = useState({ show: false, info: null });

  const colorsArray = product.colors?.map(c => c.name) || [];
const defaultColor = colorsArray[0] || "";


  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const defaultPack = product.defaultPack || 100;
  const [selectedPack, setSelectedPack] = useState(defaultPack);
  const [qty, setQty] = useState(1);

  const getPrice = (colorName, pack) => {
  const colorObj = product.colors?.find(c => c.name === colorName);
  if (!colorObj) return 0;

  const packObj = colorObj.packPrices?.find(p => p.packSize === pack);
  return packObj?.price || 0;
};

const pricePerUnit = getPrice(selectedColor, selectedPack);
const unitPrice = getUnitPrice(product, selectedColor, selectedPack);
const totalPrice = Math.round(unitPrice * selectedPack * qty);


 const addToCart = (goToCart = false) => {
  const selectedPackSize = selectedPack || product.defaultPack;
  const unitPrice = Math.round(getUnitPrice(product, selectedColor || "brown", selectedPack || product.defaultPack) * selectedPack);

  const item = {
    id: `${product.slug?.current}-${selectedColor || "brown"}-${selectedPackSize}`,
    title: product.name,
    color: selectedColor || "brown",
    packSize: selectedPackSize,
    unitPrice,  // per-pack price
    qty,
    _uuid: crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`,
    image: product.mainImage?.asset ? urlFor(product.mainImage).url() : "/placeholder.png",
  };

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingIndex = cart.findIndex((c) => c.id === item.id);
  if (existingIndex > -1) cart[existingIndex].qty += qty;
  else cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));
  if (goToCart) window.location.href = "/cart";
  else setToast({ show: true, info: null });
};





  // Safely get main image
  const getMainImage = () => {
    if (product.mainImage) return urlFor(product.mainImage).url();
    if (product.images && product.images.length > 0) return urlFor(product.images[0]).url();
    return "/placeholder.png"; // fallback if no images
  };

  const [mainImage, setMainImage] = useState(getMainImage());

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
