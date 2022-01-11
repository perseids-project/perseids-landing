import React from 'react';

import Hero from '../Hero';
import ListItemInline from '../ListItemInline';

const Contact = () => (
  <>

    <Hero
      title="about.hero.title"
      text="about.hero.text"
      background="wall"
    />

    <div className="container mb-4">
      <div className="row">

        <ListItemInline
          id="mc"
          title="about.mc.title"
          subtitle="about.mc.subtitle"
          text="about.mc.text"
          linkText="about.mc.link"
          link="https://as.tufts.edu/classicalstudies/people/faculty/marie-claire-beaulieu"
        />

        <hr className="d-md-none" />

        <ListItemInline
          id="vg"
          title="about.vg.title"
          subtitle="about.vg.subtitle"
          text="about.vg.text"
          linkText="about.vg.link"
          link="https://history.unl.edu/vanessa-b-gorman"
        />

        <hr className="d-md-none" />

        <ListItemInline
          id="zf"
          title="about.zf.title"
          subtitle="about.zf.subtitle"
          text="about.zf.text"
          hasSeparator={false}
        />
      </div>
    </div>

    <hr />

  </>
);

export default Contact;
