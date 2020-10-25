const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
});

module.exports = mongoose.model('accounts', AccountSchema);
