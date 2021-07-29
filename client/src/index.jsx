import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RatingsAndReviews from './components/Ratings_Reviews/RatingsReviews.jsx';
import Favorites from './components/relatedProducts/Favorites.jsx';
import Modal from './components/relatedProducts/Modal.jsx';
// eslint-disable-next-line import/extensions
import Related from './components/relatedProducts/Related.jsx';

import QAndA from './components/qAndA/QAndA';
import ProductDetails from './components/productDetails/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
    };
  }

  componentDidMount() {
    const { products } = this.state;
    axios.get('/products')
      .then((results) => {
        this.setState({ products: results.data[0] });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error retrieving product data: ', err);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <ProductDetails productData={products} />
        <Related productId={products.id} />
        <Favorites />
        <QAndA productId={products.id} />
        <RatingsAndReviews />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
