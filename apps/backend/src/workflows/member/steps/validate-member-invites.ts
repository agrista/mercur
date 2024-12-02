import SellerModuleService from 'src/modules/seller/service'

import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'

import { AcceptMemberInviteDTO } from '@mercurjs/types'

import { SELLER_MODULE } from '../../../modules/seller'

export const validateMemberInviteStep = createStep(
  'validate-member-invite',
  async (input: AcceptMemberInviteDTO, { container }) => {
    const service = container.resolve<SellerModuleService>(SELLER_MODULE)

    const invite = await service.validateInviteToken(input.token)

    return new StepResponse(invite)
  }
)
