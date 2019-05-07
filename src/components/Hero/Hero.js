import React from 'react';
import PropTypes from 'prop-types';

import I18n from '../I18n';

import ImagePreload from '../ImagePreload';

const Hero = ({ title, text, background }) => (
  <div className={`jumbotron ${background}-background`}>
    <div className="container text-light">
      <h1 className="display-hero-header">
        <I18n t={title} />
      </h1>
      <p>
        <span className="bg-dark-translucent">
          <I18n t={text} />
        </span>
      </p>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.oneOf(ImagePreload.backgrounds).isRequired,
};

export default Hero;
