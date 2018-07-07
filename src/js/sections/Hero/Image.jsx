import React, { Component } from 'react';

import heroImage from '../../../images/hero-image.png';

class Image extends Component {
  render() {
    // eslint-disable-next-line
    return <img src={heroImage} className="hero__image" />;
  }
}

export default Image;
