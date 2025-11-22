// src/lib/verifySignature.ts
import { createHmac } from "crypto";

export function generateEsewaSignature(message: string): string {
  const secretRaw = process.env.ESEWA_SECRET_KEY;
  if (!secretRaw) {
    throw new Error("Missing ESEWA_SECRET_KEY in environment variables.");
  }

  // Trim whitespace that might accidentally exist in .env values
  const secret = secretRaw.trim();

  // Create HMAC using UTF-8 for message and secret; output Base64
  const hmac = createHmac("sha256", secret);
  hmac.update(message, "utf8");
  return hmac.digest("base64");
}
