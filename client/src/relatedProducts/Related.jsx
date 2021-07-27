import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedItem from './RelatedItem.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      productId: this.props.productId,
      products: [],
    };
    this.track = React.createRef();
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  componentDidUpdate({ productId }) {
    if (this.props.productId !== productId) {
      axios.get(`/products/${this.props.productId}/related`)
        .then((results) => {
          this.setState({ products: results.data });
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('Error retrieving product data: ', err);
        });
    }
  }

  onClickLeft() {
    if (this.state.width !== 0) {
      this.state.width += +253;
    }
    this.track.current.style.transform = `translate(${this.state.width}px`;
  }

  onClickRight() {
    console.log('');
    this.state.width += -253;
    this.track.current.style.transform = `translate(${this.state.width}px`;
  }

  render() {
    const RelatedItems = this.state.products.map((item) => (
      <RelatedItem
        key={item.id}
        cardInfo={item}
      />
    ));
    console.log(RelatedItems);
    return (
      <div className="carousel-container">
        <div className="carousel-inner">
          <div className="track" ref={this.track}>
            {RelatedItems}
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

export default Related;
