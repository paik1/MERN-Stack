import axios from 'axios';
import { errorToast } from '../components';
import { ApiConstants, CommonConstants } from '../utils/constants';

export const get = (endpoint, body) => {
  return axios.get(`${CommonConstants.API_BASE_URL}/${endpoint}`, {
    headers: getHeaders(),
  });
};

export const post = (endpoint, body) => {
  return axios.post(`${CommonConstants.API_BASE_URL}/${endpoint}`, body, {
    headers: getHeaders(),
  });
};

// This is the interceptor method which capture all the request made from axios and
// Perform the centralized operations for internal server error and the unauthorized
axios.interceptors.response.use(
  response => response,
  error => {
    console.log(error.response);
    const { status, data } = error.response;
    if (status === ApiConstants.UNAUTHORIZED) {
      errorToast({
        title: data.message,
      });
      return error.response.status;
    }

    if (status === ApiConstants['INTERNAL-SERVER-ERROR']) {
      errorToast({
        title: 'Something went wrong',
        message: 'Please try after sometime!',
      });
      return error.response.status;
    }

    if (status === ApiConstants['BAD-REQUEST']) {
      errorToast({
        title: data.message,
        message: 'Please validate the inputs',
      });
      return error.response.status;
    }

    return Promise.reject(error);
  }
);

export const resposeData = response => {
  if (response && response?.status === 200 && response?.data) {
    return response.data.data;
  }
  return null;
};

export const responseDataWithMessage = response => {
  if (response && response?.status === 201 && response?.data) {
    return response.data.message;
  }
  return null;
};

const getHeaders = () => {
  const token = sessionStorage.getItem(CommonConstants.TOKEN) || null;
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
};
