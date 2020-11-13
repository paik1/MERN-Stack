import LicenseSchema from '../models/License'

export const addTrialLicense = async (id, name, phone) => {
  let result = await LicenseSchema.collection.insertOne({
    licenseKey: `${name}+${phone}+somesalt`,
    registeredAt: new Date().toISOString(),
    status: 'Trial',
    owner: id,
  })
  return result.insertedId
}
