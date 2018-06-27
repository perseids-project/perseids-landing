import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItemInline  extends Component {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
  };

  static defaultProps = {
    column: "4",
  };

  render() {
    return (
      <div className={"col-md-" + this.props.column}>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        {this.props.children}
      </div>
    );
  }
}

export default ListItemInline;

