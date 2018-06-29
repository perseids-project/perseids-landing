import React from 'react';

import Hero from '../Hero';
import ListItem from '../ListItem';

import digmill from '../img/digmill.png';

const DigitalEditions = () => (
  <React.Fragment>
    <Hero
      title="Digital Editions"
      text="Our aim with the New Name Project is to support a wide range of publication types for texts and data, from micro-publications to full-fledged digital editions. We collaborate on our publications with students, with scholars at several institutions, and with experts across multiple disciplines."
      background="text"
    />

    <div className="container mb-4">

      <ListItem
        title="The Digital Milliet Project"
        text={(
          <span>
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
          </span>
        )}
        reverse
        image={digmill}
        alt="screenshot of Digital Milliet"
        link="https://digmill.perseids.org/"
        linkText="Browse the Digital Milliet"
        hasSeparator={false}
      />
    </div>

    <hr />

  </React.Fragment>
);

export default DigitalEditions;
