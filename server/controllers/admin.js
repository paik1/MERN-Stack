import * as ApiResponse from '../helpers/apiResponse'
import * as AdminDataLayer from '../dataLayers/admin'

export const createAdmin = async (req, res) => {
  try {
    const result = await AdminDataLayer.saveOne(req.body)
    if (result) {
      return ApiResponse.successCreated(res, 'Admin creted successfully')
    } else {
      return ApiResponse.errorResponse(res, 'Falied to create admin')
    }
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
