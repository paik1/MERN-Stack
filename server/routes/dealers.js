import { validateObjectId } from '../middleware/validators'
import express from 'express'
import * as DealersController from '../controllers/dealers'
import validateToken from '../middleware/authenticaton'
import { authorizeRole } from '../middleware/authorization'
import { RolesEnum } from '../helpers/constants'

const router = express.Router()

// Validation: Checking the id parameret is valid object or not
router.param('dealerId', validateObjectId)

// Validation: Token, Role and License
// Pemission: Owner, Co-Owner and Manager
// POST /v1/api/dealers/single
router.post(
  '/single',
  validateToken,
  authorizeRole([RolesEnum.OWNER, RolesEnum.COOWNER, RolesEnum.MANAGER]),
  DealersController.saveDealer
)

// Validation: Token, Role and License
// Pemission: Owner, Co-Owner and Manager
// POST /v1/api/dealers/bulk
router.post(
  '/bulk',
  validateToken,
  authorizeRole([RolesEnum.OWNER, RolesEnum.COOWNER, RolesEnum.MANAGER]),
  DealersController.saveDealers
)

// Validation: Token, Role and License
// Pemission: Owner, Co-Owner and Manager
// GET /v1/api/dealers/:dealerId
router.get(
  '/:dealerId',
  validateToken,
  authorizeRole([RolesEnum.OWNER, RolesEnum.COOWNER, RolesEnum.MANAGER]),
  DealersController.getDelaerById
)

// Validation: Token, Role and License
// Pemission: Owner, Co-Owner and Manager
// GET /v1/api/dealers/
router.get(
  '/',
  validateToken,
  authorizeRole([RolesEnum.OWNER, RolesEnum.COOWNER, RolesEnum.MANAGER]),
  DealersController.getAllDealers
)

// Validation: Token, Role and License
// Pemission: Owner and Co-Owner
// DELETE /v1/api/dealers/:dealerId
router.delete(
  '/:dealerId',
  validateToken,
  authorizeRole([RolesEnum.OWNER, RolesEnum.COOWNER]),
  DealersController.deleteById
)

// Validation: Token, Role and License
// Pemission: Owner and Co-Owner
// PUT /v1/api/dealers/:dealerId
router.put(
  '/:dealerId',
  validateToken,
  authorizeRole([RolesEnum.OWNER, RolesEnum.COOWNER]),
  DealersController.updateById
)

export default router
