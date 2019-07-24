import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

import DigitalEditions from '../DigitalEditions';
import Home from '../Home';
import NotFound from '../NotFound';
import PerseidsPlatform from '../PerseidsPlatform';
import SoftwareLibraries from '../SoftwareLibraries';
import Contact from '../Contact';

import ImagePreload from '../ImagePreload';

const base = '/:locale(en|fr)?';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <Route path={base} component={Navbar} />

      <main role="main">
        <Switch>
          <Route exact path={base} component={Home} />
          <Route exact path={`${base}/digital-editions`} component={DigitalEditions} />
          <Route exact path={`${base}/libraries-tools`} component={SoftwareLibraries} />
          <Route exact path={`${base}/perseids-platform`} component={PerseidsPlatform} />
          <Route exact path={`${base}/contact`} component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
      <ImagePreload />
    </>
  </Router>
);

export default App;
