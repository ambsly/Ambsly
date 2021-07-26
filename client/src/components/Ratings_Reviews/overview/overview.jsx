import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StarsBreakdown from './starsbreakdown.jsx';
import SizeComfortMeter from './sizecomfortmeter.jsx';

const ratingCalculator = (reviewArr = []) => {
  let avgRating = 0;
  let avgRecommendPercent = 0;
  for (let i = 0; i < reviewArr.length; i++) {
    avgRating += reviewArr[i].rating;
    if (reviewArr[i].recommend) {
      avgRecommendPercent += 100;
    }
  }
  const finalAvg = Math.round((avgRating / reviewArr.length) * 2) / 2;
  const finalRecommendedPercent = avgRecommendPercent / reviewArr.length;
  return [finalAvg, finalRecommendedPercent];
};

const Overview = ({ product }) => {
  // console.log(ratingCalculator(product.results));
  // console.log('product ', product);
  const currRating = ratingCalculator(product.results);
  return (
    <div>
      <span>{currRating[0]}  </span>
      <span>⭐⭐⭐⭐</span>
      <div>{currRating[1]}% of reviews recommend this product</div>
      <StarsBreakdown />
      <SizeComfortMeter />
    </div>
  );
};

// Overview.propTypes = {
//   product: PropTypes.
// };

export default Overview;
