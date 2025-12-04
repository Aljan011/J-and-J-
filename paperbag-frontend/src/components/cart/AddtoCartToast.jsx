"use client";

import { useEffect, useState } from "react";
import "../../styles/components/Carttoast/cartToast.css";

export default function AddToCartToast({ show, onClose, productInfo }) {
  // show: boolean to display toast
  // productInfo: { title, color?, packSize? } or null

  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 4000); 
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!visible) return null;

  return (
    <div className="toast-container">
      <div className="toast-content">
        <p>
          {productInfo?.title ? (
            <>
              <strong>{productInfo.title}</strong>{" "}
              {productInfo.color && `(${productInfo.color})`}{" "}
              {productInfo.packSize && `Pack of ${productInfo.packSize}`}{" "}
              added to cart!
            </>
          ) : (
            <>Product added to cart successfully!</>
          )}
        </p>
      </div>
    </div>
  );
}
