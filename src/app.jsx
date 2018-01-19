import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.css';

import Header from './components/header.jsx';
import Home from './components/home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row main">
          <Home />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));