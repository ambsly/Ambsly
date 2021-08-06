/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/header/header.jsx';
import RatingsAndReviews from './components/Ratings_Reviews/RatingsReviews.jsx';
import Favorites from './components/relatedProducts/Favorites.jsx';
import Modal from './components/relatedProducts/Modal.jsx';
// eslint-disable-next-line import/extensions
import Related from './components/relatedProducts/Related.jsx';
import QAndA from './components/qAndA/QAndA';
import ProductDetails from './components/productDetails/index.jsx';
import GlobalStateProvider, { ProductsContext } from './components/globalState.jsx';
import CarouselComponent from './components/relatedProducts/StyledComponents/CarouselComponent.jsx';

export const idContext = React.createContext(0);

function App() {
  const [productID, setID] = useState(0);
  const [product, setProduct] = useState();
  useEffect(() => {
    axios.get('/products')
      .then((results) => {
        const { id } = results.data[2];
        setProduct(results.data[4]);
        setID(id);
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log('Error retrieving product data: ', err);
      });
  }, []);

  return (
    <div>
      <Header />
      <GlobalStateProvider>
        {/* <CarouselComponent /> */}
        <idContext.Provider value={productID}>
          <ProductDetails productData={product} />
          <Related />
          <Favorites />
          <QAndA />
          <RatingsAndReviews />
        </idContext.Provider>
      </GlobalStateProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
