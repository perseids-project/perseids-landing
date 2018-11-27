import React, { Component } from 'react';
import { NavbarToggler, Collapse } from 'reactstrap';
import { PerseidsHeader } from 'perseids-react-components';

import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    const { collapsed } = this.state;

    return (
      <PerseidsHeader>
        <NavbarToggler onClick={this.toggleNavbar} aria-label="navigation menu" />

        <Collapse isOpen={!collapsed} navbar>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/perseids-platform">
                Perseids Platform
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/digital-editions">
                Digital Editions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/libraries-tools">
                Libraries and Tools
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://sites.tufts.edu/perseids/">
                Blog
              </a>
            </li>
          </ul>

          <ul className="navbar-nav my-2 my-lg-02">
            <li className="nav-item">
              <a className="nav-link" href="https://sosol.perseids.org/sosol/signin">
                Log in
              </a>
            </li>
          </ul>
        </Collapse>
      </PerseidsHeader>
    );
  }
}

export default Navbar;
