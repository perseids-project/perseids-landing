import React from 'react';

import I18n from '../I18n';

import Hero from '../Hero';
import ListItem from '../ListItem';

import codePng from '../../img/code.png';
import codeWebp from '../../img/code.webp';

import demixerPng from '../../img/demixer.png';
import demixerWebp from '../../img/demixer.webp';

import lexiconPng from '../../img/lexicon.png';
import lexiconWebp from '../../img/lexicon.webp';

import morphsvcPng from '../../img/morphsvc.png';
import morphsvcWebp from '../../img/morphsvc.webp';

const SoftwareLibraries = () => (
  <>
    <Hero
      title="libraries.hero.title"
      text="libraries.hero.text"
      background="construction"
    />

    <div className="container">

      <ListItem
        id="editing"
        title="libraries.editing.title"
        text="libraries.editing.text"
        reverse
        image={{ webp: demixerWebp, png: demixerPng, alt: 'screenshot of Greek-Latin Demixer' }}
        links={[
          { link: 'https://apps.perseids.org/beta-code/', text: 'libraries.editing.beta', key: 'beta-code' },
          { link: 'https://apps.perseids.org/demixer/', text: 'libraries.editing.demixer', key: 'demixer' },
          { link: 'https://apps.perseids.org/polytonic/', text: 'libraries.editing.polytonic', key: 'polytonic' },
          { link: 'https://apps.perseids.org/greek-conjugator/', text: 'libraries.editing.conjugator', key: 'greek-conjugator' },
          { link: 'https://apps.perseids.org/treebank-wordcloud/', text: 'libraries.editing.wordcloud', key: 'wordcloud' },
        ]}
      />

      <ListItem
        id="morphology"
        title="libraries.morphology.title"
        text="libraries.morphology.text"
        reverse
        image={{ webp: morphsvcWebp, png: morphsvcPng, alt: 'XML output of morphology API' }}
        links={[
          { link: 'https://sites.tufts.edu/perseusupdates/2012/11/01/morphology-service-beta/', text: 'libraries.morphology.api', key: 'morphology-service-info' },
          { link: 'https://github.com/perseids-tools/morpheus-perseids', text: 'libraries.morphology.repository', key: 'morpheus-perseids-info' },
        ]}
      />

      <ListItem
        id="lexica"
        title="libraries.lexica.title"
        text="libraries.lexica.text"
        reverse
        image={{ webp: lexiconWebp, png: lexiconPng, alt: 'picture of a Greek-English dictionary' }}
        links={[
          { link: 'https://perseids-project.github.io/lsj-js/', text: 'libraries.lexica.lsj', key: 'lsj' },
          { link: 'https://perseids-project.github.io/woodhouse-js/', text: 'libraries.lexica.woodhouse', key: 'woodhouse' },
        ]}
      />

      <ListItem
        title="libraries.other.title"
        id="repositories"
        reverse
        image={{ webp: codeWebp, png: codePng, alt: 'screenshot of code' }}
        hasSeparator={false}
      >
        <>
          <p>
            <I18n t="libraries.other.source" />
          </p>
          <ul className="pl-4">
            <li>
              <a href="https://github.com/perseids-tools">
                <I18n t="libraries.other.tools" />
              </a>
            </li>
            <li>
              <a href="https://github.com/perseids-project">
                <I18n t="libraries.other.applications" />
              </a>
            </li>
            <li>
              <a href="https://github.com/perseids-publications">
                <I18n t="libraries.other.publications" />
              </a>
            </li>
          </ul>
        </>
      </ListItem>
    </div>

    <hr />

  </>
);

export default SoftwareLibraries;
