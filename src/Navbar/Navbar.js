import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import perseids_logo_transparent from '../img/perseids-logo-transparent.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img className="navbar-logo-img" src={perseids_logo_transparent} title="perseids logo" alt="perseids logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/perseids-platform">Perseids Platform</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/digital-editions">Digital Editions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/libraries-tools">Libraries and Tools</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://sites.tufts.edu/perseids/">Blog</a>
            </li>
          </ul>

          <ul className="navbar-nav my-2 my-lg-02">
            <li className="nav-item">
              <a className="nav-link" href="https://sosol.perseids.org/sosol/signin">Log in</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
