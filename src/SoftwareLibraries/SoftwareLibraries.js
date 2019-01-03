import React from 'react';

import Hero from '../Hero';
import ListItem from '../ListItem';

import code from '../img/code.png';
import demixer from '../img/demixer.png';
import lexicon from '../img/lexicon.png';
import morphsvc from '../img/morphsvc.png';

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
        links={[
          { link: 'https://apps.perseids.org/lsj', text: 'LSJ Greek-English Lexicon', key: 'lsj' },
          { link: 'https://apps.perseids.org/woodhouse', text: 'Woodhouse English-Greek Dictionary', key: 'woodhouse' },
        ]}
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
        title="Morphology Service"
        id="morphology"
        reverse
        image={morphsvc}
        alt="XML output of morphology API"
        links={[
          { link: 'https://sites.tufts.edu/perseusupdates/2012/11/01/morphology-service-beta/', text: 'Learn more about the API', key: 'morphology-service-info' },
          { link: 'https://github.com/perseids-tools/morpheus-perseids', text: 'See the Perseids version of Morpheus', key: 'morpheus-perseids-info' },
        ]}
      >
        <p>
          The Perseids Project provides a morphology API that performs morphological
          analysis on Greek and Latin text.
          The API uses a modified version of the
          {' '}
          <a href="https://wiki.digitalclassicist.org/Morpheus" arget="_blank" rel="noopener noreferrer">
            Morpheus morphological analysis engine
          </a>
          .
        </p>
      </ListItem>

      <ListItem
        title="Other Repositories"
        id="repositories"
        reverse
        image={code}
        alt="screenshot of code"
        hasSeparator={false}
      >
        <React.Fragment>
          <p>
            The source for all of the code written for The Perseids Project is available on GitHub.
            Explore our repositories to learn more.
          </p>
          <ul className="pl-4">
            <li>
              <a href="https://github.com/perseids-tools">
                Tools and libraries
              </a>
            </li>
            <li>
              <a href="https://github.com/perseids-project">
                Web applications and APIs
              </a>
            </li>
            <li>
              <a href="https://github.com/perseids-publications">
                Publications and publication templates
              </a>
            </li>
          </ul>
        </React.Fragment>
      </ListItem>
    </div>

    <hr />

  </React.Fragment>
);

export default SoftwareLibraries;
