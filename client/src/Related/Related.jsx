import React from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      products: [],
    };
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.productId, ' this is it');
    console.log(prevProps.productId, ' this is ifsdft');
    if (this.props.productId !== prevProps.productId) {
      axios.get(`/products/${this.props.productId}/related`)
        .then((results) => {
          this.setState({products: results.data});
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('Error retrieving product data: ', err);
        });
    }

    console.log('mounting in  index');
  }

  render() {
    const RelatedItems = this.state.products.map((item) => (
      <RelatedItem cardInfo={item} />
    ));
    return (
      <div>
        <li>
          {RelatedItems}
        </li>
      </div>

    );
  }
}

export default Related;
