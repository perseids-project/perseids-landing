import React, { Component } from 'react';

import Navbar from '../Navbar';
import Home from '../Home';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
