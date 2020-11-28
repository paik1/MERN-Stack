export const nullOrUndefinedObject = dataObject => {
  return Object.values(dataObject).some(item => item === null);
};
