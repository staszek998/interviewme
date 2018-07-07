import React, { Component } from 'react';

import SectionTitle from '../../base-components/SectionTitle';
import Text from './Text';
import DownloadButton from './DownloadButton';

let textPart1 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quasi fuga magnam ipsum. Quibusdam perspiciatis molestias earum accusamus veritatis atque quasi molestiae magnam, recusandae in provident eveniet fugiat nam cum.`;
let textPart2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis minus sint unde obcaecati saepe maiores fugit commodi atque? Sequi atque natus error cumque quos velit facilis eveniet odit provident.`;

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
