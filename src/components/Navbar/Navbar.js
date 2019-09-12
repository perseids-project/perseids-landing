import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { NavbarToggler, Collapse } from 'reactstrap';
import { PerseidsHeader } from 'perseids-react-components';
import { Link, NavLink } from 'react-router-i18n';

import ServerOnly from '../ServerOnly';
import I18n from '../I18n';

import styles from './Navbar.module.css';

const replaceLocale = (pathname, locale = 'en') => {
  const newLocale = locale === 'en' ? 'fr' : 'en';
  const strippedPathName = pathname.replace(`/${locale}`, '');

  return `/${newLocale}${strippedPathName}`;
};

const renderCollapse = (collapsed, pathname, locale) => (
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
      <li className={`nav-item d-none d-md-block ${styles.language}`}>
        <NavLink ignoreLocale className="nav-link" to={replaceLocale(pathname, locale)}>
          <I18n t="header.abbreviation" />
        </NavLink>
      </li>
      <div className="dropdown-divider d-md-none" />
      <li className="nav-item d-md-none">
        <NavLink ignoreLocale className="nav-link" to={replaceLocale(pathname, locale)}>
          <I18n t="header.language" />
        </NavLink>
      </li>
    </ul>
  </Collapse>
);

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { collapsed: true };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  }

  render() {
    const { collapsed } = this.state;
    const { location: { pathname }, match: { params: { locale } } } = this.props;

    return (
      <>
        <PerseidsHeader component={Link} props={{ to: '/' }}>
          <NavbarToggler onClick={this.toggleNavbar} aria-label="navigation menu" />

          {renderCollapse(collapsed, pathname, locale)}
        </PerseidsHeader>

        <ServerOnly>
          <div className="container-fluid bg-light d-md-none serveronly-fake-navbar">
            {renderCollapse(false, pathname, locale)}
          </div>
        </ServerOnly>
      </>
    );
  }
}

Navbar.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
  match: shape({
    params: shape({
      locale: string,
    }).isRequired,
  }).isRequired,
};

export default Navbar;
