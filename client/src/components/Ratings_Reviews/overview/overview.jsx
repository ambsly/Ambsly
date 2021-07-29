import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StarsBreakdown from './starsbreakdown.jsx';
import CharacteristicsBreakdown from './characteristics.jsx';

// const Stars = styled.div`
//   display: inline-block;
//   font-size: 25px;
//   font-family: Times;
//   line-height: 1;

//   &::before {
//     content: "★★★★★";
//     letter-spacing: 3px;
//     background: linear-gradient(90deg, #fco ${props => props.rating}),
//     #000 ${props => prop.rating});
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: large;
  margin-left: 15px;
  padding: 5px;
  /* border: 0.5px solid;
  border-radius: 3px; */
`;

const Rating = styled.div`
  font-size: x-large;
  padding-bottom: 8px;
`;

const Recommends = styled.div`
  padding-bottom: 6px;
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

  const rating = averageRating(metaData.ratings);
  let ratingStr;
  if (!rating) {
    ratingStr = 'No Reviews Yet!';
  } else {
    ratingStr = `${rating}  ★★★★`;
    // the stars will have to be dynamic
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

  return (
    <Container>
      <Rating>
        {ratingStr}
      </Rating>
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
