const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  categoryId: {
    type: String,
  },
  name: {
    type: String,
  }
});

module.exports = mongoose.model('brands', BrandSchema);
