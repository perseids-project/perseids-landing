import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hero  extends Component {
  static backgrounds = [
    'sunset',
    'columns',
    'text',
    'construction',
  ];

  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    background: PropTypes.oneOf(Hero.backgrounds),
  };

  render() {
    return (
      <div className={"jumbotron " + this.props.background + "-background"}>
        <div className="container text-light">
          <h1 className="display-3 font-weight-normal">{this.props.title}</h1>
          <p>
            <span className="bg-dark-translucent">{this.props.text}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
