import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "ksenia_admin";

function secret() {
  return (
    process.env.AVIS_APPROVAL_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "dev-secret"
  );
}

export function makeSessionToken() {
  const ts = Date.now().toString();
  const sig = createHmac("sha256", secret())
    .update(ts)
    .digest("hex")
    .slice(0, 32);
  return `${ts}.${sig}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const [ts, sig] = token.split(".");
  if (!ts || !sig) return false;
  const age = Date.now() - Number(ts);
  if (!Number.isFinite(age) || age < 0 || age > 7 * 24 * 60 * 60 * 1000) {
    return false;
  }
  const expected = createHmac("sha256", secret())
    .update(ts)
    .digest("hex")
    .slice(0, 32);
  if (expected.length !== sig.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(sig));
}

export function isAdmin(): boolean {
  return verifySessionToken(cookies().get(COOKIE_NAME)?.value);
}

export const ADMIN_COOKIE = COOKIE_NAME;
