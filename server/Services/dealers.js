// All the business logic will be reside in this files
// such as file data mapping, data moduling and then it will call the method of datalayer to perform the
// CRUD opetaions into the database

import { saveOne, saveMany, getOne, getMany } from '../DataLayers/dealers'

export const saveDealer = (dealerObject) => {
  return saveOne(dealerObject)
}

export const saveDealers = (dealerObjects) => {
  return saveMany(dealerObjects)
}

export const getDelaerById = (dealerId) => {
  return getOne(dealerId)
}

export const getAllDealers = () => {
  return getMany()
}