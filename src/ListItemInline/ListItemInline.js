import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItemInline = ({
  title,
  text,
  link,
  linkText,
}) => (
  <div className="col-md-4">
    <h2>
      {title}
    </h2>
    <p>
      {text}
    </p>
    <p>
      <Link className="btn btn-secondary mr-2" to={link} role="button">
        {`${linkText} »`}
      </Link>
    </p>
  </div>
);

ListItemInline.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default ListItemInline;
