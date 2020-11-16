import {
  errorResponse,
  successResponse,
  successResponseWithData,
} from '../helpers/apiResponse'
import * as LicenseDataLayer from '../dataLayers/license'
import moment from 'moment'
import { LicenseConstant } from '../helpers/constants'
import { encryptedLicenseKey } from '../helpers/licenseHelper'
import { licenseFactory } from '../helpers/licenseMapperFactory'

export const addTrialLicense = async req => {
  let date = moment().format()
  let license = {
    licenseKey: encryptedLicenseKey(
      req.name,
      req.phone,
      moment(date).unix(),
      LicenseConstant.TRIAL_LICENSE_STATUS
    ),
    registeredAt: date,
    status: LicenseConstant.TRIAL_LICENSE_STATUS,
    expireAt: moment()
      .add(LicenseConstant.TRIAL_LICENSE_PERIOD, 'days')
      .format(),
  }
  return await LicenseDataLayer.addLicense(license)
}

export const getLicenseDetails = async (req, res) => {
  try {
    let license = licenseFactory(await LicenseDataLayer.getLicense())
    if (license) {
      return successResponseWithData(res, 'License details', license)
    } else {
      return errorResponse(res, 'No license details found')
    }
  } catch (error) {
    console.error(error)
    return errorResponse(res, 'Error occured while fetching license details')
  }
}

export const upgradeLicense = async (req, res) => {
  try {
    let licenseObj = {
      licenseKey: `${req.actor.id}-${req.actor.name}-paidLicense`,
      registeredAt: new Date().toISOString(),
      status: 'Upgraded',
    }
    let isLicensePresenst = await LicenseDataLayer.getLicense()
    if (isLicensePresenst) {
      let result = await LicenseDataLayer.upgradeLicense(licenseObj)
      if (result) {
        return successResponse(err, 'License updagred successfully')
      }
    } else {
      return errorResponse(res, 'There is no license to upgrade')
    }
  } catch (error) {
    console.error(error)
    return errorResponse(
      res,
      'Error occured while upgrading license, please try after sometime!'
    )
  }

  return await res.status(200).json(req.actor)
}

export const isLicenseExpired = async (req, res) => {
  try {
    let status = await LicenseDataLayer.isLicenseExpired()
    return successResponseWithData(res, 'License status', {
      expired: status ? false : true,
    })
  } catch (error) {
    console.error(error)
    return errorResponse(res, 'Error occured while fetching license status')
  }
}
