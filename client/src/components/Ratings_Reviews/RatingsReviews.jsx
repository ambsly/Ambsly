import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Overview } from './overview/overview.jsx';
import ReviewList from './reviewList/reviewlist.jsx';
import MetaContext from './context/MetaContext.js';
import BigContext from './context/BigContext.js';

const OuterContainer = styled.div`
  margin: auto;
  width: 1000px;
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 1000px;
`;

const Header = styled.div`
  font-size: 24px;
  margin-bottom: 14px;
`;

const RatingsAndReviews = () => {
  // const [count, setCount] = useState(2);
  const [productData, setProductData] = useState(undefined);
  const [productMetaData, setProductMetaData] = useState(undefined);
  const [sortType, setSortType] = useState('helpful');
  const [ratingFilter, setRatingFilter] = useState([]);

  // state of search type
  // pass down state and setter in context down to review list
  // have useEffect watch for changes in this state
  // if it changes, trigger another get to /reviews
  // prob have to break up useeffect

  //

  useEffect(() => {
    axios.get('/reviews', {
      params: { product_id: 25167, sort: sortType, count: 10 },
    })
      .then((reviewsResults) => {
        setProductData(reviewsResults.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortType]);

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: { product_id: 25167 },
    })
      .then((results) => {
        setProductMetaData(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (productMetaData && productData) {
    return (
      <OuterContainer>
        <Header>Ratings and Reviews</Header>
        <Container>
          <BigContext.Provider value={{ ratingFilter, setRatingFilter }}>
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
