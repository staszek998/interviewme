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
            <Link text="portfolio" href="#" />
            <Link text="about" href="#" />
            <Link text="contact" href="#" />
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
