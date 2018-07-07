import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <div className="about__text">
        <div className="text-part part-1">
          <p>{this.props.textPart1}</p>
        </div>
        <br />
        <div className="text-part part-2">
          <p>{this.props.textPart2}</p>
        </div>
      </div>
    );
  }
}

export default Text;
