import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Overview } from './overview/overview.jsx';
import ReviewList from './reviewList/reviewlist.jsx';
import MetaContext from './context/MetaContext.js';
import BigContext from './context/BigContext.js';
import { ProductsContext } from '../globalState.jsx';

const OuterContainer = styled.div`
  margin: auto;
  width: 1000px;
  font-family: AtlasGrotesk-Light, sans-serif;
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 1000px;
`;

const Header = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const RatingsAndReviews = () => {
  // const [count, setCount] = useState(2);
  const [productData, setProductData] = useState(undefined);
  const [productMetaData, setProductMetaData] = useState(undefined);
  const [sortType, setSortType] = useState('newest');
  const [ratingFilter, setRatingFilter] = useState([]);
  const [reviewSubmit, setReviewSubmit] = useState(false);
  const [products, setProducts] = useContext(ProductsContext);

  // state of search type
  // pass down state and setter in context down to review list
  // have useEffect watch for changes in this state
  // if it changes, trigger another get to /reviews
  // prob have to break up useeffect

  // products.currentItemId

  useEffect(() => {
    axios.get('/reviews', {
      params: { product_id: products.currentItemId, sort: sortType, count: 100 },
    })
      .then((reviewsResults) => {
        setProductData(reviewsResults.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortType, products]);

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: { product_id: products.currentItemId },
    })
      .then((results) => {
        setProductMetaData(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  if (productMetaData && productData) {
    return (
      <OuterContainer>
        <Header>Ratings and Reviews</Header>
        <Container>
          <BigContext.Provider value={{ productData, productMetaData, ratingFilter, setRatingFilter, reviewSubmit, setReviewSubmit }}>
            <Overview metaData={productMetaData} />
            <MetaContext.Provider value={{ sortType, setSortType }}>
              <ReviewList reviews={productData} />
            </MetaContext.Provider>
          </BigContext.Provider>
        </Container>
      </OuterContainer>
    );
  }
  return null;
};

export default RatingsAndReviews;
