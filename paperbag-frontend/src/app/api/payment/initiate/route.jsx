import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { generateEsewaSignature } from "../../../../../lib/verifySignature.ts";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    const baseAmount = Number(amount);
    const taxAmount = Number((baseAmount * 0.13).toFixed(2));
    const totalAmount = Number((baseAmount + taxAmount).toFixed(2));

    const transactionUuid = uuidv4();

    const message = [
      `total_amount=${totalAmount.toFixed(2)}`,
      `transaction_uuid=${transactionUuid}`,
      `product_code=${process.env.ESEWA_MERCHANT_ID}`,
    ].join(",");

    const signature = generateEsewaSignature(message);

    return NextResponse.json({
      paymentUrl: `${process.env.ESEWA_BASE_URL}/api/epay/main/v2/form`,
      params: {
        amount: baseAmount.toFixed(2),
        tax_amount: taxAmount.toFixed(2),
        total_amount: totalAmount.toFixed(2),
        product_service_charge: "0.00",
        product_delivery_charge: "0.00",
        transaction_uuid: transactionUuid,
        product_code: process.env.ESEWA_MERCHANT_ID,
        signature,
        signed_field_names: "total_amount,transaction_uuid,product_code",
        success_url: `${process.env.NEXT_PUBLIC_URL}/order-success`,
        failure_url: `${process.env.NEXT_PUBLIC_URL}/order-failed`,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Payment initiation failed" },
      { status: 500 }
    );
  }
}
