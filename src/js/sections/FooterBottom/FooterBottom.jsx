import React, { Component } from 'react';

import Copyright from './Copyright';

class FooterBottom extends Component {
  render() {
    return (
      <section className="footer-bottom">
        FOOTER BOTTOM
        <div className="container">
          <Copyright brand="Your Website" year="2018" />
        </div>
      </section>
    );
  }
}

export default FooterBottom;
