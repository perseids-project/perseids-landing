import React from 'react';

import sunset from '../img/background/sunset.jpg';
import columns from '../img/background/columns.jpg';
import text from '../img/background/text.png';
import construction from '../img/background/construction.jpg';
import funeraryPlaque from '../img/background/funerary-plaque.png';

const images = {
  sunset,
  columns,
  text,
  construction,
  'funerary-plaque': funeraryPlaque,
};

// This component exists because of an issue with background images.
// If an image is included as a background image but *not* in an <img>
// tag then it will not load until all CSS is processed. This leads to
// a bad user experience where if someone changes pages it takes a second
// before the hero image is updated.
const ImagePreload = () => (
  <div className="d-none" aria-hidden>
    {Object.keys(images).map(key => <img src={images[key]} key={key} alt="" />)}
  </div>
);

ImagePreload.backgrounds = Object.keys(images);

export default ImagePreload;
