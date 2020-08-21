import React from 'react';

import I18n from '../I18n';

import Hero from '../Hero';
import ListItem from '../ListItem';

import arethusaPng from '../../img/arethusa.png';
import arethusaWebp from '../../img/arethusa.webp';

import communityPng from '../../img/community.png';
import communityWebp from '../../img/community.webp';

import manuscriptPng from '../../img/manuscript.png';
import manuscriptWebp from '../../img/manuscript.webp';

import sharingPng from '../../img/sharing.png';
import sharingWebp from '../../img/sharing.webp';

const PerseidsPlatform = () => (
  <>
    <Hero
      title="platform.hero.title"
      text="platform.hero.text"
      background="columns"
    />

    <div className="container mb-4">

      <div className="row">
        <div className="col-12">
          <p>
            <I18n t="platform.information" />
          </p>
        </div>
      </div>
      <div className="row border-bottom pb-4 mb-4">
        <div className="col-md-6 col-lg-4 offset-lg-2 col-12 pb-1 pb-md-0">
          <a className="btn btn-lg btn-block btn-secondary" href="https://sosol.perseids.org/sosol/signin">
            <I18n t="platform.buttons.login" />
            {' '}
            »
          </a>
        </div>
        <div className="col-md-6 col-lg-4 col-12">
          <a className="btn btn-lg btn-block btn-primary" href="http://sites.tufts.edu/perseids/instructions/">
            <I18n t="platform.buttons.instructions" />
            {' '}
            »
          </a>
        </div>
      </div>

      <ListItem
        id="interacting"
        title="platform.interacting.title"
        text="platform.interacting.text"
        image={{ webp: arethusaWebp, png: arethusaPng, alt: 'screenshot of Arethusa' }}
        hideImageSmall={false}
      />

      <ListItem
        id="teamwork"
        title="platform.teamwork.title"
        text="platform.teamwork.text"
        image={{ webp: communityWebp, png: communityPng, alt: 'classroom with students' }}
        reverse
        hideImageSmall={false}
      />

      <ListItem
        id="cross-disciplinary"
        title="platform.research.title"
        text="platform.research.text"
        image={{ webp: manuscriptWebp, png: manuscriptPng, alt: 'manuscript edited with digital tools' }}
        hideImageSmall={false}
      />

      <ListItem
        id="open-data"
        title="platform.data.title"
        text="platform.data.text"
        image={{ webp: sharingWebp, png: sharingPng, alt: 'graph of commits' }}
        reverse
        hideImageSmall={false}
        hasSeparator={false}
      />

      <div className="row pb-4">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-12">
          <a className="btn btn-lg btn-block btn-secondary" href="https://sosol.perseids.org/sosol/signin" role="button">
            <I18n t="platform.buttons.login" />
            {' '}
            »
          </a>
        </div>
      </div>
    </div>

    <hr />

  </>
);

export default PerseidsPlatform;
