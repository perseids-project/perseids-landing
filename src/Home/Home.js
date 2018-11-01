import React from 'react';

import Hero from '../Hero';
import ListItemInline from '../ListItemInline';

const Home = () => (
  <React.Fragment>

    <Hero
      title="The Perseids Project"
      text="The Perseids Project aims to support access to scholarship in Classics for students and members of the public at all levels of competence. We provide a suite of tools that foster language acquisition, facilitate working with documents, and encourage research."
      background="sunset"
    />

    <div className="container mb-4">
      <div className="row">

        <ListItemInline
          title="Perseids Platform"
          text="The Perseids Platform is a free and open online environment for producing data-driven editions of ancient documents. The Platform allows users to collaborate on producing digital versions of documentary materials from the ancient world."
          link="perseids-platform"
          linkText="Read more"
        />

        <hr className="d-md-none" />

        <ListItemInline
          title="Digital Editions"
          text="Our aim with the Perseids Project is to support a wide range of publication types for the texts and data, from micro-publications to full-fledged digital editions. To develop our publications, we collaborate with students, scholars at other institutions, and researchers across disciplines."
          link="digital-editions"
          linkText="Explore digital editions"
        />

        <hr className="d-md-none" />

        <ListItemInline
          title="Libraries and Tools"
          text="As part of our work we often write tools, libraries, and APIs. Since one of our goals with the Perseids Project is to make all of our data and code open, we release our programs as free software for anyone to use or modify."
          link="libraries-tools"
          linkText="Learn more"
          hasSeparator={false}
        />
      </div>
    </div>

    <hr />

  </React.Fragment>
);

export default Home;
