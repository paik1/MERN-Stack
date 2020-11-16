import { unauthorizedResponse, errorResponse } from '../helpers/apiResponse'
import { LicenseConstant } from '../helpers/constants'

export const authorizeRole = roles => (req, res, next) =>
  !roles.includes(req.actor.role)
    ? unauthorizedResponse(
        res,
        'You dont have permission to perform this operation'
      )
    : next()

export const authorizeLicense = async (req, res, next) => {
  if (req.license) {
    if (
      req.license.status === LicenseConstant.TRIAL_LICENSE_STATUS &&
      req.license.expireIn < 0
    ) {
      return unauthorizedResponse(
        res,
        `You'r trial period expired! Please upgrade your license key to continue using this app`
      )
    }

    if (
      req.license.status === LicenseConstant.PAID_LICENSE_STATUS &&
      req.license.expireIn < 0
    ) {
      return unauthorizedResponse(
        res,
        `You'r license expired! Please extend your license key to continue using this app`
      )
    }
  } else {
    return unauthorizedResponse(
      res,
      `You're not authorized to use this app due to the missing license`
    )
  }
  next()
}
