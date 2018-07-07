import React, { Component } from 'react';

import Project from './Project';

class ProjectsBoard extends Component {
  render() {
    return (
      <div className="projects-board-wrapper">
        <div className="projects-board projects-board--phone">
          {this.props.projects.map((project, index) => {
            return (
              <Project imgUrl={project.url} href={project.href} key={index} />
            );
          })}
        </div>
        <div className="projects-board projects-board--tab">
          <div className="projects-board__row">
            {this.props.projects.map((project, index) => {
              if (index === 0 || index === 1) {
                return (
                  <Project
                    imgUrl={project.url}
                    href={project.href}
                    key={index}
                  />
                );
              }
            })}
          </div>
          <div className="projects-board__row">
            {this.props.projects.map((project, index) => {
              if (index === 2 || index === 3) {
                return (
                  <Project
                    imgUrl={project.url}
                    href={project.href}
                    key={index}
                  />
                );
              }
            })}
          </div>
          <div className="projects-board__row">
            {this.props.projects.map((project, index) => {
              if (index === 4 || index === 5) {
                return (
                  <Project
                    imgUrl={project.url}
                    href={project.href}
                    key={index}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="projects-board projects-board--desktop">
          <div className="projects-board__row">
            {this.props.projects.map((project, index) => {
              if (index === 0 || index === 1 || index === 2) {
                return (
                  <Project
                    imgUrl={project.url}
                    href={project.href}
                    key={index}
                  />
                );
              }
            })}
          </div>
          <div className="projects-board__row">
            {this.props.projects.map((project, index) => {
              if (index === 3 || index === 4 || index === 5) {
                return (
                  <Project
                    imgUrl={project.url}
                    href={project.href}
                    key={index}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsBoard;
