import React, { Component } from 'react';

class Project extends Component {
  hideAllDescriptions = () => {
    let eventHandler = () => {
      document
        .querySelectorAll('.project__description')
        .forEach(projectDescription => {
          projectDescription.classList.remove('visible');
        });
      document.body.removeEventListener('click', eventHandler);
    };

    document.body.addEventListener('click', eventHandler);
  };

  render() {
    let description;

    return (
      <div
        className="project"
        style={{ backgroundImage: `url(${this.props.imgUrl})` }}
        onClick={() => {
          this.hideAllDescriptions();
          description.classList.add('visible');
        }}
      >
        <div
          className="project__description"
          ref={node => (description = node)}
        >
          <a href={this.props.href}>{this.props.title}</a>
          <span>{this.props.subtitle}</span>
        </div>
      </div>
    );
  }
}

export default Project;
