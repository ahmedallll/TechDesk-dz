/**
 * TechDesk DZ — Dictionnaire de traductions bilingue (Français & Arabe)
 *
 * Support complet RTL pour l'arabe et LTR pour le français.
 * Le nom du logiciel "TechDesk DZ" n'est jamais traduit.
 */

export type Language = 'fr' | 'ar';

export interface Translations {
  nav: {
    home: string;
    features: string;
    catalogue: string;
    pricing: string;
    faq: string;
    contact: string;
    downloadTrial: string;
    catalogueButton: string;
    catalogueMenuHeading: string;
    catalogueFrTitle: string;
    catalogueArTitle: string;
    catalogueView: string;
    catalogueDownload: string;
    languageName: string;
    switchLanguage: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    badge: string;
    headline: string;
    supportingText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustNoteTitle: string;
    trustNote: string;
    appPreviewTag: string;
    phoneAppCta: string;
    phoneAppBadge: string;
  };
  problems: {
    sectionTitle: string;
    sectionSubtitle: string;
    painPoints: {
      title: string;
      desc: string;
    }[];
    solutionTitle: string;
    solutionSubtitle: string;
    solutionPoints: {
      title: string;
      desc: string;
    }[];
  };
  catalogue: {
    sectionTitle: string;
    sectionSubtitle: string;
    explorePrompt: string;
    modules: {
      id: string;
      title: string;
      category: string;
      shortDesc: string;
      fullDesc: string;
      keyPoints: string[];
      previewLabel: string;
    }[];
    hardwareNoticeTitle: string;
    hardwareNoticeDesc: string;
  };
  showcase: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    expandHint: string;
    closeOverlay: string;
    prevImage: string;
    nextImage: string;
    counterLabel: string;
    items: {
      image: string;
      title: string;
      desc: string;
    }[];
  };
  standoutFeatures: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    aiAssistant: {
      badge: string;
      title: string;
      desc: string;
      bullets: { bold: string; text: string }[];
    };
    delivery: {
      badge: string;
      title: string;
      desc: string;
      bullets: { bold: string; text: string }[];
    };
  };
  mobileApp: {
    badge: string;
    heading: string;
    description: string;
    supportingText: string;
    featuresHeading: string;
    featuresSubtitle: string;
    feature1: {
      title: string;
      desc: string;
    };
    feature2: {
      title: string;
      desc: string;
    };
    feature3: {
      title: string;
      desc: string;
    };
    downloadCta: string;
    downloadDirect: string;
    zoomHint: string;
  };
  pricing: {
    sectionTitle: string;
    sectionSubtitle: string;
    durationLabel: string;
    trialOffer: {
      name: string;
      tagline: string;
      price: string;
      priceSubtext: string;
      duration: string;
      cta: string;
      features: string[];
      ruleTitle: string;
      ruleDesc: string;
    };
    lifetimeOffer: {
      name: string;
      tagline: string;
      price: string;
      priceSubtext: string;
      duration: string;
      cta: string;
      features: string[];
      ruleTitle: string;
      ruleDesc: string;
    };
    comparisonTitle: string;
    comparisonHeaders: {
      feature: string;
      trial: string;
      lifetime: string;
    };
    matrix: {
      label: string;
      trial: string | boolean;
      lifetime: string | boolean;
    }[];
  };
  architecture: {
    sectionTitle: string;
    sectionSubtitle: string;
    cards: {
      title: string;
      desc: string;
      subtext: string;
    }[];
  };
  customization: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      add: {
        title: string;
        desc: string;
      };
      modify: {
        title: string;
        desc: string;
      };
      remove: {
        title: string;
        desc: string;
      };
    };
    supportingText: string;
    ctaButton: string;
    serviceNoticeTitle: string;
    serviceNoticeDesc: string;
  };
  faq: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    locationLabel: string;
    hoursLabel: string;
    form: {
      subject: string;
      subjectPlaceholder: string;
      name: string;
      phone: string;
      shopType: string;
      shopTypePlaceholder: string;
      shopTypes: string[];
      message: string;
      submit: string;
      note: string;
      directContactNotice: string;
    };
  };
  downloadModal: {
    trialTitle: string;
    trialSubtitle: string;
    statusBadge: string;
    statusDesc: string;
    downloadButton: string;
    installerMeta: string;
    androidScannerTitle: string;
    androidScannerBadge: string;
    androidScannerDesc: string;
    androidDownloadButton: string;
    androidMeta: string;
    flowTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    whatsappTrialBtn: string;
    systemRequirementsTitle: string;
    requirements: {
      os: string;
      ram: string;
      storage: string;
      screen: string;
      device: string;
    };
    actionText: string;
    close: string;
    purchaseTitle: string;
    purchaseSubtitle: string;
    purchaseStatusDesc: string;
    purchaseAction: string;
  };
  footer: {
    productDesc: string;
    sections: {
      product: string;
      features: string;
      resources: string;
      legal: string;
    };
    copyright: string;
    disclaimer: string;
    windowsNotice: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      catalogue: 'Catalogue',
      pricing: 'Tarifs',
      faq: 'FAQ',
      contact: 'Contact',
      downloadTrial: "Télécharger l'essai gratuit",
      catalogueButton: 'Catalogue',
      catalogueMenuHeading: 'Choisir une version du catalogue',
      catalogueFrTitle: 'Version française (PDF)',
      catalogueArTitle: 'Version arabe (PDF)',
      catalogueView: 'Voir',
      catalogueDownload: 'Télécharger',
      languageName: 'Français',
      switchLanguage: 'Changer de langue',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
    },
    hero: {
      badge: 'Logiciel de bureau Windows • Magasins informatiques & téléphonie en Algérie',
      headline: 'Le logiciel de gestion pensé pour votre magasin informatique.',
      supportingText:
        'Gérez vos ventes, votre stock, vos produits, vos clients et votre service après-vente depuis une seule application Windows.',
      ctaPrimary: "Télécharger l'essai gratuit (3 jours)",
      ctaSecondary: 'Découvrir les fonctionnalités',
      trustNoteTitle: 'Architecture Windows native :',
      trustNote:
        'Stockage local de vos données commerciales sur votre machine. Activation de licence en ligne sécurisée.',
      appPreviewTag: 'Interface réelle de TechDesk DZ sous Windows',
      phoneAppCta: 'Télécharger l’application mobile (TechDesk Review)',
      phoneAppBadge: 'Android APK',
    },
    problems: {
      sectionTitle: 'Les défis quotidiens des magasins informatiques',
      sectionSubtitle:
        'Tenir un magasin de vente et de maintenance avec des cahiers manuscrits ou des tableurs non adaptés engendre des pertes de temps et des erreurs coûteuses.',
      painPoints: [
        {
          title: 'Suivi manuel du stock',
          desc: 'Ruptures inattendues sur les pièces les plus demandées, composants égarés et écarts d’inventaire difficiles à justifier.',
        },
        {
          title: 'Gestion lente des ventes et tickets',
          desc: 'Files d’attente aux heures de pointe, calculs manuels des totaux et impossibilité d’éditer un reçu professionnel rapidement.',
        },
        {
          title: 'Recherche fastidieuse des produits',
          desc: 'Difficulté à retrouver les références, les numéros de série ou les codes-barres des articles parmi des centaines de références.',
        },
        {
          title: 'Suivi nébuleux des achats et livraisons',
          desc: 'Bons de livraison fournisseurs dispersés, confusion sur les prix d’achat récents et oubli des règlements en attente.',
        },
        {
          title: 'Pertes de repères en SAV et réparations',
          desc: 'Téléphones ou ordinateurs déposés sans suivi clair : état d’avancement inconnu, pièces utilisées oubliées et réclamations clients.',
        },
        {
          title: 'Comptes clients et créances non maîtrisés',
          desc: 'Dettes clients notées sur des carnets volants, soldes fournisseurs imprécis et absence d’historique d’achats.',
        },
      ],
      solutionTitle: 'La réponse TechDesk DZ : une solution unifiée',
      solutionSubtitle:
        'Une interface de bureau rapide, claire et adaptée au rythme soutenu de votre commerce, sans surcharge inutile.',
      solutionPoints: [
        {
          title: 'Centralisation complète sur votre PC',
          desc: 'Toutes les opérations quotidiennes — caisse, stock, achats, SAV et créances — regroupées dans un outil unique.',
        },
        {
          title: 'Rapidité d’exécution native Windows',
          desc: 'Pas de latence de navigation web, recherche instantanée par douchette code-barres et frappe au clavier optimisée.',
        },
        {
          title: 'Contrôle total sur vos données',
          desc: 'Vos chiffres d’affaires, marges et données clients restent physiquement enregistrés sur votre ordinateur.',
        },
      ],
    },
    catalogue: {
      sectionTitle: 'Catalogue des modules fonctionnels',
      sectionSubtitle:
        'TechDesk DZ intègre 9 modules spécialisés, conçus spécifiquement pour le quotidien des commerces informatiques, magasins de téléphones et ateliers de réparation.',
      explorePrompt: 'Sélectionnez un module pour explorer ses détails :',
      modules: [
        {
          id: 'pos',
          title: 'Caisse et ventes',
          category: 'Vente & Encaissement',
          shortDesc: 'Point de vente rapide avec recherche code-barres, remises, multi-modes de paiement et tickets de caisse.',
          fullDesc:
            'Le module Caisse permet d’enregistrer les ventes au comptoir en quelques secondes. Il prend en charge la lecture directe par scanner code-barres, la gestion des remises, les règlements en espèces ou créances, et le calcul automatique du rendu de monnaie.',
          keyPoints: [
            'Saisie rapide au clavier ou via douchette code-barres',
            'Gestion des prix de vente au détail et en gros',
            'Application de remises par article ou sur le total',
            'Encaissement avec calcul automatique du rendu de monnaie',
            'Émission immédiate de tickets de caisse personnalisés',
          ],
          previewLabel: 'Interface Caisse / POS',
        },
        {
          id: 'catalog',
          title: 'Produits et catalogue',
          category: 'Gestion des articles',
          shortDesc: 'Fiches articles complètes avec codes-barres, références, familles, prix d’achat et prix de vente.',
          fullDesc:
            'Gérez l’ensemble de votre catalogue de produits informatiques et mobiles : accessoires, composants PC, ordinateurs portables, écrans, téléphones neufs ou reconditionnés. Inclut la gestion des codes EAN-13 et la traçabilité des références.',
          keyPoints: [
            'Fiches produits détaillées avec désignation, marque et catégorie',
            'Génération et lecture de codes-barres internes ou constructeurs',
            'Suivi des prix d’achat et calcul automatique de la marge',
            'Gestion des articles avec ou sans code-barres',
            'Recherche instantanée par nom, référence ou code-barres',
          ],
          previewLabel: 'Fichier Catalogue Produits',
        },
        {
          id: 'stock',
          title: 'Gestion du stock',
          category: 'Inventaire & Logistique',
          shortDesc: 'Suivi précis des quantités en rayon et en réserve, alertes de seuil minimum et valorisation.',
          fullDesc:
            'Gardez une visibilité en temps réel sur vos niveaux de stock. Chaque vente ou entrée diminue ou augmente automatiquement les quantités. Configurez des seuils d’alerte pour ne jamais tomber en rupture sur vos articles phares.',
          keyPoints: [
            'Mise à jour automatique des quantités en temps réel',
            'Alertes configurables de stock minimum et rupture imminente',
            'Historique complet des mouvements d’entrées et de sorties',
            'Valorisation globale de votre stock au prix d’achat',
            'Module d’ajustement et d’inventaire physique périodique',
          ],
          previewLabel: 'Suivi de Stock & Alertes',
        },
        {
          id: 'partners',
          title: 'Clients et fournisseurs',
          category: 'Relations commerciales',
          shortDesc: 'Répertoire complet des clients et fournisseurs, suivi des crédits, dettes et historiques d’achats.',
          fullDesc:
            'Maîtrisez les relations financières avec vos partenaires. Suivez avec précision les créances accordées aux clients réguliers et les règlements en attente auprès de vos grossistes informatiques ou fournisseurs de pièces détachées.',
          keyPoints: [
            'Fiches contacts détaillées (nom, téléphone, adresse, wilaya)',
            'Suivi des dettes clients (crédits accordés et échéances)',
            'Suivi des soldes fournisseurs et paiements échelonnés',
            'Historique chronologique des transactions par contact',
            'Règlement partiel ou total des créances en un clic',
          ],
          previewLabel: 'Fichier Partenaires & Crédits',
        },
        {
          id: 'purchases',
          title: 'Achats et livraisons',
          category: 'Approvisionnement',
          shortDesc: 'Réception des arrivages fournisseurs, mise à jour des prix de revient et alimentation automatique du stock.',
          fullDesc:
            'Enregistrez les factures et bons de livraison reçus de vos grossistes. L’enregistrement d’un arrivage incrémente directement les stocks et actualise les prix d’achat moyens pour préserver la rentabilité de vos ventes.',
          keyPoints: [
            'Saisie des bons de livraison et factures d’achat fournisseurs',
            'Incrémentation automatique des quantités en stock à la validation',
            'Mise à jour des prix de revient et détection des hausses tarifaires',
            'Affectation aux comptes fournisseurs avec statut de paiement',
            'Historique complet des approvisionnements par fournisseur',
          ],
          previewLabel: 'Bons d’Arrivage Fournisseurs',
        },
        {
          id: 'sav',
          title: 'Service après-vente (SAV)',
          category: 'Atelier & Réparations',
          shortDesc: 'Prise en charge des réparations PC et téléphones : état, diagnostic, devis, pièces utilisées et suivi.',
          fullDesc:
            'Un module dédié aux ateliers de réparation informatique et électronique. Éditez un bon de dépôt avec le motif de la panne, affectez les pièces de rechange consommées, suivez l’avancement (En attente, En cours, Réparé, Livré) et facturez la main d’œuvre.',
          keyPoints: [
            'Création de fiches SAV avec description de la panne et accessoires déposés',
            'Statuts d’avancement clairs (En attente, En cours, Réparé, Non réparable, Restitué)',
            'Imputation des pièces détachées prélevées directement sur le stock',
            'Facturation combinée pièces de rechange et main d’œuvre',
            'Impression du ticket de dépôt client et du ticket atelier',
          ],
          previewLabel: 'Gestion Atelier & Fiches SAV',
        },
        {
          id: 'printing',
          title: 'Impression tickets & étiquettes',
          category: 'Périphériques',
          shortDesc: 'Prise en charge des imprimantes tickets thermiques (80mm/58mm) et étiquettes codes-barres selon vos pilotes.',
          fullDesc:
            'TechDesk DZ s’interface avec le système d’impression de Windows. Imprimez des tickets de caisse clairs avec les coordonnées de votre magasin, ou générez des étiquettes codes-barres pour vos articles non étiquetés par le fabricant.',
          keyPoints: [
            'Compatible avec les imprimantes thermiques standard (80 mm et 58 mm)',
            'Édition de tickets de vente, factures simplifiées et bons de retour',
            'Impression d’étiquettes codes-barres pour le rayonnage',
            'Impression des fiches de dépôt pour le service après-vente',
            'Fonctionnement dépendant des imprimantes et pilotes installés sous Windows',
          ],
          previewLabel: 'Configuration Impression Windows',
        },
        {
          id: 'dashboard',
          title: 'Tableau de bord',
          category: 'Pilotage & Indicateurs',
          shortDesc: 'Indicateurs clés d’activité : chiffre d’affaires du jour, estimation de marge, top ventes et alertes.',
          fullDesc:
            'Prenez les bonnes décisions grâce à une vue synthétique de votre commerce. Consultez votre chiffre d’affaires quotidien ou mensuel, la ventilation de vos encaissements et la liste des articles à réapprovisionner d’urgence.',
          keyPoints: [
            'Chiffre d’affaires journalier, hebdomadaire et mensuel',
            'Estimation du bénéfice brut selon les prix d’achat enregistrés',
            'Palmarès des produits les plus vendus',
            'Alertes directes sur les ruptures de stock et réparations en attente',
            'Synthèse des encaissements par mode de règlement',
          ],
          previewLabel: 'Synthèse Tableau de Bord',
        },
        {
          id: 'bilingual',
          title: 'Français et arabe natifs',
          category: 'Localisation',
          shortDesc: 'Interface complète disponible en français et en arabe avec basculement RTL soigné et immédiat.',
          fullDesc:
            'Pensé pour les commerçants algériens, TechDesk DZ propose une interface bilingue intégrale. Basculez en un clic du français à l’arabe avec inversion complète et naturelle de la disposition (RTL) pour le confort de votre équipe.',
          keyPoints: [
            'Traduction soignée en arabe adaptée au vocabulaire commercial',
            'Disposition RTL (droite à gauche) rigoureuse et ergonomique',
            'Basculement de langue accessible à tout moment',
            'Impression de tickets configurables en français ou arabe',
            'Saisie bilingue des désignations d’articles et coordonnées',
          ],
          previewLabel: 'Interface Bilingue FR / AR',
        },
      ],
      hardwareNoticeTitle: 'Note technique sur les périphériques :',
      hardwareNoticeDesc:
        'L’impression des tickets et étiquettes ainsi que la lecture des codes-barres s’effectuent via les pilotes et périphériques USB/série reconnus par votre système Windows.',
    },
    showcase: {
      sectionBadge: 'Interface réelle & Visuels',
      sectionTitle: 'Découvrez TechDesk DZ en images',
      sectionSubtitle:
        'Découvrez les principales fonctionnalités de votre logiciel de gestion, à travers son interface réelle.',
      expandHint: 'Cliquer pour agrandir',
      closeOverlay: 'Fermer',
      prevImage: 'Précédent',
      nextImage: 'Suivant',
      counterLabel: 'Capture {current} sur {total}',
      items: [
        {
          image: '/screenshots/1.webp',
          title: 'Tableau de bord',
          desc: 'Consultez les ventes du jour, les encaissements, les alertes de stock faible et les réparations en cours.',
        },
        {
          image: '/screenshots/2.webp',
          title: 'Caisse et ventes',
          desc: "Recherchez des produits, ajoutez-les au panier et gérez l'encaissement de vos ventes.",
        },
        {
          image: '/screenshots/3.webp',
          title: 'Produits et stock',
          desc: 'Gérez vos produits, références, codes-barres, quantités en stock, catégories et prix.',
        },
        {
          image: '/screenshots/4.webp',
          title: 'Réparations et SAV',
          desc: 'Suivez les tickets de réparation, les appareils, les problèmes signalés et les statuts des interventions.',
        },
        {
          image: '/screenshots/5.webp',
          title: 'Historique des ventes et devis',
          desc: 'Retrouvez les tickets de caisse, les factures, les devis et les informations de règlement.',
        },
        {
          image: '/screenshots/6.webp',
          title: 'Achats et réceptions',
          desc: 'Consultez les achats auprès des fournisseurs, les réceptions de marchandises et les soldes restants.',
        },
        {
          image: '/screenshots/7.webp',
          title: 'Gestion des clients',
          desc: 'Centralisez les coordonnées des clients, l\'historique de leurs achats et le suivi de leurs crédits.',
        },
        {
          image: '/screenshots/8.webp',
          title: 'Gestion des fournisseurs',
          desc: 'Consultez les informations des fournisseurs, leurs coordonnées et les soldes de leurs comptes.',
        },
        {
          image: '/screenshots/9.webp',
          title: 'Dettes et crédits',
          desc: 'Suivez les ventes impayées et les montants restant dus pour les réparations SAV.',
        },
        {
          image: '/screenshots/10.webp',
          title: 'Dépenses et caisse journalière',
          desc: 'Enregistrez les dépenses du magasin et consultez les informations d\'ouverture et de clôture de caisse.',
        },
        {
          image: '/screenshots/11.webp',
          title: 'Statistiques et bilans',
          desc: 'Consultez les indicateurs clés : ventes, bénéfice net estimé, encaissements et dépenses.',
        },
        {
          image: '/screenshots/12.webp',
          title: 'Graphiques et analyse financière',
          desc: 'Analysez les ventes par catégorie, comparez les résultats financiers et identifiez les produits les plus performants.',
        },
        {
          image: '/screenshots/13.webp',
          title: 'Paramètres du logiciel',
          desc: 'Configurez l\'identité du magasin, la langue, le scanner Android, les livraisons, les sauvegardes et les paramètres système disponibles.',
        },
      ],
    },
    standoutFeatures: {
      sectionBadge: 'AU-DELÀ DE LA GESTION',
      sectionTitle: 'Ce qui fait la différence avec TechDesk DZ',
      sectionSubtitle:
        "Plus qu'un outil de gestion, TechDesk DZ rassemble des fonctionnalités pensées pour simplifier le quotidien de votre magasin.",
      aiAssistant: {
        badge: 'Assistant IA Intégré',
        title: 'Un assistant IA intégré à votre espace de travail',
        desc:
          "Besoin d'aide pendant votre travail ? Retrouvez un assistant commercial disponible à tout moment, directement dans l'application. Posez vos questions en français ou en arabe, obtenez des conseils pratiques, préparez des publications ou résolvez vos doutes rapidement sans quitter votre gestion.",
        bullets: [
          { bold: 'Toujours accessible', text: "Bouton dédié dans l'interface principale." },
          { bold: 'Bilingue FR / AR', text: 'Échangez naturellement dans la langue de votre choix.' },
          { bold: 'Réponses instantanées', text: 'Conseils pratiques, rédaction de posts et aide à la décision.' },
        ],
      },
      delivery: {
        badge: 'Expéditions & Logistique',
        title: 'Gestion intégrée des livraisons et expéditions',
        desc:
          "Suivez vos envois en toute simplicité. TechDesk DZ intègre la gestion des sociétés de livraison pour créer, imprimer et suivre vos bordereaux d'expédition sans double saisie.",
        bullets: [
          { bold: 'Sociétés de livraison', text: 'Prise en charge des livreurs et partenaires logistiques.' },
          { bold: 'Impression des bordereaux', text: "Génération rapide des étiquettes et fiches d'expédition." },
          { bold: 'Suivi centralisé', text: 'Vue claire sur le statut des colis et les retours.' },
        ],
      },
    },
    mobileApp: {
      badge: 'APPLICATION MOBILE',
      heading: 'TechDesk DZ, aussi sur votre téléphone',
      description: 'Découvrez l’interface mobile de TechDesk Scanner et ses principales fonctionnalités.',
      supportingText: 'Une interface pensée pour une utilisation simple et pratique au quotidien.',
      featuresHeading: 'Fonctionnalités principales',
      featuresSubtitle: 'Une application mobile intuitive conçue pour piloter et suivre votre magasin où que vous soyez.',
      feature1: {
        title: 'Tableau de bord',
        desc: 'Retrouvez les principaux indicateurs présentés dans l’interface mobile.',
      },
      feature2: {
        title: 'Rapports',
        desc: 'Consultez les rapports disponibles pour suivre l’activité de votre magasin.',
      },
      feature3: {
        title: 'Scanner de codes-barres',
        desc: 'Utilisez l’appareil photo de votre téléphone pour scanner les codes-barres.',
      },
      downloadCta: 'Télécharger TechDesk Review (.apk)',
      downloadDirect: 'Téléchargement direct APK • Android',
      zoomHint: 'Agrandir l’écran',
    },
    pricing: {
      sectionTitle: 'Tarifs et modalités de licence',
      sectionSubtitle:
        'Deux formules transparentes pour tester sans engagement puis équiper durablement votre magasin.',
      durationLabel: 'Durée',
      trialOffer: {
        name: 'Essai gratuit',
        tagline: 'Découvrez toutes les capacités de TechDesk DZ sur votre ordinateur.',
        price: 'Gratuit',
        priceSubtext: 'Aucun paiement ni carte bancaire requis',
        duration: '3 jours (72 heures)',
        cta: "Télécharger l'essai gratuit",
        features: [
          'Accès complet à tous les 9 modules du logiciel',
          'Aucune restriction sur le nombre de ventes ou de produits',
          'Impression des tickets de caisse et étiquettes',
          'Base de données locale installée sur votre machine',
          'Interface bilingue français et arabe',
          'Activation automatique au premier lancement sur votre PC',
        ],
        ruleTitle: 'Règle d’activation de l’essai :',
        ruleDesc:
          'L’essai gratuit de 72 heures démarre dès la première activation de la licence sur votre appareil. Conformément aux règles de licence, l’essai est limité à une seule fois par machine physique.',
      },
      lifetimeOffer: {
        name: 'Licence à vie',
        tagline: 'L’outil de gestion pérenne pour votre commerce, sans abonnement récurrent.',
        price: 'Achat unique',
        priceSubtext: 'Licence définitive par poste de travail',
        duration: 'Durée illimitée',
        cta: 'Obtenir la licence à vie',
        features: [
          'Utilisation illimitée dans le temps sans expiration',
          'Tous les modules actuels de TechDesk DZ inclus',
          'Fonctionnement autonome sans dépendance au cloud',
          'Stockage local permanent de votre base de données',
          'Activation sécurisée via le système de licence',
          'Assistance à l’installation initiale sur votre ordinateur',
        ],
        ruleTitle: 'Modalités d’obtention :',
        ruleDesc:
          'La licence à vie s’active de manière définitive via le système d’activation de TechDesk DZ. Contactez notre équipe pour commander votre clé d’activation officielle.',
      },
      comparisonTitle: 'Tableau comparatif des offres',
      comparisonHeaders: {
        feature: 'Fonctionnalité',
        trial: 'Essai gratuit',
        lifetime: 'Licence à vie',
      },
      matrix: [
        { label: 'Accès au module Caisse & Ventes', trial: true, lifetime: true },
        { label: 'Gestion du catalogue et codes-barres', trial: true, lifetime: true },
        { label: 'Suivi des stocks et alertes', trial: true, lifetime: true },
        { label: 'Fichier clients, fournisseurs et créances', trial: true, lifetime: true },
        { label: 'Module SAV et réparations', trial: true, lifetime: true },
        { label: 'Impression tickets de caisse et étiquettes', trial: true, lifetime: true },
        { label: 'Tableau de bord et statistiques', trial: true, lifetime: true },
        { label: 'Interface bilingue Français & Arabe (RTL)', trial: true, lifetime: true },
        { label: 'Stockage local confidentiel des données', trial: true, lifetime: true },
        { label: 'Durée d’utilisation autorisée', trial: '72 heures (3 jours)', lifetime: 'Illimitée (À vie)' },
      ],
    },
    architecture: {
      sectionTitle: 'Conçu comme un vrai logiciel de bureau',
      sectionSubtitle:
        'TechDesk DZ privilégie la vitesse, l’autonomie et la souveraineté sur vos données d’exploitation.',
      cards: [
        {
          title: 'Stockage local sur votre ordinateur',
          desc: 'Toutes vos données (produits, prix d’achat, marges, coordonnées clients) sont stockées localement sur votre disque dur dans une base sécurisée.',
          subtext: 'Vos données restent strictement confidentielles et ne sont pas téléversées sur des serveurs tiers.',
        },
        {
          title: 'Fonctionnement hors ligne au quotidien',
          desc: 'Votre caisse et votre atelier continuent de fonctionner à 100% de leur vitesse, même en cas de coupure de connexion Internet.',
          subtext: 'La connexion Internet n’est requise que lors de l’étape initiale d’activation de la licence.',
        },
        {
          title: 'Licence sécurisée liée au matériel',
          desc: 'Le système de licence associe l’activation à l’identifiant matériel unique de votre machine pour garantir la conformité des règles d’essai et d’achat.',
          subtext: 'Règle stricte d’un essai par ordinateur, protégée côté serveur sans exposer de secrets d’administration.',
        },
      ],
    },
    customization: {
      sectionBadge: 'Prestation sur mesure',
      sectionTitle: 'Un logiciel adapté à votre façon de travailler',
      sectionSubtitle:
        'Chaque magasin a ses propres besoins. Vous souhaitez ajouter une fonctionnalité, modifier un fonctionnement existant ou supprimer un élément qui ne vous est pas utile ? TechDesk DZ peut être adapté à vos besoins.',
      items: {
        add: {
          title: 'Ajouter',
          desc: 'Ajouter des fonctionnalités ou des outils spécifiques à votre activité.',
        },
        modify: {
          title: 'Modifier',
          desc: 'Adapter les fonctionnalités existantes à votre façon de travailler.',
        },
        remove: {
          title: 'Supprimer',
          desc: 'Retirer ou simplifier les éléments dont vous n’avez pas besoin, lorsque cela est techniquement possible.',
        },
      },
      supportingText:
        'Vous pouvez nous présenter vos besoins après avoir testé le logiciel. Nous étudierons votre demande et vous proposerons une solution adaptée.',
      ctaButton: 'Demander une personnalisation',
      serviceNoticeTitle: 'Prestation complémentaire sur devis',
      serviceNoticeDesc:
        'La personnalisation sur mesure est un service additionnel distinct de la licence standard. Sa faisabilité technique, ses délais et son tarif dépendent des modifications demandées.',
    },
    faq: {
      sectionTitle: 'Foire aux questions (FAQ)',
      sectionSubtitle:
        'Toutes les réponses claires sur le fonctionnement, les licences et la compatibilité de TechDesk DZ.',
      items: [
        {
          question: "Qu'est-ce que TechDesk DZ ?",
          answer:
            "TechDesk DZ est un logiciel de bureau pour Windows conçu spécialement pour les commerces d'informatique, les magasins de vente et réparation de smartphones, les boutiques d'électronique et les ateliers de maintenance en Algérie. Il regroupe la caisse, les stocks, les achats, les dettes et le SAV dans un outil unique.",
        },
        {
          question: "À quels types de commerces s'adresse le logiciel ?",
          answer:
            "Le logiciel est optimisé pour les magasins d'informatique (PC, composants, périphériques), les points de vente de téléphonie mobile (smartphones, accessoires, déblocage), les revendeurs de matériel électronique et les ateliers de réparation et service après-vente.",
        },
        {
          question: "S'agit-il d'un logiciel de bureau Windows ou d'un site web ?",
          answer:
            "C'est une véritable application de bureau native Windows (compatible Windows 10 et Windows 11 en 64 bits). Elle s'installe directement sur votre PC et stocke vos données localement pour une réactivité maximale sans lenteur de chargement.",
        },
        {
          question: "Quelle est la durée de l'essai gratuit ?",
          answer:
            "L'essai gratuit est d'une durée de 3 jours pleins (soit 72 heures consécutives). Pendant cette période, vous disposez d'un accès complet à l'ensemble des fonctionnalités du logiciel, sans bridage du nombre de produits ou de tickets.",
        },
        {
          question: "Quand commence la période d'essai ?",
          answer:
            "La période d'essai de 72 heures démarre exactement lorsque la licence d'essai est activée pour la première fois sur votre machine via l'application. Elle n'est accordée qu'une seule fois par appareil physique.",
        },
        {
          question: "L'activation initiale nécessite-t-elle une connexion Internet ?",
          answer:
            "Oui. Une connexion Internet active est indispensable pendant quelques secondes uniquement au moment d'activer la licence (essai ou licence à vie). Par la suite, le logiciel fonctionne au quotidien de manière totalement autonome et hors ligne.",
        },
        {
          question: "Comment obtenir la licence à vie ?",
          answer:
            "La licence à vie s'obtient par commande directe auprès de notre équipe commerciale. Une fois la clé d'activation acquise, vous la saisissez dans le logiciel pour débloquer définitivement l'application sur votre poste de travail.",
        },
        {
          question: "Peut-on demander des modifications ou des personnalisations sur mesure ?",
          answer:
            "Oui. Chaque magasin a ses propres besoins. Vous pouvez demander l'ajout d'outils spécifiques à votre activité, l'adaptation d'un fonctionnement existant ou le retrait d'éléments non nécessaires (lorsque cela est techniquement possible). La personnalisation sur mesure constitue une prestation complémentaire distincte de la licence standard, chiffrée selon la complexité des modifications demandées.",
        },
        {
          question: "Est-il possible d'imprimer des tickets de caisse et des étiquettes codes-barres ?",
          answer:
            "Oui. TechDesk DZ prend en charge l'impression des tickets de caisse sur les imprimantes thermiques standard (80 mm et 58 mm) ainsi que l'impression d'étiquettes de codes-barres et de fiches d'atelier, sous réserve que les imprimantes soient correctement installées avec leurs pilotes Windows.",
        },
        {
          question: "Mes données commerciales sont-elles synchronisées dans le cloud ?",
          answer:
            "Non. TechDesk DZ n'impose aucune synchronisation cloud et ne stocke pas vos données commerciales en ligne. Votre fichier de données reste sur votre machine, assurant ainsi une parfaite confidentialité et une vitesse maximale.",
        },
      ],
    },
    contact: {
      sectionTitle: 'Contact et renseignements',
      sectionSubtitle:
        'Une question sur TechDesk DZ ou besoin d’une assistance pour équiper votre magasin ? Contactez notre équipe.',
      phoneLabel: 'Téléphone',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Adresse e-mail',
      locationLabel: 'Localisation',
      hoursLabel: 'Horaires de contact',
      form: {
        subject: 'Objet de votre demande',
        subjectPlaceholder: 'Ex : Demande de personnalisation, renseignement...',
        name: 'Votre nom ou raison sociale',
        phone: 'Numéro de téléphone',
        shopType: 'Type de commerce',
        shopTypePlaceholder: 'Sélectionnez votre activité',
        shopTypes: [
          'Magasin informatique (PC, composants, accessoires)',
          'Magasin de téléphonie & smartphones',
          'Atelier de réparation & SAV',
          'Commerce d’électronique générale',
          'Autre activité commerciale',
        ],
        message: 'Votre question ou demande de renseignements',
        submit: 'Envoyer ma demande',
        note: 'Vos coordonnées ne sont utilisées que pour vous répondre directement.',
        directContactNotice:
          'Pour une prise de contact immédiate, vous pouvez également nous joindre directement par téléphone ou WhatsApp.',
      },
    },
    downloadModal: {
      trialTitle: 'Télécharger TechDesk DZ',
      trialSubtitle: 'Votre logiciel de gestion pour magasins informatiques et téléphonie.',
      statusBadge: 'Windows 10 / 11 • 64-bit • Essai 72h',
      statusDesc:
        'L’exécutable d’installation officiel pour Windows est disponible en téléchargement direct. Suivez les 3 étapes pour commencer votre essai gratuit.',
      downloadButton: 'Télécharger TechDesk DZ (.exe)',
      installerMeta: 'TechDesk-DZ-Setup.exe • Version officielle Windows',
      androidScannerTitle: 'Application Mobile : TechDesk Review',
      androidScannerBadge: 'Android APK',
      androidScannerDesc:
        'Connectez votre smartphone Android en direct avec votre logiciel TechDesk DZ sur PC.',
      androidDownloadButton: 'Télécharger TechDesk Review (.apk)',
      androidMeta: 'TechDesk-Scanner.apk • Téléchargement direct APK pour Android',
      flowTitle: 'Installation & activation en 3 étapes :',
      step1Title: '1. Télécharger',
      step1Desc: 'Téléchargez le fichier d’installation officiel ci-dessous.',
      step2Title: '2. Installer',
      step2Desc: 'Lancez l’exécutable et suivez l’assistant sur votre PC.',
      step3Title: '3. Activer l’essai',
      step3Desc: 'Recevez votre clé d’activation 72h gratuite sur WhatsApp.',
      whatsappTrialBtn: 'Demander ma clé d’essai sur WhatsApp',
      systemRequirementsTitle: 'Configuration minimale requise',
      requirements: {
        os: 'Windows 11 ou Windows 10 (64-bit uniquement)',
        ram: '4 Go de RAM minimum (8 Go recommandés)',
        storage: '500 Mo d’espace disque libre',
        screen: 'Écran 1366 × 768 px minimum',
        device: '100% hors-ligne (connexion requise uniquement 30s à l’activation)',
      },
      actionText: 'Demander ma clé d’essai sur WhatsApp',
      close: 'Fermer',
      purchaseTitle: 'Acquérir la Licence à Vie',
      purchaseSubtitle: 'Licence officielle sans engagement ni abonnement mensuel.',
      purchaseStatusDesc:
        'Pour commander votre licence définitive et recevoir votre clé d’activation officielle avec assistance à l’installation, échangez directement avec notre équipe.',
      purchaseAction: 'Commander ma licence sur WhatsApp',
    },
    footer: {
      productDesc:
        'Logiciel Windows de gestion de magasin informatique, téléphonie, ventes, stock et service après-vente en Algérie.',
      sections: {
        product: 'Produit',
        features: 'Modules',
        resources: 'Informations',
        legal: 'Informations légales',
      },
      copyright: 'TechDesk DZ. Tous droits réservés.',
      disclaimer:
        'TechDesk DZ est une application de bureau conçue pour le système d’exploitation Microsoft Windows.',
      windowsNotice: 'Windows est une marque déposée de Microsoft Corporation.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      features: 'المميزات',
      catalogue: 'دليل الوحدات',
      pricing: 'الأسعار والترخيص',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      downloadTrial: 'تحميل النسخة التجريبية مجاناً',
      catalogueButton: 'الكتالوج',
      catalogueMenuHeading: 'اختر نسخة الكتالوج',
      catalogueFrTitle: 'النسخة الفرنسية (PDF)',
      catalogueArTitle: 'النسخة العربية (PDF)',
      catalogueView: 'عرض',
      catalogueDownload: 'تحميل',
      languageName: 'العربية',
      switchLanguage: 'تغيير اللغة',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
    },
    hero: {
      badge: 'برنامج مكتبي لويندوز • محلات الإعلام الآلي والهواتف في الجزائر',
      headline: 'برنامج التسيير المصمم خصيصاً لمحلات الإعلام الآلي.',
      supportingText:
        'قم بإدارة مبيعاتك، مخزونك، منتجاتك، زبائنك وخدمة ما بعد البيع من تطبيق ويندوز واحد.',
      ctaPrimary: 'تحميل النسخة التجريبية 3 أيام',
      ctaSecondary: 'اكتشف المميزات',
      trustNoteTitle: 'هندسة ويندوز مكتبية أصيلة:',
      trustNote:
        'تخزين محلي كامل لبياناتك التجارية على جهازك. تفعيل آمن للترخيص عبر الإنترنت.',
      appPreviewTag: 'واجهة حقيقية لبرنامج TechDesk DZ على نظام ويندوز',
      phoneAppCta: 'تحميل تطبيق الهاتف (TechDesk Review)',
      phoneAppBadge: 'Android APK',
    },
    problems: {
      sectionTitle: 'التحديات اليومية لمحلات الإعلام الآلي والهواتف',
      sectionSubtitle:
        'الاعتماد على الدفاتر الورقية أو ملفات الإكسل غير المهيأة يؤدي إلى ضياع الوقت وتراكم الأخطاء المكلفة.',
      painPoints: [
        {
          title: 'التتبع اليدوي للمخزون',
          desc: 'نفاد مفاجئ للقطع واللواحق الأكثر طلباً، ضياع بعض المكونات وصعوبة إجراء جرد دقيق.',
        },
        {
          title: 'بطء إدارة المبيعات وتذاكر الصندوق',
          desc: 'طوابير انتظار عند الذروة، حسابات يدوية مجهدة وغياب تذكرة بيع احترافية وسريعة للزبون.',
        },
        {
          title: 'صعوبة البحث عن المنتجات والأسعار',
          desc: 'مشقة العثور على مراجع القطع والأرقام التسلسلية والباركود بين مئات المنتجات المعروضة.',
        },
        {
          title: 'غموض فواتير المشتريات والتوريدات',
          desc: 'تشتت وصولات الموردين، نسيان أسعار الشراء الأخيرة وصعوبة متابعة المدفوعات المعلقة.',
        },
        {
          title: 'فقدان تتبع تصليحات خدمة ما بعد البيع (SAV)',
          desc: 'أجهزة هواتف وحواسيب مودعة للتصليح دون بطاقة متابعة واضحة، مما يسبب نزاعات وتأخيرات.',
        },
        {
          title: 'تراكم ديون الزبائن والمستحقات',
          desc: 'ديون مسجلة على أوراق متفرقة، عدم دقة أرصدة الموردين وغياب سجل تاريخي للمشتريات.',
        },
      ],
      solutionTitle: 'حل TechDesk DZ: نظام موحد وشامل',
      solutionSubtitle:
        'واجهة مكتبية فائقة السرعة، واضحة ومصممة خصيصاً لوتيرة العمل اليومية في محلك التجاري.',
      solutionPoints: [
        {
          title: 'مركزية تامة على جهاز الكمبيوتر الخاص بك',
          desc: 'كل العمليات اليومية — البيع، المخزون، المشتريات، خدمة التصليح والديون — في برنامج واحد.',
        },
        {
          title: 'سرعة استجابة فائقة لنظام ويندوز',
          desc: 'بدون أي بطء أو اعتماد على متصفح الإنترنت، مع دعم قارئ الباركود واختصارات لوحة المفاتيح.',
        },
        {
          title: 'تحكم كامل وأمان تام لبياناتك',
          desc: 'أرقام معاملاتك، هوامش أرباحك وسجلات زبائنك تبقى محفوظة محلياً داخل جهازك بأمان.',
        },
      ],
    },
    catalogue: {
      sectionTitle: 'دليل الوحدات والوظائف الأساسية',
      sectionSubtitle:
        'يحتوي TechDesk DZ على 9 وحدات متخصصة ومصممة بدقة لتلبية احتياجات محلات الإعلام الآلي، الهواتف الذكية وورشات التصليح.',
      explorePrompt: 'اختر الوحدة للاطلاع على تفاصيلها الكاملة:',
      modules: [
        {
          id: 'pos',
          title: 'الصندوق والمبيعات',
          category: 'البيع والتحصيل',
          shortDesc: 'نقطة بيع سريعة تدعم قارئ الباركود، الخصومات، طرق دفع متعددة وطباعة التذاكر.',
          fullDesc:
            'تتيح وحدة الصندوق إتمام عمليات البيع في ثوانٍ معدودة. تدعم المسح المباشر للباركود، إضافة التخفيضات، تسجيل المدفوعات نقداً أو بالدين، مع حساب آلي لمبلغ الصرف المتبقي للزبون.',
          keyPoints: [
            'إدخال سريع عبر لوحة المفاتيح أو ماسح الباركود',
            'إدارة أسعار البيع بالتجزئة وبالجملة',
            'تطبيق خصومات وتخفيضات على مستوى السلعة أو الفاتورة',
            'تحصيل مرن مع حساب المبلغ المتبقي آلياً',
            'طباعة فورية لتذاكر صندوق مهيأة باسم المحل',
          ],
          previewLabel: 'واجهة الصندوق / POS',
        },
        {
          id: 'catalog',
          title: 'المنتجات ودليل المواد',
          category: 'إدارة السلع والمراجع',
          shortDesc: 'بطاقات مفصلة للمنتجات تشمل الباركود، المرجع، الفئة، سعر الشراء وسعر البيع.',
          fullDesc:
            'إدارة كاملة لكافة منتجاتك من عتاد الحواسيب، اللواحق، شاشات، كابلات، هواتف جديدة ومستعملة. مع دعم أكواد EAN-13 وتتبع دقيق للمراجع.',
          keyPoints: [
            'بطاقات سلع مفصلة بالاسم، العلامة التجارية والصنف',
            'توليد وقراءة أكواد الباركود للمنتجات',
            'متابعة أسعار الشراء وحساب هامش الربح تلقائياً',
            'إمكانية إدارة السلع بباركود أو بدونه',
            'بحث فوري بالاسم أو المرجع أو الباركود',
          ],
          previewLabel: 'سجل المنتجات والمخزن',
        },
        {
          id: 'stock',
          title: 'إدارة وتتبع المخزون',
          category: 'اللوجستيات والجرد',
          shortDesc: 'متابعة دقيقة لكميات السلع، تنبيهات عند الاقتراب من النفاد، وتقييم شامل للمخزون.',
          fullDesc:
            'رؤية آنية ودقيقة لحالة مخزونك. كل عملية بيع أو شراء تخصم أو تضيف الكميات تلقائياً. يمكنك ضبط حد أدنى للكمية لتلقي تنبيه قبل نفاد السلع الأساسية.',
          keyPoints: [
            'تحديث فوري لجميع الكميات مع كل حركة بيع أو شراء',
            'تنبيهات تلقائية عند بلوغ الحد الأدنى للمخزون',
            'سجل مفصل لجميع حركات الدخول والخروج',
            'حساب القيمة الإجمالية للمخزون بسعر الشراء',
            'أداة سهلة للجرد الفعلي وتعديل الفروقات',
          ],
          previewLabel: 'متابعة المخزون والتنبيهات',
        },
        {
          id: 'partners',
          title: 'الزبائن والموردون',
          category: 'العلاقات التجارية',
          shortDesc: 'دليل كامل للزبائن والموردين، متابعة الديون، المستحقات وتاريخ التعاملات.',
          fullDesc:
            'تحكم مالي كامل في علاقاتك مع زبائنك ومورديك. سجّل بدقة ديون الزبائن الدائمين، وتابع مبالغ الشراء المستحقة لموردي قطع الغيار وعارضي الجملة.',
          keyPoints: [
            'ملفات اتصال كاملة (الاسم، الهاتف، العنوان، الولاية)',
            'تتبع ديون الزبائن والآجال المحددة للتسديد',
            'متابعة أرصدة الموردين والفواتير المتبقية',
            'سجل زمني شامل لتعاملات كل زبون ومورد',
            'تسجيل تسديد جزئي أو كلي للدين بنقرة واحدة',
          ],
          previewLabel: 'سجل الزبائن والديون',
        },
        {
          id: 'purchases',
          title: 'المشتريات والتوريدات',
          category: 'التموين والطلبيات',
          shortDesc: 'تسجيل وصولات استلام السلع، تحديث أسعار التكلفة وتغذية المخزون آلياً.',
          fullDesc:
            'سجّل فواتير ووصولات الشراء الواردة من تجار الجملة. يؤدي تثبيت وصل الاستلام إلى زيادة الكميات في المخزون مباشرة وتحديث كلفة الشراء للحفاظ على دقة الأرباح.',
          keyPoints: [
            'إدخال وصولات وفواتير الشراء الواردة من الموردين',
            'إضافة الكميات آلياً إلى المخزون فور تأكيد الوصل',
            'تحديث فوري لتكلفة السلعة وتنبيه عند ارتفاع الأسعار',
            'ربط المشتريات بحساب المورد وحالة السداد',
            'أرشيف كامل لكافة مشتريات المحل مرتبة بالتاريخ',
          ],
          previewLabel: 'وصولات المشتريات',
        },
        {
          id: 'sav',
          title: 'خدمة ما بعد البيع والتصليح',
          category: 'الورشة والصيانة',
          shortDesc: 'إدارة أجهزة الهواتف والكمبيوتر المودعة للتصليح: العطل، التشخيص، القطع والمتابعة.',
          fullDesc:
            'وحدة صممت خصيصاً لورشات تصليح الحواسيب والهواتف الذكية. اطبع وصل إيداع للزبون متضمناً وصف العطل، سجّل قطع الغيار المستهلكة من المخزن، وتابع تقدم الصيانة بدقة.',
          keyPoints: [
            'إنشاء بطاقة تصليح مع وصف العطل والملحقات المودعة',
            'مراحل واضحة: في الانتظار، قيد التصليح، تم الإصلاح، غير قابل للإصلاح، تم التسليم',
            'خصم قطع الغيار المستخدمة في التصليح مباشرة من المخزون',
            'فاتورة واضحة تشمل تكلفة قطع الغيار مع أتعاب اليد العاملة',
            'طباعة وصل إيداع للزبون وبطاقة ورشة تلصق على الجهاز',
          ],
          previewLabel: 'بطاقات الورشة وخدمة SAV',
        },
        {
          id: 'printing',
          title: 'طباعة التذاكر والباركود',
          category: 'الملحقات والأجهزة',
          shortDesc: 'توافق مع طابعات التذاكر الحرارية (80mm و 58mm) وطابعات الباركود حسب تعريفات ويندوز.',
          fullDesc:
            'يتكامل TechDesk DZ بسلاسة مع نظام الطباعة في ويندوز. اطبع تذاكر بيع واضحة تحمل بيانات محلك التجاري، أو اطبع ملصقات الباركود لمنتجاتك وقطع الغيار.',
          keyPoints: [
            'متوافق مع طابعات التذاكر الحرارية المعيارية (مقاس 80 مم و 58 مم)',
            'إصدار تذاكر مبيعات، فواتير مبسطة ووصولات إرجاع',
            'طباعة ملصقات الباركود لتنظيم الرفوف والسلع',
            'طباعة بطاقات الاستلام لخدمة ما بعد البيع',
            'يعتمد التوافق والطباعة على تعريفات الأجهزة المثبتة في ويندوز',
          ],
          previewLabel: 'إعدادات الطباعة في ويندوز',
        },
        {
          id: 'dashboard',
          title: 'لوحة التحكم والمؤشرات',
          category: 'الإحصائيات والتقارير',
          shortDesc: 'مؤشرات نشاط واضحة: رقم الأعمال اليومي، تقدير الأرباح، المنتجات الأكثر طلباً والتنبيهات.',
          fullDesc:
            'اتخذ قرارات تجارية سليمة بناءً على أرقام واضحة ومباشرة. اطلع على مداخيل محلك اليومية والشهرية، طرق التحصيل، وقائمة المواد التي تتطلب إعادة تموين عاجلة.',
          keyPoints: [
            'إجمالي المبيعات اليومية، الأسبوعية والشهرية',
            'تقدير الأرباح الإجمالية وفق أسعار الشراء المسجلة',
            'ترتيب السلع الأكثر مبيعاً والأكثر ربحية',
            'تنبيهات فورية للمنتجات المنتهية والتصليحات العالقة',
            'ملخص مفصل للمداخيل حسب وسيلة الدفع',
          ],
          previewLabel: 'إحصائيات لوحة التحكم',
        },
        {
          id: 'bilingual',
          title: 'لغتان أصيلتان: العربية والفرنسية',
          category: 'التعريب والتوافق',
          shortDesc: 'واجهة متكاملة باللغتين العربية والفرنسية مع دعم دقيق لاتجاه اليمين إلى اليسار (RTL).',
          fullDesc:
            'تم تصميم البرنامج ليلائم متطلبات أصحاب المحلات في الجزائر. يوفر TechDesk DZ واجهة ثنائية اللغة بالكامل، مع إمكانية التبديل الفوري وتغيير اتجاه العرض بسلاسة تامة.',
          keyPoints: [
            'ترجمة عربية احترافية ملائمة للمصطلحات التجارية الشائعة',
            'دعم كامل ومتقن لاتجاه الكتابة من اليمين إلى اليسار (RTL)',
            'إمكانية تبديل لغة الواجهة في أي لحظة',
            'طباعة تذاكر قابلة للتهيئة بالعربية أو الفرنسية',
            'إمكانية إدخال أسماء السلع والبيانات باللغتين معاً',
          ],
          previewLabel: 'الواجهة ثنائية اللغة',
        },
      ],
      hardwareNoticeTitle: 'ملاحظة تقنية حول الأجهزة والملحقات:',
      hardwareNoticeDesc:
        'تتم طباعة التذاكر والملصقات وقراءة الباركود عبر الأجهزة وتعريفات USB ونظام التشغيل ويندوز المثبتة على جهازك.',
    },
    showcase: {
      sectionBadge: 'الواجهة الحقيقية • صور البرنامج',
      sectionTitle: 'اكتشف TechDesk DZ بالصور',
      sectionSubtitle:
        'اكتشف أبرز مميزات برنامج التسيير الخاص بك، من خلال واجهته الحقيقية.',
      expandHint: 'انقر للتكبير',
      closeOverlay: 'إغلاق',
      prevImage: 'السابق',
      nextImage: 'التالي',
      counterLabel: 'صورة {current} من {total}',
      items: [
        {
          image: '/screenshots/1.webp',
          title: 'لوحة التحكم',
          desc: 'تابع مبيعات اليوم والمبالغ المحصلة وتنبيهات انخفاض المخزون والإصلاحات الجارية.',
        },
        {
          image: '/screenshots/2.webp',
          title: 'الصندوق والمبيعات',
          desc: 'ابحث عن المنتجات وأضفها إلى السلة وأدر عمليات البيع والتحصيل.',
        },
        {
          image: '/screenshots/3.webp',
          title: 'المنتجات والمخزون',
          desc: 'أدر المنتجات والمراجع والباركود والكميات المتوفرة والفئات والأسعار.',
        },
        {
          image: '/screenshots/4.webp',
          title: 'الصيانة وخدمة ما بعد البيع',
          desc: 'تابع تذاكر الإصلاح والأجهزة والأعطال المسجلة وحالة التدخلات.',
        },
        {
          image: '/screenshots/5.webp',
          title: 'سجل المبيعات وعروض الأسعار',
          desc: 'اعثر على تذاكر البيع والفواتير وعروض الأسعار ومعلومات الدفع.',
        },
        {
          image: '/screenshots/6.webp',
          title: 'المشتريات والتوريدات',
          desc: 'تابع مشتريات الموردين واستلام البضائع والأرصدة المتبقية.',
        },
        {
          image: '/screenshots/7.webp',
          title: 'إدارة العملاء',
          desc: 'اجمع بيانات العملاء وسجل مشترياتهم وتابع أرصدتهم المستحقة.',
        },
        {
          image: '/screenshots/8.webp',
          title: 'إدارة الموردين',
          desc: 'اطلع على بيانات الموردين ومعلومات الاتصال وأرصدة حساباتهم.',
        },
        {
          image: '/screenshots/9.webp',
          title: 'الديون والمستحقات',
          desc: 'تابع المبيعات غير المدفوعة والمبالغ المتبقية المستحقة عن إصلاحات ما بعد البيع.',
        },
        {
          image: '/screenshots/10.webp',
          title: 'المصاريف والصندوق اليومي',
          desc: 'سجّل مصروفات المتجر واطلع على معلومات فتح الصندوق وإغلاقه.',
        },
        {
          image: '/screenshots/11.webp',
          title: 'الإحصائيات والتقارير المالية',
          desc: 'اطلع على المؤشرات الرئيسية مثل المبيعات وصافي الربح التقديري والمبالغ المحصلة والمصروفات.',
        },
        {
          image: '/screenshots/12.webp',
          title: 'الرسوم البيانية والتحليل المالي',
          desc: 'حلّل المبيعات حسب الفئات وقارن النتائج المالية وحدد المنتجات الأفضل أداءً.',
        },
        {
          image: '/screenshots/13.webp',
          title: 'إعدادات النظام',
          desc: 'اضبط هوية المتجر واللغة والماسح الضوئي لأندرويد والتوصيل والنسخ الاحتياطية وإعدادات النظام المتاحة.',
        },
      ],
    },
    standoutFeatures: {
      sectionBadge: 'إمكانيات تتجاوز التسيير',
      sectionTitle: 'ما الذي يميز TechDesk DZ؟',
      sectionSubtitle:
        'أكثر من مجرد برنامج للتسيير، يجمع TechDesk DZ وظائف تساعد على تبسيط العمل اليومي في متجرك.',
      aiAssistant: {
        badge: 'مساعد ذكي مدمج',
        title: 'مساعد ذكاء اصطناعي مدمج في مساحة عملك',
        desc:
          'هل تحتاج إلى مساعدة أثناء العمل؟ استعن بمساعد تجاري متوفر في أي وقت، مباشرة داخل التطبيق. تطرح أسئلتك بالفرنسية أو العربية، وتحصل على نصائح عملية، وتعد منشوراتك أو تحل استفساراتك بسرعة دون مغادرة برنامج التسيير.',
        bullets: [
          { bold: 'وصول دائم', text: 'زر مخصص في الواجهة الرئيسية.' },
          { bold: 'مزدوج اللغة فرنسية / عربية', text: 'تواصل بشكل طبيعي باللغة التي تختارها.' },
          { bold: 'إجابات فورية', text: 'نصائح عملية، صياغة منشورات، ومساعدة في اتخاذ القرار.' },
        ],
      },
      delivery: {
        badge: 'التوصيل والشحن',
        title: 'إدارة مدمجة للتوصيل والشحن',
        desc:
          'تابع شحناتك ببساطة. يدمج TechDesk DZ إدارة شركات التوصيل لإنشاء وطباعة ومتابعة وصلات الشحن دون الحاجة لإعادة كتابة البيانات.',
        bullets: [
          { bold: 'شركات التوصيل', text: 'دعم للموصلين والشركاء اللوجستيين.' },
          { bold: 'طباعة الوصلات', text: 'إنشاء سريع للملصقات واستمارات الشحن.' },
          { bold: 'متابعة مركزية', text: 'رؤية واضحة لحالة الطرود والمرتجعات.' },
        ],
      },
    },
    mobileApp: {
      badge: 'التطبيق المحمول',
      heading: 'TechDesk DZ، حتى على هاتفك',
      description: 'اكتشف واجهة تطبيق TechDesk Scanner وأهم وظائفه.',
      supportingText: 'واجهة مصممة لتكون بسيطة وعملية في الاستخدام اليومي.',
      featuresHeading: 'أهم ميزات التطبيق المحمول',
      featuresSubtitle: 'تطبيق محمول سهل الاستخدام صُمم لمساعدتك في تسيير ومتابعة متجرك أينما كنت.',
      feature1: {
        title: 'لوحة التحكم',
        desc: 'اطّلع على أهم المؤشرات المعروضة في واجهة التطبيق المحمول.',
      },
      feature2: {
        title: 'التقارير',
        desc: 'اطّلع على التقارير المتاحة لمتابعة نشاط متجرك.',
      },
      feature3: {
        title: 'ماسح الباركود',
        desc: 'استخدم كاميرا هاتفك لمسح الرموز الشريطية.',
      },
      downloadCta: 'تحميل تطبيق TechDesk Review (.apk)',
      downloadDirect: 'تحميل مباشر APK • أندرويد',
      zoomHint: 'تكبير الشاشة',
    },
    pricing: {
      sectionTitle: 'الأسعار والترخيص',
      sectionSubtitle:
        'صيغتان واضحتان: تجربة كاملة بدون أي التزام، ثم ترخيص دائم لتجهيز محلك التجاري.',
      durationLabel: 'المدة',
      trialOffer: {
        name: 'النسخة التجريبية',
        tagline: 'اكتشف كافة قدرات TechDesk DZ على حاسوبك قبل اتخاذ القرار.',
        price: 'مجاناً',
        priceSubtext: 'بدون أي دفع أو بطاقة بنكية',
        duration: '3 أيام (72 ساعة)',
        cta: 'تحميل النسخة التجريبية مجاناً',
        features: [
          'وصول كامل إلى جميع وحدات البرنامج الـ 9 دون استثناء',
          'بدون أي تحديد لعدد المنتجات أو تذاكر البيع',
          'طباعة تذاكر الصندوق وملصقات الباركود',
          'قاعدة بيانات محلية تعمل على جهازك مباشرة',
          'واجهة ثنائية اللغة (فرنسية وعربية)',
          'تفعيل تلقائي يبدأ عند أول تشغيل على جهازك',
        ],
        ruleTitle: 'شروط تفعيل الفترة التجريبية:',
        ruleDesc:
          'تبدأ فترة التجربة المجانية الممتدة لـ 72 ساعة فور تفعيل الترخيص لأول مرة داخل البرنامج على حاسوبك. وفقاً لقواعد الترخيص، يُمنح الترخيص التجريبي مرة واحدة فقط لكل جهاز كمبيوتر فعلي.',
      },
      lifetimeOffer: {
        name: 'الترخيص الدائم مدى الحياة',
        tagline: 'أداة تسيير مستمرة لمحلك التجاري، بدون أي اشتراكات شهرية متكررة.',
        price: 'شراء لمرة واحدة',
        priceSubtext: 'ترخيص نهائي لكل محطة عمل',
        duration: 'مدى الحياة بدون انتهاء',
        cta: 'طلب الترخيص الدائم',
        features: [
          'استخدام دائم وغير محدد المدة دون توقف',
          'جميع الوحدات والمميزات الحالية لـ TechDesk DZ مشمولة',
          'عمل مستقل وتام دون الحاجة لأي خادم سحابي',
          'تخزين محلي دائم وآمن لقاعدة بياناتك',
          'تفعيل آمن وموثوق عبر نظام الترخيص الرسمي',
          'مساعدة فنية في التثبيت والتشغيل الأولي على حاسوبك',
        ],
        ruleTitle: 'كيفية الحصول على الترخيص:',
        ruleDesc:
          'يتم تفعيل الترخيص الدائم بصورة نهائية عبر نظام ترخيص TechDesk DZ. تواصل مباشرة مع فريقنا لطلب مفتاح التفعيل الرسمي الخاص بك.',
      },
      comparisonTitle: 'جدول المقارنة بين العرضين',
      comparisonHeaders: {
        feature: 'الميزة الوظيفية',
        trial: 'النسخة التجريبية',
        lifetime: 'الترخيص الدائم',
      },
      matrix: [
        { label: 'وحدة الصندوق والمبيعات السريعة', trial: true, lifetime: true },
        { label: 'إدارة المنتجات وأكواد الباركود', trial: true, lifetime: true },
        { label: 'متابعة المخزون وتنبيهات النفاد', trial: true, lifetime: true },
        { label: 'سجل الزبائن، الموردين والديون', trial: true, lifetime: true },
        { label: 'وحدة خدمة ما بعد البيع والتصليح (SAV)', trial: true, lifetime: true },
        { label: 'طباعة تذاكر الصندوق وملصقات الباركود', trial: true, lifetime: true },
        { label: 'لوحة التحكم ومؤشرات المبيعات والأرباح', trial: true, lifetime: true },
        { label: 'واجهة باللغتين العربية والفرنسية (RTL)', trial: true, lifetime: true },
        { label: 'تخزين محلي خاص وسري للبيانات', trial: true, lifetime: true },
        { label: 'مدة الصلاحية المسموحة', trial: '72 ساعة (3 أيام)', lifetime: 'غير محدودة (مدى الحياة)' },
      ],
    },
    architecture: {
      sectionTitle: 'مصمم كبرنامج ويندوز مكتبي أصيل',
      sectionSubtitle:
        'يركز TechDesk DZ على السرعة القصوى، الاستقلالية الكاملة، والسيادة التامة على بيانات محلك التجاري.',
      cards: [
        {
          title: 'تخزين محلي كامل على جهازك',
          desc: 'جميع بياناتك (المنتجات، أسعار الشراء، الأرباح، سجل الزبائن) يتم حفظها محلياً على قرص حاسوبك داخل قاعدة بيانات آمنة.',
          subtext: 'بياناتك التجارية تظل سرية وخاصة بك تماماً ولا يتم رفعها إلى أي خوادم خارجية.',
        },
        {
          title: 'عمل متواصل دون الحاجة للإنترنت',
          desc: 'تستمر عمليات البيع، الفوترة وإدارة الورشة بسرعة 100% حتى في حال انقطاع اتصال الإنترنت في محلك.',
          subtext: 'يلزم الاتصال بالإنترنت لبضع ثوانٍ فقط أثناء مرحلة تفعيل الترخيص الأولية.',
        },
        {
          title: 'نظام ترخيص آمن مرتبط بعتاد الجهاز',
          desc: 'يربط نظام الترخيص التفعيل بالمعرف العتادي الفريد لحاسوبك لضمان احترام شروط التجربة والترخيص.',
          subtext: 'قاعدة صارمة: تجربة واحدة لكل جهاز، يتم التحقق منها عبر خادم التراخيص دون كشف أي أسرار إدارية.',
        },
      ],
    },
    customization: {
      sectionBadge: 'خدمة التخصيص حسب الطلب',
      sectionTitle: 'برنامج يتكيف مع طريقة عملك',
      sectionSubtitle:
        'لكل متجر احتياجاته الخاصة. هل ترغب في إضافة ميزة، أو تعديل طريقة عمل إحدى الوظائف، أو إزالة عناصر لا تحتاج إليها؟ يمكن تكييف TechDesk DZ حسب احتياجاتك.',
      items: {
        add: {
          title: 'إضافة',
          desc: 'إضافة ميزات أو أدوات تناسب نشاطك.',
        },
        modify: {
          title: 'تعديل',
          desc: 'تكييف الوظائف الحالية مع طريقة عملك.',
        },
        remove: {
          title: 'حذف',
          desc: 'إزالة العناصر غير الضرورية أو تبسيطها عندما يكون ذلك ممكنًا تقنيًا.',
        },
      },
      supportingText:
        'يمكنك عرض احتياجاتك علينا بعد تجربة البرنامج. سندرس طلبك ونقترح عليك الحل المناسب.',
      ctaButton: 'طلب تخصيص البرنامج',
      serviceNoticeTitle: 'خدمة إضافية مستقلة حسب التقدير',
      serviceNoticeDesc:
        'تخصيص البرنامج خدمة إضافية مستقلة عن الترخيص القياسي. تتحدد إمكانية التنفيذ الفني والتكلفة وفقاً لطبيعة التعديلات المطلوبة ومدى تعقيدها.',
    },
    faq: {
      sectionTitle: 'الأسئلة الشائعة (FAQ)',
      sectionSubtitle:
        'إجابات شاملة ودقيقة حول طريقة عمل البرنامج، التراخيص والتوافق.',
      items: [
        {
          question: 'ما هو برنامج TechDesk DZ ؟',
          answer:
            'برنامج TechDesk DZ هو تطبيق مكتبي لأنظمة ويندوز صُمم خصيصاً لمحلات الإعلام الآلي، بيع وصيانة الهواتف الذكية، محلات الإلكترونيات وورشات الصيانة في الجزائر. يجمع بين نقطة البيع، إدارة المخزون، المشتريات، متابعة الديون وخدمة ما بعد البيع في نظام واحد.',
        },
        {
          question: 'ما هي الأنشطة التجارية التي يناسبها البرنامج ؟',
          answer:
            'البرنامج مخصص ومثالي لمحلات عتاد الحواسيب واللواحق، محلات بيع وإصلاح الهواتف الذكية، نقاط بيع الأجهزة الإلكترونية وورشات الصيانة الفنية.',
        },
        {
          question: 'هل هو برنامج مكتبي لويندوز أم موقع إلكتروني ؟',
          answer:
            'هو تطبيق مكتبي حقيقي يعمل على بيئة ويندوز (متوافق مع Windows 10 و Windows 11 بنواة 64 بت). يُثبت مباشرة على حاسوبك ويحفظ بياناتك محلياً لضمان سرعة فائقة دون أي بطء ناتج عن المتصفحات.',
        },
        {
          question: 'ما هي مدة النسخة التجريبية المجانية ؟',
          answer:
            'مدة التجربة المجانية هي 3 أيام كاملة (أي 72 ساعة متواصلة). خلال هذه الفترة، يمكنك تجربة كافة وحدات ووظائف البرنامج بكامل طاقتها ودون أي قيود على عدد المنتجات أو التذاكر.',
        },
        {
          question: 'متى تبدأ فترة التجربة المجانية ؟',
          answer:
            'تبدأ مهلة الـ 72 ساعة بدقة عند تفعيل الترخيص التجريبي لأول مرة على جهازك من داخل البرنامج. تُمنح هذه الفترة مرة واحدة فقط لكل جهاز حاسوب فعلي.',
        },
        {
          question: 'هل يتطلب التفعيل الأولي وجود اتصال بالإنترنت ؟',
          answer:
            'نعم. يلزم وجود اتصال بالإنترنت لبضع ثوانٍ فقط أثناء خطوة تفعيل الترخيص (سواء للنسخة التجريبية أو الترخيص الدائم). بعد ذلك، يعمل البرنامج بشكل يومي دون الحاجة إلى الإنترنت.',
        },
        {
          question: 'كيف يمكنني الحصول على الترخيص الدائم مدى الحياة ؟',
          answer:
            'يمكنك طلب الترخيص الدائم مباشرة عبر التواصل مع فريق المبيعات لدينا. بعد إتمام الطلب، ستتلقى مفتاح التفعيل الرسمي لإدخاله في البرنامج وتشغيله بشكل نهائي.',
        },
        {
          question: 'هل يمكن طلب تعديلات أو تخصيص البرنامج حسب الطلب ؟',
          answer:
            'نعم. لكل متجر خصوصيته واحتياجاته. يمكنك طلب إضافة ميزات مخصصة لنشاطك، أو تعديل طريقة عمل الوظائف الحالية، أو حذف وتبسيط العناصر غير المستخدمة (عندما يكون ذلك ممكناً تقنياً). يُعد التخصيص خدمة إضافية مستقلة عن الترخيص القياسي وتُحدد تكلفتها بحسب طبيعة التعديلات المطلوبة.',
        },
        {
          question: 'هل يمكن طباعة تذاكر الصندوق وملصقات الباركود ؟',
          answer:
            'نعم. يدعم TechDesk DZ الطباعة على طابعات التذاكر الحرارية المعيارية (80 مم و 58 مم) وكذلك طباعة ملصقات الباركود وبطاقات ورشة الصيانة، شريطة تثبيت تعريفات الطابعات المعنية على نظام ويندوز.',
        },
        {
          question: 'هل يتم رفع بياناتي التجارية أو مزامنتها سحابياً ؟',
          answer:
            'كلا. لا يفرض TechDesk DZ أي مزامنة سحابية ولا يرفع بياناتك التجارية إلى الإنترنت. تظل قاعدة بياناتك ومبيعاتك محفوظة داخل حاسوبك لضمان الخصوصية والسرعة المطلقة.',
        },
      ],
    },
    contact: {
      sectionTitle: 'الاتصال والاستفسار',
      sectionSubtitle:
        'هل لديك استفسار حول TechDesk DZ أو ترغب في تجهيز محلك التجاري؟ تواصل مع فريقنا مباشرة.',
      phoneLabel: 'الهاتف',
      whatsappLabel: 'واتساب',
      emailLabel: 'البريد الإلكتروني',
      locationLabel: 'المقر والولاية',
      hoursLabel: 'أوقات العمل والتواصل',
      form: {
        subject: 'موضوع الطلب',
        subjectPlaceholder: 'مثال: طلب تخصيص البرنامج، استفسار عام...',
        name: 'الاسم أو اسم المحل التجاري',
        phone: 'رقم الهاتف',
        shopType: 'نوع النشاط التجاري',
        shopTypePlaceholder: 'اختر نوع نشاطك',
        shopTypes: [
          'محل إعلام آلي ولواحق الحواسيب',
          'محل بيع الهواتف الذكية ولواحقها',
          'ورشة تصليح وصيانة (SAV)',
          'محل إلكترونيات عامة',
          'نشاط تجاري آخر',
        ],
        message: 'استفسارك أو رسالتك',
        submit: 'إرسال الطلب',
        note: 'معلوماتك تستخدم فقط للإجابة على استفسارك التجاري.',
        directContactNotice:
          'للتواصل السريع والمباشر، يمكنك أيضاً الاتصال بنا هاتفياً أو مراسلتنا عبر تطبيق واتساب.',
      },
    },
    downloadModal: {
      trialTitle: 'تحميل برنامج TechDesk DZ',
      trialSubtitle: 'برنامجك لإدارة متاجر الإعلام الآلي والهواتف.',
      statusBadge: 'ويندوز 10 / 11 • 64 بت • تجربة 72 ساعة',
      statusDesc:
        'ملف التثبيت الرسمي لنظام ويندوز جاهز للتحميل المباشر الآن. اتبع الخطوات الـ 3 البسيطة لبدء تجربتك المجانية.',
      downloadButton: 'تحميل TechDesk DZ (.exe)',
      installerMeta: 'TechDesk-DZ-Setup.exe • نسخة رسمية ويندوز',
      androidScannerTitle: 'تطبيق الهاتف : TechDesk Review',
      androidScannerBadge: 'Android APK',
      androidScannerDesc:
        'اربط هاتفك الذكي بنظام أندرويد مباشرة ببرنامج TechDesk DZ على الكمبيوتر للمراجعة والمتابعة السريعة.',
      androidDownloadButton: 'تحميل تطبيق TechDesk Review (.apk)',
      androidMeta: 'TechDesk-Scanner.apk • تحميل مباشر APK لأجهزة أندرويد',
      flowTitle: 'التثبيت والتفعيل في 3 خطوات :',
      step1Title: '1. التحميل',
      step1Desc: 'حمّل ملف التثبيت الرسمي من خلال الزر أدناه.',
      step2Title: '2. التثبيت',
      step2Desc: 'شغّل برنامج التثبيت على جهاز الكمبيوتر الخاص بك.',
      step3Title: '3. التفعيل',
      step3Desc: 'احصل على مفتاح التفعيل المجاني (72 ساعة) عبر واتساب.',
      whatsappTrialBtn: 'طلب كود التفعيل عبر واتساب',
      systemRequirementsTitle: 'المتطلبات التقنية الدنيا',
      requirements: {
        os: 'نظام Windows 11 أو Windows 10 (إصدارات 64 بت فقط)',
        ram: '4 جيجابايت كحد أدنى (يوصى بـ 8 جيجابايت)',
        storage: '500 ميجابايت مساحة تخزين متوفرة على القرص',
        screen: 'دقة شاشة لا تقل عن 1366 × 768 بكسل',
        device: 'يعمل 100% بدون إنترنت (الاتصال مطلوب 30 ثانية فقط للتفعيل)',
      },
      actionText: 'طلب كود التفعيل عبر واتساب',
      close: 'إغلاق',
      purchaseTitle: 'طلب الترخيص الدائم مدى الحياة',
      purchaseSubtitle: 'ترخيص رسمي دائم بدون أي اشتراكات شهرية متكررة.',
      purchaseStatusDesc:
        'لطلب نسختك الدائمة اليوم والحصول على مفتاح التفعيل الرسمي مع الدعم الفني، يرجى التواصل مباشرة مع فريق المبيعات.',
      purchaseAction: 'طلب الترخيص عبر واتساب',
    },
    footer: {
      productDesc:
        'برنامج ويندوز لتسيير محلات الإعلام الآلي، الهواتف الذكية، المبيعات، المخزون وخدمة ما بعد البيع في الجزائر.',
      sections: {
        product: 'المنتج',
        features: 'الوحدات',
        resources: 'معلومات ومساعدة',
        legal: 'معلومات قانونية',
      },
      copyright: 'TechDesk DZ. جميع الحقوق محفوظة.',
      disclaimer:
        'برنامج TechDesk DZ هو تطبيق مكتبي مصمم للعمل على نظام التشغيل مايكروسوفت ويندوز.',
      windowsNotice: 'ويندوز علامة تجارية مسجلة لشركة مايكروسوفت.',
    },
  },
};
