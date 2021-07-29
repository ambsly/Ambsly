import React from 'react';
import styled from 'styled-components';
import ReviewListItem from './reviewlistitem.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20 px 20px;
  margin-left: 40px;
`;

const ReviewSorter = styled.div`
  font-size: large;
  margin-bottom: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 40px 0;
`;

const Button = styled.button`
  cursor: pointer;
  height: 40px;
  type: submit;
  width: 130px;
`;

const ReviewList = ({ reviews }) => {
  console.log('product on reviewList', reviews);
  // let list = reviews.results.map((item) => <ReviewListItem item={item} />);
  return (
    <Container>
      <ReviewSorter>
        248 reviews, sorted by:
        {'  '}
        <select>
          <option>relevance</option>
          <option>newest</option>
          <option>most upvoted</option>
        </select>
      </ReviewSorter>
      {reviews.results.map((item) => <ReviewListItem key={item.review_id} item={item} />)}
      <ButtonWrapper>
        <Button>More Reviews</Button>
        <Button>Add a Review   +</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default ReviewList;
