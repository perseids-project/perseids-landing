import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../Hero';
import ListItemInline from '../ListItemInline';

const Home = () => (
  <>

    <Hero
      title="home.hero.title"
      text="home.hero.text"
      background="sunset"
    />

    <div className="container mb-4">
      <div className="row">

        <ListItemInline
          id="perseids-platform"
          title="home.platform.title"
          text="home.platform.text"
          linkText="home.platform.link"
          to="/perseids-platform"
        />

        <hr className="d-md-none" />

        <ListItemInline
          id="digital-editions"
          title="home.editions.title"
          text="home.editions.text"
          linkText="home.editions.link"
          to="/digital-editions"
        />

        <hr className="d-md-none" />

        <ListItemInline
          id="libraries"
          title="home.tools.title"
          text="home.tools.text"
          linkText="home.tools.link"
          to="/libraries-tools"
          hasSeparator={false}
        />
      </div>
    </div>

    <Link className="d-none" to="/fr">react-snap</Link>

    <hr />

  </>
);

export default Home;
