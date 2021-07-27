import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StarsBreakdown from './starsbreakdown.jsx';
import SizeComfortMeter from './sizecomfortmeter.jsx';

const Overview = ({ product, metaData }) => {
  const totalRatingsCount = (ratings) => {
    let total = 0;
    let n = 1;
    while (n < 6) {
      total += ratings;
      n++;
    }
    return total;
  };

  const averageRating = (ratings) => {
    // pass in metaData.ratings
    let totalCount = totalRatingsCount(ratings);
    let subtotal = 0;
    let n = 1;
    while (n < 6) {
      subtotal += n * Number(ratings);
      n++;
    }
    return subtotal / totalCount;
    // let total = totalRatingsCount()
    // let subtotal = 0;
    // let n = 1;
    // while n < 6
    // subtotal += n * Number(metaData.ratings['n'])
    // return subtotal/total;
  };

  const recommendPercentageCalculator = (metaData) => {
    // const recommendedPercent = metaData.recommended.true / (metaData.recommended.true + .false)
  };

  console.log('metaData prop: ', metaData);
  return (
    <div>
      <span>4  </span>
      <span>⭐⭐⭐⭐</span>
      <div>90% of reviews recommend this product</div>
      <StarsBreakdown />
      <SizeComfortMeter />
    </div>
  );
};

// Overview.propTypes = {
//   product: PropTypes.
// };

export default Overview;
