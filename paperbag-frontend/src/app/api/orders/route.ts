import { NextResponse, NextRequest } from "next/server";
import { sanityClient } from "../../../../lib/sanity.js";

const client = sanityClient.withConfig({
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = [
      "firstName",
      "lastName",
      "street",
      "phone",
      "email",
      "productId",
      "productName",
      "mainImage",
      "selectedColor",
      "selectedPack",
      "quantity",
      "unitPrice",
    ];

    for (const f of required) {
      if (!body[f]) {
        return NextResponse.json(
          { ok: false, message: `${f} is required` },
          { status: 400 }
        );
      }
    }

    const fullName = `${body.firstName} ${body.lastName}`.trim();

    const productSnapshot = {
      id: body.productId,
      name: body.productName,
      mainImage: body.mainImage,
      selectedColor: body.selectedColor,
      selectedPack: Number(body.selectedPack),
      price: Number(body.unitPrice),
    };

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
      totalPrice: Number(body.unitPrice) * Number(body.quantity),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const created = await client.create(doc);

    return NextResponse.json(
      { ok: true, localOrderId: created._id },
      { status: 201 }
    );
  } catch (err) {
    console.error("Order save error:", err);
    return NextResponse.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
