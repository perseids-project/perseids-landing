import React from 'react';

import frqscLogo from '../img/frqsc-logo.png';
import imlsLogo from '../img/imls-logo.png';
import kressLogo from '../img/kress-logo.png';
import mellonLogo from '../img/mellon-logo.jpg';
import nehLogo from '../img/neh-logo.png';
import tuftsLogo from '../img/tufts-logo.png';

const Footer = () => (
  <footer className="container mt-2">
    <p className="text-center mb-3">
      The Perseids Project would not be possible without the support of:
    </p>
    <div className="row">
      <div className="col-md-4">
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://mellon.org/">
            <img className="footer-logo-img" src={mellonLogo} title="Andrew W. Mellon Foundation" alt="Andrew W. Mellon Foundation" />
          </a>
        </p>
      </div>
      <div className="col-md-4">
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.neh.gov/">
            <img className="footer-logo-img" src={nehLogo} title="National Endowment for the Humanities" alt="National Endowment for the Humanities" />
          </a>
        </p>
      </div>
      <div className="col-md-4">
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tufts.edu/">
            <img className="footer-logo-img" src={tuftsLogo} title="Tufts University" alt="Tufts University" />
          </a>
        </p>
      </div>
    </div>
    <div className="row pt-1">
      <div className="col-md-4">
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.imls.gov/">
            <img className="footer-logo-img" src={imlsLogo} title="Institute of Museum and Library Services" alt="Institute of Museum and Library Services" />
          </a>
        </p>
      </div>
      <div className="col-md-4">
        <p>
          <a target="_blank" rel="noopener noreferrer" href="http://www.kressfoundation.org/">
            <img className="footer-logo-img" src={kressLogo} title="The Samuel H. Kress Foundation" alt="The Samuel H. Kress Foundation" />
          </a>
        </p>
      </div>
      <div className="col-md-4">
        <p>
          <a target="_blank" rel="noopener noreferrer" href="http://www.frqsc.gouv.qc.ca/">
            <img className="footer-logo-img" src={frqscLogo} title="Le Fonds de recherche du Québec – Société et culture" alt="Le Fonds de recherche du Québec – Société et culture" />
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
