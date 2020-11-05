import { validateRole } from '../middleware/roleValidator'

export const createAdmin = adminObj => {
  return validateRole(adminObj.role)
}

export const deleteAdmin = () => {
  return
}

export const updateAdmin = () => {
  return
}

export const isAuthorized = () => {
  return
}
