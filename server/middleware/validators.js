import mongoose from 'mongoose'
import { validationErrorWithData } from '../helpers/apiResponse'
import { RolesEnum } from '../helpers/constants'

export const validateObjectId = (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id))
    return validationErrorWithData(res, 'Invalid Object Id', null)
  next()
}

export const validateRole = role => {
  if (role) {
    return Object.values(RolesEnum).includes(role.toLowerCase())
  }
  return false
}

export const isOwner = role => {
  return role ? role.toLowerCase() === RolesEnum.OWNER : false
}
