import Admin from '../models/Administrator'

export const isPhoneNoPresent = phoneNo => {
  return Admin.findOne({ phone: phoneNo })
}
