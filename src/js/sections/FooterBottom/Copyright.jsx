import React, { Component } from 'react';

class Copyright extends Component {
  render() {
    return (
      <span className="footer-bottom__copyright">
        Copyright &copy; {this.props.brand} {this.props.year}
      </span>
    );
  }
}

export default Copyright;
