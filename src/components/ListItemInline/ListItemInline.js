import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-i18n';

import I18n from '../I18n';

const renderLink = (link, linkText) => (
  <a className="btn btn-secondary" href={link} role="button">
    <I18n t={linkText} />
    {' '}
    »
  </a>
);

const renderTo = (to, linkText) => (
  <Link className="btn btn-secondary mr-2" to={to} role="button">
    <I18n t={linkText} />
    {' '}
    »
  </Link>
);

const renderSingleLink = (link, linkText, key) => (
  <p key={key}>
    <a className="btn btn-secondary" href={link} role="button">
      {linkText ? <I18n t={linkText} /> : link}
      {' '}
      »
    </a>
  </p>
);

const renderLinks = (links) => links.map(({ link, text, key }) => (
  renderSingleLink(link, text, key)));

const renderText = (text) => (
  <p>
    <I18n t={text} />
  </p>
);

const renderSubtitle = (subtitle) => (
  <h3 className="h5">
    <I18n t={subtitle} />
  </h3>
);

const ListItemInline = ({
  title,
  subtitle,
  id,
  text,
  to,
  link,
  links,
  linkText,
  hasSeparator,
}) => {
  const rowBorder = hasSeparator ? 'border-bottom-sm mb-4' : '';

  return (
    <div className={`col-md-4 pb-2 ${rowBorder}`} id={id}>
      <h2>
        <I18n t={title} />
      </h2>
      {subtitle && renderSubtitle(subtitle)}
      {text && renderText(text)}
      {link && renderLink(link, linkText)}
      {to && renderTo(to, linkText)}
      {links && renderLinks(links)}
    </div>
  );
};

ListItemInline.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string,
    key: PropTypes.string,
  })),
  to: PropTypes.string,
  linkText: PropTypes.string,
  hasSeparator: PropTypes.bool,
};

ListItemInline.defaultProps = {
  hasSeparator: true,
  subtitle: undefined,
  link: undefined,
  links: undefined,
  linkText: '',
  to: undefined,
};

export default ListItemInline;
