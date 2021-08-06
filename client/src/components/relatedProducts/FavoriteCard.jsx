import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FavoritesContext, ButtonClickedContext } from '../globalState.jsx';

const StyledCardContainer = styled.div`
width: 253px;
height: 300px;
flex-shrink: 0;
padding-right: 15px;
box-sizing: border-box;
`;

const StyledCard = styled.div`
width: 100%;
height: 100%;
border: 1px solid black;
box-sizing: border-box;
display: flex;
flex-direction: column;
`;

const StyledImageCardContainer = styled.div`
object-fit: cover;
position: relative;
height: 175px;
`;

const StyledCardImage = styled.img`
object-fit: cover;
width: 100%;
height: 100%;`;

const StyledProductDetails = styled.div`
display: flex;
flex-direction: column`;

const StyledCategoryName = styled.span`
font-size: 12px;
font-style: italic;
line-height: 20px;
padding: 1px;
margin: 2px;
color: black;`;
const StyledProductName = styled.span`
font-size: 15px;
padding: 1px;
margin: 2px;
color: black;`;
const StyledProductPrice = styled.span`
font-weight: bold;
font-size: 16px;
padding-top: 4px;
margin: 2px;
color: black;`;

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
    <StyledCardContainer>
      <StyledCard>
        <StyledImageCardContainer>
          <button className="like-button" type="submit" onClick={removeFavorite}>
            <span className="material-icons fav">
              favorite
            </span>
          </button>
          <StyledCardImage src={firstPhoto.thumbnail_url} alt="" />
        </StyledImageCardContainer>
        <StyledProductDetails>
          <StyledCategoryName>{category}</StyledCategoryName>
          <StyledProductName>{name}</StyledProductName>
          <StyledProductPrice>
            $
            {default_price}
          </StyledProductPrice>
        </StyledProductDetails>
      </StyledCard>
    </StyledCardContainer>
  );
}

export default FavoriteCard;
