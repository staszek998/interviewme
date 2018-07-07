import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form
        action="submit"
        onSubmit={() => {
          alert('Message sent!');
        }}
        className="contact__form"
      >
        <input placeholder="Name" type="text" />
        <input placeholder="E-mail address" type="email" />
        <input placeholder="Phone number" type="tel" />
        <textarea placeholder="Message" cols="30" rows="10" />
        <input value="Send" type="submit" />
      </form>
    );
  }
}

export default Form;
