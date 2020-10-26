const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelsSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  categoryId: {
    type: String,
  },
  brandId: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports = mongoose.model('models', ModelsSchema);
