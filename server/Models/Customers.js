import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CustomersSchema = new Schema({
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
})

export default mongoose.model('customers', CustomersSchema)
