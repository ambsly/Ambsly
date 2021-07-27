import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from './overview/overview.jsx';
import ReviewList from './reviewList/reviewlist.jsx';

const Container = styled.div`
  display: flex;
`;

const Header = styled.div`
  font-size: 24px;
`;

const RatingsAndReviews = () => {
  const [productData, setProductData] = useState(undefined);
  const [productMetaData, setProductMetaData] = useState(undefined);

  useEffect(() => {
    axios.get('/reviews', {
      params: { product_id: 25169 },
    })
      .then((reviewsResults) => {
        setProductData(reviewsResults.data);
      })
      .catch((err) => {
        console.log('somethin not working right w this hook', err);
      });

    axios.get('/reviews/meta', {
      params: { product_id: 25170 },
    })
      .then((results) => {
        setProductMetaData(results.data);
      })
      .catch((err) => {
        console.log('second get (metadata) isnt working', err);
      });
  }, []);

  if (productMetaData && productData) {
    return (
      <>
        <Header>Ratings and Reviews</Header>
        <Container>
          <Overview metaData={productMetaData} />
          <ReviewList product={productData} />
        </Container>
      </>
    );
  }
  return null;
};

export default RatingsAndReviews;
