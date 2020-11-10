import mongoose from 'mongoose'
import { validationErrorWithData } from '../helpers/apiResponse'

const checkObjectId = (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id))
    return validationErrorWithData(res, 'Invalid Object Id', null) 
  next()
}

export default checkObjectId
