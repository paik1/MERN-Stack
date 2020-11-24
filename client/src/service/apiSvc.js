import axios from 'axios';
import { errorToast, successToast } from '../components';
import { ApiConstants, CommonConstants } from '../utils/constants';

export const get = (endpoint, body) => {
  return axios.get(`${CommonConstants.API_BASE_URL}/${endpoint}`, {
    headers: getHeaders(),
  });
};

export const post = (endpoint, body) => {
  return axios.post(
    `${CommonConstants.API_BASE_URL}/${endpoint}`,
    body,
    getHeaders()
  );
};

axios.interceptors.response.use(
  response => {
    if (response.status === ApiConstants.SUCCESS) {
      successToast({
        title: response.data.message,
      });
    }
    return response;
  },
  error => {
    const { status } = error.response;
    if (status === ApiConstants.UNAUTHORIZED) {
      errorToast({
        title: 'Invalid Credential',
        message: 'Please try with valid credential',
      });
      return error.response.status;
    }
    return Promise.reject(error);
  }
);

export const resposeData = response => {
  if (response && response?.status === 200 && response?.data) {
    return response.data;
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
