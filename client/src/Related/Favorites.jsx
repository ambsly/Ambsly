import React from 'react';
import axios from 'axios';
import FavoriteCard from './FavoriteCard.jsx';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      favorites: JSON.parse(localStorage.getItem('dataArray')),
      favoritesArray: [],
    };
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
    this.track = React.createRef();
    console.log(this.state.favorites, 'testing what favorite is ');
  }

  onClickLeft() {
    this.state.width += +253;
    this.track.current.style.transform = `translate(${this.state.width}px`;
  }

  onClickRight() {
    this.state.width += -253;
    this.track.current.style.transform = `translate(${this.state.width}px`;
  }

  componentDidMount() {
    axios.get('/favorites', {
      params: {
        favoriteIDS: this.state.favorites,
      },
    })
      .then((results) => {
        this.setState({ favoritesArray: results.data });
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log('Error retrieving product data: ', err);
      });
  }

  render() {
    const FavoriteCards = this.state.favoritesArray.map((item) => (
      <FavoriteCard
        key={item.id}
        cardInfo={item}
      />
    ));
    return (
      <div className="carousel-container">
        <div className="carousel-inner">
          <div className="track" ref={this.track}>
            {FavoriteCards}
          </div>
        </div>
        <div className="nav">
          <button className="prev" onClick={this.onClickLeft}>
            <span className="material-icons">
              chevron_left
            </span>
          </button>
          <button className="next" onClick={this.onClickRight}>
            <span className="material-icons">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Favorites;
