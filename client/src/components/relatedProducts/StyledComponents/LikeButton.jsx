import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FavoritesContext, ButtonClickedContext } from '../../globalState.jsx';

const StyledLikeButton = styled.button`
position: absolute;
transform: translateX(180px);
background-color: transparent;
border: none;
`;

const StyledFavIcon = styled.span`
font-size: 50px;
position: absolute;
color: rgba(144,164,174, 1);
`;

function LikeButton({ card, id }) {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [buttonValue, setButtonValue] = useContext(ButtonClickedContext);

  function saveFavorite() {
    const newFav = favorites;
    const newObj = {};
    newObj[id] = card;
    newFav[id] = newObj;
    localStorage.setItem('favoriteProducts', JSON.stringify(newFav));
    setFavorites((prevState) => ({ ...prevState, ...newObj }));
    setButtonValue(true);
  }
  return (
    <StyledLikeButton>
      <StyledFavIcon className="material-icons fav" onClick={saveFavorite}>
        favorite_border
      </StyledFavIcon>
    </StyledLikeButton>
  );
}

export default LikeButton;
