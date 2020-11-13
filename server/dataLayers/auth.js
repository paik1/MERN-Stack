import Actor from '../models/Actor'

export const isPhoneNoPresent = phoneNo => {
  return Actor.findOne({ phone: phoneNo })
}


export const isActorPresent = actorId => {
  return Actor.findOne({ _id: actorId })
}