import React, { Component } from 'react';

import Form from './Form';
import SectionTitle from '../../base-components/SectionTitle';

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="container contact__container">
          <SectionTitle color="navy" text="contact me" />
          <Form />
        </div>
      </section>
    );
  }
}

export default Contact;
