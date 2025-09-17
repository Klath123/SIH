import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const ALGO = "aes-256-gcm";
const SECRET = process.env.ENCRYPTION_KEY; // must be 32 bytes

if (!SECRET || SECRET.length !== 32) {
  console.warn("⚠️ ENCRYPTION_KEY must be exactly 32 chars in .env");
}

export function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGO, Buffer.from(SECRET), iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const tag = cipher.getAuthTag().toString("hex");
  return `${iv.toString("hex")}:${tag}:${encrypted}`;
}

export function decrypt(enc) {
  const [ivHex, tagHex, encrypted] = enc.split(":");
  const decipher = crypto.createDecipheriv(ALGO, Buffer.from(SECRET), Buffer.from(ivHex, "hex"));
  decipher.setAuthTag(Buffer.from(tagHex, "hex"));
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
