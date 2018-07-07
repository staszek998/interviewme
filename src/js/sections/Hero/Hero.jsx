import React, { Component } from 'react';

import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        HERO
        <div className="container">
          <Image />
          <Title />
          <Subtitle />
        </div>
      </section>
    );
  }
}

export default Hero;
