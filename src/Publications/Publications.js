import React, { Component } from 'react';

import Hero from '../Hero';
import Announcement from '../Announcement';

class Publications extends Component {
  render() {
    return (
      <React.Fragment>

        <Hero
          title="New Name Project Publications"
          text="Our aim with the New Name Project is to support a wide range of publication types for texts and data, from micro-publications to full-fledged digital editions. We collaborate on our publications with students, with scholars at several institutions, and with experts across multiple disciplines."
          background="text" />

        <Announcement />

        <hr />

      </React.Fragment>
    );
  }
}

export default Publications;
