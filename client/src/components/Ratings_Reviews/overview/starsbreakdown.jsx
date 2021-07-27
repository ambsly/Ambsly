import React from 'react';

const StarsBreakdown = ( {ratings, totalRatings} ) => (
  <>
    <div>
      <label htmlFor="5starbar">5  stars</label>
      {'  '}
      <meter className="5starbar" min="0" max={totalRatings.toString()} value={ratings[5]} />
    </div>
    <div>
      <label htmlFor="4starbar">4  stars</label>
      {'  '}
      <meter className="4starbar" min="0" max={totalRatings.toString()} value={ratings[4]} />
    </div>
    <div>
      <label htmlFor="3starbar">3  stars</label>
      {'  '}
      <meter className="3starbar" min="0" max={totalRatings.toString()} value={ratings[3]} />
    </div>
    <div>
      <label htmlFor="2starbar">2  stars</label>
      {'  '}
      <meter className="2starbar" min="0" max={totalRatings.toString()} value={ratings[2]} />
    </div>
    <div>
      <label htmlFor="1starbar">1  star</label>
      {'  '}
      <meter className="1starbar" min="0" max={totalRatings.toString()} value={ratings[1]} />
    </div>
  </>
);

export default StarsBreakdown;
