import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from '../Navbar';
import Footer from '../Footer';

import DigitalEditions from '../DigitalEditions';
import EditingPlatform from '../EditingPlatform';
import Home from '../Home';
import SoftwareLibraries from '../SoftwareLibraries';
import WebTools from '../WebTools';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />

          <main role="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/digital-editions" component={DigitalEditions} />
            <Route exact path="/editing-platform" component={EditingPlatform} />
            <Route exact path="/software-libraries" component={SoftwareLibraries} />
            <Route exact path="/web-tools" component={WebTools} />
          </main>

          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
