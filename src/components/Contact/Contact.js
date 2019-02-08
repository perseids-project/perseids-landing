import React from 'react';

import Hero from '../Hero';
import ListItemInline from '../ListItemInline';

const Contact = () => (
  <React.Fragment>

    <Hero
      title="Contact the Perseids Team"
      text="If you have a suggestion, want to report a bug, are interested in collaborating, or would like to reach out for any other reason, please use one of the links below or email us at perseids@tufts.edu."
      background="hermes"
    />

    <div className="container mb-4">
      <div className="row">

        <ListItemInline
          title="Feature Requests"
          id="feature-request"
          text="If you have a suggestion or a request for some new functionality, please click the link below and fill out a short questionnaire. We will get back to you as soon as we can."
          link="https://docs.google.com/forms/d/e/1FAIpQLSfbn8aI2MRBI9DAHK83KKQFKWnnmSat0HGA9grRyn35YLRR1g/viewform"
          linkText="Make a Request"
        />

        <hr className="d-md-none" />

        <ListItemInline
          title="Issues and Bugs"
          id="bug-report"
          text="If you have found a bug in one of The Perseids Project applications or think that something is not working correctly, please report it. We greatly appreciate bug reports and we will try to fix the issue as soon as possible."
          link="https://docs.google.com/forms/d/e/1FAIpQLSeYTf-CWan4Ovug33RZrGzCVfLNzgHKnO4kTrmXOd77rkyE-g/viewform"
          linkText="Report a bug"
        />

        <hr className="d-md-none" />

        <ListItemInline
          title="Other Comments"
          id="other-comment"
          text="For any other question, comment, idea, potential collaboration, click the link below and fill out the form to send us a message."
          link="https://docs.google.com/forms/d/e/1FAIpQLSf8yf6B3xlV31x0JKquRuIdXd6LVuX0V7I7id7ZLXbMwDo-UA/viewform"
          linkText="Send a Message"
          hasSeparator={false}
        />
      </div>
    </div>

    <hr />

  </React.Fragment>
);

export default Contact;
