import LicenseSchema from '../models/License'
import moment from 'moment'

export const addLicense = async license => {
  return await (await LicenseSchema.collection.insertOne(license)).insertedId
}

export const getLicense = async () => await LicenseSchema.findOne({})

export const upgradeLicense = async licenseObj => {
  console.log(licenseObj)
  return await LicenseSchema.collection.updateOne(licenseObj)
}

export const isLicenseExpired = async () =>
  await (await LicenseSchema.findOne({ expireAt: { $gte: moment().format() } }))?.id 
