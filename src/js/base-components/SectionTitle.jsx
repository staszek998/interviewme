import React, { Component } from 'react';

class SectionTitle extends Component {
  render() {
    if (this.props.color === 'white') {
      return (
        <div className="section-title section-title--white">
          <span>{this.props.text}</span>
          <div className="section-title__separator">
            <div className="separator__line" />
            <i className="fas fa-star" />
            <div className="separator__line" />
          </div>
        </div>
      );
    } else if (this.props.color === 'navy') {
      return (
        <div className="section-title section-title--navy">
          <span>{this.props.text}</span>
          <div className="section-title__separator">
            <div className="separator__line" />
            <i className="fas fa-star" />
            <div className="separator__line" />
          </div>
        </div>
      );
    }
  }
}

export default SectionTitle;
