import React, { Component } from 'react';

import Copyright from './Copyright';

class FooterBottom extends Component {
  render() {
    return (
      <section className="footer-bottom">
        <div className="container footer-bottom__container">
          <Copyright brand="Your Website" year="2018" />
        </div>
      </section>
    );
  }
}

export default FooterBottom;
