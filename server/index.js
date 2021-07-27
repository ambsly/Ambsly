const express = require('express');
const path = require('path');
const Calls = require('../api');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  Calls.getProducts()
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.log('Error: ', err);
      res.status(500).send(err);
    });
});
app.get('/products/:product_id', (req, res) => {
  Calls.getProductbyId(req.params.product_id)
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.log('Error: ', err);
      res.status(500).send(err);
    });
});

app.get('/products/:product_id/related', (req, res) => {
  const promise = Calls.getRelatedProductIds(req.params.product_id);

  async function resolves(promises) {
    try {
      const arrOfProdIDs = await promises;

      const arrofPromisedProducts = Calls.getRelatedProductsWithIDs(arrOfProdIDs.data);
      const arrayOfProducts = await Promise.all(arrofPromisedProducts);
      const arrOfPromisedStyles = Calls.getProductStyleByIDs(arrOfProdIDs.data);
      const arrayOfStyles = await Promise.all(arrOfPromisedStyles);
      const returnedStyles = arrayOfStyles.map((results) => results.data);
      const returnedProducts = arrayOfProducts.map((results) => (results.data));

      for (let i = 0; i < returnedStyles.length; i += 1) {
        returnedProducts[i].results = returnedStyles[i].results;
      }

      res.status(200).json(returnedProducts);
    } catch (err) {
      console.log('Error: ', err);
      res.status(500).send(err);
    }
  }
  resolves(promise);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
