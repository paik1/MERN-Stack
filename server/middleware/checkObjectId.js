import mongoose from 'mongoose'
import { validationErrorWithData } from '../helpers/apiResponse'

const checkObjectId = objectId => (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params[objectId]))
    return validationErrorWithData(res, 'Invalid Id', null)
  next()
}

export default checkObjectId
