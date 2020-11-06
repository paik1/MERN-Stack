import mongoose from 'mongoose'
const Schema = mongoose.Schema

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
})

export default mongoose.model('models', ModelsSchema)
