import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

import DigitalEditions from '../DigitalEditions';
import PerseidsPlatform from '../PerseidsPlatform';
import Home from '../Home';
import SoftwareLibraries from '../SoftwareLibraries';

const App = () => (
  <Router>
    <React.Fragment>
      <Navbar />

      <main role="main">
        <Route exact path="/" component={Home} />
        <Route exact path="/digital-editions" component={DigitalEditions} />
        <Route exact path="/perseids-platform" component={PerseidsPlatform} />
        <Route exact path="/libraries-tools" component={SoftwareLibraries} />
      </main>

      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
