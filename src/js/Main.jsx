import React, { Component } from 'react';

// Sections
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Portfolio from './sections/Portfolio/Portfolio';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Portfolio />
      </div>
    );
  }
}

export default Main;
