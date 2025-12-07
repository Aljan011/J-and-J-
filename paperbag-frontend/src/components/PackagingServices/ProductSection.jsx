"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../lib/sanityImage.js";

import AddToCartToast from "../cart/AddtoCartToast.jsx";
import {getLowestUnitPrice} from '../../app/utils/getLowestUnitPrice.js';
import {getUnitPrice} from '../../app/utils/getUnitPrice.js';

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

  console.log("Product in listing:", products);


const buildCartItemFromListing = (product) => {
  const defaultColor = product.colors?.[0] || null;

  // Find lowest price for that default color
  const lowestPack = defaultColor?.packPrices?.reduce(
    (min, p) => (p.price < min.price ? p : min),
    defaultColor.packPrices[0]
  );

  return {
    _uuid: crypto.randomUUID(),

    id: product._id,
    title: product.name,

    image: product.mainImage?.asset ? product.mainImage.asset.url : "",
    
    // Color info
    colors: product.colors,
    color: defaultColor?.name || null,

    // Pack & price
    packSize: lowestPack?.packSize || product.defaultPack || null,
    price: lowestPack?.price || 0,

    qty: 1,

    currency: "NPR",
  };
};



const addToCart = (product) => {
  console.log("Adding product:", product);

  // FIXED IMAGE
  const imageUrl = product.mainImage
    ? urlFor(product.mainImage).url()
    : (product.images?.[0] || "/placeholder.png");

  const defaultColor = product.colors?.[0];
  const defaultPack = defaultColor?.packPrices?.[0];

  const newItem = {
    _uuid: crypto.randomUUID(),
    id: product._id,
    title: product.name,

    image: imageUrl, // ← FIXED

    // Color + packs
    colors: product.colors,
    color: defaultColor?.name || null,

    packSize: defaultPack?.packSize || product.defaultPack || 1,
    unitPrice: Number(defaultPack?.price) || 0,   // ← FIXED name unitPrice

    qty: 1,
    currency: "NPR",
  };

  console.log("CART ITEM GENERATED:", newItem);

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(newItem);
  localStorage.setItem("cart", JSON.stringify(cart));

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
            const lowestUnitPrice = getLowestUnitPrice(p);
            <p className="p-price">Starting at <strong>Rs. {lowestUnitPrice.toFixed(2)}</strong></p>;

            const discount = discounts[p.slug];

            return (
              <Link
                href={`/packaging-services/${p.slug.current}`}
                key={p.slug?.current || p._id}
                passHref
              >
                <article className="pk-card">
                  <div className="pk-card-image">
                    <Image
                      src={
                        p.mainImage
                          ? urlFor(p.mainImage).url()
                          : "/placeholder.png"
                      }
                      alt={p.name || "Product Image"}
                      width={800}
                      height={600}
                    />
                    {p.discountRate && (
                      <span className="pk-card-badge">{p.discountRate}% OFF</span>
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
                      <span className="pk-price">Rs {getLowestUnitPrice(p)}</span>

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
