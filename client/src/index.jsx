import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// eslint-disable-next-line import/extensions
import Related from './Related/Related.jsx';

const pizzas = {
  cheese: {
    cheeseOne: 'mozerella',
    cheeseTwo: 'cheese',
  },
  meat: {
    meatToppingOne: 'pepperoni',
    meatToppoingTwo: 'sausage',
  },
};

export let PizzaContext = React.createContext(null);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
    };
  }

  componentDidMount() {
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
    return (
      <div>
        <PizzaContext.Provider value={pizzas}>
          <Related productId={this.state.products.id} />
        </PizzaContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
