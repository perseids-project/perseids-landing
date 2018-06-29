import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  title,
  text,
  image,
  alt,
  reverse,
  link,
  linkText,
  hideImageSmall,
  hasSeparator,
}) => {
  const textOrder = reverse ? 'order-md-6' : '';
  const imageOrder = reverse ? 'order-md-1' : '';
  const imageDisplay = hideImageSmall ? 'd-none d-md-block' : '';
  const rowBorder = hasSeparator ? 'border-bottom mb-4' : '';

  return (
    <div className={`row pb-4 align-items-center ${rowBorder}`}>
      <div className={`col-md-6 ${textOrder}`}>
        <h2>
          {title}
        </h2>
        <p>
          {text}
        </p>
        {link && (
          <p>
            <a className="btn btn-secondary" href={link} role="button">
              {`${linkText || link} »`}
            </a>
          </p>
        )}
      </div>
      <div className={`col-md-6 ${imageOrder} ${imageDisplay}`}>
        <img className="img-fluid" src={image} alt={alt} />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  hideImageSmall: PropTypes.bool,
  hasSeparator: PropTypes.bool,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

ListItem.defaultProps = {
  reverse: false,
  hideImageSmall: true,
  hasSeparator: true,
  link: undefined,
  linkText: undefined,
};

export default ListItem;
