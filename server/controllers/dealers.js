// All the business logic will be reside in this files
// such as file data mapping, data moduling and then it will call the method of datalayer to perform the
// CRUD opetaions into the database

import {
  saveOne,
  saveMany,
  getOne,
  getMany,
  deleteOne,
  updateOne,
} from '../dataLayers/dealers'

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

export const deleteById = (dealerId) => {
  return deleteOne(dealerId)
}

export const updateById = async (dealerId, dealerObj) => {
  const dealer = await getOne(dealerId)
  dealer.name = dealerObj.name ? dealerObj.name : dealer.name
  dealer.address = dealerObj.address ? dealerObj.address : dealer.address
  dealer.email = dealerObj.email ? dealerObj.email : dealer.email
  if (dealerObj.contact) {
    dealer.contact.primary = dealerObj.contact.primary
      ? dealerObj.contact.primary
      : dealer.contact.primary
    dealer.contact.secondary = dealerObj.contact.secondary
      ? dealerObj.contact.secondary
      : dealer.contact.secondary
  }
  return updateOne(dealer)
}
