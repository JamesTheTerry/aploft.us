import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <p>This is the p in the app component.</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));