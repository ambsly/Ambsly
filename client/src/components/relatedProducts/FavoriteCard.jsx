import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ClickedContext } from '../buttonState.jsx';

function FavoriteCard({ cardInfo }) {
  const [state, setState] = useContext(ClickedContext);
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

  function removeFavorite() {
    const oldData = JSON.parse(localStorage.getItem('dataArray'));
    if (oldData.length === 1) {
      localStorage.setItem('dataArray', '[]');
      setState((prevState) => ({ ...prevState, buttonClicked: true }));
    } else {
      const newArray = oldData.filter((value) => value !== id);
      localStorage.setItem('dataArray', JSON.stringify(newArray));
      setState((prevState) => ({ ...prevState, buttonClicked: true }));
    }
  }

  return (
    <div className="card-container">
      <button type="submit" onClick={removeFavorite}>Remove</button>
      <div className="card">
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
    </div>
  );
}

export default FavoriteCard;
