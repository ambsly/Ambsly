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

  promise
    .then((results) => {
      Calls.getRelatedProductsWithIDs(results.data, (err, arrayWithData) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          console.log(arrayWithData);
          res.status(200).send(arrayWithData);
        }
      });
    })
    .catch((err) => {
      console.log('Error: ', err);
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
