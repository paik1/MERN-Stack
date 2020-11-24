import { get, post, resposeData, responseDataWithMessage } from './apiSvc';

export const getAllEmployees = async () => {
  return resposeData(await get('actor'));
};

export const addNewEmployee = async body => {
  return responseDataWithMessage(await post('actor/register/worker', body));
};

export const updateEmployee = async body => {};

export const deleteEmployee = async id => {};
