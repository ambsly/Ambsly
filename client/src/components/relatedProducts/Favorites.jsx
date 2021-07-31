import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import FavoriteCard from './FavoriteCard.jsx';
import { FavoritesContext, buttonClickedContext } from '../globalState.jsx';

function Favorites() {
  const [buttonValue, setButtonValue] = useContext(buttonClickedContext);
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setButtonValue(false);
    localStorage.setItem('favoriteProducts', JSON.stringify(favorites));
  }, [favorites, buttonValue]);

  const track = React.createRef();

  function onClickLeft() {
    if (width !== 0) {
      setWidth((prevState) => prevState + 253);
      track.current.style.transform = `translate(${width + 253}px`;
    }
  }

  function onClickRight() {
    setWidth((prevState) => prevState - 253);
    track.current.style.transform = `translate(${width - 253}px`;
  }

  const FavoriteCards = Object.keys(favorites).map((item) => (
    <FavoriteCard
      key={item}
      cardInfo={favorites[item]}
    />

  ));

  return (

    <div className="carousel-container">
      <div className="carousel-inner">
        <div className="track" ref={track}>
          {FavoriteCards}
        </div>
      </div>
      <div className="nav">
        <button className="prev" onClick={onClickLeft}>
          <span className="material-icons">
            chevron_left
          </span>
        </button>
        <button className="next" onClick={onClickRight}>
          <span className="material-icons">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

export default Favorites;
