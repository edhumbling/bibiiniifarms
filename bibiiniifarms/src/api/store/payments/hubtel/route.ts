import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { createHubtelCharge } from "@/services/hubtel-payment"

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { amount, currency, customerPhone, description } = req.body as any
  if (!amount || !currency || !customerPhone) {
    return res.status(400).json({ message: "amount,currency,customerPhone required" })
  }
  const result = await createHubtelCharge({ amount, currency, customerPhone, description })
  if (!result.ok) return res.status(502).json({ message: "hubtel_error", detail: result.error })
  return res.json(result)
}


