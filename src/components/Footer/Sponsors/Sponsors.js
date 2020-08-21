import React from 'react';

import I18n from '../../I18n';

import Picture from '../../Picture';

import frqscPng from '../../../img/sponsor/frqsc.png';
import frqscWebp from '../../../img/sponsor/frqsc.webp';

import imlsPng from '../../../img/sponsor/imls.png';
import imlsWebp from '../../../img/sponsor/imls.webp';

import kressPng from '../../../img/sponsor/kress.png';
import kressWepb from '../../../img/sponsor/kress.webp';

import mellonJpg from '../../../img/sponsor/mellon.jpg';
import mellonWebp from '../../../img/sponsor/mellon.webp';

import nehPng from '../../../img/sponsor/neh.png';
import nehWepb from '../../../img/sponsor/neh.webp';

import tuftsPng from '../../../img/sponsor/tufts.png';
import tuftsWepb from '../../../img/sponsor/tufts.webp';

const Sponsors = () => (
  <footer className="footer">
    <div className="container mt-2">
      <p className="text-center mb-3">
        <I18n t="footer.support" />
      </p>
      <div className="row">
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://mellon.org/">
              <Picture className="footer-sponsor-img" jpg={mellonJpg} webp={mellonWebp} title="Andrew W. Mellon Foundation" alt="Andrew W. Mellon Foundation" />
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.neh.gov/">
              <Picture className="footer-sponsor-img" src={nehPng} webp={nehWepb} title="National Endowment for the Humanities" alt="National Endowment for the Humanities" />
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.tufts.edu/">
              <Picture className="footer-sponsor-img" src={tuftsPng} webp={tuftsWepb} title="Tufts University" alt="Tufts University" />
            </a>
          </p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.imls.gov/">
              <Picture className="footer-sponsor-img" src={imlsPng} webp={imlsWebp} title="Institute of Museum and Library Services" alt="Institute of Museum and Library Services" />
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="http://www.kressfoundation.org/">
              <Picture className="footer-sponsor-img" src={kressPng} webp={kressWepb} title="The Samuel H. Kress Foundation" alt="The Samuel H. Kress Foundation" />
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" href="http://www.frqsc.gouv.qc.ca/">
              <Picture className="footer-sponsor-img" src={frqscPng} webp={frqscWebp} title="Le Fonds de recherche du Québec – Société et culture" alt="Le Fonds de recherche du Québec – Société et culture" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Sponsors;
