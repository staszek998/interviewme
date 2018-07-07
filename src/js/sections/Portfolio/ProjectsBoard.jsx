import React, { Component } from 'react';

import Project from './Project';

class ProjectsBoard extends Component {
  render() {
    return (
      <div className="projects-board">
        {this.props.projects.map((url, href) => {
          return <Project imgUrl={url} href={href} />;
        })}
      </div>
    );
  }
}

export default ProjectsBoard;
