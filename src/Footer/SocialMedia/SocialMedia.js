import React from 'react';

import github from '../../img/social-media/github.svg';
import twitter from '../../img/social-media/twitter-alt.svg';

const SocialMedia = () => (
  <footer className="footer">
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-text">
        © The New Name Project 2018
      </span>

      <ul className="navbar-nav my-2 my-lg-02 flex-row">
        <li className="nav-item">
          <a className="nav-link p-2" href="https://github.com/perseids-project">
            <img className="footer-social-media-img" src={github} title="GitHub" alt="GitHub" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-2" href="https://twitter.com/PerseidsProject">
            <img className="footer-social-media-img" src={twitter} title="Twitter" alt="Twitter" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default SocialMedia;
