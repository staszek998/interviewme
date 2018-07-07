import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div
        className="project"
        style={{ backgroundImage: `url(${this.props.imgUrl})` }}
      >
        <div className="project__description">
          <a href={this.props.href}>{this.props.title}</a>
          <span>{this.props.subtitle}</span>
        </div>
      </div>
    );
  }
}

export default Project;
