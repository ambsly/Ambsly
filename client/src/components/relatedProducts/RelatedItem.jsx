import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import { FavoritesContext, buttonClickedContext } from '../globalState.jsx';

const BUTTON_WRAPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

function RelatedItem({ cardInfo }) {
  const [buttonValue, setButtonValue] = useContext(buttonClickedContext);
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const card = cardInfo;
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
  const [isOpen, setIsOpen] = useState(false);
  // const [buttonClicked, setbuttonClicked] = useState(false);

  function saveFavorite() {
    const newFav = favorites;
    const newObj = {};
    newObj[id] = card;
    newFav[id] = newObj
    localStorage.setItem('favoriteProducts', JSON.stringify(newFav));
    setFavorites((prevState) => ({ ...prevState, ...newObj }));
    setButtonValue(true);
  }

  return (
    <div className="card-container">
      <button type="submit" onClick={saveFavorite}>Favorites</button>
      <div className="card">
        <img src={firstPhoto.thumbnail_url} alt="" className="cardImage" />
        <div className="productDetails">
          <div className="categoryName">{category}</div>
          <div className="productName">{name}</div>
          <div className="productPrice">
            $

            {default_price}
          </div>
          <div style={BUTTON_WRAPER_STYLES}>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
          </div>
        </div>
      </div>
      {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Comparing
      </Modal> */}
    </div>
  );
}

export default RelatedItem;
