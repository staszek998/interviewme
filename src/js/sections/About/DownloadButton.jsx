import React, { Component } from 'react';

class DownloadButton extends Component {
  render() {
    return (
      <a className="download-button" target="_blank" href={this.props.href}>
        <i className="fas fa-download download-button__icon" />
        <span className="download-button__text">{this.props.text}</span>
      </a>
    );
  }
}

export default DownloadButton;
