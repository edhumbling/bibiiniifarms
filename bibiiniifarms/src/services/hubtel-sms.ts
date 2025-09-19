export type SmsResult = { ok: boolean; status?: number; error?: string }

export async function sendOtpSms(toPhoneE164: string, code: string): Promise<SmsResult> {
  const clientId = process.env.HUBTEL_SMS_CLIENT_ID
  const clientSecret = process.env.HUBTEL_SMS_CLIENT_SECRET
  const from = process.env.HUBTEL_SMS_FROM || "BIBINIIFARM"

  if (!clientId || !clientSecret) {
    return { ok: false, error: "Missing HUBTEL_SMS_CLIENT_ID/SECRET" }
  }

  const base = "https://sms.hubtel.com/v1/messages/send"
  const params = new URLSearchParams()
  params.set("clientsecret", clientSecret)
  params.set("clientid", clientId)
  params.set("from", from)
  params.set("to", toPhoneE164)
  params.set("content", `Your BibiniiFarms OTP is ${code}. It expires in 10 minutes.`)

  const url = `${base}?${params.toString()}`
  try {
    const res = await fetch(url, { method: "GET" })
    return { ok: res.ok, status: res.status, error: res.ok ? undefined : await res.text() }
  } catch (e: any) {
    return { ok: false, error: e?.message || "network_error" }
  }
}


