import React, { Component } from 'react';
import { NavbarToggler, Collapse } from 'reactstrap';
import { PerseidsHeader } from 'perseids-react-components';
import { Link, NavLink } from 'react-router-i18n';

import I18n from '../I18n';

const renderCollapse = collapsed => (
  <Collapse isOpen={!collapsed} navbar>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/perseids-platform">
          <I18n t="header.platform" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/digital-editions">
          <I18n t="header.editions" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/libraries-tools">
          <I18n t="header.tools" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">
          <I18n t="header.contact" />
        </NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://sites.tufts.edu/perseids/">
          <I18n t="header.blog" />
        </a>
      </li>
    </ul>

    <ul className="navbar-nav my-2 my-lg-02">
      <li className="nav-item">
        <a className="nav-link" href="https://sosol.perseids.org/sosol/signin">
          <I18n t="header.login" />
        </a>
      </li>
    </ul>
  </Collapse>
);

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
      <React.Fragment>

        <PerseidsHeader component={Link} props={{ to: '/' }}>
          <NavbarToggler onClick={this.toggleNavbar} aria-label="navigation menu" />

          {renderCollapse(collapsed)}
        </PerseidsHeader>

        <noscript>
          <div className="container-fluid bg-light d-md-none noscript-fake-navbar">
            {renderCollapse(false)}
          </div>
        </noscript>

      </React.Fragment>
    );
  }
}

export default Navbar;
