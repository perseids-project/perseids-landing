import React from 'react';

import Hero from '../Hero';

const NotFound = () => (
  <React.Fragment>
    <Hero
      title="404 Page Not Found"
      text="Looks like you've followed a broken link or entered a URL that doesn't exist on this site."
      background="funerary-plaque"
    />
    <div className="mb-4" />
  </React.Fragment>
);

export default NotFound;
