import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ActivitySchema = new Schema({
  sessionId: {
    type: Schema.Types.ObjectId,
  },
  loggedUser: {
    type: String, // Admin ID
  },
  status: { type: String },
  token: { type: String },
  loggedInAt: { type: Schema.Types.Date },
})

export default mongoose.model('activities', ActivitySchema)
