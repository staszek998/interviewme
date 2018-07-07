import React, { Component } from 'react';

import Logo from './Logo';
import Link from './Link';

class Navbar extends Component {
  render() {
    return (
      <section className="navbar">
        <div className="container navbar__container">
          <Logo />
          <div className="navbar__links-wrapper">
            <Link text="portfolio" id="#portfolio" />
            <Link text="about" id="#about" />
            <Link text="contact" id="#contact" />
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
