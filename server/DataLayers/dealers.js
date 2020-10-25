// All the Database related operation will be performed in this file
// Ex: Creating the Schema instance of Mongoose and the performing Mongoose CRUD operations
import Dealer from '../models/Dealers'

export const saveOne = async (dealerObj) => {
  return (await Dealer.collection.insertOne(dealerObj)).insertedId
}

export const saveMany = async (dealerArrayObj) => {
  return (await Dealer.collection.insertMany(dealerArrayObj)).insertedIds
}

export const getOne = async (dealerId) => {
  return await Dealer.findById(dealerId)
}

export const getMany = async () => {
  return await Dealer.find({})
}

const update = (dealerObj) => {}

const deleteOne = (dealerId) => {}
