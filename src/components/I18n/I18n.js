import React from 'react';

import { createI18n, Link } from 'react-router-i18n';

const locales = ['en', 'fr'];

const translations = {
  en: {
    home: {
      hero: {
        title: "The Perseids Project",
        text: "The Perseids Project aims to support access to scholarship in Classics for students and members of the public at all levels of competence. We provide a suite of tools that foster language acquisition, facilitate working with documents, and encourage research.",
      },
      platform: {
        title: "Perseids Platform",
        text: "The Perseids Platform is a free and open online environment for producing data-driven editions of ancient documents. The Platform allows users to collaborate on editing and publishing documentary materials from the ancient world.",
        link: "Read more",
      },
      editions: {
        title: "Digital Editions",
        text: "Our aim with the Perseids Project is to support a wide range of publication types for the texts and data, from micro-publications to full-fledged digital editions. To develop our publications, we collaborate with students, scholars at other institutions, and researchers across disciplines.",
        link: "Explore digital editions",
      },
      tools: {
        title: "Libraries and Tools",
        text: "As part of our work we often write tools, libraries, and APIs. Since one of our goals with the Perseids Project is to make all of our data and code open, we release our programs as free software for anyone to use or modify.",
        link: "Learn more",
      },
    },
    platform: {
      hero: {
        title: "The Perseids Platform",
        text: "A free and open online environment for producing collaborative data-driven editions of ancient documents.",
      },
      information: "The Perseids Platform is a web-based, fully audited, version-controlled editing environment. It enables the collaborative editing of texts in a framework of rigorous and transparent peer-review and credit mechanisms with strong editorial oversight.",
      buttons: {
        login: "Create account or log in",
        instructions: "View instructions",
      },
      interacting: {
        title: "Interacting with Ancient Documents",
        text: "Ancient documents, particularly text-based ones, can be difficult to access for non-specialists. The Perseids Platform makes it possible for editors to augment ancient texts with layers of explanatory materials in the form of annotations, image markup, commentary, and interactive graphs.",
      },
      teamwork: {
        title: "Facilitating Teamwork",
        text: "The Perseids Platform allows editors to collaborate by setting up communities and review boards. Teams can use these features to create custom workflows, contribution guidelines, and review processes, both in the classroom and in research settings.",
      },
      research: {
        title: "Cross-disciplinary Research",
        text: "We are fundamentally committed to a cross-disciplinary approach. The Perseids Platform is language-independent, currently accommodating Latin, Greek, and many other languages of the ancient and pre-modern world. Users are also encouraged to integrate data from other fields to enrich Humanities projects.",
      },
      data: {
        title: "Open Data",
        text: "Our core value is to put the data first. All of the data produced through The Perseids Platform is compliant with community standards for open data, interoperability, and technology independence.",
      },
    },
    editions: {
      hero: {
        title: "Digital Editions",
        text: "Our aim with the Perseids Project is to support a wide range of publication types for texts and data, from micro-publications to full-fledged digital editions. We collaborate on our publications with students, with scholars at several institutions, and with experts across multiple disciplines.",
      },
      darcy: {
        title: "Birds in Ancient Mythology",
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
        link: "Learn more",
      },
      digmill: {
        title: "The Digital Milliet Project",
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
        link: "Browse the Digital Milliet",
      },
      treebanking: {
        title: "Treebanking Collections",
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
        harrington: "J. M. Harrington Published Trees",
        gorman: "Treebanks by Vanessa Gorman",
        agldt: "The AGLDT",
        daphne: "Daphne repository by Francesco Mambrini",
      },
      other: {
        title: "Other Publications",
        explore: "Explore some of the many different publications that have been created with or with the support of The Perseids Project.",
        reasoning: "D'Arcy Thompson's Reasoning Machine",
        epigraphy: "Epigraphy",
        fragmentary: "Fragmentary texts",
        annotation: "Thematic annotation",
        alignment: "Translation alignments",
        joth: "Social networks, places and texts",
        commentary: "Student commentaries",
      },
    },
    libraries: {
      hero: {
        title: "Libraries and Tools",
        text: "All of the code at the Perseids Project is free and open source. We try to extract any useful code to share with community by making a library, web application, or API.",
      },
      morphology: {
        title: "Morphology Service",
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
        api: "Learn more about the API",
        repository: "See the Perseids version of Morpheus",
      },
      lexica: {
        title: "Dictionaries",
        text: "Perseids hosts several mobile-friendly online lexica. All the data is saved locally. This means that after loading the page a single time, you can use the lexicon without an internet connection.",
        lsj: "LSJ Greek-English Lexicon",
        woodhouse: "Woodhouse English-Greek Dictionary",
      },
      editing: {
        title: "Editing Tools",
        text: "The Perseids Project provides several stand-alone tools that can be used for working with ancient languages and editing texts.",
        beta: "Beta Code converter",
        demixer: "Greek-Latin demixer",
        polytonic: "Polytonic Greek keyboard",
        conjugator: "Greek verb conjugator",
        wordcloud: "Treebank word cloud explorer",
      },
      other: {
        title: "Other Repositories",
        source: "The source for all of the code written for The Perseids Project is available on GitHub. Explore our repositories to learn more.",
        tools: "Tools and libraries",
        applications: "Web applications and APIs",
        publications: "Publications and publication templates",
      },
    },
    contact: {
      hero: {
        title: "Contact the Perseids Team",
        text: "If you have a suggestion, want to report a bug, are interested in collaborating, or would like to reach out for any other reason, please use one of the links below or email us at perseids@tufts.edu.",
      },
      donate: {
        title: "Make a donation",
        text: "Help support the Perseids Project by making a donation online. Your donation is tax-deductible to the extent provided by law. Donations are considered charitable contributions to the Trustees of Tufts College.",
        link: "Donate",
      },
      bug: {
        title: "Issues and Bugs",
        text: "If you have found a bug in one of The Perseids Project applications or think that something is not working correctly, please report it. We greatly appreciate bug reports and we will try to fix the issue as soon as possible.",
        link: "Report a bug",
      },
      other: {
        title: "Other Comments",
        text: "For any other question, comment, idea, potential collaboration, click the link below and fill out the form to send us a message.",
        link: "Send a message",
      },
    },
    header: {
      platform: "Perseids Platform",
      editions: "Digital Editions",
      tools: "Libraries and Tools",
      contact: "Contact Us",
      blog: "Blog",
      login: "Log in",
      language: "Français",
      abbreviation: "FR",
    },
    footer: {
      support: "The Perseids Project would not be possible without the support of:",
    },
    notFound: {
      title: "404 Page Not Found",
      text: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
    },
  },
  fr: {
    home: {
      hero: {
        title: "Le projet Perseids",
        text: "Le projet Perseids a pour mission de permettre aux étudiants et au public de participer à l'élaboration du savoir, et ce, à tout niveau de compétence initiale.  Nous offrons une série d'outils qui facilitent l'apprentissage des langues anciennes, le travail sur les documents et la recherche.",
      },
      platform: {
        title: "La plateforme Perseids",
        text: "La plateforme Perseids est un environnement en ligne ouvert et gratuit qui permet de produire des éditions numériques de documents anciens. La plateforme permet aux usagers d'élaborer et de publier des éditions de documents anciens de façon collaborative.",
        link: "En savoir plus",
      },
      editions: {
        title: "Éditions numériques",
        text: "L'objectif du projet Perseids est de permettre la production d'une grande variété de publications, de la micro-publication à l'édition numérique complète. Pour développer nos publications, nous collaborons avec des étudiants et des scientifiques de d'autres institutions et des chercheurs dans plusieurs disciplines.",
        link: "Explorer les éditions numériques",
      },
      tools: {
        title: "Bibliothèques logicielles et outils",
        text: "Dans le cadre de notre travail, nous élaborons souvent des outils, des bibliothèques logicielles et des interfaces de programmation (APIs) Puisque l'un de nos objectifs est de produire des données et des logiciels ouverts, nous offrons nos programmes gratuitement pour que quiconque puisse les utiliser et les modifier.",
        link: "En savoir plus",
      },
    },
    platform: {
      hero: {
        title: "La plateforme Perseids",
        text: "La plateforme Perseids est un environnement en ligne ouvert qui permet de produire des éditions numériques de documents anciens.",
      },
      information: "La plateforme Perseids est un environnement d'édition en ligne qui permet la vérification et le contrôle des versions. Cet environnement permet l'édition collaborative de textes assortie d'un mécanisme d'évaluation par les pairs transparent et rigoureux.",
      buttons: {
        login: "Créer un compte ou s'identifier",
        instructions: "Voir les instructions",
      },
      interacting: {
        title: "Interagir avec les documents anciens",
        text: "Les documents anciens, en particulier les textes, peuvent se révéler difficiles d'accès pour les non-spécialistes La plateforme Perseids permet aux éditeurs de supplémenter les textes anciens avec différentes couches explicatives comme des annotations, des annotations d'images, des commentaires, et des graphiques interactifs.",
      },
      teamwork: {
        title: "Faciliter le travail d'équipe",
        text: "La plateforme Perseids permet aux éditeurs de collaborer en mettant en place des communautés et des comités d'évaluation Les équipes peuvent utiliser ces fonctionnalités pour créer des flux de production, des règles pour les contributions et des processus d'évaluation à des fins pédagogiques ou pour la recherche.",
      },
      research: {
        title: "L'interdisciplinarité dans la recherche",
        text: "Nous souscrivons pleinement à une approche pluridisciplinaire. La plateforme Perseids n'est liée à aucune langue en particulier. Elle permet présentement de travailler en latin, grec, et en plusieurs langues du monde ancien et de l'époque prémoderne. Les utilisateurs sont également encouragés à intégrer des données provenant d'autres domaines de façon à enrichir les projets en sciences humaines.",
      },
      data: {
        title: "Les données ouvertes",
        text: "Notre souci principal est de privilégier les données. Toutes les données produites grâce au projet Perseids sont conformes aux standards communs concernant les données ouvertes, l'interopérabilité et l'indépendance vis à vis de la technologie.",
      },
    },
    editions: {
      hero: {
        title: "Éditions numériques",
        text: "L'objectif du projet Perseids est de permettre la production d'une grande variété de publications, de la micro-publication à l'édition numérique complète. Dans nos publications, nous collaborons avec des étudiants et chercheurs de plusieurs institutions et avec des experts dans plusieurs champs d'études.",
      },
      darcy: {
        title: "Les oiseaux dans la mythologie ancienne",
        text: (
          <>
            Ce projet, encore à l&apos;état d&apos;ébauche, invite le public à s&apos;intéresser aux
            études classiques et à l&apos;ornithologie
            grâce à une série de court-métrages concernant
            {' '}
            <a href="https://en.wikipedia.org/wiki/D%27Arcy_Wentworth_Thompson">
              D&apos;Arcy Thompson&apos;s
            </a>
            {' '}
            <em>
              Glossary of Greek Birds
            </em>
            {' '}
            (&quot;Glossaire grec des oiseaux&quot;)
            {' '}
            accompagnés de contenu numérique sous la forme de Web des données ou Données Liées
            (Open Linked Data). L&apos;objectif est  d&apos;offrir l&apos;opportunité au public
            d&apos;explorer l&apos;intersection des sciences et des lettres.
          </>
        ),
        link: "En savoir plus",
      },
      digmill: {
        title: "Le recueil Milliet numérique",
        text: (
          <>
            Le
            {' '}
            <em>
              Recueil des textes grecs et latins relatifs à la peinture ancienne
            </em>
            {' '}
            était une initiative du peintre français académique du dix-neuvième siècle
            {' '}
            <a href="https://fr.wikipedia.org/wiki/Paul_Milliet_(peintre)">
              Paul Milliet
            </a>
            .
            Milliet parraina un ouvrage qui devait contenir tous les textes anciens conservés
            à propos de la peinture accompagnés de traductions et commentaires.
            Le recueil Milliet numérique dynamise cet ouvrage en l&apos;offrant
            sous format numérique.
            Le projet vise à rendre les textes concernant la peinture ancienne accessibles
            autant pour le public que pour les spécialistes.
          </>
        ),
        link: "Parcourir le Recueil Milliet numérique",
      },
      treebanking: {
        title: "Collections d'arbres syntaxiques (treebanks)",
        text: (
          <>
            Les arbres syntaxiques permettent de décrire les caractéristiques morpho-syntaxiques
            d&apos;un texte phrase par phrase.
            {' '}
            <Link to="/perseids-platform">
              La plateforme Perseids
            </Link>
            {' '}
            permet aux étudiants et aux chercheurs de construire des arbres syntaxiques
            dans une interface graphique intuitive tout en compilant les données dans un
            document XML qui permet l&apos;analyse des arbres.
            Une grande quantité de ces arbres syntaxiques ont été colligés dans
            des publications collaboratives et interactives.
          </>
        ),
        harrington: "J. J. M. Harrington Arbres syntaxiques publiés",
        gorman: "Arbres syntaxiques par Vanessa Gorman",
        agldt: "Les balises AGLDT",
        daphne: "Dépôt Daphne par Francesco Mambrini",
      },
      other: {
        title: "Autres publications",
        explore: "Explorer quelques unes des multiples publications créées au moyen de la plateforme Perseids ou grâce à son soutien",
        reasoning: "La machine de raisonnement de D'Arcy Thompson",
        epigraphy: "Épigraphie",
        fragmentary: "Textes fragmentaires",
        annotation: "Annotations thématiques",
        alignment: "Alignement de traductions",
        joth: "Réseaux sociaux, lieux et textes",
        commentary: "Commentaires d'étudiants sur les textes",
      },
    },
    libraries: {
      hero: {
        title: "Bibliothèques logicielles et outils",
        text: "Tout le code informatique du projet Perseids est gratuit et ouvert.  Nous nous efforçons d'extraire tous les programmes utiles à la communautés et nous les partageons en composant une bibliothèque, une application web, ou une interface de programmation.",
      },
      morphology: {
        title: "Service de morphologie",
        text: (
          <>
            Le projet Perseids offre une interface de programmation pour la morphologie
            qui permet d&apos;analyser les textes grecs et latins.
            L&apos;interface de programmation utilise une version modifiée de
            {' '}
            <a href="https://wiki.digitalclassicist.org/Morpheus" arget="_blank" rel="noopener noreferrer">
              Morpheus morphological analysis engine
            </a>
            .
          </>
        ),
        api: "En savoir plus sur l'interface de programmation",
        repository: "Voir la version Perseids de Morpheus",
      },
      lexica: {
        title: "Dictionnaires",
        text: "Perseids héberge différents dictionnaires en ligne adaptés aux appareils mobiles. Toutes les données sont sauvegardées localement. Le résultat est que, après avoir chargé la page, on peut utiliser le dictionnaire sans connection à internet.",
        lsj: "Dictionnaire grec-anglais LSJ",
        woodhouse: "Dictionnaire grec-anglais Woodhouse",
      },
      editing: {
        title: "Outils d'édition",
        text: "Le projet Perseids offre plusieurs outils autonomes qui peuvent être utilisés pour travailler sur les langues anciennes et l'édition de textes.",
        beta: "Convertisseur de beta code",
        demixer: "Séparateur de grec et latin",
        polytonic: "Clavier grec polytonique",
        conjugator: "Conjugaison grecque",
        wordcloud: "Explorateur d'arbres syntaxiques utilisant des nuages de mots",
      },
      other: {
        title: "Autres logithèques",
        source: "Le code source pour tous les logiciels Perseids est disponible sur Github.  Nous vous invitons à explorer nos logithèques pour en savoir plus.",
        tools: "Bibliothèques logicielles et outils",
        applications: "Applications web et interfaces de programmation",
        publications: "Publications et modèles de publication",
      },
    },
    contact: {
      hero: {
        title: "Joindre l'équipe Perseids",
        text: "Si vous avez une suggestion, si vous voulez signaler un bogue, ou si vous voulez nous contacter pour toute autre raison, veuillez utiliser l'un des liens ci-dessous ou nous écrire à perseids@tufts.edu.",
      },
      donate: {
        title: "Faire un don",
        text: "Vous pouvez contribuer au soutien du projet Perseids en faisant un don en ligne. Votre don est déductible d'impôt dans la limite prévue par la loi et considéré comme un don de charité aux fiduciaires de l'université Tufts (Trustees of Tufts College).",
        link: "Donner",
      },
      bug: {
        title: "Problèmes et bogues",
        text: "Si vous avez trouvé un bogue ou si vous pensez que quelque chose ne fonctionne pas bien dans une des applications du projet Perseids, veuillez nous le signaler. Nous apprécions beaucoup les signalements de bogues et nous nous efforcerons de remédier à la situation dès que possible.",
        link: "Signaler un bogue",
      },
      other: {
        title: "Autres commentaires",
        text: "Pour toute autre question, commentaire, idée, ou collaboration potentielle, veuillez cliquer sur le lien ci-dessous et remplir le formulaire pour nous envoyer un message.",
        link: "Envoyer un message",
      },
    },
    header: {
      platform: "La plateforme Perseids",
      editions: "Éditions numériques",
      tools: "Bibliothèques logicielles et outils",
      contact: "Pour nous joindre",
      blog: "Blogue",
      login: "S'identifier",
      language: "English",
      abbreviation: "EN",
    },
    footer: {
      support: "Le projet Perseids ne serait pas possible sans le support des organisations suivantes:",
    },
    notFound: {
      title: "Erreur 404, la page n'a pu être trouvée",
      text: "Il semble que vous ayez suivi un lien brisé ou entré une url qui n'existe pas sur ce site.",
    },
  },
};

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;
