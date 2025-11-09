"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * ProductDetailsClient
 * Props:
 *  - product: object containing at least { title, slug: { current }, price, currency, mainImage?.asset?.url }
 *
 * This component stores/updates cart in localStorage using key "cart".
 */
export default function ProductDetailsClient({ product }) {
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const getCart = () => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = (goToCart = false) => {
    if (!product || !product.slug) {
      alert("Product information missing.");
      return;
    }

    const item = {
      id: product._id || product.slug?.current || `${product.title}-${Date.now()}`,
      slug: product.slug?.current ?? product.slug,
      title: product.title,
      price: product.price ?? 0,
      currency: product.currency ?? "NPR",
      image: product.mainImage?.asset?.url || (product.images?.[0]?.asset?.url ?? null),
      qty: Number(qty) || 1,
    };

    const cart = getCart();

    // If same slug exists, update qty
    const existingIndex = cart.findIndex((c) => c.slug === item.slug);
    if (existingIndex > -1) {
      cart[existingIndex].qty = Number(cart[existingIndex].qty || 0) + Number(item.qty);
    } else {
      cart.push(item);
    }

    saveCart(cart);

    if (goToCart) {
      // Immediately navigate to cart summary
      router.push("/cart");
    } else {
      // Optional: show a quick confirmation and remain on page
      // You can replace with a toast notification
      if (confirm(`${item.title} added to cart. Go to cart now?`)) {
        router.push("/cart");
      }
    }
  };

  const handleBuyNow = () => {
    // Add to cart and go to cart summary
    addToCart(true);
  };

  return (
    <aside className="pd-details">
      <h1 className="pd-title">{product.title}</h1>

      <div className="pd-meta">
        <span className="pd-sku">SKU: {product.sku || "-"}</span>
        <span className="pd-type">{product.productType || ""}</span>
      </div>

      <div className="pd-price">
        <span className="pd-currency">{product.currency || "NPR"}</span>
        <span className="pd-amount">{product.price ?? "0"}</span>
      </div>

      {product.shortDescription && <p className="pd-short">{product.shortDescription}</p>}

      <div className="pd-actions">
        <label className="pd-qty">
          Qty
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))}
          />
        </label>

        <button className="pd-btn pd-add-to-cart" onClick={() => addToCart(false)}>
          Add to Cart
        </button>

        <button className="pd-btn pd-enquire" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>

      <div className="pd-share" style={{ marginTop: 10 }}>
        <button
          className="pd-share-btn"
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({ title: product.title, url: window.location.href })
                .catch(() => {});
            } else {
              navigator.clipboard?.writeText(window.location.href);
              alert("Link copied to clipboard.");
            }
          }}
        >
          Share
        </button>
      </div>
    </aside>
  );
}
