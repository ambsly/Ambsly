import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';
import StarsBreakdown from './starsbreakdown.jsx';
import CharacteristicsBreakdown from './characteristics.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: large;
  margin-left: 15px;
  /* border: 0.5px solid;
  border-radius: 3px; */
`;

const RatingWrapper = styled.div`
  display: flex;
  /* margin-bottom: 25px; */
`;

const Rating = styled.div`
  display: inline-block;
  font-size: xx-large;
  padding-right: 3px;
`;

const Recommends = styled.div`
  padding-bottom: 6px;
  margin: 25px 0px;
`;

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

  const rating = averageRating(metaData.ratings);
  let ratingStr;
  if (!rating) {
    ratingStr = 'No Reviews Yet!';
  } else {
    ratingStr = `${rating}`;
  }

  return (
    <Container>
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
    </Container>
  );
};

// Overview.propTypes = {
//   product: PropTypes.
// };

export default Overview;
