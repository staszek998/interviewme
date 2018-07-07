import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class DownloadButton extends Component {
  render() {
    return (
      <a className="download-button" target="_blank" href={this.props.href}>
        <FontAwesome name="download" className="download-button__icon" />
        <span className="download-button__text">{this.props.text}</span>
      </a>
    );
  }
}

export default DownloadButton;
