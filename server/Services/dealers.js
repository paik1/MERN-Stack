// All the business logic will be reside in this files
// such as file data mapping, data moduling and then it will call the method of datalayer to perform the
// CRUD opetaions into the database

const { saveOne, saveMany } = require('../DataLayers/dealers');

const saveDealer = (dealerObject) => {
  return saveOne(dealerObject);
};

module.exports = { saveDealer };
