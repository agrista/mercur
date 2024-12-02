import SellerModuleService from 'src/modules/seller/service'

import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'

import { MemberInviteDTO, UpdateMemberInviteDTO } from '@mercurjs/types'

import { SELLER_MODULE } from '../../../modules/seller'

export const updateMemberInviteStep = createStep(
  'update-member-invite',
  async (input: UpdateMemberInviteDTO, { container }) => {
    const service = container.resolve<SellerModuleService>(SELLER_MODULE)

    const previousData: MemberInviteDTO = await service.retrieveInvite(input.id)

    const updatedInvites: MemberInviteDTO = await service.updateInvites(input)

    return new StepResponse(updatedInvites, previousData)
  },
  async (previousData: MemberInviteDTO, { container }) => {
    const service = container.resolve<SellerModuleService>(SELLER_MODULE)

    await service.updateInvites(previousData)
  }
)
