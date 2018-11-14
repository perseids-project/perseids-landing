import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const renderLink = (link, to, linkText) => {
  if (link) {
    return (
      <a className="btn btn-secondary" href={link} role="button">
        {`${linkText} »`}
      </a>
    );
  }

  return (
    <Link className="btn btn-secondary mr-2" to={to} role="button">
      {`${linkText} »`}
    </Link>
  );
};

const ListItemInline = ({
  title,
  id,
  text,
  to,
  link,
  linkText,
  hasSeparator,
}) => {
  const rowBorder = hasSeparator ? 'border-bottom-sm mb-4' : '';

  return (
    <div className={`col-md-4 pb-2 ${rowBorder}`} id={id}>
      <h2>
        {title}
      </h2>
      <p>
        {text}
      </p>
      <p>
        {renderLink(link, to, linkText)}
      </p>
    </div>
  );
};

ListItemInline.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  to: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  hasSeparator: PropTypes.bool,
};

ListItemInline.defaultProps = {
  hasSeparator: true,
  link: undefined,
  to: undefined,
};

export default ListItemInline;
