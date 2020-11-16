import crypto from 'crypto'
import { LicenseConstant } from './constants'
import dotenv from 'dotenv'

dotenv.config()

export const encryptedLicenseKey = (name, phone, registeredAt, status) => {
  let concatinatedString = `${name}:${phone}:${registeredAt}:${status}`
  var cipher = crypto.createCipheriv(
    LicenseConstant.ENCRYPTION,
    process.env.LICENSE_SECRET,
    process.env.LICENSE_VI
  )
  var crypted = cipher.update(concatinatedString, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted.toUpperCase()
}

export const decryptedLicenseKey = license => {
  var decipher = crypto.createDecipheriv(
    LicenseConstant.ENCRYPTION,
    process.env.LICENSE_SECRET,
    process.env.LICENSE_VI
  )
  var crypted = decipher.update(license, 'hex', 'utf8')
  crypted += decipher.final('utf8')
  return crypted
}
