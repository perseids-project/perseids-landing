import React from 'react';

import { createI18n, Link } from 'react-router-i18n';

const locales = ['en', 'fr'];

const translations = {
  en: {
    home: {
      hero: {
        title: 'The Perseids Project',
        text: 'The Perseids Project aims to support access to scholarship in Classics for students and members of the public at all levels of competence. We provide a suite of tools that foster language acquisition, facilitate working with documents, and encourage research.',
      },
      platform: {
        title: 'Perseids Platform',
        text: 'The Perseids Platform is a free and open online environment for producing data-driven editions of ancient documents. The Platform allows users to collaborate on editing and publishing documentary materials from the ancient world.',
        link: 'Read more',
      },
      editions: {
        title: 'Digital Editions',
        text: 'Our aim with the Perseids Project is to support a wide range of publication types for the texts and data, from micro-publications to full-fledged digital editions. To develop our publications, we collaborate with students, scholars at other institutions, and researchers across disciplines.',
        link: 'Explore digital editions',
      },
      tools: {
        title: 'Libraries and Tools',
        text: 'As part of our work we often write tools, libraries, and APIs. Since one of our goals with the Perseids Project is to make all of our data and code open, we release our programs as free software for anyone to use or modify.',
        link: 'Learn more',
      },
    },
    platform: {
      hero: {
        title: 'The Perseids Platform',
        text: 'A free and open online environment for producing collaborative data-driven editions of ancient documents.',
      },
      information: 'The Perseids Platform is a web-based, fully audited, version-controlled editing environment. It enables the collaborative editing of texts in a framework of rigorous and transparent peer-review and credit mechanisms with strong editorial oversight.',
      buttons: {
        login: 'Create account or log in',
        instructions: 'View instructions',
      },
      interacting: {
        title: 'Interacting with Ancient Documents',
        text: 'Ancient documents, particularly text-based ones, can be difficult to access for non-specialists. The Perseids Platform makes it possible for editors to augment ancient texts with layers of explanatory materials in the form of annotations, image markup, commentary, and interactive graphs.',
      },
      teamwork: {
        title: 'Facilitating Teamwork',
        text: 'The Perseids Platform allows editors to collaborate by setting up communities and review boards. Teams can use these features to create custom workflows, contribution guidelines, and review processes, both in the classroom and in research settings.',
      },
      research: {
        title: 'Cross-disciplinary Research',
        text: 'We are fundamentally committed to a cross-disciplinary approach. The Perseids Platform is language-independent, currently accommodating Latin, Greek, and many other languages of the ancient and pre-modern world. Users are also encouraged to integrate data from other fields to enrich Humanities projects.',
      },
      data: {
        title: 'Open Data',
        text: 'Our core value is to put the data first. All of the data produced through The Perseids Platform is compliant with community standards for open data, interoperability, and technology independence.',
      },
    },
    editions: {
      hero: {
        title: 'Digital Editions',
        text: 'Our aim with the Perseids Project is to support a wide range of publication types for texts and data, from micro-publications to full-fledged digital editions. We collaborate on our publications with students, with scholars at several institutions, and with experts across multiple disciplines.',
      },
      darcy: {
        title: 'Birds in Ancient Mythology',
        text: (
          <>
            This project, which is still a work in progress, invites the public to engage with the
            fields of classics and ornithology via a series of short films based on
            {' '}
            <a href="https://en.wikipedia.org/wiki/D%27Arcy_Wentworth_Thompson">
              D&apos;Arcy Thompson&apos;s
            </a>
            {' '}
            <em>
              Glossary of Greek Birds
            </em>
            {' '}
            accompanied by digital content shared as Open Linked Data. The goal is that, through
            these products, the public will have an opportunity to explore the intersection of
            science and the humanities.
          </>
        ),
        link: 'Learn more',
      },
      digmill: {
        title: 'The Digital Milliet Project',
        text: (
          <>
            The
            {' '}
            <em>
              Recueil des textes grecs et latins relatifs à la peinture ancienne
            </em>
            {' '}
            (&quot;Collection of Greek and Latin Texts Concerning Ancient Painting&quot;) was the
            initiative of the 19
            <sup>th</sup>
            {' '}
            century French academic painter,
            {' '}
            <a href="https://fr.wikipedia.org/wiki/Paul_Milliet_(peintre)">
              Paul Milliet
            </a>
            . Milliet sponsored a book that would contain all surviving
            texts about ancient painting and include translations and commentaries.
            The Digital Milliet revitalizes Milliet&apos;s sourcebook in a digital format.
            Our goal with the project is to make ancient Greek and Latin texts
            about painting accessible to specialists and the public alike.
          </>
        ),
        link: 'Browse the Digital Milliet',
      },
      treebanking: {
        title: 'Treebanking Collections',
        text: (
          <>
            Treebanks are morpho-syntactic commentaries on texts, made sentence by sentence.
            {' '}
            <Link to="/perseids-platform">
              The Perseids Platform
            </Link>
            {' '}
            allows students and scholars to build treebanks in an intuitive graphic interface
            while compiling the data in an XML document for analysis. Many of these treebanks
            have been gathered into collaborative and interactive publications.
          </>
        ),
        harrington: 'J. M. Harrington Published Trees',
        gorman: 'Treebanks by Vanessa and Bob Gorman',
        agldt: 'The AGLDT',
      },
      other: {
        title: 'Other Publications',
        explore: 'Explore some of the many different publications that have been created with or with the support of The Perseids Project.',
        epigraphy: 'Epigraphy',
        fragmentary: 'Fragmentary texts',
        annotation: 'Thematic annotation',
        alignment: 'Translation alignments',
        joth: 'Social networks, places and texts',
        commentary: 'Student commentaries',
      },
    },
    libraries: {
      hero: {
        title: 'Libraries and Tools',
        text: 'All of the code at the Perseids Project is free and open source. We try to extract any useful code to share with community by making a library, web application, or API.',
      },
      morphology: {
        title: 'Morphology Service',
        text: (
          <>
            The Perseids Project provides a morphology API that performs morphological
            analysis on Greek and Latin text.
            The API uses a modified version of the
            {' '}
            <a href="https://wiki.digitalclassicist.org/Morpheus" arget="_blank" rel="noopener noreferrer">
              Morpheus morphological analysis engine
            </a>
            .
          </>
        ),
        api: 'Learn more about the API',
        repository: 'See the Perseids version of Morpheus',
      },
      lexica: {
        title: 'Dictionaries',
        text: 'Perseids hosts several mobile-friendly online lexica. All the data is saved locally. This means that after loading the page a single time, you can use the lexicon without an internet connection.',
        lsj: 'LSJ Greek-English Lexicon',
        woodhouse: 'Woodhouse English-Greek Dictionary',
      },
      editing: {
        title: 'Editing Tools',
        text: 'The Perseids Project provides several stand-alone tools that can be used for working with ancient languages and editing texts.',
        beta: 'Beta Code converter',
        demixer: 'Greek-Latin demixer',
        polytonic: 'Polytonic Greek keyboard',
        conjugator: 'Greek verb conjugator',
      },
      other: {
        title: 'Other Repositories',
        source: 'The source for all of the code written for The Perseids Project is available on GitHub. Explore our repositories to learn more.',
        tools: 'Tools and libraries',
        applications: 'Web applications and APIs',
        publications: 'Publications and publication templates',
      },
    },
    contact: {
      hero: {
        title: 'Contact the Perseids Team',
        text: 'If you have a suggestion, want to report a bug, are interested in collaborating, or would like to reach out for any other reason, please use one of the links below or email us at perseids@tufts.edu.',
      },
      feature: {
        title: 'Feature Requests',
        text: 'If you have a suggestion or a request for some new functionality, please click the link below and fill out a short questionnaire. We will get back to you as soon as we can.',
        link: 'Make a Request',
      },
      bug: {
        title: 'Issues and Bugs',
        text: 'If you have found a bug in one of The Perseids Project applications or think that something is not working correctly, please report it. We greatly appreciate bug reports and we will try to fix the issue as soon as possible.',
        link: 'Report a bug',
      },
      other: {
        title: 'Other Comments',
        text: 'For any other question, comment, idea, potential collaboration, click the link below and fill out the form to send us a message.',
        link: 'Send a Message',
      },
    },
    header: {
      platform: 'Perseids Platform',
      editions: 'Digital Editions',
      tools: 'Libraries and Tools',
      contact: 'Contact Us',
      blog: 'Blog',
      login: 'Log in',
    },
    footer: {
      support: 'The Perseids Project would not be possible without the support of:',
    },
  },
  fr: {
    home: {
      platform: {
        title: 'Perseids Platform',
        text: 'Le « Perseids Platform » est un environnement en ligne libre et open source pour la production des éditions numériques de documents anciens. Ce plate-forme permet aux utilisateurs de collaborer à la révision et à la publication des matériaux documentaires du monde ancien.',
        link: 'En lire plus',
      },
    },
    platform: {
      buttons: {
        login: 'Se connecter',
        instructions: 'Voir des instructions',
      },
    },
    editions: {
      digmill: {
        title: 'Le projet Digital Milliet',
        text: (
          <>
            Le
            {' '}
            <em>
              Recueil des textes grecs et latins relatifs à la peinture ancienne
            </em>
            {' '}
            a été l&apos;initiative du peintre académique français du XIX
            <sup>e</sup>
            {' '}
            siècle,
            {' '}
            <a href="https://fr.wikipedia.org/wiki/Paul_Milliet_(peintre)">
              Paul Milliet
            </a>
            . Milliet a pris l&apos;initiative de faire publier un ouvrage
            qui inclurait tous les textes survivants à propos de la peinture ancienne
            accompagnés d&apos;une traduction et de commentaires.
            Le Digital Milliet revitalise ce recueil dans un format numérique.
            Notre objectif avec ce projet est de
            rendre accessibles les textes anciens latins et grecs sur la peinture
            et aux spécialistes et au public.
          </>
        ),
        link: 'Feuilleter le Digital Milliet',
      },
    },
    libraries: {
      other: {
        title: "D'autres dépôts",
        source: 'Le code source de tous les logiciels écrits pour The Perseids Project est disponible sur GitHub. Explorer nos dépôt et en apprendre davantage.',
        tools: 'Outils et logithèques',
        applications: 'Applications web et IPAs',
        publications: 'Publications et modèles de publication',
      },
    },
    contact: {
      hero: {
        title: "Contacter l'equipe de Perseids",
        text: "Si tu as une suggestion, tu veux reporter un bug, tu es interessé de collaborer, ou tu voudrais nous contacter pour quelconque raison, merci d'utiliser les liens dessous ou de nous envoyer un courriel à perseids@tufts.edu.",
      },
    },
    header: {
      platform: 'Perseids Platform',
      editions: 'Editions numériques',
      tools: 'Logithèques et outils',
      contact: 'Nous contacter',
      blog: 'Blog',
      login: 'Se connecter',
    },
    footer: {
      support: 'The Perseids Project ne serait pas possible sans le soutien de :',
    },
  },
};

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;
