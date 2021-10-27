import React from 'react';
import StarRatings from 'react-star-ratings';
import StarsBreakdown from './starsbreakdown';
import CharacteristicsBreakdown from './characteristics';
import { OverviewContainer, RatingWrapper, Rating, Recommends } from './styles/review-styles-overview';

// heavy refactor needed

let totalRatingsCount = 0;

const averageRating = (ratings) => {
  totalRatingsCount = 0;
  let subtotal = 0;
  let n = 1;
  while (n < 6) {
    if (ratings[n]) {
      totalRatingsCount += Number(ratings[n]);
      subtotal += n * Number(ratings[n]);
    }
    n += 1;
  }
  return Math.round(subtotal / totalRatingsCount * 10) / 10;
};

let rating;

export const Overview = ({ metaData }) => {
  const usersRecommendedCalculator = (data) => {
    let recommendedStr;
    if (!data.true) {
      recommendedStr = 'No Recommendations Yet!';
      return recommendedStr;
    }
    if (!data.false) {
      data.false = 0;
    }
    const percent = Math.round(Number(data.true) / (Number(data.true) + Number(data.false)) * 100);
    recommendedStr = `${percent}% of reviews recommend this product`;
    return recommendedStr;
  };

  rating = averageRating(metaData.ratings);
  let ratingStr;
  if (!rating) {
    ratingStr = 'No Reviews Yet!';
  } else {
    ratingStr = `${rating}`;
  }

  return (
    <OverviewContainer>
      <RatingWrapper>
        <Rating>
          {ratingStr}
        </Rating>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          starDimension="15px"
          starSpacing="0"
          numberOfStars={5}
          name="rating"
        />
      </RatingWrapper>
      <Recommends>
        {usersRecommendedCalculator(metaData.recommended)}
      </Recommends>
      <StarsBreakdown ratings={metaData.ratings} totalRatings={totalRatingsCount} />
      <CharacteristicsBreakdown characteristics={metaData.characteristics} />
    </OverviewContainer>
  );
};

export const rate = () => [rating, totalRatingsCount];

export default { Overview, rate };
