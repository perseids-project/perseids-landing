import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Hero from '../Hero';
import ListItemInline from '../ListItemInline';

class Home extends Component {
  render() {
    return (
      <React.Fragment>

        <Hero
          title="The New Name Project"
          text="The New Name Project aims to support access to scholarship in Classics for students and members of the public at all levels of competence. We provide a suite of tools that foster language acquisition, facilitate working with documents, and encourage research."
          background="sunset" />

        <div className="container mb-5">
          <div className="row">

            <ListItemInline
              title="Perseids Platform"
              text="The Perseids Platform is a free and open online environment for producing data-driven editions of ancient documents. The project allows users to collaborate on producing digital versions of documentary materials from the ancient world.">

              <p>
                <Link className="btn btn-secondary mr-2" to="perseids-platform" role="button">Read more »</Link>
              </p>
            </ListItemInline>

            <ListItemInline
              title="Publications"
              text="Our aim with the New Name Project is to support a wide range of publication types for the texts and data, from micro-publications to full-fledged digital editions. To develop our publications, we have collaborates with students, scholars of the classics at other institutions, and with scholars across disciplines.">

              <p>
                <Link className="btn btn-secondary mr-2" to="publications" role="button">See publications »</Link>
              </p>
            </ListItemInline>

            <ListItemInline
              title="Libraries and Tools"
              text="Our goal is to make all of our data and code open. We put all of our code on GitHub. As part of our work we often write tools, libraries, and APIs. As part of our goal of being open, all of these are available.">

              <p>
                <Link className="btn btn-secondary mr-2" to="libraries-tools" role="button">Learn more »</Link>
              </p>
            </ListItemInline>

          </div>
        </div>

        <hr />

      </React.Fragment>
    );
  }
}

export default Home;
