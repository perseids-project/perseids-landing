import React from 'react';

import frqsc from '../../img/sponsor/frqsc.png';
import imls from '../../img/sponsor/imls.png';
import kress from '../../img/sponsor/kress.png';
import mellon from '../../img/sponsor/mellon.jpg';
import neh from '../../img/sponsor/neh.png';
import tufts from '../../img/sponsor/tufts.png';

const Sponsors = () => (
  <footer className="footer">
    <div className="container mt-2">
      <p className="text-center mb-3">
        The Perseids Project would not be possible without the support of:
      </p>
      <div className="row">
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://mellon.org/">
              <img className="footer-sponsor-img" src={mellon} title="Andrew W. Mellon Foundation" alt="Andrew W. Mellon Foundation" />
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.neh.gov/">
              <img className="footer-sponsor-img" src={neh} title="National Endowment for the Humanities" alt="National Endowment for the Humanities" />
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.tufts.edu/">
              <img className="footer-sponsor-img" src={tufts} title="Tufts University" alt="Tufts University" />
            </a>
          </p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.imls.gov/">
              <img className="footer-sponsor-img" src={imls} title="Institute of Museum and Library Services" alt="Institute of Museum and Library Services" />
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="http://www.kressfoundation.org/">
              <img className="footer-sponsor-img" src={kress} title="The Samuel H. Kress Foundation" alt="The Samuel H. Kress Foundation" />
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="http://www.frqsc.gouv.qc.ca/">
              <img className="footer-sponsor-img" src={frqsc} title="Le Fonds de recherche du Québec – Société et culture" alt="Le Fonds de recherche du Québec – Société et culture" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Sponsors;
