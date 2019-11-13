import React from 'react';

import Hero from '../Hero';
import ListItemInline from '../ListItemInline';

const Contact = () => (
  <>

    <Hero
      title="contact.hero.title"
      text="contact.hero.text"
      background="hermes"
    />

    <div className="container mb-4">
      <div className="row">

        <ListItemInline
          id="donate"
          title="contact.donate.title"
          text="contact.donate.text"
          linkText="contact.donate.link"
          link="https://tuftsgiving.org/giving-form.html?id=7&showarea=AR001037&areaid=601&recurring=true"
        />

        <hr className="d-md-none" />

        <ListItemInline
          id="bug-report"
          title="contact.bug.title"
          text="contact.bug.text"
          linkText="contact.bug.link"
          link="https://docs.google.com/forms/d/e/1FAIpQLSeYTf-CWan4Ovug33RZrGzCVfLNzgHKnO4kTrmXOd77rkyE-g/viewform"
        />

        <hr className="d-md-none" />

        <ListItemInline
          id="other-comment"
          title="contact.other.title"
          text="contact.other.text"
          linkText="contact.other.link"
          link="https://docs.google.com/forms/d/e/1FAIpQLSf8yf6B3xlV31x0JKquRuIdXd6LVuX0V7I7id7ZLXbMwDo-UA/viewform"
          hasSeparator={false}
        />
      </div>
    </div>

    <hr />

  </>
);

export default Contact;
