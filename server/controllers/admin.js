import { saveOne, updateOne, deleteOne, getOne } from '../dataLayers/admin'
import { validateRole } from '../middleware/roleValidator'

export const createAdmin = adminObj => {

  return validateRole(adminObj.role)
}

export const deleteAdmin = adminPhoneNo => {
  return
}

export const updateAdmin = (adminPhoneNo, adminObj) => {
  return
}

export const isAuthorized = (adminPhoneNo, adminObj) => {
  return
}
