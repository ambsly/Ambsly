import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QAndA from './components/qAndA/QAndA';
import ProductDetails from './components/productDetails/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentProduct: null,
    };
  }

  componentDidMount() {
    const { products } = this.state;
    axios.get('/products')
      .then((results) => {
        this.setState({
          products: results.data,
          currentProduct: results.data[4],
        });
        console.log('Products from componentDidMount: ', products);
      })
      .catch((err) => {
        console.log('Error retrieving product data: ', err);
      });
  }

  render() {
    const { currentProduct } = this.state;
    const { products } = this.state;
    return (
      <div>
        <ProductDetails productData={currentProduct} />
        <QAndA />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
