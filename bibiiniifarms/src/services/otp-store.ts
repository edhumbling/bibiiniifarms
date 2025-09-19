import crypto from "node:crypto"

type OtpRecord = {
  codeHash: string
  expiresAt: number
  attempts: number
}

const otpMap: Map<string, OtpRecord> = new Map()

function now(): number {
  return Date.now()
}

function getSecret(): string {
  return process.env.OTP_SECRET || process.env.JWT_SECRET || "supersecret"
}

function hashCode(phone: string, code: string): string {
  return crypto.createHash("sha256").update(`${phone}:${code}:${getSecret()}`).digest("hex")
}

export function setOtp(phone: string, code: string, ttlMs = 10 * 60 * 1000): void {
  const codeHash = hashCode(phone, code)
  otpMap.set(phone, { codeHash, expiresAt: now() + ttlMs, attempts: 0 })
}

export function verifyOtp(phone: string, code: string, maxAttempts = 5): boolean {
  const rec = otpMap.get(phone)
  if (!rec) return false
  if (rec.expiresAt < now()) {
    otpMap.delete(phone)
    return false
  }
  if (rec.attempts >= maxAttempts) {
    otpMap.delete(phone)
    return false
  }
  rec.attempts += 1
  const ok = rec.codeHash === hashCode(phone, code)
  if (ok) otpMap.delete(phone)
  else otpMap.set(phone, rec)
  return ok
}

export function clearOtp(phone: string): void {
  otpMap.delete(phone)
}


