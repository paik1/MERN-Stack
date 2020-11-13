import { unauthorizedResponse } from '../helpers/apiResponse'

export const authorizeRole = roles => (req, res, next) =>
  !roles.includes(req.actor.role)
    ? unauthorizedResponse(
        res,
        'You dont have permission to perform this operation'
      )
    : next()
