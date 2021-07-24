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
    <ReviewListItem />
    <ReviewListItem />
    <div>
      <button type="submit">More Reviews</button>
      <button type="submit">Add a Review   +</button>
    </div>

  </div>
);

export default ReviewList;
