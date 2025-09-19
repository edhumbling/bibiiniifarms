import { ExecArgs } from "@medusajs/framework/types"
import { createRegionsWorkflow, createTaxRegionsWorkflow, updateStoresWorkflow } from "@medusajs/medusa/core-flows"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export default async function createGhanaRegion({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)

  logger.info("Creating Ghana region (GHS)...")

  const { result: regions } = await createRegionsWorkflow(container).run({
    input: {
      regions: [
        {
          name: "Ghana",
          currency_code: "ghs",
          countries: ["gh"],
          payment_providers: ["pp_system_default"],
        },
      ],
    },
  })

  const region = regions[0]

  await createTaxRegionsWorkflow(container).run({
    input: [
      {
        country_code: "gh",
        provider_id: "tp_system",
      },
    ],
  })

  await updateStoresWorkflow(container).run({
    input: {
      selector: {},
      update: {
        supported_currencies: [
          { currency_code: "ghs", is_default: true },
        ],
      },
    },
  })

  logger.info(`Ghana region created with id ${region.id}`)
}


