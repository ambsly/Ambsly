import React from 'react';
import ReactDOM from 'react-dom';
import ShirleyComponent1 from './shirleyComponent1.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div> Hello World! </div>
        <ShirleyComponent1 />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));