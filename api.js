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
  console.log('test', productId);
  productOptions.url += `products/${productId}/related`;
  console.log(productOptions.url, 'testing the url in api.js');
  return axios(productOptions);
};

const getRelatedProductsWithIDs = (arrayOfProductIds, callBack) => {
  const arrayOfPromises = arrayOfProductIds.map((productId) => (
    getProductbyId(productId)
  ));

  async function Resolver(array) {
    try {
      const resolvedPromises = await Promise.all(array);
      const arrayOfData = resolvedPromises.map((packet) => (
        packet.data
      ));

      callBack(null, arrayOfData);
    } catch (err) {
      callBack(err);
    }
  }

  Resolver(arrayOfPromises);
};

module.exports = {
  getProducts,
  getProductbyId,
  getRelatedProductIds,
  getRelatedProductsWithIDs,
};
