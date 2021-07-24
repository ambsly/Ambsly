import React from 'react';
import StarsBreakdown from './starsbreakdown.jsx';
import SizeComfortMeter from './sizecomfortmeter.jsx';

const Overview = () => (
  <div>
    <span>4  </span>
    <span>⭐⭐⭐⭐</span>
    <div>100% of reviews recommend this product</div>
    <StarsBreakdown />
    <SizeComfortMeter />
  </div>
);

export default Overview;
