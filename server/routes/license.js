import express from 'express'
import { RolesEnum } from '../helpers/constants'
import validateToken from '../middleware/authenticaton'
import { authorizeRole } from '../middleware/authorization'
import * as LicenseConstroller from '../controllers/license'
const router = express.Router()

// Validation: Token and Rolecheck
// Pemission: Owner and Co-Owner
// v1/api/license
router.get(
  '/',
  validateToken,
  authorizeRole([RolesEnum.OWNER, RolesEnum.COOWNER]),
  LicenseConstroller.getLicenseDetails
)

// Validation: Token and Rolecheck
// Pemission: Owner and Co-Owner
// v1/api/license/status
router.get(
  '/status',
  validateToken,
  authorizeRole([
    RolesEnum.OWNER,
    RolesEnum.COOWNER,
    RolesEnum.MANAGER,
    RolesEnum.WORKER,
  ]),
  LicenseConstroller.isLicenseExpired
)

// Validation: Token and Rolecheck
// Pemission: Owner and Co-Owner
// v1/api/license/buy
router.post(
  '/buy',
  validateToken,
  authorizeRole([RolesEnum.OWNER, RolesEnum.COOWNER]),
  LicenseConstroller.upgradeLicense
)

export default router
