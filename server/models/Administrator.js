import mongoose from 'mongoose'
import { RolesEnum } from '../helpers/constants'
const Schema = mongoose.Schema

const AdministratorSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: { type: String, trim: true, required: 'Admin name is Required' },
  phone: { type: String, trim: true, required: 'Contact no is Required' },
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    required: 'Email is Required',
  },
  role: {
    type: String,
    trim: true,
    unique: true,
    enum: ['SuperUser', 'Mediator', 'CoWorker'],
    required: 'Role is Required',
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [input => input.length >= 6, 'Password should be longer.'],
  },
})

export default mongoose.model('admin', AdministratorSchema)
