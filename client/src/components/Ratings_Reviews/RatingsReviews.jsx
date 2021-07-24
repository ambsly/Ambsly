import React from 'react';
import styled from 'styled-components';

import Overview from './overview/overview.jsx';
import ReviewList from './reviewList/reviewlist.jsx';

const Container = styled.div`
  display: flex;
`;

const Header = styled.div`
  font-size: 24px;
`;

const RatingsAndReviews = () => (
  <>
    <Header>Ratings and Reviews</Header>
    <Container>
      <Overview />
      <ReviewList />
    </Container>
  </>
);

export default RatingsAndReviews;
