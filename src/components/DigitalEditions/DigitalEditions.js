import React from 'react';

import Hero from '../Hero';
import ListItem from '../ListItem';

import ancientbirds from '../../img/ancientbirds.png';
import digmill from '../../img/digmill.png';
import treebank from '../../img/treebank.png';
import bodin from '../../img/bodin.png';

const DigitalEditions = () => (
  <React.Fragment>
    <Hero
      title="Digital Editions"
      text="Our aim with the Perseids Project is to support a wide range of publication types for texts and data, from micro-publications to full-fledged digital editions. We collaborate on our publications with students, with scholars at several institutions, and with experts across multiple disciplines."
      background="text"
    />

    <div className="container">

      <ListItem
        title="Birds in Ancient Mythology"
        id="ancientbirds"
        text="This project, which is still a work in progress, invites the public to engage with the fields of classics and ornithology via a series of short films based on D’Arcy Thompson’s Glossary of Greek Birds accompanied by digital content shared as Open Linked Data. The goal is that, through these products, the public will have an opportunity to explore the intersection of science and the humanities."
        reverse
        image={ancientbirds}
        alt="screenshot of Birds in Ancient Mythology"
        link="https://sites.tufts.edu/ancientbirds/"
        linkText="Learn more"
      />

      <ListItem
        title="The Digital Milliet Project"
        id="digital-milliet"
        reverse
        image={digmill}
        alt="screenshot of Digital Milliet"
        link="https://digmill.perseids.org/"
        linkText="Browse the Digital Milliet"
      >
        <p>
          Our goal with The Digital Milliet Project is to make ancient Greek and Latin texts
          about painting accessible in an attractive and intuitive open-source interface.
          Painting was an essential part of ancient art but most of the works have been
          destroyed by the passing of time.
          The Digital Milliet project revitalizes the sourcebook
          {' '}
          <em>
            Textes grecs et latins relatifs à la peinture ancienne
          </em>
          {' '}
          by Paul Milliet, published in 1921 by Adolphe Reinach.
        </p>
      </ListItem>

      <ListItem
        title="Treebanking Collections"
        id="treebanking-publications"
        text="Treebanks are morpho-syntactic commentaries on texts, sentence by sentence. Perseids allows students and scholars to build treebanks in an intuitive graphic interface while compiling the data in an XML document for analysis. Many of these treebanks have been gathered into collaborative and interactive publications."
        reverse
        image={treebank}
        alt="picture of treebank"
        links={[
          { link: 'https://perseids-project.github.io/harrington_trees/', text: 'J. M. Harrington Published Trees', key: 'harrington-trees' },
          { link: 'https://perseids-publications.github.io/gorman-trees/', text: 'Treebanks by Vanessa and Bob Gorman', key: 'gorman-trees' },
          { link: 'https://perseusdl.github.io/treebank_data/', text: 'The AGLDT', key: 'agldt-trees' },
        ]}
      />

      <ListItem
        title="Other Publications"
        id="demo-publications"
        reverse
        image={bodin}
        alt="screenshot of the trilingual Bodin alignment"
        hasSeparator={false}
      >
        <React.Fragment>
          <p>
            Explore some of the many different publications that have been created
            with or with the support of The Perseids Project.
          </p>
          <ul className="pl-4">
            <li>
              <a href="http://pubs.perseids.org/epifacs/src/">
                Epigraphy
              </a>
            </li>
            <li>
              <a href="http://pubs.perseids.org/berti_demo/src/">
                Fragmentary texts
              </a>
            </li>
            <li>
              <a href="http://pubs.perseids.org/vortex/digitaledition/tlg0012.tlg001.perseus-grc1.de.html">
                Thematic annotation
              </a>
            </li>
            <li>
              <a href="http://pubs.perseids.org/alignment-prototypes/">
                Translation alignments
              </a>
            </li>
            <li>
              <a href="http://joth.perseids.org/joth.html#index">
                Social networks, places and texts
              </a>
            </li>
            <li>
              <a href={`${process.env.PUBLIC_URL}/sites/tuftsmythf13_pubs.html`}>
                Student commentaries
              </a>
            </li>
          </ul>
        </React.Fragment>
      </ListItem>
    </div>

    <hr />

  </React.Fragment>
);

export default DigitalEditions;
