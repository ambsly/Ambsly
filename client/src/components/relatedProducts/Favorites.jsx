import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import FavoriteCard from './FavoriteCard.jsx';
import CarouselComponent from './StyledComponents/CarouselComponent.jsx';
import { FavoritesContext, ButtonClickedContext } from '../globalState.jsx';

function Favorites() {
  const [buttonValue, setButtonValue] = useContext(ButtonClickedContext);
  const [favorites, setFavorites] = useContext(FavoritesContext);

  useEffect(() => {
    setButtonValue(false);
    localStorage.setItem('favoriteProducts', JSON.stringify(favorites));
  }, [favorites, buttonValue]);

  // function onClickLeft() {
  //   if (width !== 0) {
  //     setWidth((prevState) => prevState + 253);
  //     track.current.style.transform = `translate(${width + 253}px`;
  //   }
  // }

  // function onClickRight() {
  //   if (width === (Object.keys(favorites).length * -253) + 1012
  //   || ((Object.keys(favorites).length * -253)) > -1012) {
  //     console.log('capped');
  //   } else {
  //     console.log((Object.keys(favorites).length * -253) + 1012);
  //     console.log(width);
  //     setWidth((prevState) => prevState - 253);
  //     track.current.style.transform = `translate(${width - 253}px`;
  //   }
  // }

  const FavoriteCards = Object.keys(favorites).map((item) => (

    <FavoriteCard
      key={item}
      cardInfo={favorites[item]}
    />
  ));

  return (
    <CarouselComponent cards={FavoriteCards} name="FavoriteProducts" />
  );
}

export default Favorites;