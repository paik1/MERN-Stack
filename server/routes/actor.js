import express from 'express'
import * as ActorController from '../controllers/actor'
import validateToken from '../middleware/authenticaton'
const router = express.Router()

// POST /v1/api/admin/register
router.post('/register/owner', ActorController.createOwner)

// POST /v1/api/admin/register
// Only owner can register the other workers
router.post('/register/worker', validateToken, ActorController.addActor)

export default router
