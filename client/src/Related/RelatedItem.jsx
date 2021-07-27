import React, { useContext } from 'react';
import styled from 'styled-components';
import { PizzaContext } from '../index.jsx';

function RelatedItem({ cardInfo }) {
  console.log(cardInfo);
  const {
    // eslint-disable-next-line react/prop-types
    id, campus, name, slogan, description, category, create_At,
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line camelcase
    default_price, ...rests
  } = cardInfo;
  const { results } = rests;
  const [firstStyle] = results;
  const { photos } = firstStyle;
  const [firstPhoto] = photos;
  // console.log(firstPhoto, 'what is this?');

  return (
    <div className="relatedCard">
      <img src={firstPhoto.thumbnail_url} alt="" className="cardImage" />
      <div className="productDetails">
        <div className="categoryName">{category}</div>
        <div className="productName">{name}</div>
        <div className="productPrice">
          $
          {default_price}
        </div>
      </div>
    </div>
  );
}

export default RelatedItem;
