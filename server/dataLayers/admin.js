import Admin from '../models/Administrator'

export const saveOne = async obj => {
  return (await Admin.collection.insertOne(obj)).insertedId
}

export const updateOne = async (obj, item) => {
  return
}

export const deleteOne = async item => {
  return
}

export const getOne = async () => {
  return await Admin.find({})
}
