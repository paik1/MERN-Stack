import { saveOne, updateOne, deleteOne, getOne } from '../dataLayers/admin'
import { validateRole } from '../utils/validate'

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
