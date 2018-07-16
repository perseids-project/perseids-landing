import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

import DigitalEditions from '../DigitalEditions';
import Home from '../Home';
import NotFound from '../NotFound';
import PerseidsPlatform from '../PerseidsPlatform';
import SoftwareLibraries from '../SoftwareLibraries';

import ImagePreload from '../ImagePreload';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <React.Fragment>
      <Navbar />

      <main role="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/digital-editions" component={DigitalEditions} />
          <Route exact path="/libraries-tools" component={SoftwareLibraries} />
          <Route exact path="/perseids-platform" component={PerseidsPlatform} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
      <ImagePreload />
    </React.Fragment>
  </Router>
);

export default App;
