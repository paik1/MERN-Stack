export const nullOrUndefinedObject = dataObject => {
  return Object.values(dataObject).some(item => item === null);
};

export const addErrorStyleToInput = parentId => {
  let childs = document.getElementById(parentId).childNodes;
  childs.forEach(child => {
    child.className = 'error-input';
  });
};

export const removeErrorStyleToInput = parentId => {};
