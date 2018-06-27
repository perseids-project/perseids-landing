import React, { Component } from 'react';

class Announcement  extends Component {
  render() {
    return (
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>We're having a Perseids User Summit on August 21, 2018.</h2>
            <h3>Help us prepare by
              {" "}<a href="https://goo.gl/forms/oWpTBCEBe2C7Z0yv2" target="_blank" rel="noopener noreferrer">taking the survey!</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Announcement;
