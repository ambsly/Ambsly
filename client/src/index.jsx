/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Favorites from './components/relatedProducts/Favorites.jsx';
import Modal from './components/relatedProducts/Modal.jsx';
// eslint-disable-next-line import/extensions
import Related from './components/relatedProducts/Related.jsx';

import QAndA from './components/qAndA/QAndA';
import ProductDetails from './components/productDetails/index.jsx';

export const idContext = React.createContext(0);

function App() {
  const [productID, setID] = useState(0);

  useEffect(() => {
    axios.get('/products')
      .then((results) => {
        const { id } = results.data[0];
        setID(id);
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log('Error retrieving product data: ', err);
      });
  }, []);

  // console.log(productID, 'checking here in index');

  return (
    <div>

      <ProductDetails />
      <idContext.Provider value={productID}>
        <Related />
      </idContext.Provider>
      <Favorites />
      <QAndA />
      hey
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
