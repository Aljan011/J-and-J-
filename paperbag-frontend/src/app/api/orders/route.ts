import { NextResponse, NextRequest } from "next/server";
import { sanityClient } from "../../../../lib/sanity.js";

// Create a writable client using the base client
const client = sanityClient.withConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
});


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Required billing fields
    const requiredBilling = ["firstName", "lastName", "street", "phone", "email"];
    for (const f of requiredBilling) {
      if (!body[f]) {
        return NextResponse.json({ ok: false, message: `${f} is required` }, { status: 400 });
      }
    }

    // Required product selection fields
    const requiredProduct = [
      "productId",
      "productName",
      "mainImage",
      "productColors",
      "selectedColor",
      "selectedPack",
      "quantity"
    ];

    for (const f of requiredProduct) {
      if (!body[f]) {
        return NextResponse.json({ ok: false, message: `${f} is required` }, { status: 400 });
      }
    }

    // Validate selected color
    const colorObj = body.productColors.find((c) => c.name === body.selectedColor);
    if (!colorObj) {
      return NextResponse.json({ ok: false, message: "Invalid selected color" }, { status: 400 });
    }

    // Validate pack size
    const priceObj = colorObj.packPrices.find(
      (p) => Number(p.packSize) === Number(body.selectedPack)
    );
    if (!priceObj) {
      return NextResponse.json({ ok: false, message: "Invalid pack size for selected color" }, { status: 400 });
    }

    const finalPrice = Number(priceObj.price);

    // Full name
    const fullName = `${body.firstName} ${body.lastName}`.trim();

    // Create product snapshot for order
    const productSnapshot = {
      id: body.productId,
      name: body.productName,
      mainImage: body.mainImage,
      selectedColor: body.selectedColor,
      selectedPack: Number(body.selectedPack),
      price: finalPrice,
    };

    // Order document for Sanity
    const doc = {
      _type: "order",
      fullName,
      company: body.company || "",
      address: {
        street: body.street,
        landmark: body.landmark || "",
        city: "Kathmandu",
      },
      phone: body.phone,
      email: body.email,
      notes: body.notes || "",
      product: productSnapshot,
      quantity: Number(body.quantity),
      status: "pending",
      totalPrice: finalPrice * Number(body.quantity),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Save order
    const created = await client.create(doc);

    return NextResponse.json(
      { ok: true, localOrderId: created._id },
      { status: 201 }
    );

  } catch (err) {
    console.error("Order save error:", err);
    return NextResponse.json({ ok: false, message: "Internal Server Error" }, { status: 500 });
  }
}
