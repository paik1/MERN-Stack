import mongoose from 'mongoose'
const Schema = mongoose.Schema

const LicenseSchema = new Schema({
  licenseKey: {
    type: String,
    required: true,
    unique: true,
  },
  registeredAt: {
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'Actors',
    required: true,
  },
  status: {
    type: String,
  },
})

export default mongoose.model('License', LicenseSchema)
