import React, { Component } from 'react';

import Location from './Location';
import AroundTheWeb from './AroundTheWeb';
import AboutFreelancer from './AboutFreelancer';

class FooterTop extends Component {
  render() {
    return (
      <section className="footer-top">
        FOOTER TOP
        <div className="container">
          <Location />
          <AroundTheWeb />
          <AboutFreelancer />
        </div>
      </section>
    );
  }
}

export default FooterTop;
