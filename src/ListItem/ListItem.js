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
}) => {
  const textOrder = reverse ? 'col-md-6 order-md-6' : 'col-md-6';
  const imageOrder = reverse ? 'col-md-6 order-md-1' : 'col-md-6';

  return (
    <div className="row mb-4 align-items-center">
      <div className={textOrder}>
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
      <div className={imageOrder}>
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
  link: PropTypes.string,
  linkText: PropTypes.string,
};

ListItem.defaultProps = {
  reverse: false,
  link: undefined,
  linkText: undefined,
};

export default ListItem;
