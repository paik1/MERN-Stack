import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CategorySchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
  },
})

export default mongoose.model('categories', CategorySchema)
