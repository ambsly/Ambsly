import React from 'react';
import StarsBreakdown from './starsbreakdown.jsx';
import SizeComfortMeter from './sizecomfortmeter.jsx';

const Overview = () => (
  <div>
    <div>Ratings and Reviews</div>
    <div>4  ⭐⭐⭐⭐</div>
    <div>100% of reviews recommend this product</div>
    <StarsBreakdown />
    <SizeComfortMeter />
  </div>
);

export default Overview;
