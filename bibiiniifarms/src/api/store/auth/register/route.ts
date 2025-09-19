import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { createCustomersWorkflow } from "@medusajs/medusa/core-flows"
import { setOtp } from "@/services/otp-store"
import { sendOtpSms } from "@/services/hubtel-sms"

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { phone, email, first_name, last_name } = req.body as any
  if (!phone) return res.status(400).json({ message: "phone required" })

  const code = generateCode()
  setOtp(phone, code)

  await createCustomersWorkflow(req.scope).run({
    input: {
      customers: [
        {
          email: email || `${phone}@placeholder.local`,
          first_name,
          last_name,
          metadata: { phone, phone_verified: false },
        },
      ],
    },
  })

  const sms = await sendOtpSms(phone, code)
  if (!sms.ok) return res.status(502).json({ message: "sms_failed", detail: sms.error })

  return res.json({ message: "otp_sent" })
}


