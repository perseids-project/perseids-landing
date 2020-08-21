import React from 'react';
import PropTypes from 'prop-types';

import I18n from '../I18n';

import Picture from '../Picture';

const renderLink = (link, linkText, key) => (
  <p key={key}>
    <a className="btn btn-secondary" href={link} role="button">
      {linkText ? <I18n t={linkText} /> : link}
      {' '}
      »
    </a>
  </p>
);

const renderLinks = (links) => links.map(({ link, text, key }) => renderLink(link, text, key));

const renderText = (text) => (
  <p>
    <I18n t={text} />
  </p>
);

const ListItem = ({
  title,
  id,
  text,
  image: {
    webp, png, jpg, alt,
  },
  reverse,
  link,
  links,
  linkText,
  hideImageSmall,
  hasSeparator,
  children,
}) => {
  const textOrder = reverse ? 'order-md-6' : '';
  const imageOrder = reverse ? 'order-md-1' : '';
  const imageDisplay = hideImageSmall ? 'd-none d-md-block' : '';
  const rowBorder = hasSeparator ? 'border-bottom mb-4' : '';

  return (
    <div className={`row pb-4 align-items-center ${rowBorder}`} id={id}>
      <div className={`col-md-6 ${textOrder}`}>
        <h2>
          <I18n t={title} />
        </h2>
        {text && renderText(text)}
        {children}
        {link && renderLink(link, linkText)}
        {links && renderLinks(links) }
      </div>
      <div className={`col-md-6 ${imageOrder} ${imageDisplay}`}>
        <Picture webp={webp} png={png} jpg={jpg} alt={alt} className="img-fluid" />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    webp: PropTypes.string.isRequired,
    png: PropTypes.string,
    jpg: PropTypes.string,
  }).isRequired,
  reverse: PropTypes.bool,
  hideImageSmall: PropTypes.bool,
  hasSeparator: PropTypes.bool,
  link: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string,
    key: PropTypes.string,
  })),
  linkText: PropTypes.string,
  children: PropTypes.node,
};

ListItem.defaultProps = {
  text: undefined,
  reverse: false,
  hideImageSmall: true,
  hasSeparator: true,
  link: undefined,
  links: undefined,
  linkText: undefined,
  children: undefined,
};

export default ListItem;
