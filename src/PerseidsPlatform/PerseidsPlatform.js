import React from 'react';

import Hero from '../Hero';
import ListItem from '../ListItem';
import Announcement from '../Announcement';

import treebank from '../img/treebank.png';
import community from '../img/community.png';
import manuscript from '../img/manuscript.png';
import sharing from '../img/sharing.png';

const PerseidsPlatform = () => (
  <React.Fragment>
    <Hero
      title="The Perseids Platform"
      text="Perseids offers a free and open online environment to produce collaborative data-driven editions of ancient documents."
      background="columns"
    />

    <Announcement />

    <hr />

    <div className="container mb-4">
      <ListItem
        title="Interacting with Ancient Documents"
        text="Since ancient documents, particularly text-based ones, can be difficult to access for non-specialists, our mission is to make it possible for editors to augment ancient texts with layers of explanatory materials in the form of annotations, image markup, commentary, and interactive graphs."
        image={treebank}
        alt="treebanking"
        hideImageSmall={false}
      />

      <ListItem
        title="Facilitating Teamwork"
        text="Editors can set up communities and review boards so as to work in teams and review each other’s contributions, whether in classNameroom or research settings."
        image={community}
        alt="community"
        reverse
        hideImageSmall={false}
      />

      <ListItem
        title="Cross-disciplinary Research"
        text="The platform is language-independent and currently accommodates Latin, Greek, and many other languages of the ancient and pre-modern world. This diversity means that we are fundamentally committed to a cross-disciplinary approach, and we encourage users to integrate data from other fields to enrich Humanities projects."
        image={manuscript}
        alt="manuscript"
        hideImageSmall={false}
      />

      <ListItem
        title="Open Data"
        text="In order to support widespread data sharing, our core value is to put the data first, making sure that data produced through Perseids is compliant with community standards for open data, interoperability, and technology independence."
        image={sharing}
        alt="sharing"
        reverse
        hideImageSmall={false}
        hasSeparator={false}
      />


      <div className="row pb-4">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-sm-12">
          <a className="btn btn-lg btn-block btn-secondary" href="https://sosol.perseids.org/sosol/signin" role="button">
            Create account or log in »
          </a>
        </div>
      </div>
    </div>

    <hr />

  </React.Fragment>
);

export default PerseidsPlatform;
