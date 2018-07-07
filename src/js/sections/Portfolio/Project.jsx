import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <a
        className="project"
        href={this.props.href}
        style={{ backgroundImage: `url(${this.props.imgUrl})` }}
      >
        I'm a project!
      </a>
    );
  }
}

export default Project;
