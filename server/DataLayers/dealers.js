// All the Database related operation will be performed in this file
// Ex: Creating the Schema instance of Mongoose and the performing Mongoose CRUD operations
import Dealer from '../models/Dealers'

export const saveOne = async (dealerObj) => {
  console.log(dealerObj.body)
  const obj = new Dealer({
    name: dealerObj.body.name,
    address: dealerObj.body.address,
    email: dealerObj.body.email,
    contact: {
      primary: dealerObj.body.contact.primary,
      secondary: dealerObj.body.contact.secondary,
    },
  })
  return await obj.save()
}

const saveMany = (dealerArrayObj) => {
  return 'I too working'
}

const getOne = (dealerId) => {}

const getMany = () => {}

const update = (dealerObj) => {}

const deleteOne = (dealerId) => {}
