import express from 'express'
import * as ActorController from '../controllers/actor'
import { RolesEnum } from '../helpers/constants'
import validateToken from '../middleware/authenticaton'
import { authorizeRole } from '../middleware/authorization'
const router = express.Router()

// Validation: License
// POST /v1/api/actor/register
router.post('/register/owner', ActorController.createOwner)

// Validation: Token, Role and License
// POST /v1/api/actor/register
// Only owner can register the other workers
router.post(
  '/register/worker',
  validateToken,
  authorizeRole([RolesEnum.OWNER]),
  ActorController.addActor
)

// Validation: License
// GET /v1/api/actor
router.get(
  '/',
  validateToken,
  authorizeRole([RolesEnum.OWNER]),
  ActorController.getActors
)

export default router
