import React, { Component } from 'react';
import { NavbarToggler, Collapse } from 'reactstrap';

import { NavLink } from "react-router-dom";

import perseids_logo_transparent from '../img/perseids-logo-transparent.png';

class Navbar extends Component {
  state = {
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img className="navbar-logo-img" src={perseids_logo_transparent} title="perseids logo" alt="perseids logo" />
        </NavLink>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse isOpen={!this.state.collapsed} navbar>
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
        </Collapse>
      </nav>
    );
  }
}

export default Navbar;
