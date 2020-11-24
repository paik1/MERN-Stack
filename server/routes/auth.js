import express from 'express'
import * as AuthController from '../controllers/auth'
import validateToken from '../middleware/authenticaton'
import { authorizeLicense } from '../middleware/authorization'
const router = express.Router()

// Validation: Token
router.post('/login', authorizeLicense, AuthController.login)

router.get(
  '/isAuthorized',
  authorizeLicense,
  validateToken,
  AuthController.isAutorized
)

export default router
