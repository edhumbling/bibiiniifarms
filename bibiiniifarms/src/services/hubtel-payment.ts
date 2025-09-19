export type HubtelChargeRequest = {
  amount: number
  currency: string
  customerPhone: string
  description?: string
}

export type HubtelChargeResult = {
  ok: boolean
  reference?: string
  status?: string
  error?: string
}

export async function createHubtelCharge(req: HubtelChargeRequest): Promise<HubtelChargeResult> {
  const apiId = process.env.HUBTEL_PAY_API_ID
  const apiKey = process.env.HUBTEL_PAY_API_KEY
  if (!apiId || !apiKey) return { ok: false, error: "Missing HUBTEL_PAY_API_ID/KEY" }

  // Placeholder: call Hubtel Payments API. Replace with actual endpoints per Hubtel docs.
  // This demonstrates the structure; you should adapt to charge-init and status-check endpoints.
  try {
    const response = await fetch("https://payments.hubtel.com/api/charges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${apiId}:${apiKey}`).toString("base64")}`,
      },
      body: JSON.stringify({
        amount: req.amount,
        currency: req.currency,
        msisdn: req.customerPhone,
        description: req.description || "Order charge",
      }),
    })
    if (!response.ok) return { ok: false, error: await response.text() }
    const json = await response.json()
    return { ok: true, reference: json.reference, status: json.status }
  } catch (e: any) {
    return { ok: false, error: e?.message || "network_error" }
  }
}


