import { RolesEnum } from '../helpers/constants'

export const validateRole = () => (req, res, next) => {
  if (req.body.role) {
    let isPresent = Object.values(RolesEnum).includes(req.body.role)
    if (!isPresent) {
      return res.status(400).json({ error: 'Invalid Role' })
    }
  }
  next()
}
