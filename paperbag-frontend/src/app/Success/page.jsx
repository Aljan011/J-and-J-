"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const dataParam = searchParams.get("data");

    if (dataParam) {
      try {
        const decoded = JSON.parse(atob(dataParam));
        setOrder(decoded);
      } catch (err) {
        console.error("Failed to decode order data:", err);
      }
    } else {
      const stored = localStorage.getItem("lastOrder");
      if (stored) setOrder(JSON.parse(stored));
    }
  }, [searchParams]);

  if (!order) return <p>Loading order details...</p>;

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <h1>Payment Successful</h1>

        <section>
          <h2>Customer Details</h2>
          <p>
            Name: {order.customer?.firstName} {order.customer?.lastName}
          </p>
          <p>Phone: {order.customer?.phone}</p>
          <p>Email: {order.customer?.email}</p>
          <p>
            Address: {order.customer?.street}, {order.customer?.city}
          </p>
          {order.customer?.notes && <p>Notes: {order.customer.notes}</p>}
        </section>

        <section>
          <h2>Order Summary</h2>
          <ul>
            {order.cart?.map((item) => (
              <li key={item.slug}>
                {item.title} × {item.qty} = {item.price * item.qty}{" "}
                {item.currency || "NPR"}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total Paid: {order.subtotal}</strong>
          </p>
        </section>
      </div>
    </main>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<p>Loading order details...</p>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
