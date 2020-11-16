import moment from 'moment'

export const licenseFactory = licenseData => {
  if (!licenseData) return null

  let { licenseKey, registeredAt, status, expireAt } = licenseData
  expireAt = moment(expireAt)
  registeredAt = moment(registeredAt)
  let expireIn = expireAt.diff(registeredAt, 'days')

  return {
    licenseKey,
    registeredAt,
    status,
    expireIn,
  }
}
