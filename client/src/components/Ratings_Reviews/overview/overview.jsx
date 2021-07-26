import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StarsBreakdown from './starsbreakdown.jsx';
import SizeComfortMeter from './sizecomfortmeter.jsx';

const ratingCalculator = (reviewArr = []) => {
  let avgRating = 0;
  for (let i = 0; i < reviewArr.length; i++) {
    avgRating += reviewArr[i].rating;
  }
  return Math.round((avgRating / reviewArr.length) * 2) / 2;
};

const Overview = ({ product }) => {
  // console.log('product results arr: ', product.results);
  const currRating = ratingCalculator(product.results);
  return (
    <div>
      <span>{currRating}  </span>
      <span>⭐⭐⭐⭐</span>
      <div>100% of reviews recommend this product</div>
      <StarsBreakdown />
      <SizeComfortMeter />
    </div>
  );
};

// Overview.propTypes = {
//   product: PropTypes.
// };

export default Overview;
