import { RolesEnum } from '../helpers/constants'
import Actor from '../models/Actor'

export const saveOne = async obj => {
  return (await new Actor(obj).save())._id
}

export const updateOne = async (obj, item) => {
  return
}

export const deleteOne = async item => {
  return
}

export const isOwnerPresent = async () => {
  return await Actor.find({
    role: { $exists: true, $eq: RolesEnum.OWNER },
  }).count()
}
