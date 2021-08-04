import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewListItem from './reviewlistitem.jsx';
import AddReviewModal from './addReviewModal.jsx';
import rat0rito from '../overview/overview.jsx';

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

const List = styled.div`
  overflow: auto;
  height: 500px;
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
  console.log('rat0rito', rat0rito);
  const [modalOpened, setModal] = useState(false);
  if (modalOpened) {
    document.documentElement.style.overflow = 'clip';
  } else {
    document.documentElement.style.overflow = 'scroll';
  }
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
      <List>
        {reviews.results.map((item) => <ReviewListItem key={item.review_id} item={item} />)}
      </List>
      <ButtonWrapper>
        <Button>More Reviews</Button>
        <Button onClick={() => setModal(true)}>Add a Review   +</Button>
      </ButtonWrapper>
      <AddReviewModal open={modalOpened} onClose={() => setModal(false)} />
    </Container>
  );
};

export default ReviewList;
