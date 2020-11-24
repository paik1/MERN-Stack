import { CommonConstants } from '../utils/constants';
import { get, post, resposeData } from './apiSvc';

export const login = async body => {
  let result = resposeData(await post('auth/login', body));
  if (result) {
    sessionStorage.setItem(CommonConstants.TOKEN, result.data.token);
    return result;
  }
  return null;
};

export const isAuthorized = async () => {
  let result = resposeData(await get('auth/isAuthorized'));
  return result ? result : null;
};
