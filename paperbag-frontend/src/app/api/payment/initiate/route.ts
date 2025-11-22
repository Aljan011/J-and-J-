// src/app/api/payment/initiate/route.ts
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { generateEsewaSignature } from "../../../../../lib/verifySignature";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, billing, cart } = body;

    console.log("Initiate Payment Request Body:", body);

    if (!amount || Number(amount) <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const baseAmount = Number(amount);
    const taxAmount = Number((baseAmount * 0.13).toFixed(2)); // 13% tax
    const totalAmount = Number((baseAmount + taxAmount).toFixed(2));

    const transactionUuid = uuidv4();

    // Payload to send to eSewa
    const payload = {
      amount: baseAmount.toFixed(2),
      tax_amount: taxAmount.toFixed(2),
      total_amount: totalAmount.toFixed(2),
      transaction_uuid: transactionUuid,
      product_code: process.env.ESEWA_MERCHANT_ID,
      product_service_charge: "0.00",
      product_delivery_charge: "0.00",
    };

    // Fields to include in signature (must match eSewa requirements)
    const signed_field_names = [
      "amount",
      "tax_amount",
      "total_amount",
      "transaction_uuid",
      "product_code",
    ];

    // Construct the message to sign
    const message = signed_field_names
      .map((field) => `${field}=${payload[field]}`)
      .join(",");

    console.log("Esewa Signature Message:", message);

    const signature = generateEsewaSignature(message);

    // Build params for frontend to submit to eSewa
    const params = {
      ...payload,
      signature,
      signed_field_names: signed_field_names.join(","),
      success_url: `${process.env.NEXT_PUBLIC_URL}/api/payment/success?data=${btoa(JSON.stringify({ cart, billing, subtotal: baseAmount }))}`,
      failure_url: `${process.env.NEXT_PUBLIC_URL}/api/payment/failed?data=${btoa(JSON.stringify({ cart, billing, subtotal: baseAmount }))}`,
    };

    console.log("eSewa Payment Params:", params);

    return NextResponse.json({
      paymentUrl: `${process.env.ESEWA_BASE_URL}/api/epay/main/v2/form`,
      params,
    });
  } catch (err) {
    console.error("ESEWA INITIATE ERROR:", err);
    return NextResponse.json(
      { error: "Payment initiation failed" },
      { status: 500 }
    );
  }
}
