import React from 'react';

import Hero from '../Hero';
import ListItem from '../ListItem';

import treebank from '../../img/treebank.png';
import community from '../../img/community.png';
import manuscript from '../../img/manuscript.png';
import sharing from '../../img/sharing.png';

const PerseidsPlatform = () => (
  <React.Fragment>
    <Hero
      title="The Perseids Platform"
      text="A free and open online environment for producing collaborative data-driven editions of ancient documents."
      background="columns"
    />

    <div className="container mb-4">

      <div className="row">
        <div className="col-12">
          <p>
            The Perseids Platform is a web-based, fully audited, version-controlled editing
            environment. It enables the collaborative editing of texts in a framework of rigorous
            and transparent peer-review and credit mechanisms with strong editorial oversight.
          </p>
        </div>
      </div>
      <div className="row border-bottom pb-4 mb-4">
        <div className="col-md-6 col-lg-4 offset-lg-2 col-12 pb-1 pb-md-0">
          <a className="btn btn-lg btn-block btn-secondary" href="https://sosol.perseids.org/sosol/signin">
            Create account or log in »
          </a>
        </div>
        <div className="col-md-6 col-lg-4 col-12">
          <a className="btn btn-lg btn-block btn-primary" href="http://sites.tufts.edu/perseids/instructions/">
            View instructions »
          </a>
        </div>
      </div>

      <ListItem
        title="Interacting with Ancient Documents"
        id="interacting"
        text="Ancient documents, particularly text-based ones, can be difficult to access for non-specialists. The Perseids Platform makes it possible for editors to augment ancient texts with layers of explanatory materials in the form of annotations, image markup, commentary, and interactive graphs."
        image={treebank}
        alt="treebanking"
        hideImageSmall={false}
      />

      <ListItem
        title="Facilitating Teamwork"
        id="teamwork"
        text="The Perseids Platform allows editors to collaborate by setting up communities and review boards. Teams can use these features to create custom workflows, contribution guidelines, and review processes, both in the classroom and in research settings."
        image={community}
        alt="community"
        reverse
        hideImageSmall={false}
      />

      <ListItem
        title="Cross-disciplinary Research"
        id="cross-disciplinary"
        text="We are fundamentally committed to a cross-disciplinary approach. The Perseids Platform is language-independent, currently accommodating Latin, Greek, and many other languages of the ancient and pre-modern world. Users are also encouraged to integrate data from other fields to enrich Humanities projects."
        image={manuscript}
        alt="manuscript"
        hideImageSmall={false}
      />

      <ListItem
        title="Open Data"
        id="open-data"
        text="Our core value is to put the data first. All of the data produced through The Perseids Platform is compliant with community standards for open data, interoperability, and technology independence."
        image={sharing}
        alt="sharing"
        reverse
        hideImageSmall={false}
        hasSeparator={false}
      />


      <div className="row pb-4">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-12">
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
