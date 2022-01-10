import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-i18n';

import I18n from '../I18n';

const renderLink = (link, to, linkText) => {
  if (link) {
    return (
      <a className="btn btn-secondary" href={link} role="button">
        <I18n t={linkText} />
        {' '}
        »
      </a>
    );
  }

  if (to) {
    return (
      <Link className="btn btn-secondary mr-2" to={to} role="button">
        <I18n t={linkText} />
        {' '}
        »
      </Link>
    );
  }

  return false;
};

const renderSubtitle = (subtitle) => {
  if (subtitle) {
    return (
      <h4>
        <I18n t={subtitle} />
      </h4>
    );
  }

  return false;
};

const ListItemInline = ({
  title,
  subtitle,
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
        <I18n t={title} />
      </h2>
      {renderSubtitle(subtitle)}
      <p>
        <I18n t={text} />
      </p>
      <p>
        {renderLink(link, to, linkText)}
      </p>
    </div>
  );
};

ListItemInline.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  to: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  hasSeparator: PropTypes.bool,
};

ListItemInline.defaultProps = {
  hasSeparator: true,
  subtitle: undefined,
  link: undefined,
  to: undefined,
};

export default ListItemInline;
