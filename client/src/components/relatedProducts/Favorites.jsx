import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import FavoriteCard from './FavoriteCard.jsx';
import { ClickedContext } from '../buttonState.jsx';

function Favorites() {
  const [state, setState] = useContext(ClickedContext);
  const [width, setWidth] = useState(0);
  const [favoritesArray, setFavProducts] = useState([]);

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem('dataArray'));
    axios.get('http://localhost:3000/favorites', {
      params: {
        favoriteIDS: JSON.parse(localStorage.getItem('dataArray')),
      },
    })
      .then((results) => {
        setFavProducts(() => results.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error retrieving product data: ', err);
      });
    setState((prevState) => ({ ...prevState, buttonClicked: false }));
  }, []);

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem('dataArray'));
    if (state.buttonClicked === true) {
      console.log(oldData.length);
      console.log('looking if this is ran in useeffect favorites');
      axios.get('http://localhost:3000/favorites', {
        params: {
          favoriteIDS: JSON.parse(localStorage.getItem('dataArray')),
        },
      })
        .then((results) => {
          setFavProducts(() => results.data);
        })
        .catch((err) => {
        // eslint-disable-next-line no-console
          console.log('Error retrieving product data: ', err);
        });
      setState((prevState) => ({ ...prevState, buttonClicked: false }));
    }
  }, [state]);

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

  const FavoriteCards = favoritesArray.map((item) => (
    <FavoriteCard
      key={item.id}
      cardInfo={item}
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
