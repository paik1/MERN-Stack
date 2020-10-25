const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  stockId: {
    type: String,
  },
  customerId: {
    type: String,
  },
  sellingPrice: { type: Number },
  taxAmount: { type: Number },
  soldAt: {
    type: Schema.Types.Date,
  },
  paymentMode: {
    type: String,
  },
});

module.exports = mongoose.model('orders', OrdersSchema);
