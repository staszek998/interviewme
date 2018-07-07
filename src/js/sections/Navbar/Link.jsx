import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <a className="navbar__link" target="_blank" href={this.props.href}>
        {this.props.text}
      </a>
    );
  }
}

export default Link;
