import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from '../Navbar';
import Footer from '../Footer';

import DigitalEditions from '../DigitalEditions';
import EditingPlatform from '../EditingPlatform';
import Home from '../Home';
import SoftwareLibraries from '../SoftwareLibraries';

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
            <Route exact path="/libraries-tools" component={SoftwareLibraries} />
          </main>

          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
