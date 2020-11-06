import express from 'express'
const router = express.Router()
import * as AuthController from '../controllers/auth'

router.post('/login', AuthController.login)

export default router
