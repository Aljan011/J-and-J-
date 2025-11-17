import CryptoJS from "crypto-js";

export function generateEsewaSignature(message: string): string {
  const secretKey = process.env.ESEWA_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing ESEWA_SECRET_KEY in environment variables.");
  }

  return CryptoJS.HmacSHA256(message, secretKey).toString(CryptoJS.enc.Base64);
}
