import React, { Component } from 'react';

import Logo from './Logo';
import Link from './Link';

class Navbar extends Component {
  render() {
    return (
      <section className="navbar">
        NAVBAR
        <div className="container navbar__container">
          <Logo />
          <Link />
          <Link />
          <Link />
        </div>
      </section>
    );
  }
}

export default Navbar;
