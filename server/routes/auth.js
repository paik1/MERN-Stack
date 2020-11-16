import express from 'express'
import * as AuthController from '../controllers/auth'
import { authorizeLicense } from '../middleware/authorization'
const router = express.Router()

// Validation: Token
router.post('/login', authorizeLicense, AuthController.login)

export default router
