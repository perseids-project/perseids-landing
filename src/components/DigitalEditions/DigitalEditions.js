import React from 'react';

import I18n from '../I18n';

import Hero from '../Hero';
import ListItem from '../ListItem';

import ancientbirds from '../../img/ancientbirds.png';
import bodin from '../../img/bodin.png';
import digmill from '../../img/digmill.png';
import treebank from '../../img/treebank.png';

const DigitalEditions = () => (
  <>
    <Hero
      title="editions.hero.title"
      text="editions.hero.text"
      background="text"
    />

    <div className="container">

      <ListItem
        id="ancientbirds"
        title="editions.darcy.title"
        text="editions.darcy.text"
        linkText="editions.darcy.link"
        reverse
        image={ancientbirds}
        alt="screenshot of Birds in Ancient Mythology"
        link="https://sites.tufts.edu/ancientbirds/"
      />

      <ListItem
        id="digital-milliet"
        title="editions.digmill.title"
        text="editions.digmill.text"
        linkText="editions.digmill.link"
        reverse
        image={digmill}
        alt="screenshot of Digital Milliet"
        link="https://digmill.perseids.org/"
      />

      <ListItem
        id="treebanking-publications"
        title="editions.treebanking.title"
        text="editions.treebanking.text"
        reverse
        image={treebank}
        alt="picture of treebank"
        links={[
          { link: 'https://perseids-publications.github.io/harrington-trees/', text: 'editions.treebanking.harrington', key: 'harrington-trees' },
          { link: 'https://perseids-publications.github.io/gorman-trees/', text: 'editions.treebanking.gorman', key: 'gorman-trees' },
          { link: 'https://perseusdl.github.io/treebank_data/', text: 'editions.treebanking.agldt', key: 'agldt-trees' },
        ]}
      />

      <ListItem
        title="editions.other.title"
        id="demo-publications"
        reverse
        image={bodin}
        alt="screenshot of the trilingual Bodin alignment"
        hasSeparator={false}
      >
        <>
          <p>
            <I18n t="editions.other.explore" />
          </p>
          <ul className="pl-4">
            <li>
              <a href="http://pubs.perseids.org/epifacs/src/">
                <I18n t="editions.other.epigraphy" />
              </a>
            </li>
            <li>
              <a href="http://pubs.perseids.org/berti_demo/src/">
                <I18n t="editions.other.fragmentary" />
              </a>
            </li>
            <li>
              <a href="http://pubs.perseids.org/vortex/digitaledition/tlg0012.tlg001.perseus-grc1.de.html">
                <I18n t="editions.other.annotation" />
              </a>
            </li>
            <li>
              <a href="http://pubs.perseids.org/alignment-prototypes/">
                <I18n t="editions.other.alignment" />
              </a>
            </li>
            <li>
              <a href="http://joth.perseids.org/joth.html#index">
                <I18n t="editions.other.joth" />
              </a>
            </li>
            <li>
              <a href={`${process.env.PUBLIC_URL}/sites/tuftsmythf13_pubs.html`}>
                <I18n t="editions.other.commentary" />
              </a>
            </li>
          </ul>
        </>
      </ListItem>
    </div>

    <hr />

  </>
);

export default DigitalEditions;
