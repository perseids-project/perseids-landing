import React from 'react';
import { string } from 'prop-types';

const Picture = ({
  webp, png, jpg, alt, className, title,
}) => (
  <picture>
    <source srcSet={webp} type="image/webp" />
    {png && <source srcSet={png} type="image/png" />}
    {jpg && <source srcSet={jpg} type="image/jpg" />}
    <img src={png || jpg || webp} alt={alt} title={title} className={className} />
  </picture>
);

Picture.propTypes = {
  webp: string.isRequired,
  png: string,
  jpg: string,
  alt: string.isRequired,
  title: string,
  className: string,
};

Picture.defaultProps = {
  png: undefined,
  jpg: undefined,
  title: undefined,
  className: undefined,
};

export default Picture;
