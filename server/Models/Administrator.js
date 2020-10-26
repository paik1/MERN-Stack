const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdministratorSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  role: { type: String },
});

module.exports = mongoose.model('admin', AdministratorSchema);
