import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { verifyOtp } from "@/services/otp-store"
import { updateCustomersWorkflow } from "@medusajs/medusa/core-flows"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { phone, code } = req.body as any
  if (!phone || !code) return res.status(400).json({ message: "phone_and_code_required" })

  const ok = verifyOtp(phone, code)
  if (!ok) return res.status(401).json({ message: "invalid_or_expired_otp" })

  const logger = req.scope.resolve(ContainerRegistrationKeys.LOGGER)
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: customers } = await query.graph({
    entity: "customer",
    filters: { metadata: { phone } },
    fields: ["id", "email"],
  })

  if (!customers?.length) return res.status(404).json({ message: "customer_not_found" })

  await updateCustomersWorkflow(req.scope).run({
    input: {
      selector: { id: customers[0].id },
      update: { metadata: { phone_verified: true } },
    },
  })

  logger.info(`Phone verified for customer ${customers[0].id}`)
  return res.json({ message: "verified" })
}


