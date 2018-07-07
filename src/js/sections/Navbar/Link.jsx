import React, { Component } from 'react';

class Link extends Component {
  clickHandler = event => {
    event.preventDefault();
    document.querySelector(`${this.props.id}`).scrollIntoView({
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <a className="navbar__link" href="#" onClick={this.clickHandler}>
        {this.props.text}
      </a>
    );
  }
}

export default Link;
