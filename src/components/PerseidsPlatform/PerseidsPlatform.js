import React from 'react';

import I18n from '../I18n';

import Hero from '../Hero';
import ListItem from '../ListItem';

import treebank from '../../img/treebank.png';
import community from '../../img/community.png';
import manuscript from '../../img/manuscript.png';
import sharing from '../../img/sharing.png';

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
        image={treebank}
        alt="treebanking"
        hideImageSmall={false}
      />

      <ListItem
        id="teamwork"
        title="platform.teamwork.title"
        text="platform.teamwork.text"
        image={community}
        alt="community"
        reverse
        hideImageSmall={false}
      />

      <ListItem
        id="cross-disciplinary"
        title="platform.teamwork.title"
        text="platform.research.text"
        image={manuscript}
        alt="manuscript"
        hideImageSmall={false}
      />

      <ListItem
        id="open-data"
        title="platform.data.title"
        text="platform.data.text"
        image={sharing}
        alt="sharing"
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
