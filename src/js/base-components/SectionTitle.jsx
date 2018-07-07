import React, { Component } from 'react';

class SectionTitle extends Component {
  render() {
    if (this.props.color === 'white') {
      return (
        <div className="section-title section-title--white">
          <span>{this.props.text}</span>
          <hr /> {/* This horizontal line is here only temporarily */}
        </div>
      );
    } else if (this.props.color === 'navy') {
      return (
        <div className="section-title section-title--navy">
          <span>{this.props.text}</span>
          <hr /> {/* This horizontal line is here only temporarily */}
        </div>
      );
    }
  }
}

export default SectionTitle;
