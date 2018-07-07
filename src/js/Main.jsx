import React, { Component } from 'react';

// Sections
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Portfolio from './sections/Portfolio/Portfolio';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import FooterTop from './sections/FooterTop/FooterTop';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <FooterTop />
      </div>
    );
  }
}

export default Main;
