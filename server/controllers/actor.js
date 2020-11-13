import * as ApiResponse from '../helpers/apiResponse'
import * as ActorDataLayer from '../dataLayers/actor'
import { validateRole, isOwner } from '../middleware/validators'
import { addTrialLicense } from '../dataLayers/license'

export const createOwner = async (req, res) => {
  if (validateRole(req.body.role) && isOwner(req.body.role)) {
    try {
      let isOwnerPresent = await ActorDataLayer.isOwnerPresent()
      if (isOwnerPresent === 0) {
        const result = await ActorDataLayer.saveOne(req.body)
        const licenseResult = await addTrialLicense(
          result._id,
          req.body.name,
          req.body.phone
        )
        // If the Admin created succefully but failed to update the license then need to rollback the operation
        if (result && licenseResult) {
          return ApiResponse.successCreated(
            res,
            'Owner registered successfully'
          )
        } else {
          return ApiResponse.errorResponse(res, 'Falied to register Owner')
        }
      } else {
        return ApiResponse.errorResponse(res, 'Owner is already registered')
      }
    } catch (error) {
      console.error(error.message)
      return ApiResponse.verboseErrorResponse(
        res,
        'Error occured while registering Owner',
        error.message
      )
    }
  } else {
    return ApiResponse.validationErrorWithData(
      res,
      'Invalid Role or Other worker can not be register '
    )
  }
}

// Before calling this method perform RBAC on this API endpoint
export const addActor = async (req, res) => {
  if (validateRole(req.body.role) && !isOwner(req.body.role)) {
    try {
      const result = await ActorDataLayer.saveOne(req.body)
      if (result) {
        return ApiResponse.successCreated(
          res,
          `${req.body.role} registered successfully`
        )
      } else {
        return ApiResponse.errorResponse(
          res,
          `Falied to register ${req.body.role}`
        )
      }
    } catch (error) {
      console.error(error.message)
      return ApiResponse.verboseErrorResponse(
        res,
        `Error occured while registering ${req.body.role}`,
        error.message
      )
    }
  } else {
    return ApiResponse.validationErrorWithData(
      res,
      'Invalid Role or You can not register Owner'
    )
  }
}
