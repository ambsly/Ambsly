import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QAndA from './components/qAndA/QAndA';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const { products } = this.state;
    axios.get('/products')
      .then((results) => {
        this.setState({
          products: results.data,
        });
        console.log('Products from componentDidMount: ', products);
      })
      .catch((err) => {
        console.log('Error retrieving product data: ', err);
      });
  }

  render() {
    return (
      <div>
        <QAndA />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
