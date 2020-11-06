import jwt from 'jsonwebtoken'
import dotEnv from 'dotenv'
import { unauthorizedResponse, errorResponse } from '../helpers/apiResponse'

dotEnv.config()

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization || ''
  try {
    if (!token) {
      return unauthorizedResponse(res, 'You need to Login')
    }
    const decrypt = await jwt.verify(
      token.replace('Bearer ', ''),
      process.env.JWT_SECRET
    )
    req.user = {
      id: decrypt.id,
      name: decrypt.name,
    }
    next()
  } catch (error) {
    return errorResponse(res, error.toString())
  }
}

export default validateToken
