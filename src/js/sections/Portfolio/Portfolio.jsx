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
    title: 'the house',
    subtitle: 'Natural, wooden house, placed in the peaceful neighbourhood',
    url: project1,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtMQ=='
  },
  {
    title: 'the cake',
    subtitle: 'A piece of a sweet cake is always a good idea',
    url: project2,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtMg=='
  },
  {
    title: 'the circus',
    subtitle: `Rounded building with peaked rooftop. Sometimes it is also called 'Parliament'`,
    url: project3,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtMw=='
  },
  {
    title: 'the gamepad',
    subtitle:
      'Only 8 buttons with 1 D-Pad and it still gave many of us almost endless hours of joy and fun',
    url: project4,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtNA=='
  },
  {
    title: 'the safe',
    subtitle: `This is safe. It's name speaks for itself. No further description needed`,
    url: project5,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtNQ=='
  },
  {
    title: 'the yellow submarine',
    subtitle: `One of the best songs written by 'The Beatles'`,
    url: project6,
    href:
      'http://getfireshot.com/pdf_aHR0cHM6Ly9ibGFja3JvY2tkaWdpdGFsLmdpdGh1Yi5pby9zdGFydGJvb3RzdHJhcC1mcmVlbGFuY2VyLyNwb3J0Zm9saW8tbW9kYWwtNg=='
  }
];

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio" id="portfolio">
        <div className="container portfolio__container">
          <SectionTitle text="portfolio" color="navy" />
          <ProjectsBoard projects={projects} />
        </div>
      </section>
    );
  }
}

export default Portfolio;
