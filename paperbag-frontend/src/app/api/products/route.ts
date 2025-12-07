import { NextResponse } from "next/server";
import { sanityClient } from "../../../../lib/sanity.js";

const client = sanityClient.withConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
});


export async function GET() {
  try {
    const products = await client.fetch(`
      *[_type == "product" && slug.current == $slug[0]]{
        _id,
        id,
        slug,
        name,
        brand,
        size,
        material,
        shape,
        usage,
        recyclable,
        customPrinting,
        mainImage,
        images,
        packs,
        defaultPack,
        colors,
        discountRate,
        seo,
        shortDescription,
        longDescription
      }
    `);
    return NextResponse.json({ ok: true, products });
  } catch (err) {
    console.error("Fetch products error", err);
    return NextResponse.json({ ok: false, message: "Failed to fetch products" }, { status: 500 });
  }
}
