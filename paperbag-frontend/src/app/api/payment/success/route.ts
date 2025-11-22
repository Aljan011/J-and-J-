// src/app/api/payment/success/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // eSewa sends form-urlencoded data, not JSON
    const formData = await req.formData();

    // Extract refId and other fields sent by eSewa
    const refId = formData.get("refId")?.toString() || "";
    const amount = formData.get("amt")?.toString() || "";
    const productCode = formData.get("productCode")?.toString() || "";

    // Get the original order passed in the success_url query
    const url = new URL(req.url);
    const encodedOrder = url.searchParams.get("data");
    const order = encodedOrder
      ? JSON.parse(Buffer.from(encodedOrder, "base64").toString("utf-8"))
      : null;

    console.log("eSewa Success Callback:", { refId, amount, productCode, order });

    // TODO: Save the order to your DB and mark it as paid

    // Redirect the user to the success page with order info
    const redirectUrl = `/Success?refId=${refId}`;
    return NextResponse.redirect(redirectUrl);
  } catch (err: any) {
    console.error("Error handling eSewa success:", err);
    return NextResponse.json(
      { error: err.message || "Failed to process payment success" },
      { status: 500 }
    );
  }
}
