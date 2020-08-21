import React from 'react';

import columns from '../../img/background/columns.jpg';
import construction from '../../img/background/construction.jpg';
import hermes from '../../img/background/hermes.jpg';
import sunset from '../../img/background/sunset.jpg';
import text from '../../img/background/text.jpg';
import funeraryPlaque from '../../img/background/funerary-plaque.jpg';

const images = {
  columns,
  construction,
  hermes,
  sunset,
  text,
  'funerary-plaque': funeraryPlaque,
};

// This component exists because of an issue with background images.
// If an image is included as a background image but *not* in an <img>
// tag then it will not load until all CSS is processed. This leads to
// a bad user experience where if someone changes pages it takes a second
// before the hero image is updated.
const ImagePreload = () => (
  <div className="d-none" aria-hidden>
    {Object.keys(images).map((key) => <img src={images[key]} key={key} alt="" />)}
  </div>
);

ImagePreload.backgrounds = Object.keys(images);

export default ImagePreload;
