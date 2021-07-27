import React from 'react';
import PropTypes from 'prop-types';
import StarsBreakdown from './starsbreakdown.jsx';
import SizeComfortMeter from './sizecomfortmeter.jsx';

const Overview = ({ metaData }) => {
  let totalRatingsCount = 0;

  const averageRating = (metaDataRatings) => {
    let subtotal = 0;
    let n = 1;
    while (n < 6) {
      totalRatingsCount += Number(metaDataRatings[n]);
      subtotal += n * Number(metaDataRatings[n]);
      n++;
    }
    return Math.round(subtotal / totalRatingsCount * 2) / 2;
  };

  const recommendPercentageCalculator = (data) => (
    Math.round(Number(data.true) / (Number(data.true) + Number(data.false)) * 100)
  );

  return (
    <div>
      <span>
        {averageRating(metaData.ratings)}
        {' '}
      </span>
      <span>⭐⭐⭐⭐</span>
      <div>
        {recommendPercentageCalculator(metaData.recommended)}
        % of reviews recommend this product
      </div>
      <StarsBreakdown />
      <SizeComfortMeter />
    </div>
  );
};

// Overview.propTypes = {
//   product: PropTypes.
// };

export default Overview;
