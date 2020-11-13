import jwt from 'jsonwebtoken'
import dotEnv from 'dotenv'
import { unauthorizedResponse, errorResponse } from '../helpers/apiResponse'
import { isActorPresent } from '../dataLayers/auth'

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
    let actorObj = await isActorPresent(decrypt.id)
    if (actorObj) {
      req.actor = {
        id: actorObj._id,
        name: actorObj.name,
        email: actorObj.email,
        role: actorObj.role,
      }
    } else {
      return unauthorizedResponse(res, 'Invalid Token')
    }

    next()
  } catch (error) {
    return errorResponse(res, error.toString())
  }
}

export default validateToken
