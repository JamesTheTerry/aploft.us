import React from 'react';
import ReactDOM from 'react-dom';

import amy from '../img/amy.jpg';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import email from '../img/email.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container col-8">
        <span>
          <img id="headshot" src={amy} alt="amy's face" />
        </span>
        <span className="text">
          <p>Howdy! I'm Amy: engineer by day, creator by night.</p>
          <p>I like building things that matter.</p>
          <p>I work in JavaScript across the stack, and I LOVE learning new tech.</p>
          <p>When I’m not building things with code, I create learning experiences, music, photographs, and fiber phenomena.</p>
          <p>Let's connect!</p>
        </span>
        <div>
          <a href="http://www.github.com/aploftus">
            <img className="icon" src={github} alt="www.github.com/aploftus" height="50px" />
          </a>
          <a href="http://www.linkedin.com/in/aploftus">
            <img className="icon" src={linkedin} alt="www.linkedin.com/in/aploftus" height="50px" />
          </a>
          <a href="mailto:aloftus26@gmail.com">
            <img className="icon" src={email} alt="aloftus26@gmail.com" height="50px" />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
