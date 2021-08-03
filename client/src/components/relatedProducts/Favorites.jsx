import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import FavoriteCard from './FavoriteCard.jsx';
import { FavoritesContext, ButtonClickedContext } from '../globalState.jsx';

function Favorites() {
  const [buttonValue, setButtonValue] = useContext(ButtonClickedContext);
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [width, setWidth] = useState(0);

  const rightButton = React.createRef();
  const track = React.createRef();
  const leftButton = React.createRef();

  useEffect(() => {
    setButtonValue(false);

    if (width === 0 && leftButton.current !== null) {
      leftButton.current.hidden = true;
    } else {
      leftButton.current.hidden = false;
    }

    if ((width === (Object.keys(favorites).length * -253) + 1012
    || ((Object.keys(favorites).length * -253)) > -1012) && rightButton.current !== null) {
      rightButton.current.hidden = true;
    } else {
      rightButton.current.hidden = false;
    }

    localStorage.setItem('favoriteProducts', JSON.stringify(favorites));
  }, [favorites, buttonValue, width]);

  function onClickLeft() {
    if (width !== 0) {
      setWidth((prevState) => prevState + 253);
      track.current.style.transform = `translate(${width + 253}px`;
    }
  }

  function onClickRight() {
    if (width === (Object.keys(favorites).length * -253) + 1012
    || ((Object.keys(favorites).length * -253)) > -1012) {
      console.log('capped');
    } else {
      console.log((Object.keys(favorites).length * -253) + 1012);
      console.log(width);
      setWidth((prevState) => prevState - 253);
      track.current.style.transform = `translate(${width - 253}px`;
    }
  }

  const FavoriteCards = Object.keys(favorites).map((item) => (
    <FavoriteCard
      key={item}
      cardInfo={favorites[item]}
    />
  ));

  return (

    <div className="carousel-container">
      <span className="relatedTitle"> Favorite Products</span>
      <div className="carousel-inner">
        <div className="track" ref={track}>
          {FavoriteCards}
        </div>
      </div>
      <div className="nav">
        <button ref={leftButton} className="prev" onClick={onClickLeft}>
          <span className="material-icons chev">
            chevron_left
          </span>
        </button>
        <button ref={rightButton} className="next" onClick={onClickRight}>
          <span className="material-icons chev">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

export default Favorites;
