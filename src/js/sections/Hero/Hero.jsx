import React, { Component } from 'react';

import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container hero__container">
          <Image />
          <Title />
          <div className="separator">
            <div className="separator__line" />
            <i className="fas fa-star" />
            <div className="separator__line" />
          </div>
          <Subtitle />
        </div>
      </section>
    );
  }
}

export default Hero;
