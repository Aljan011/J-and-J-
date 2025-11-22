import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validate required fields
    if (!data.customer || !data.cart) {
      return NextResponse.json(
        { error: "Missing order details" },
        { status: 400 }
      );
    }

    // Here: save data to DB (MongoDB, Sanity, or whatever you use)
    // Example: await db.collection("orders").insertOne(data);

    console.log("Order saved:", data);

    return NextResponse.json({ message: "Order saved successfully" });
  } catch (err: any) {
    console.error("Order save error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to save order" },
      { status: 500 }
    );
  }
}
