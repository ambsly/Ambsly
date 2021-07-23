import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RatingsAndReviews from './components/Ratings_Reviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <div>
        <RatingsAndReviews />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
