import React from 'react';

import Hero from '../Hero';
import ListItem from '../ListItem';

import demixer from '../img/demixer.png';
import lexicon from '../img/lexicon.png';
import manuscript from '../img/manuscript.png';

const SoftwareLibraries = () => (
  <React.Fragment>

    <Hero
      title="Libraries and Tools"
      text="All of the code at the Perseids Project is free and open source. We try to extract any useful code to share with community by making a library, web application, or API."
      background="construction"
    />

    <div className="container">
      <ListItem
        title="Dictionaries"
        id="lexica"
        text="Perseids hosts several mobile-friendly online lexica. All the data is saved locally. This means that after loading the page a single time, you can use the lexicon without an internet connection."
        reverse
        image={lexicon}
        alt="picture of a Greek-English dictionary"
        links={[{ link: 'https://apps.perseids.org/lsj', text: 'Liddell–Scott–Jones', key: 'lsj' }, { link: 'https://apps.perseids.org/woodhouse', text: 'Woodhouse', key: 'woodhouse' }]}
      />

      <ListItem
        title="Greek and Latin Demixer"
        id="demixer"
        text="The Greek and Latin Demixer is a web tool for processing texts that contain a mixture of Greek and Latin characters. This can sometimes happen when a text is processed with OCR software."
        reverse
        image={demixer}
        alt="screenshot of Demixer"
        link="https://apps.perseids.org/greek-latin-demixer"
        linkText="Try out the Demixer"
      />

      <ListItem
        title="Imgspect"
        id="imgspect"
        text="Imgspect is a jQuery plugin that builds an application for captioning and transcribing select areas of large images."
        reverse
        image={manuscript}
        alt="screenshot of imgspect"
        link="https://github.com/perseids-project/imgspect"
        linkText="View on GitHub"
        hasSeparator={false}
      />
    </div>

    <hr />

  </React.Fragment>
);

export default SoftwareLibraries;
