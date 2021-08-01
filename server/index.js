const express = require('express');
const axios = require('axios');
const path = require('path');
const config = require('../config');
const Calls = require('../api');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
axios.defaults.headers.common.Authorization = config.TOKEN;
axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

app.get('/products', (req, res) => {
  axios.get('/products')
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/products/:product_id', (req, res) => {
  axios.get(`/products/${req.params.product_id}`, { params: req.params })
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/reviews', (req, res) => {
  axios.get('/reviews', { params: req.query })
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/reviews/meta', (req, res) => {
  axios.get('/reviews/meta', { params: req.query })
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/reviews', (req, res) => {
  axios.post('/reviews', req.body)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  axios.put(`/reviews/${req.params.review_id}/helpful`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put('/reviews/:review_id/report', (req, res) => {
  axios.put(`/reviews/${req.params.review_id}/report`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/display', (req, res) => {
  Calls.getDisplay(req.query.productId)
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      // console.log('Error: ', err);
      res.status(500).send(err);
    });
});

app.post('/reviews', (req, res) => {
/*
  {
    "product_id": 25167,
    "rating": 5,
    "summary": "summary review text",
    "body": "summary body text",
    "recommend": false,
    "name": "briang",
    "email": "briang@gmail.com",
    "photos": [],
    "characteristics": { "84509": 1.5, "84510": 3, "84511": 2, "84512": 2 }
  }
*/
});

// Q&A Routes
app.get('/qa/questions', (req, res) => {
  axios.get('/qa/questions', { params: req.query })
    .then((response) => {
      res.status(200).send(response.data.results);
    })
    .catch((err) => res.status(404).send(err));
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  const questionId = req.query.question_id;
  axios.get(`/qa/questions/${questionId}/answers`, { params: req.query })
    .then((response) => res.status(200).send(response.data.results))
    .catch((err) => res.status(404).send(err));
});

app.get('/products/:product_id/related', (req, res) => {
  // console.log('this has been ran');
  const promise = Calls.getRelatedProductIds(req.params.product_id);

  async function resolves(promises) {
    try {
      const arrOfProdIDs = await promises;

      const arrofPromisedProducts = Calls.getRelatedProductsWithIDs(arrOfProdIDs.data);
      const arrayOfProducts = await Promise.all(arrofPromisedProducts);
      const arrOfPromisedStyles = Calls.getProductStyleByIDs(arrOfProdIDs.data);
      const arrayOfStyles = await Promise.all(arrOfPromisedStyles);
      // console.log(arrayOfStyles);
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

app.get('/favorites', (req, res) => {
  const { favoriteIDS } = req.query;
  async function resolves(favIDS) {
    try {
      const arrofPromisedProducts = Calls.getRelatedProductsWithIDs(favIDS);

      const arrayOfProducts = await Promise.all(arrofPromisedProducts);
      const arrOfPromisedStyles = Calls.getProductStyleByIDs(favIDS);
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
  resolves(favoriteIDS);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
