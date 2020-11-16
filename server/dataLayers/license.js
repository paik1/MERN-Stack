import LicenseSchema from '../models/License'

export const addLicense = async license => {
  return await (await LicenseSchema.collection.insertOne(license)).insertedId
}

export const getLicense = async () => await LicenseSchema.findOne({})

export const upgradeLicense = async licenseObj => {
  console.log(licenseObj)
  return await LicenseSchema.collection.updateOne(licenseObj)
}
