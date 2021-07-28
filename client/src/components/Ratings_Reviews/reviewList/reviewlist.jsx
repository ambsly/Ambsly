import React from 'react';
import ReviewListItem from './reviewlistitem.jsx';

const ReviewList = ({ reviews }) => {
  console.log('product on reviewList', reviews);
  let list = reviews.results.map((item) => <ReviewListItem item={item} />);
  return (
    <div>
      <div>
        248 reviews, sorted by:
        <select>
          <option>relevance</option>
          <option>newest</option>
          <option>most upvoted</option>
        </select>
      </div>
      {/* <ReviewListItem item={reviews.results[0]} />
      <ReviewListItem />
      <ReviewListItem /> */}
      {list}
      <div>
        <button type="submit">More Reviews</button>
        <button type="submit">Add a Review   +</button>
      </div>

    </div>
  );
};

export default ReviewList;
