import mongoose from 'mongoose'

const checkObjectId = objectId => (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params[objectId]))
    return res.status(400).json({ error: 'Invalid ID' })
  next()
}

export default checkObjectId
