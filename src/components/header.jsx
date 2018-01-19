import React from 'react';
import ReactDOM from 'react-dom';

import Tab from './tab.jsx';

import logo from '../img/logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <img className="col-4" src={logo} alt="amy loftus" />
        <span className="tabs col-6 align-self-end">
          <Tab title={'Engineer'} />
          <Tab title={'Educator'} />
          <Tab title={'Creator'} />
        </span>
      </div>
    );
  }
}

export default Header;