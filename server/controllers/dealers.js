// All the business logic will be reside in this files
// such as file data mapping, data moduling and then it will call the method of datalayer to perform the
// CRUD opetaions into the database
import * as DealerDataLayer from '../dataLayers/dealers'
import * as ApiResponse from '../helpers/apiResponse'

export const saveDealer = async (req, res) => {
  try {
    const result = await DealerDataLayer.saveOne(req.body)

    return ApiResponse.successCreatedWithData(res, 'Dealer created', {
      id: result,
    })
  } catch (error) {
    console.error(error.message)
    return ApiResponse.errorResponse(res, 'Error occured while getting dealers')
  }
}

export const saveDealers = async (req, res) => {
  try {
    const result = await DealerDataLayer.saveMany(req.body)
    return ApiResponse.successCreatedWithData(res, 'Dealers created', {
      ids: result,
    })
  } catch (error) {
    console.error(error.message)
    return ApiResponse.errorResponse(res, 'Error occured while getting dealers')
  }
}

export const getDelaerById = async (req, res) => {
  try {
    const result = await DealerDataLayer.getOne(req.params.id)
    if (result) {
      return ApiResponse.successResponseWithData(res, 'Dealer details', result)
    } else {
      return ApiResponse.notFoundResponse(res, 'Dealers details not found')
    }
  } catch (error) {
    console.error(error.message)
    return ApiResponse.errorResponse(res, 'Error occured while getting dealers')
  }
}

export const getAllDealers = async (req, res) => {
  try {
    const result = await DealerDataLayer.getMany()
    if (result) {
      return ApiResponse.successResponseWithData(res, 'Dealers details', result)
    } else {
      return ApiResponse.notFoundResponse(res, 'Dealers details not found')
    }
  } catch (error) {
    console.error(error.message)
    return ApiResponse.errorResponse(res, 'Error occured while getting dealers')
  }
}

export const deleteById = async (req, res) => {
  try {
    const result = await DealerDataLayer.deleteOne(req.params.id)
    if (result) {
      return ApiResponse.successResponse(
        res,
        'Dealer detail deleted successfully'
      )
    } else {
      return ApiResponse.validationErrorWithData(
        res,
        'unable to delete dealer details',
        null
      )
    }
  } catch (error) {
    console.error(error.message)
    return ApiResponse.errorResponse(res, 'Error occured while deleting dealer')
  }
}

export const updateById = async (req, res) => {
  try {
    const dealerObj = req.body
    const dealer = await DealerDataLayer.getOne(req.params.id, dealerObj)
    dealer.name = dealerObj.name ? dealerObj.name : dealer.name
    dealer.address = dealerObj.address ? dealerObj.address : dealer.address
    dealer.email = dealerObj.email ? dealerObj.email : dealer.email
    if (dealerObj.contact) {
      dealer.contact.primary = dealerObj.contact.primary
        ? dealerObj.contact.primary
        : dealer.contact.primary
      dealer.contact.secondary = dealerObj.contact.secondary
        ? dealerObj.contact.secondary
        : dealer.contact.secondary
    }

    const result = await DealerDataLayer.updateOne(dealer)
    if (result) {
      return ApiResponse.successResponse(
        res,
        `${req.params.id} details updated successfully`
      )
    } else {
      return ApiResponse.validationErrorWithData(
        res,
        `Failed to update ${req.params.id} details`
      )
    }
  } catch (error) {
    console.error(error.message)
    return ApiResponse.errorResponse(
      res,
      'Error occured while updating dealer details'
    )
  }
}
