import { getAdminCarriersList } from '#/workflows/default-shipping-options/workflows'

import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http'

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const carriers = await getAdminCarriersList(req.scope).run()
  res.json({
    carriers
  })
}
