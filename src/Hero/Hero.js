import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, text, background }) => (
  <div className={`jumbotron ${background}-background`}>
    <div className="container text-light">
      <h1 className="display-3 font-weight-normal">
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
];

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.oneOf(backgrounds).isRequired,
};

export default Hero;
