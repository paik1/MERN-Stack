import { RolesEnum } from '../helpers/constants'
import { validationErrorWithData } from '../helpers/apiResponse'

const validateRole = () => (req, res, next) => {
  if (req.body.role) {
    let isPresent = Object.values(RolesEnum).includes(req.body.role)
    if (!isPresent) {
      return validationErrorWithData(res, 'Invalid Role')
    }
  }
  next()
}

export default validateRole
