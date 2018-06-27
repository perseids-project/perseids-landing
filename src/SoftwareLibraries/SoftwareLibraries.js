import React, { Component } from 'react';

import Hero from '../Hero';
import Announcement from '../Announcement';

class SoftwareLibraries  extends Component {
  render() {
    return (
      <React.Fragment>

        <Hero
          title="Libraries and Tools"
          text="All of the code at the New Name Project is free and open source. We try to extract any useful code to share with community by making a library, or web application, or API."
          background="construction" />

        <Announcement />

        <hr />

      </React.Fragment>
    );
  }
}

export default SoftwareLibraries;
