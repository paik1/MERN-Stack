// All the Database related operation will be performed in this file
// Ex: Creating the Schema instance of Mongoose and the performing Mongoose CRUD operations
import Dealer from '../models/dealers'

export const saveOne = async (obj) => {
  return (await Dealer.collection.insertOne(obj)).insertedId
}

export const saveMany = async (arrayObj) => {
  return (await Dealer.collection.insertMany(arrayObj)).insertedIds
}

export const getOne = async (id) => {
  return await Dealer.findById(id)
}

export const getMany = async () => {
  return await Dealer.find({})
}

export const updateOne = async (schemaObj) => {
  return await schemaObj.save();
}

export const deleteOne = async (id) => {
  return await Dealer.findByIdAndRemove(id)
}
