import React, { useState, useContext } from 'react';
import ReviewListItem from './reviewlistitem';
import AddReviewModal from './addReviewModal';
import TagsList from './tagsList';
import MetaContext from '../context/MetaContext';
import ReviewContext from '../context/ReviewContext';
import { Container, HeaderWrapper, ReviewSorter, SelectFilter, List, ButtonWrapper, Button } from './styles/reviewListStyles';

const ReviewList = ({ reviews }) => {
  const [modalOpened, setModal] = useState(false);
  const [moreReviewsClicked, setMoreReviews] = useState(false);
  const { sortType, setSortType } = useContext(MetaContext);
  const { ratingFilter, setRatingFilter } = useContext(ReviewContext);

  const reviewList = ratingFilter.length !== 0 ?
    reviews.results.filter((item) => ratingFilter.includes(item.rating.toString()))
    : reviews.results;

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
