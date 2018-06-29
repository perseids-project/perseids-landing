import React from 'react';
import PropTypes from 'prop-types';

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

const backgrounds = [
  'sunset',
  'columns',
  'text',
  'construction',
  'funerary-plaque',
];

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.oneOf(backgrounds).isRequired,
};

export default Hero;
