import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem  extends Component {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    image: PropTypes.string,
    alt: PropTypes.string,
    reverse: PropTypes.bool,
  };

  static defaultProps = {
    reverse: false,
  };

  render() {
    let textOrder = this.props.reverse ? "col-md-6 order-md-6" : "col-md-6";
    let imageOrder = this.props.reverse ? "col-md-6 order-md-1" : "col-md-6";

    return (
      <div className="row mb-4 align-items-center">
        <div className={textOrder}>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
          {this.props.children}
        </div>
        <div className={imageOrder}>
          <img className="img-fluid" src={this.props.image} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default ListItem;
