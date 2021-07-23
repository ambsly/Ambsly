import React from 'react';
import ReviewListItem from './reviewlistitem.jsx';

const ReviewList = () => (
  <div>
    <div>
      248 reviews, sorted by:
      <select>
        <option>relevance</option>
        <option>newest</option>
        <option>most upvoted</option>
      </select>
    </div>
    <ReviewListItem />
  </div>
);

export default ReviewList;
