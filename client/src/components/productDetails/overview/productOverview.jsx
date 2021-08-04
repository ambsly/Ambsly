import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import ProductStyles from './productStyles.jsx';
import ProductSelection from './productSelection.jsx';
import { Facebook } from '@styled-icons/fa-brands/Facebook';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import { Pinterest } from '@styled-icons/fa-brands/Pinterest';
import { rate } from '../../Ratings_Reviews/overview/overview.jsx';

const Container = styled.div`
margin-top: 50px;
`;

const Category = styled.div`
font-size: 14px;
`;

const ProductName = styled.div`
font-size: 32px;
`;

const Price = styled.div`
font-size: 16px;
`;

const ProductOverview = ({ productData, currentStyle, styles, changeStyle }) => {
  if (!currentStyle) {
    return (
      <></>
    );
  }

  const { category } = productData;
  const { name } = productData;
  const { default_price } = productData;
  const styleName = currentStyle.name;

  const rating = rate();

  return (
    <Container>
      <Category><i>{category} </i></Category>
      <ProductName><b>{name}</b></ProductName>
      <StarRatings
          rating={rating[0]}
          starRatedColor="gold"
          starDimension="15px"
          starSpacing="0"
          numberOfStars={5}
          name="rating"
        />
      <span
        style={{
          fontSize: "12px"
        }}
      >
        {rating[1]} Reviews
      </span>
      <br />
      <br />
      <Price>${default_price}</Price>
      <br />
      <ProductStyles styles={styles} currentStyle={currentStyle} changeStyle={changeStyle} />
      <ProductSelection currentStyle={currentStyle} />
    </Container>
  );
};

export default ProductOverview;
