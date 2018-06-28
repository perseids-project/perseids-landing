import React from 'react';

import Hero from '../Hero';
import ListItem from '../ListItem';

import demixer from '../img/demixer.png';

const SoftwareLibraries = () => (
  <React.Fragment>

    <Hero
      title="Libraries and Tools"
      text="All of the code at the New Name Project is free and open source. We try to extract any useful code to share with community by making a library, or web application, or API."
      background="construction"
    />

    <div className="container mb-5">

      <ListItem
        title="Greek and Latin Demixer"
        text="The Greek and Latin Demixer is a web tool for processing texts that contain a mixture of Greek and Latin characters. This can sometimes happen when a text is processed with OCR software."
        reverse
        image={demixer}
        alt="screenshot of Demixer"
        link="https://perseids-project.github.io/greek-latin-demixer/"
        linkText="Try out the Demixer"
      />
    </div>

    <hr />

  </React.Fragment>
);

export default SoftwareLibraries;
