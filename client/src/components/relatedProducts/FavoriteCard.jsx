import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FavoritesContext, ButtonClickedContext } from '../globalState.jsx';

function FavoriteCard({ cardInfo }) {
  const [buttonValue, setButtonValue] = useContext(ButtonClickedContext);
  const [favorites, setFavorites] = useContext(FavoritesContext);
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
    const newFavorites = favorites;
    delete newFavorites[id];
    localStorage.setItem('favoriteProducts', JSON.stringify(favorites));
    setButtonValue(true);
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
