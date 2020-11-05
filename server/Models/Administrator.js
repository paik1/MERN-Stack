import mongoose from 'mongoose'
const Schema = mongoose.Schema

const AdministratorSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  role: { type: String },
})

export default mongoose.model('admin', AdministratorSchema)
