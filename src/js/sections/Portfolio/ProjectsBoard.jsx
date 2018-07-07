import React, { Component } from 'react';

import Project from './Project';

class ProjectsBoard extends Component {
  render() {
    return (
      <div className="projects-board">
        {this.props.projects.map((project, index) => {
          return (
            <Project imgUrl={project.url} href={project.href} key={index} />
          );
        })}
      </div>
    );
  }
}

export default ProjectsBoard;
