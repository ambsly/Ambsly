const axios = require('axios');
const config = require('./config');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/',
  headers: {
    'User-Agent': 'get',
    Authorization: config.TOKEN,
  },
};
const getProducts = () => {
  const productOptions = Object.create(options);
  productOptions.url += 'products';
  return axios(productOptions);
};

const getProductbyId = (productId) => {
  const productOptions = Object.create(options);
  productOptions.url += `products/${productId}`;
  return axios(productOptions);
};

const getRelatedProductIds = (productId) => {
  const productOptions = Object.create(options);
  productOptions.url += `products/${productId}/related`;
  return axios(productOptions);
};

const getRelatedProductsWithIDs = (arrayOfProductIds) => {
  const arrayOfPromises = arrayOfProductIds.map((productId) => (
    getProductbyId(productId)
  ));
  return arrayOfPromises;
};

const getProductStyleByID = (productId) => {
  const productOptions = Object.create(options);
  productOptions.url += `products/${productId}/styles`;
  return axios(productOptions);
};

const getProductStyleByIDs = (arrayOfProductIds) => {
  const arrayOfPromises = arrayOfProductIds.map((productId) => (
    getProductStyleByID(productId)
  ));
  return arrayOfPromises;
};

module.exports = {
  getProducts,
  getProductbyId,
  getRelatedProductIds,
  getRelatedProductsWithIDs,
  getProductStyleByID,
  getProductStyleByIDs,
};
