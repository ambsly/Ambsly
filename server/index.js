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
  Calls.getProducts()
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.log('Error: ', err);
      res.status(500).send(err);
    });
});

// app.get('/reviews/:id', (req, res) => {
//   const endpointID = req.params.id;
//   Calls.getReviewsFor(endpointID)
//     .then((results) => {
//       res.status(200).send(results.data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

app.get('/reviews', (req, res) => {
  console.log('request URL query: ', req.query);
  axios.get('/reviews', { params: req.query })
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/reviews/meta', (req, res) => {
  console.log('request URL query: ', req.query);
  axios.get('/reviews/meta', { params: req.query })
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/qa/questions', (req, res) => {
  axios.get('/qa/questions', { params: req.query })
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => res.status(404).send(err));
});

// app.get('/qa/questions/:question_id/answers', (req, res) => {
//   axios.get('/qa/questions/:question_id/answers', { params: req.query })
//     .then((results) => res.status(200).send(results.data))
//     .catch((err) => res.status(404).send(err));
// });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
