const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
});

module.exports = mongoose.model('customers', CustomersSchema);
