import mongoose from 'mongoose'
const Schema = mongoose.Schema

const DealerSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    primary: {
      type: String,
    },
    secondary: {
      type: String,
    },
  },
  gstin: {
    type: String,
  },
})

export default mongoose.model('Dealers', DealerSchema)
