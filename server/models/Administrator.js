import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema
const SALT_WORK_FACTOR = 10

const AdministratorSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: { type: String, trim: true, required: 'Admin name is Required' },
  phone: { type: String, trim: true, required: 'Contact no is Required' },
  email: {
    type: String,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    required: 'Email is Required',
  },
  role: {
    type: String,
    trim: true,
    required: 'Role is Required',
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [input => input.length >= 6, 'Password should be longer.'],
  },
})

AdministratorSchema.pre('save', function(next) {
  let admin = this
  if (!admin.isModified('password')) return next()
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) return next(err)
      // override the cleartext password with the hashed one
      admin.password = hash
      next()
    })
  })
})

AdministratorSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

export default mongoose.model('admin', AdministratorSchema)
