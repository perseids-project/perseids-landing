import React, { Component } from 'react';

import treebank from '../img/treebank.png';
import community from '../img/community.png';
import manuscript from '../img/manuscript.png';
import sharing from '../img/sharing.png';

class Home extends Component {
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

          <div className="row mb-4 align-items-center">
            <div className="col-md-6">
              <h2>Interacting with Ancient Documents</h2>
              <p>Since ancient documents, particularly text-based ones, can be difficult to access for non-specialists, our mission is to make it possible for editors to augment ancient texts with layers of explanatory materials in the form of annotations, image markup, commentary, and interactive graphs.</p>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={treebank} alt="treebanking" />
            </div>
          </div>

          <hr />

          <div className="row mb-4 align-items-center">
            <div className="col-md-6 order-md-6">
              <h2>Facilitating Teamwork</h2>
              <p>Editors can set up communities and review boards so as to work in teams and review each other’s contributions, whether in classNameroom or research settings.</p>
            </div>
            <div className="col-md-6 order-md-1">
              <img className="img-fluid" src={community} alt="community" />
            </div>
          </div>

          <hr />

          <div className="row mb-4 align-items-center">
            <div className="col-md-6">
              <h2>Cross-disciplinary Research</h2>
              <p>The platform is language-independent and currently accommodates Latin, Greek, and many other languages of the ancient and pre-modern world. This diversity means that we are fundamentally committed to a cross-disciplinary approach, and we encourage users to integrate data from other fields to enrich Humanities projects.</p>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={manuscript} alt="manuscript" />
            </div>
          </div>

          <hr />

          <div className="row mb-4 align-items-center">
            <div className="col-md-6 order-md-6">
              <h2>Open Data</h2>
              <p>In order to support widespread data sharing, our core value is to put the data first, making sure that data produced through Perseids is compliant with community standards for open data, interoperability, and technology independence.</p>
            </div>
            <div className="col-md-6 order-md-1">
              <img className="img-fluid" src={sharing} alt="sharing" />
            </div>
          </div>

          <hr />

        </div>
      </React.Fragment>
    );
  }
}

export default Home;
