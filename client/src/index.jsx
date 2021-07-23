import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductDetails from './components/productDetails/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    axios.get('/products')
      .then((results) => {
        this.setState({
          products: results.data,
        });
        console.log('Products from componentDidMount: ', this.state.products);
      })
      .catch((err) => {
        console.log('Error retrieving product data: ', err);
      });
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div>
        <ProductDetails productData={this.state.products[4]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
