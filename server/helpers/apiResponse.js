export const successCreated = (res, message) => {
  var data = {
    status: 1,
    message,
  }
  return res.status(201).json(data)
}

export const successCreatedWithData = (res, message, data) => {
  var data = {
    status: 1,
    message,
    data,
  }
  return res.status(201).json(data)
}

export const successResponse = (res, message) => {
  var data = {
    status: 1,
    message,
  }
  return res.status(200).json(data)
}

export const successResponseWithData = (res, message, data) => {
  var resData = {
    status: 1,
    message,
    data,
  }
  return res.status(200).json(resData)
}

export const errorResponse = (res, message) => {
  var data = {
    status: 0,
    message,
  }
  return res.status(500).json(data)
}

export const verboseErrorResponse = (res, message, details) => {
  var data = {
    status: 0,
    message,
    details
  }
  return res.status(500).json(data)
}

export const notFoundResponse = (res, message) => {
  var data = {
    status: 0,
    message,
  }
  return res.status(404).json(data)
}

export const validationErrorWithData = (res, message, data) => {
  var resData = {
    status: 0,
    message,
    data: data,
  }
  return res.status(400).json(resData)
}

export const unauthorizedResponse = (res, message) => {
  var data = {
    status: 0,
    message,
  }
  return res.status(401).json(data)
}
