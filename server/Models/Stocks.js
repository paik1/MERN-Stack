const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StocksSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  categoryId: {
    type: String,
  },
  brandId: {
    type: String,
  },
  modelId: {
    type: String,
  },
  dealerId: {
    type: String,
  },
  description: {
    type: String,
  },
  label: {
    type: String,
  },
  purchasedPrice: {
    type: Number,
  },
  purchasedOn: {
    type: Schema.Types.Date,
  },
  identifier: {
    type: String,
  },
});

module.exports = mongoose.model('stocks', StocksSchema);
