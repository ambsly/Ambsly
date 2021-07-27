import React from 'react';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };

    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
    this.track = React.createRef();
  }

  onClickLeft() {
    this.state.width += +253;
    this.track.current.style.transform = `translate(${this.state.width}px`;
  }

  onClickRight() {
    this.state.width += -253;
    this.track.current.style.transform = `translate(${this.state.width}px`;
  }

  render() {
    return (
      <div
        className="carousel-container"
      >
        <div className="carousel-inner">
          <div className="track" ref={this.track}>
            <div className="card-container">
              <div className="card">
                <div className="img">1</div>
                <div className="">price</div>
                <div className="">price</div>
                <div className="">price</div>
                <div className="">price</div>
              </div>
            </div>
            <div className="card-container">
              <div className="card">
                <div className="img">2</div>
                <div className="">price</div>
                <div className="">price</div>
                <div className="">price</div>
                <div className="">price</div>
              </div>
            </div>
            <div className="card-container">
              <div className="card" />
              <div className="img">3</div>
            </div>
            <div className="card-container">
              <div className="card" />
            </div>
            <div className="card-container">
              <div className="card" />
            </div>
            <div className="card-container">
              <div className="card" />
            </div>
            <div className="card-container">
              <div className="card" />
            </div>
            <div className="card-container">
              <div className="card" />
            </div>
            <div className="card-container">
              <div className="card" />
            </div>
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

export default Carousel;
