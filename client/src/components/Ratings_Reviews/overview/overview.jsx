import React from 'react';
import PropTypes from 'prop-types';
import StarsBreakdown from './starsbreakdown.jsx';
import CharacteristicsBreakdown from './characteristics.jsx';

const Overview = ({ metaData }) => {
  let totalRatingsCount = 0;

  const averageRating = (ratings) => {
    let subtotal = 0;
    let n = 1;
    while (n < 6) {
      if (ratings[n]) {
        totalRatingsCount += Number(ratings[n]);
        subtotal += n * Number(ratings[n]);
      }
      n++;
    }
    return Math.round(subtotal / totalRatingsCount * 10) / 10;
  };

  const rating = averageRating(metaData.ratings);
  let ratingStr;
  if (!rating) {
    ratingStr = 'No Reviews Yet!';
  } else {
    ratingStr = `${rating} ⭐⭐⭐⭐`;
  }

  const usersRecommendedCalculator = (data) => {
    let recommendedStr;
    if (!data.true) {
      recommendedStr = 'No Recommendations Yet!';
      return recommendedStr;
    }
    if (!data.false) {
      data.false = 0;
    }
    let percent = Math.round(Number(data.true) / (Number(data.true) + Number(data.false)) * 100);
    recommendedStr = `${percent}% of reviews recommend this product`;
    return recommendedStr;
  };
  console.log('metaData', metaData);

  return (
    <div>
      <span>
        {ratingStr}
      </span>
      <div>
        {usersRecommendedCalculator(metaData.recommended)}
      </div>
      <StarsBreakdown ratings={metaData.ratings} totalRatings={totalRatingsCount} />
      <CharacteristicsBreakdown characteristics={metaData.characteristics} />
    </div>
  );
};

// Overview.propTypes = {
//   product: PropTypes.
// };

export default Overview;
