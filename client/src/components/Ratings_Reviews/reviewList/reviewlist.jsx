import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReviewListItem from './reviewlistitem.jsx';
import AddReviewModal from './addReviewModal.jsx';
import TagsList from './tagsList.jsx';
import MetaContext from '../context/MetaContext.js';
import BigContext from '../context/BigContext.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20 px 20px;
  margin-left: 40px;
  width: 100%;
`;

const ReviewSorter = styled.div`
  font-size: large;
  margin-bottom: 12px;
`;

// set overflow props so that onclick it changes from hidden to auto
// will need state that gets switched when 'more reviews' button gets clicked
const List = styled.div`
  height: 579px;
  border-style: solid;
  border-width: 1px 0 1px 0;
  border-color: rgb(238, 238, 238);
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0 60px 0;
`;

const Button = styled.button`
  cursor: pointer;
  height: 40px;
  width: 140px;

  background: #fff;
  border-color: #b2cfeb;
  color: #0c2d47;
  background-color: transparent !important;
  border-bottom-width: 2px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  line-height: 2.6;
  text-transform: uppercase;

  &:hover {
    appearance: none;
    background: rgba(144, 164, 174, 0.8);
    border: 1px solid rgba(144, 164, 174, 0.8);
    border-radius: 0;
    cursor: pointer;
    height: 45px;
    width: 140px;
    letter-spacing: .25px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: .3s;
  }
`;

const SelectFilter = styled.select`
  margin-left: 12px;
  width: 80px;
  height: auto;
`;

const ReviewList = ({ reviews }) => {
  const [modalOpened, setModal] = useState(false);
  const [moreReviewsClicked, setMoreReviews] = useState(false);
  const { sortType, setSortType } = useContext(MetaContext);
  const { ratingFilter, setRatingFilter } = useContext(BigContext);

  let reviewList = reviews.results;
  if (ratingFilter.length !== 0) {
    reviewList = reviews.results.filter((item) => ratingFilter.includes(item.rating.toString()));
  } else {
    reviewList = reviews.results;
  }

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  const handleMoreReviewsClick = () => {
    setMoreReviews(true);
  };

  let style = { overflow: 'hidden' };
  if (moreReviewsClicked) {
    style = { overflow: 'auto' };
  }

  if (modalOpened) {
    document.documentElement.style.overflow = 'clip';
  } else {
    document.documentElement.style.overflow = 'scroll';
  }
  return (
    <Container>
      <HeaderWrapper>
        <ReviewSorter>
          {reviews.results.length}
          {' '}
          reviews, sorted by:
          <SelectFilter onChange={handleSort}>
            <option>newest</option>
            <option>helpful</option>
            <option>relevant</option>
          </SelectFilter>
        </ReviewSorter>
        <TagsList filterList={ratingFilter} />
      </HeaderWrapper>
      <List style={style}>
        {reviewList.length === 0 ? <div style={{ width: '50%', margin: '50px auto 0 auto', textAlign: 'center' }}>Sorry, no reviews here!</div> : reviewList.map((item) => <ReviewListItem key={item.review_id} item={item} />)}
      </List>
      <ButtonWrapper>
        {moreReviewsClicked ? null : <Button onClick={handleMoreReviewsClick}>More Reviews</Button>}
        <Button onClick={() => setModal(true)}>Write a Review   +</Button>
      </ButtonWrapper>
      <AddReviewModal open={modalOpened} onClose={() => setModal(false)} />
    </Container>
  );
};

export default ReviewList;
