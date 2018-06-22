import React, { Component } from 'react';

import frqsc_logo from '../img/frqsc-logo.png';
import imls_logo from '../img/imls-logo.png';
import kress_logo from '../img/kress-logo.png';
import mellon_logo from '../img/mellon-logo.jpg';
import neh_logo from '../img/neh-logo.png';
import tufts_logo from '../img/tufts-logo.png';

class Footer extends Component {
  render() {
    return (
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
    );
  }
}

export default Footer;
