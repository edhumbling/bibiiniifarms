import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { phone } = req.body as any
  if (!phone) return res.status(400).json({ message: "phone required" })

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const auth = req.scope.resolve(ContainerRegistrationKeys.AUTHENTICATOR)

  const { data: customers } = await query.graph({
    entity: "customer",
    filters: { metadata: { phone, phone_verified: true } },
    fields: ["id", "email"],
  })

  if (!customers?.length) return res.status(401).json({ message: "not_verified" })

  // Issue a session token for the customer
  const token = await auth.authenticate("customer", {
    actor_id: customers[0].id,
    actor_type: "customer",
  })

  return res.json({ token })
}


