import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <section className="navbar">
        <div className="container navbar__container">
          <Logo />
          <Link />
        </div>
      </section>
    );
  }
}

export default Navbar;
