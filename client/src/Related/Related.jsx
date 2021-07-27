import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedItem from './RelatedItem.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      products: [],
    };
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

  render() {
    const RelatedItems = this.state.products.map((item) => (
      <RelatedItem
        key={item.id}
        cardInfo={item}
      />
    ));
    console.log(RelatedItems);
    return (
      <div className="relatedCards">
        {RelatedItems}
      </div>

    );
  }
}

export default Related;
