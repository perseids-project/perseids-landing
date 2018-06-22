import React, { Component } from 'react';
import './App.css';

import perseids_logo_transparent from './img/perseids-logo-transparent.png';
import community from './img/community.png';
import frqsc_logo from './img/frqsc-logo.png';
import imls_logo from './img/imls-logo.png';
import kress_logo from './img/kress-logo.png';
import manuscript from './img/manuscript.png';
import mellon_logo from './img/mellon-logo.jpg';
import neh_logo from './img/neh-logo.png';
import sharing from './img/sharing.png';
import treebank from './img/treebank.png';
import tufts_logo from './img/tufts-logo.png';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="https://www.perseids.org"><img className="navbar-logo-img" src={perseids_logo_transparent} title="perseids logo" alt="perseids logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="http://www.perseids.org/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.perseids.org/sites/">Sample Publications</a>
              </li>
            </ul>

            <ul className="navbar-nav my-2 my-lg-02">
              <li className="nav-item">
                <a className="nav-link" href="https://sosol.perseids.org/sosol/signin">Log in</a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main">

          <div className="jumbotron">
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

        </main>

        <footer className="container mt-2">
          <h6 className="text-center mb-3">The Perseids Project would not be possible without the support of:</h6>
          <div className="row">
            <div className="col-md-4">
              <p>
              <a target="_blank" rel="noopener noreferrer" href="https://mellon.org/">
                <img className="footer-logo-img" src={mellon_logo} title="Andrew W. Mellon Foundation" alt="Andrew W. Mellon Foundation" />
              </a>
              </p>
            </div>
            <div className="col-md-4">
              <p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.neh.gov/">
                <img className="footer-logo-img" src={neh_logo} title="National Endowment for the Humanities" alt="National Endowment for the Humanities" />
              </a>
              </p>
            </div>
            <div className="col-md-4">
              <p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.tufts.edu/">
                <img className="footer-logo-img" src={tufts_logo} title="Tufts University" alt="Tufts University" />
              </a>
              </p>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-md-4">
              <p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.imls.gov/">
                <img className="footer-logo-img" src={imls_logo} title="Institute of Museum and Library Services" alt="Institute of Museum and Library Services" />
              </a>
              </p>
            </div>
            <div className="col-md-4">
              <p>
              <a target="_blank" rel="noopener noreferrer" href="http://www.kressfoundation.org/">
                <img className="footer-logo-img" src={kress_logo} title="The Samuel H. Kress Foundation" alt="The Samuel H. Kress Foundation" />
              </a>
              </p>
            </div>
            <div className="col-md-4">
              <p>
              <a target="_blank" rel="noopener noreferrer" href="http://www.frqsc.gouv.qc.ca/">
                <img className="footer-logo-img" src={frqsc_logo} title="Le Fonds de recherche du Québec – Société et culture" alt="Le Fonds de recherche du Québec – Société et culture" />
              </a>
              </p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
