import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItemInline = ({
  title,
  text,
  link,
  linkText,
  hasSeparator,
}) => {
  const rowBorder = hasSeparator ? 'border-bottom-sm mb-4' : '';

  return (
    <div className={`col-md-4 pb-2 ${rowBorder}`}>
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
};

ListItemInline.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  hasSeparator: PropTypes.bool,
};

ListItemInline.defaultProps = {
  hasSeparator: true,
};

export default ListItemInline;
