import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span className="btn btn-outline-dark clickable">{this.props.title}</span>;
  }
}

export default Tab;