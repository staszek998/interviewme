import React, { Component } from 'react';

class ArounfTheWeb extends Component {
  render() {
    return (
      <div className="footer-top__col">
        <span className="footer-top__col__title">around the web</span>
        <a target="_blank" href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a target="_blank" href="#">
          <i className="fab fa-google-plus-g" />
        </a>
        <a target="_blank" href="#">
          <i className="fab fa-twitter" />
        </a>
        <a target="_blank" href="#">
          <i className="fab fa-linkedin-in" />
        </a>
        <a target="_blank" href="#">
          <i className="fab fa-dribbble" />
        </a>
      </div>
    );
  }
}

export default ArounfTheWeb;
