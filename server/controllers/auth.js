import * as AuthDataLayer from '../dataLayers/auth'
import { generateToken } from '../helpers/jwtHelper'
import {
  successResponseWithData,
  unauthorizedResponse,
} from '../helpers/apiResponse'

export const login = async (req, res) => {
  try {
    const result = await AuthDataLayer.isPhoneNoPresent(req.body.phone)
    if (result) {
      result.comparePassword(req.body.password, async (err, isMatch) => {
        if (err) throw err
        if (isMatch) {
          const token = await generateToken(result._id, result.name)
          return successResponseWithData(res, 'Login Success', { token })
        } else {
          return unauthorizedResponse(res, 'Invalid Credential')
        }
      })
    } else {
      return unauthorizedResponse(res, 'Invalid Credential')
    }
  } catch (error) {
    console.error(error.message)
    return ApiResponse.errorResponse(res, 'Error occured while login')
  }
}

export const isAutorized = (req, res) =>
  successResponseWithData(res, 'Authorized user', { isAuthorized: true })
