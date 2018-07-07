import React, { Component } from 'react';

class ArounfTheWeb extends Component {
  render() {
    return (
      <div className="footer-top__col around-the-web">
        <span className="footer-top__col__title">around the web</span>
        <div className="around-the-web__wrapper">
          <a target="_blank" href="https://facebook.com/interviewmepl">
            <i className="fab fa-facebook-f" />
          </a>
          <a target="_blank" href="https://plus.google.com/+InterviewmePl">
            <i className="fab fa-google-plus-g" />
          </a>
          <a target="_blank" href="https://twitter.com/InterviewMe_PL">
            <i className="fab fa-twitter" />
          </a>
          <a target="_blank" href="https://linkedin.com/company/interviewme-pl">
            <i className="fab fa-linkedin-in" />
          </a>
          <a target="_blank" href="https://dribbble.com/">
            <i className="fab fa-dribbble" />
          </a>
        </div>
      </div>
    );
  }
}

export default ArounfTheWeb;
