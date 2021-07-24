import React from 'react';

const ReviewListItem = () => (
  <div>
    <span>⭐⭐⭐⭐⭐</span>
    <span>User 1234, January 1, 2021</span>
    <div>Review Title that does not wrap onto next line</div>
    <p>
      This is a review that i probably shouldnt spend typing out but have
      already started so its too late just gonna make this longer to fill up some space
      so here we are filling up space lol
    </p>
    <span>Helpful?</span>
    <span>
      <a href="helpful.com">Yes</a>
      (10)
    </span>
    <span>
      <a href="report.com">Report</a>
    </span>
  </div>

);

export default ReviewListItem;
