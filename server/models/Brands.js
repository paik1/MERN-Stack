import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BrandSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  categoryId: {
    type: String,
  },
  name: {
    type: String,
  },
})

export default mongoose.model('brands', BrandSchema)
