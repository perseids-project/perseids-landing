import React from 'react';
import PropTypes from 'prop-types';

const onServer = () => (
  // eslint-disable-next-line no-undef
  navigator.userAgent === 'ReactSnap'
);

const ServerOnly = ({ children }) => (
  <>
    {onServer() && children}
  </>
);

ServerOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ServerOnly;
