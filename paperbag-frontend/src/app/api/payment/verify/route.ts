// src/app/api/payment/verify/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { transaction_uuid, refId, amount, customer, cart } = await req.json();

    // Validate required fields
    if (!transaction_uuid || !refId || !amount || !customer || !cart) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const baseAmount = Number(amount);
    if (isNaN(baseAmount) || baseAmount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    // Calculate VAT
    const taxAmount = Number((baseAmount * 0.13).toFixed(2));
    const totalAmount = Number((baseAmount + taxAmount).toFixed(2));

    // Calculate subtotal for each cart item
    const cartWithSubtotal = cart.map((item: any) => ({
      ...item,
      subtotal: (Number(item.price) * Number(item.qty)).toFixed(2),
    }));

    // Build the complete order object
    const order = {
      transaction_uuid,
      refId,
      totalAmount: totalAmount.toFixed(2),
      taxAmount: taxAmount.toFixed(2),
      customer,
      cart: cartWithSubtotal,
      grandTotal: totalAmount.toFixed(2),
    };

    return NextResponse.json({
      success: true,
      order,
      message: "Payment verified successfully",
    });
  } catch (err: any) {
    console.error("Payment verification failed:", err);
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
