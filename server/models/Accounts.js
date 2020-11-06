import mongoose from 'mongoose'
const Schema = mongoose.Schema

const AccountSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  accountNo: {
    type: String,
  },
  bankAddress: {
    type: String,
  },
  dealerId: {
    type: String,
  },
  ifsc: {
    type: String,
  },
})

export default mongoose.model('accounts', AccountSchema)
