import React, { Component } from 'react';

import SectionTitle from '../../base-components/SectionTitle';
import ProjectsBoard from './ProjectsBoard';

import project1 from '../../../images/portfolio/project-1.png';
import project2 from '../../../images/portfolio/project-2.png';
import project3 from '../../../images/portfolio/project-3.png';
import project4 from '../../../images/portfolio/project-4.png';
import project5 from '../../../images/portfolio/project-5.png';
import project6 from '../../../images/portfolio/project-6.png';

let projects = [
  {
    url: project1,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtMQ=='
  },
  {
    url: project2,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtMg=='
  },
  {
    url: project3,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtMw=='
  },
  {
    url: project4,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtNA=='
  },
  {
    url: project5,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtNQ=='
  },
  {
    url: project6,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtNg=='
  }
];

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        PORTFOLIO
        <div className="container">
          <SectionTitle text="portfolio" color="navy" />
          <ProjectsBoard projects={projects} />
        </div>
      </section>
    );
  }
}

export default Portfolio;
