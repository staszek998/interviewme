import React, { Component } from 'react';

import SectionTitle from '../../base-components/SectionTitle';
import Text from './Text';
import DownloadButton from './DownloadButton';

let textPart1 = `Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.`;
let textPart2 = `Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!`;

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container about__container">
          <SectionTitle color="white" text="about" />
          <Text textPart1={textPart1} textPart2={textPart2} />
          <DownloadButton
            text="Download Now!"
            href="https://picsum.photos/200/300/?random"
          />
        </div>
      </section>
    );
  }
}

export default About;
