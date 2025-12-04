"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import AddToCartToast from "../cart/AddtoCartToast.jsx";

function ProductSection({ products }) {
  const [toast, setToast] = useState({ show: false, info: null });
  const [discounts, setDiscounts] = useState({});

  // Generate random discounts for each product (client-only)
  useEffect(() => {
    const discountMap = {};
    products.forEach((p) => {
      discountMap[p.slug] = Math.floor(Math.random() * (42 - 20 + 1)) + 20;
    });
    setDiscounts(discountMap);
  }, [products]);

  const getPriceRange = (product) => {
    const colorPrices = Object.values(product.colors).map(
      (c) => c.pricePerUnit
    );
    const minUnit = Math.min(...colorPrices);
    const minPack = Math.min(...product.packs);
    return { low: minUnit * minPack };
  };

  const buildCartItemFromListing = (product) => {
    const colorsArray = product.colors ? Object.keys(product.colors) : [];
    const defaultColor = colorsArray.includes("brown")
      ? "brown"
      : colorsArray[0] || "";
    const defaultPack = product.defaultPack || 100;
    const pricePerUnit = product.colors?.[defaultColor]?.pricePerUnit || 0;
    const totalPrice = pricePerUnit * defaultPack * 1; // qty = 1

    return {
      id: `${product.slug}-${defaultColor}-${defaultPack}`,
      title: product.name,
      color: defaultColor,
      packSize: defaultPack,
      price: totalPrice,
      qty: 1,
      _uuid: crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`,
    };
  };

  const addToCart = (product) => {
    const newItem = buildCartItemFromListing(product);
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cart.findIndex((c) => c.id === newItem.id);

    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Show toast
    setToast({
      show: true,
      info: {
        title: product.name,
        color: newItem.color,
        packSize: newItem.packSize,
      },
    });
  };

  return (
    <section id="pk-products" className="pk-products">
      {" "}
      <div className="pk-products-inner">
        {" "}
        <h2 className="pk-section-title">Our Packaging Range</h2>
        <div className="pk-products-grid">
          {products.map((p) => {
            const { low } = getPriceRange(p);
            const discount = discounts[p.slug];

            return (
              <Link
                href={`/packaging-services/${p.slug}`}
                key={p.slug}
                passHref
              >
                <article className="pk-card">
                  <div className="pk-card-image">
                    <Image
                      src={p.mainImage}
                      alt={p.name}
                      width={800}
                      height={520}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 48vw, 30vw"
                    />
                    {discount && (
                      <span className="pk-card-badge">{discount}% OFF</span>
                    )}
                    <img
                      className="pk-card-logo"
                      src="/logo.jpg"
                      alt="Company Logo"
                    />
                  </div>

                  <div className="pk-card-body">
                    <h3 className="pk-card-title">{p.name}</h3>
                    <p className="pk-card-desc">J&J Printers</p>

                    <div className="pk-card-actions">
                      <span className="pk-price">Rs {low}</span>

                      <button
                        className="pk-cta"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          addToCart(p);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
        <AddToCartToast
          show={toast.show}
          productInfo={toast.info}
          onClose={() => setToast({ show: false, info: null })}
        />
      </div>
    </section>
  );
}

export default ProductSection;
