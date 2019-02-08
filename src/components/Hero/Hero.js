import React from 'react';
import PropTypes from 'prop-types';

import ImagePreload from '../ImagePreload';

const Hero = ({ title, text, background }) => (
  <div className={`jumbotron ${background}-background`}>
    <div className="container text-light">
      <h1 className="display-hero-header">
        {title}
      </h1>
      <p>
        <span className="bg-dark-translucent">
          {text}
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
