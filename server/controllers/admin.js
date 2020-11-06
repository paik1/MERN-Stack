import * as ApiResponse from '../helpers/apiResponse'
import * as AdminDataLayer from '../dataLayers/admin'

export const createAdmin = async (req, res) => {
  try {
    const result = await AdminDataLayer.saveOne(req.body)
    return ApiResponse.successCreated(res, 'Admin creted successfully')
  } catch (error) {
    console.error(error.message)
    return ApiResponse.errorResponse(res, 'Error occured while creating admin')
  }
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
