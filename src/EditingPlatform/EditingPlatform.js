import React, { Component } from 'react';

import ListItem from '../ListItem';

import treebank from '../img/treebank.png';
import community from '../img/community.png';
import manuscript from '../img/manuscript.png';
import sharing from '../img/sharing.png';

class EditingPlatform  extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="jumbotron sunset-background">
          <div className="container text-light">
            <h1 className="display-3">The Perseids Project</h1>
            <p>
            Perseids offers a free and open online environment to produce collaborative data-driven editions of ancient documents.
            </p>
            <p><a className="btn btn-primary btn-lg" href="http://sites.tufts.edu/perseids/" role="button">Read more »</a></p>
          </div>
        </div>

        <div className="container mb-4">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>We're having a Perseids User Summit on August 21, 2018.</h2>
              <h3>Help us prepare by
                {" "}<a href="https://goo.gl/forms/oWpTBCEBe2C7Z0yv2" target="_blank" rel="noopener noreferrer">taking the survey!</a>
              </h3>
            </div>
          </div>
        </div>

        <hr />

        <div className="container mb-5">

          <ListItem
            title="Interacting with Ancient Documents"
            text="Since ancient documents, particularly text-based ones, can be difficult to access for non-specialists, our mission is to make it possible for editors to augment ancient texts with layers of explanatory materials in the form of annotations, image markup, commentary, and interactive graphs."
            image={treebank}
            alt="treebanking" />

          <hr />

          <ListItem
            title="Facilitating Teamwork"
            text="Editors can set up communities and review boards so as to work in teams and review each other’s contributions, whether in classNameroom or research settings."
            image={community}
            alt="community"
            reverse={true} />

          <hr />

          <ListItem
            title="Cross-disciplinary Research"
            text="The platform is language-independent and currently accommodates Latin, Greek, and many other languages of the ancient and pre-modern world. This diversity means that we are fundamentally committed to a cross-disciplinary approach, and we encourage users to integrate data from other fields to enrich Humanities projects."
            image={manuscript}
            alt="manuscript" />

          <hr />

          <ListItem
            title="Open Data"
            text="In order to support widespread data sharing, our core value is to put the data first, making sure that data produced through Perseids is compliant with community standards for open data, interoperability, and technology independence."
            image={sharing}
            alt="sharing"
            reverse={true} />

          <hr />

        </div>
      </React.Fragment>
    );
  }
}

export default EditingPlatform;
