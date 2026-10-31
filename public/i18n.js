/**
 * Portfolio Internationalization (i18n) Engine
 * Supported Languages: English (en), Français (fr), Italiano (it), العربية (ar)
 * Fully manages DOM updates, RTL directionality, active states, and persistence.
 */

(function () {
  'use strict';

  var translations = {
    en: {
      lang_code: 'EN',
      lang_name: 'English',
      dir: 'ltr',

      // Navigation
      nav_home: 'Home',
      nav_about: 'About',
      nav_services: 'Services',
      nav_projects: 'Projects',
      nav_location: 'Location',
      nav_contact: 'Contact',
      nav_cv: 'Download CV',
      mobile_lang_label: 'Language / Langue / اللغة',

      // Hero
      hero_badge: 'Welcome To My Portfolio',
      hero_roles: 'Full Stack Developer <span class="sep">|</span> AI Engineer <span class="sep">|</span> Digital Designer',
      hero_sub: 'Architecting &nbsp;production-ready &nbsp; Generative AI solutions, Local &nbsp; RAG systems,<br>and scalable web &amp; mobile applications &nbsp; with creative digital &nbsp; design,<br>driven &nbsp; by &nbsp; continuous &nbsp; innovation &nbsp; and &nbsp; technical excellence.',
      hero_btn_projects: 'Explore Projects',
      hero_btn_contact: 'Contact Me',
      hero_scroll: 'Scroll',

      // About
      about_eyebrow: 'Profile & Career Parcours',
      about_title: 'About Hichem Bendali',
      about_desc: 'Creative Engineer combining software development, graphic design, and cutting-edge AI expertise. Multilingual in English, French, and Arabic.',
      parcours_title: 'Career & Education Parcours',
      parcours_hint: 'Scroll →',

      // Checkpoints
      cp1_title: 'Scientific Baccalaureate',
      cp1_place: 'El Moussalaha High School, Algeria',
      cp2_title: 'Diploma in Solar Energy',
      cp2_place: 'IFEG Training Institute, Algeria',
      cp3_title: 'AEC in Web & Mobile Dev',
      cp3_place: 'CÉGEP, Québec, Canada',
      cp4_title: 'Bachelor\'s Degree Web & Software',
      cp4_place: '3iL École d\'Ingénieur, Limoges, France',
      cp5_title: 'Professional Engineering in CS',
      cp5_place: 'H2iTM, Algiers, Algeria',
      cp6_title: 'Full Stack Developer',
      cp6_place: 'SONELGAZ (MERN Payments App)',
      cp7_title: 'Diploma in Graphic Design',
      cp7_place: 'ATF Media Academy, Algiers',
      cp8_title: 'AI Engineering',
      cp8_place: 'Generative AI, LangGraph, MCP, RAG',

      // Bio
      bio_h3: 'Full Stack Developer • AI Engineer • Digital Designer',
      bio_p1: 'I am Hichem Bendali, a versatile software engineer and digital designer based in Algeria. With demonstrated expertise in building scalable, innovative solutions, I specialize in Generative AI, agentic systems, and automation workflows.',
      bio_p2: 'My work spans architecting and deploying production-ready solutions, including Local RAG systems, responsive web applications, and cross-platform mobile apps. Holding a strong foundation in prompt engineering, LLM integration, and over <strong>+40 Professional Certifications</strong>, I am fluent in English, French, and Arabic, and I am always eager to contribute to innovative projects in technology and renewable energy.',
      highlight_certs: 'Professional Certifications',
      highlight_langs: 'Languages (English, French, Arabic)',
      about_photo_title: 'Hichem Bendali in Flow',
      about_photo_sub: 'Engineering Intelligent Systems • Code & Design',

      // Diplomas
      diplomas_eyebrow: 'Academic & Professional Credentials',
      diplomas_title: 'Diplomas & Certificates',
      diplomas_desc: 'Official engineering degrees and internationally certified specializations in Agentic AI, Information Systems, and Web Engineering.',
      click_to_enlarge: 'Click to Enlarge',
      view_cert: 'View Full Certificate',
      view_diploma: 'View Full Diploma',
      view_attestation: 'View Full Attestation',
      btn_show_diplomas: 'Show All Diplomas & Certificates (+40)',
      btn_hide_diplomas: 'Hide Additional Diplomas & Certificates',
      all_diplomas_title: 'Complete Diplomas & Certifications Catalog',
      all_diplomas_desc: 'Scroll down inside this card to explore all verified diplomas, academic credentials & certified professional badges.',
      all_diplomas_badge: '+40 Verified Certifications',

      // Diploma Cards Content
      d1_title: 'Agentic AI Certified Foundations Associate',
      d1_desc: 'Certificate of Recognition demonstrating mastery of Agentic AI, Autonomous Workflows, LLM Foundation Architectures & Enterprise AI Solutions.',
      d2_title: 'Responsible AI in a Global Context',
      d2_desc: 'Professional Certificate by the United Nations University covering AI Policy, Governance, Global Ethics, and Regulatory Compliance.',
      d3_title: 'Information Systems Designer Diploma (CSI)',
      d3_desc: 'Level 6 Certified Qualification (Bachelor’s degree level) in Software Architecture, Information Systems Modeling, Databases & Advanced Web Technologies.',
      d4_title: 'AEC in Web Development (LEA.6C)',
      d4_desc: 'College-level study program (405 hours / 13 credits) covering web engineering, client-server architectures, and software integration.',

      // Services Header
      services_eyebrow: 'Core Expertise & Solutions',
      services_title: 'Professional Services',
      services_desc: 'Comprehensive engineering capabilities across modern software development, clean renewable energy infrastructure, digital design systems, and cutting-edge artificial intelligence.',

      // Service 1: Full Stack
      s1_badge: 'Primary Discipline • Service 01',
      s1_title: 'Full Stack Development',
      s1_desc: 'Architecting and deploying end-to-end software applications with robust backends, resilient databases, reactive web and mobile interfaces, and AI-accelerated workflows tailored for production scale.',
      cluster_frontend: 'Front-end',
      cluster_backend: 'Back-end',
      cluster_databases: 'Databases',
      cluster_others: 'Others (DevOps & Engineering)',
      cluster_ai_tools: 'AI Tools & Accelerators',
      term_preview_hint: 'Click to Expand Full Terminal Dashboard',
      term_caption: 'Hacker mindset • Clean code architecture',
      term_zoom: 'Zoomable Preview ↗',

      // Service 2: Solar Energy
      s2_badge: 'Clean Energy Infrastructure • Service 02',
      s2_title: 'Solar Energy Panels Installation and Maintenance',
      s2_desc: 'Certified photovoltaic energy systems, durable structural ground and rooftop mounting, high-performance inverter wiring, and lifetime preventative maintenance.',
      solar_phase1_badge: 'Phase 1',
      solar_phase1_pill: 'Photovoltaic Systems',
      solar_phase1_title: 'Solar Panel Installation',
      solar_phase1_text: 'Professional installation of Photovoltaic solar panels for residential and commercial properties. Maximize your energy production with our expertly designed systems.',
      solar_phase2_badge: 'Phase 2',
      solar_phase2_pill: 'Lifecycle Support',
      solar_phase2_title: 'Solar Maintenance & Repair',
      solar_phase2_text: 'Comprehensive maintenance services to keep your solar system operating at peak efficiency. Regular inspections and repairs for long-lasting performance.',
      solar_tag_array: 'PV Array Structure',
      solar_tag_onsite: 'On-Site Installation',
      solar_tag_inverter: 'Inverter & Protection Panel',

      // Service 3: Graphic Design
      s3_badge: 'Digital Visuals & Branding • Service 03',
      s3_title: 'Graphic Design',
      s3_desc: 'Bespoke visual brand identities, advertising product posters, digital publication covers, and marketing campaign collateral crafted with Adobe Photoshop, Illustrator, and Canva.',
      created_with_canva: 'Created with Canva',
      created_with_photoshop: 'Created with Photoshop',
      created_with_illustrator: 'Created with Illustrator',
      card_aroma_title: 'ARoma Coffee Product Poster',
      card_carte_title: 'Executive Business Card Design',
      card_venus_title: 'Venus Shower Gel Product Poster',
      card_ysl_title: 'YSL MYSELF Perfume Product Post',
      card_ebook_title: 'Next Stop The Top E-Book Cover',
      card_cours_title: 'Private Lessons in Social Media Design',
      btn_show_designs: 'Show All Graphic Designs',
      designs_count_pill: '+40 Showcase',
      graphic_modal_badge: 'Visual Arts & Branding Portfolio',
      graphic_modal_title: 'Graphic Design & Digital Creative Portfolio',
      graphic_modal_desc: 'Explore all creative projects, advertising posters, brand identities, and publications crafted by Hichem Bendali.',
      graphic_modal_hint: 'Click any card to expand full resolution',
      btn_close_window: 'Close Window',

      // Service 4: AI Engineering
      s4_badge: 'Autonomous Systems • Service 04',
      s4_enterprise: 'Enterprise AI',
      s4_title: 'AI Engineering',
      s4_desc: 'Designing and deploying enterprise-grade generative AI architectures, autonomous multi-agent pipelines, localized RAG engines with high-dimensional vector embeddings, and robust containerized production infrastructure.',
      ai_photo_badge: 'Autonomous AI Systems',
      ai_photo_hint: 'Click to Expand Blueprint',
      ai_photo_caption: 'Agentic Workflows • LLMs • Modern Stack',
      ai_cluster1_title: 'Generative AI & Agents',
      ai_cluster1_count: '12 Core Technologies',
      ai_cluster2_title: 'Frameworks & Automation',
      ai_cluster2_count: '8 Orchestration Tools',
      ai_cluster3_title: 'Deployment',
      ai_cluster3_count: 'Production Ops',

      // Projects Section
      projects_eyebrow: 'Engineering Portfolio',
      projects_title: 'My Projects',
      projects_desc: 'A showcase of live full-stack web applications, mobile architectures, administrative dashboards, and bespoke digital platforms.',
      projects_note: '<strong>Portfolio Notice:</strong> These projects are live front-end implementations built for demonstration and preview. Click <em>"Open Project"</em> on any card to test each live interactive application.',
      btn_open_project: 'Open Project',
      enlarge_preview: 'Enlarge',
      btn_show_projects: 'Show all Projects',
      projects_count_pill: '6+ Live Demos',
      projects_modal_badge: 'Live Deployed Applications',
      projects_modal_title: 'All Engineering & Web Projects',
      projects_modal_desc: 'Explore live front-end demos, mobile architectures, administrative dashboards, and showroom experiences.',
      projects_modal_hint: 'Click "Open Project" on any card to launch the live application in a new tab.',

      // Location Section
      location_eyebrow: 'Geography & Reach',
      location_title: 'Location & Global Availability',
      location_desc: 'Based in Algeria with international academic experience in France and Canada, collaborating seamlessly across timezones worldwide.',
      location_badge: 'Ready for Global Remote & Hybrid Projects',
      location_city: 'Blida / Algiers, Algeria',
      location_text: 'Strategically located in North Africa (GMT+1 / CET timezone), offering effortless real-time overlap with Europe, the Middle East, and North America. Multilingual in English, French, and Arabic, I partner with companies, startups, and clients internationally.',
      loc_stat_hub: 'Primary Hub',
      loc_stat_hub_val: 'Blida & Algiers, Algeria',
      loc_stat_tz: 'Timezone',
      loc_stat_tz_val: 'GMT+1 (CET / Algiers)',
      loc_stat_phone: 'Contact Phone',
      loc_stat_mode: 'Working Mode',
      loc_stat_mode_val: '100% Remote / Travel Ready',
      loc_hub_title: 'International Engineering Hub',
      loc_hub_subtitle: 'Cross-continental academic ties & global connectivity',
      loc_zone_dz: '<strong>Algeria:</strong> Blida & Algiers (Primary Hub)',
      loc_zone_fr: '<strong>France:</strong> Limoges (3iL École d\'Ingénieur)',
      loc_zone_ca: '<strong>Canada:</strong> Québec (CÉGEP Web & Mobile)',
      loc_zone_global: '<strong>Global Remote:</strong> Europe, Americas, MENA',
      loc_badge_active: 'Active Hub',
      loc_badge_degree: 'Degree',
      loc_badge_available: 'Available',

      // Contact Section
      contact_eyebrow: 'Get in Touch',
      contact_title: 'Let’s Connect & Collaborate',
      contact_desc: 'Have a project in mind, an engineering role to fill, or want to discuss AI integrations? Reach out directly.',
      contact_card_title: 'Contact Hichem Bendali',
      contact_card_desc: 'Available for software development contracts, AI engineering engagements, and full-time engineering roles.',
      contact_direct_email: 'Direct Email',
      contact_direct_phone: 'Direct Phone',
      contact_copy: 'Copy',
      contact_copied: 'Copied!',
      form_label_name: 'Your Name',
      form_ph_name: 'e.g. Jean Dupont',
      form_label_email: 'Email Address',
      form_ph_email: 'e.g. contact@company.com',
      form_label_subject: 'Subject',
      form_ph_subject: 'Project Inquiry / Job Opportunity',
      form_label_message: 'Your Message',
      form_ph_message: 'Tell me about your project, timeline, or requirements...',
      form_btn_send: 'Send Message',

      // Footer
      footer_copy: '© 2026 Hichem Bendali • Full Stack Developer | AI Engineer | Digital Designer • Blida, Algeria.',

      // Lightbox
      lightbox_prev: 'Prev',
      lightbox_next: 'Next',
      lightbox_exit: 'Exit Picture',
      toast_copied: 'Email copied to clipboard: ',
      toast_sent: 'Thank you! Preparing email client...'
    },

    fr: {
      lang_code: 'FR',
      lang_name: 'Français',
      dir: 'ltr',

      // Navigation
      nav_home: 'Accueil',
      nav_about: 'À propos',
      nav_services: 'Services',
      nav_projects: 'Projets',
      nav_location: 'Localisation',
      nav_contact: 'Contact',
      nav_cv: 'Télécharger CV',
      mobile_lang_label: 'Langue / Language / اللغة',

      // Hero
      hero_badge: 'Bienvenue sur mon Portfolio',
      hero_roles: 'Développeur Full Stack <span class="sep">|</span> Ingénieur IA <span class="sep">|</span> Designer Digital',
      hero_sub: 'Conception de solutions d\'IA Générative prêtes pour la production, systèmes RAG locaux,<br>et applications web &amp; mobiles évolutives avec un design numérique créatif,<br>guidé par l\'innovation continue et l\'excellence technique.',
      hero_btn_projects: 'Explorer les Projets',
      hero_btn_contact: 'Me Contacter',
      hero_scroll: 'Défiler',

      // About
      about_eyebrow: 'Profil & Parcours Professionnel',
      about_title: 'À propos de Hichem Bendali',
      about_desc: 'Ingénieur créatif alliant développement logiciel, design graphique et expertise de pointe en IA. Polyglotte en anglais, français et arabe.',
      parcours_title: 'Parcours Professionnel & Académique',
      parcours_hint: 'Faire défiler →',

      // Checkpoints
      cp1_title: 'Baccalauréat Scientifique',
      cp1_place: 'Lycée El Moussalaha, Algérie',
      cp2_title: 'Diplôme en Énergie Solaire',
      cp2_place: 'Institut de Formation IFEG, Algérie',
      cp3_title: 'AEC en Développement Web & Mobile',
      cp3_place: 'CÉGEP, Québec, Canada',
      cp4_title: 'Diplôme Concepteur CSI (Bac+3)',
      cp4_place: '3iL École d\'Ingénieurs, Limoges, France',
      cp5_title: 'Ingénierie Professionnelle en Info',
      cp5_place: 'H2iTM, Alger, Algérie',
      cp6_title: 'Développeur Full Stack',
      cp6_place: 'SONELGAZ (App Paiement MERN)',
      cp7_title: 'Diplôme en Design Graphique',
      cp7_place: 'Académie ATF Media, Alger',
      cp8_title: 'Ingénierie en IA',
      cp8_place: 'IA Générative, LangGraph, MCP, RAG',

      // Bio
      bio_h3: 'Développeur Full Stack • Ingénieur IA • Designer Digital',
      bio_p1: 'Je suis Hichem Bendali, ingénieur logiciel polyvalent et designer numérique basé en Algérie. Fort d\'une expertise reconnue dans la création de solutions évolutives et innovantes, je suis spécialisé dans l\'IA Générative, les systèmes multi-agents et les flux d\'automatisation.',
      bio_p2: 'Mon travail englobe l\'architecture et le déploiement de solutions robustes en production, notamment des systèmes RAG locaux, des applications web réactives et des applications mobiles multiplateformes. Fort d\'une solide maîtrise du prompt engineering, de l\'intégration des LLMs et de plus de <strong>+40 Certifications Professionnelles</strong>, je maîtrise couramment l\'anglais, le français et l\'arabe, et je suis toujours enthousiaste à l\'idée de collaborer sur des projets technologiques et d\'énergies renouvelables.',
      highlight_certs: 'Certifications Professionnelles',
      highlight_langs: 'Langues (Anglais, Français, Arabe)',
      about_photo_title: 'Hichem Bendali en action',
      about_photo_sub: 'Ingénierie de Systèmes Intelligents • Code & Design',

      // Diplomas
      diplomas_eyebrow: 'Titres Académiques & Professionnels',
      diplomas_title: 'Diplômes & Certificats',
      diplomas_desc: 'Diplômes d\'ingénieur officiels et spécialisations certifiées internationales en IA Agentique, Systèmes d\'Information et Ingénierie Web.',
      click_to_enlarge: 'Cliquer pour Agrandir',
      view_cert: 'Voir le Certificat Complet',
      view_diploma: 'Voir le Diplôme Complet',
      view_attestation: 'Voir l\'Attestation Complète',
      btn_show_diplomas: 'Afficher Tous les Diplômes & Certificats (+40)',
      btn_hide_diplomas: 'Masquer les Diplômes Supplémentaires',
      all_diplomas_title: 'Catalogue Complet des Diplômes & Certifications',
      all_diplomas_desc: 'Faites défiler cette carte pour explorer l\'ensemble des diplômes d\'État, qualifications académiques et badges professionnels certifiés.',
      all_diplomas_badge: '+40 Certifications Vérifiées',

      // Diploma Cards Content
      d1_title: 'Agentic AI Certified Foundations Associate',
      d1_desc: 'Certificat de reconnaissance attestant de la maîtrise des architectures d\'IA agentique, des flux autonomes, des modèles de fondation LLM et des solutions IA d\'entreprise.',
      d2_title: 'Responsible AI in a Global Context',
      d2_desc: 'Certificat professionnel de l\'Université des Nations Unies couvrant les politiques d\'IA, la gouvernance globale, l\'éthique numérique et la conformité réglementaire.',
      d3_title: 'Diplôme Concepteur de Systèmes d\'Information (CSI)',
      d3_desc: 'Titre certifié Niveau 6 (Bac+3) en Architecture Logicielle, Modélisation des Systèmes d\'Information, Bases de Données & Technologies Web Avancées.',
      d4_title: 'AEC en Développement Web (LEA.6C)',
      d4_desc: 'Programme collégial approfondi (405 heures / 13 crédits) couvrant l\'ingénierie web, les architectures client-serveur et l\'intégration logicielle.',

      // Services Header
      services_eyebrow: 'Expertises Clés & Solutions',
      services_title: 'Services Professionnels',
      services_desc: 'Compétences d\'ingénierie complètes en développement logiciel moderne, infrastructures d\'énergie propre et renouvelable, design digital et intelligence artificielle de pointe.',

      // Service 1: Full Stack
      s1_badge: 'Discipline Principale • Service 01',
      s1_title: 'Développement Full Stack',
      s1_desc: 'Architecture et déploiement d\'applications logicielles de bout en bout avec backends robustes, bases de données résilientes, interfaces web & mobiles réactives et flux accélérés par l\'IA à l\'échelle de la production.',
      cluster_frontend: 'Front-end',
      cluster_backend: 'Back-end',
      cluster_databases: 'Bases de Données',
      cluster_others: 'Autres (DevOps & Ingénierie)',
      cluster_ai_tools: 'Outils IA & Accélérateurs',
      term_preview_hint: 'Cliquer pour Développer le Dashboard Terminal',
      term_caption: 'Esprit hacker • Architecture de code propre',
      term_zoom: 'Aperçu Zoomable ↗',

      // Service 2: Solar Energy
      s2_badge: 'Infrastructures Énergie Propre • Service 02',
      s2_title: 'Installation et Maintenance de Panneaux Solaires',
      s2_desc: 'Systèmes photovoltaïques certifiés, montage structural résistant au sol et en toiture, raccordement d\'onduleurs haute performance et maintenance préventive continue.',
      solar_phase1_badge: 'Phase 1',
      solar_phase1_pill: 'Systèmes Photovoltaïques',
      solar_phase1_title: 'Installation de Panneaux Solaires',
      solar_phase1_text: 'Installation professionnelle de panneaux solaires photovoltaïques pour propriétés résidentielles et commerciales. Maximisez votre production d\'énergie avec nos systèmes conçus par des experts.',
      solar_phase2_badge: 'Phase 2',
      solar_phase2_pill: 'Support Cycle de Vie',
      solar_phase2_title: 'Maintenance & Réparation Solaire',
      solar_phase2_text: 'Services de maintenance complets pour maintenir votre système solaire à son efficacité maximale. Inspections régulières et réparations pour des performances durables.',
      solar_tag_array: 'Structure Onduleurs & PV',
      solar_tag_onsite: 'Installation Sur Site',
      solar_tag_inverter: 'Onduleur & Coffret Protection',

      // Service 3: Graphic Design
      s3_badge: 'Visuels Numériques & Branding • Service 03',
      s3_title: 'Design Graphique',
      s3_desc: 'Identités visuelles sur mesure, affiches publicitaires de produits, couvertures de publications numériques et supports de campagnes marketing conçus avec Photoshop, Illustrator et Canva.',
      created_with_canva: 'Créé avec Canva',
      created_with_photoshop: 'Créé avec Photoshop',
      created_with_illustrator: 'Créé avec Illustrator',
      card_aroma_title: 'Affiche Produit Café ARoma',
      card_carte_title: 'Design Carte de Visite Exécutive',
      card_venus_title: 'Affiche Gel Douche Venus',
      card_ysl_title: 'Visuel Publicitaire Parfum YSL MYSELF',
      card_ebook_title: 'Couverture E-Book Next Stop The Top',
      card_cours_title: 'Cours Particulier Social Media Design',
      btn_show_designs: 'Voir Tous les Designs Graphiques',
      designs_count_pill: '+40 Vitrine',
      graphic_modal_badge: 'Portfolio Arts Visuels & Branding',
      graphic_modal_title: 'Portfolio Design Graphique & Création Digitale',
      graphic_modal_desc: 'Explorez l\'ensemble des réalisations créatives, affiches publicitaires, identités de marques et publications conçues par Hichem Bendali.',
      graphic_modal_hint: 'Cliquez sur une carte pour agrandir en pleine résolution',
      btn_close_window: 'Fermer la Fenêtre',

      // Service 4: AI Engineering
      s4_badge: 'Systèmes Autonomes • Service 04',
      s4_enterprise: 'IA Entreprise',
      s4_title: 'Ingénierie en IA',
      s4_desc: 'Conception et déploiement d\'architectures d\'IA générative professionnelles, pipelines multi-agents autonomes, moteurs RAG locaux avec embeddings haute dimension et infrastructures de conteneurs hautement fiables.',
      ai_photo_badge: 'Systèmes IA Autonomes',
      ai_photo_hint: 'Cliquer pour Développer le Schéma',
      ai_photo_caption: 'Flux Agentiques • LLMs • Stack Moderne',
      ai_cluster1_title: 'IA Générative & Agents',
      ai_cluster1_count: '12 Technologies Clés',
      ai_cluster2_title: 'Frameworks & Automatisation',
      ai_cluster2_count: '8 Outils d\'Orchestration',
      ai_cluster3_title: 'Déploiement',
      ai_cluster3_count: 'Opérations de Production',

      // Projects Section
      projects_eyebrow: 'Portfolio d\'Ingénierie',
      projects_title: 'Mes Projets',
      projects_desc: 'Une sélection d\'applications web full-stack en direct, d\'architectures mobiles, de tableaux de bord administratifs et de plateformes numériques sur mesure.',
      projects_note: '<strong>Note du portfolio :</strong> Ces projets sont des implémentations front-end en direct pour démonstration. Cliquez sur <em>« Ouvrir le Projet »</em> pour tester chaque application interactive.',
      btn_open_project: 'Ouvrir le Projet',
      enlarge_preview: 'Agrandir',
      btn_show_projects: 'Afficher tous les Projets',
      projects_count_pill: '6+ Démos en direct',
      projects_modal_badge: 'Applications Déployées en Direct',
      projects_modal_title: 'Tous les Projets d\'Ingénierie & Web',
      projects_modal_desc: 'Explorez les démonstrations front-end, architectures mobiles, tableaux de bord de gestion et expériences de showrooms.',
      projects_modal_hint: 'Cliquez sur « Ouvrir le Projet » pour lancer l\'application dans un nouvel onglet.',

      // Location Section
      location_eyebrow: 'Géographie & Présence',
      location_title: 'Localisation & Disponibilité Mondiale',
      location_desc: 'Basé en Algérie avec une expérience académique internationale en France et au Canada, collaborant efficacement sur tous les fuseaux horaires.',
      location_badge: 'Prêt pour projets mondiaux en télétravail & hybride',
      location_city: 'Blida / Alger, Algérie',
      location_text: 'Idéalement situé en Afrique du Nord (fuseau GMT+1 / CET), garantissant un alignement direct en temps réel avec l\'Europe, le Moyen-Orient et l\'Amérique du Nord. Polyglotte en anglais, français et arabe, je collabore avec des entreprises et startups à l\'international.',
      loc_stat_hub: 'Pôle Principal',
      loc_stat_hub_val: 'Blida & Alger, Algérie',
      loc_stat_tz: 'Fuseau Horaire',
      loc_stat_tz_val: 'GMT+1 (CET / Alger)',
      loc_stat_phone: 'Téléphone Direct',
      loc_stat_mode: 'Mode de Travail',
      loc_stat_mode_val: '100% Télétravail / Prêt aux Déplacements',
      loc_hub_title: 'Pôle d\'Ingénierie International',
      loc_hub_subtitle: 'Liaisons académiques intercontinentales & connectivité mondiale',
      loc_zone_dz: '<strong>Algérie :</strong> Blida & Alger (Pôle Principal)',
      loc_zone_fr: '<strong>France :</strong> Limoges (3iL École d\'Ingénieurs)',
      loc_zone_ca: '<strong>Canada :</strong> Québec (CÉGEP Web & Mobile)',
      loc_zone_global: '<strong>International :</strong> Europe, Amériques, MENA',
      loc_badge_active: 'Pôle Actif',
      loc_badge_degree: 'Diplômé',
      loc_badge_available: 'Disponible',

      // Contact Section
      contact_eyebrow: 'Contactez-moi',
      contact_title: 'Échangeons & Collaborons',
      contact_desc: 'Vous avez un projet en vue, un poste d\'ingénieur à pourvoir ou souhaitez intégrer des solutions d\'IA ? Écrivez-moi directement.',
      contact_card_title: 'Contacter Hichem Bendali',
      contact_card_desc: 'Disponible pour contrats de développement logiciel, missions en ingénierie IA et postes d\'ingénieur à temps plein.',
      contact_direct_email: 'E-mail Direct',
      contact_direct_phone: 'Téléphone Direct',
      contact_copy: 'Copier',
      contact_copied: 'Copié !',
      form_label_name: 'Votre Nom',
      form_ph_name: 'ex. Jean Dupont',
      form_label_email: 'Adresse E-mail',
      form_ph_email: 'ex. contact@entreprise.com',
      form_label_subject: 'Objet',
      form_ph_subject: 'Demande de Projet / Opportunité Professionnelle',
      form_label_message: 'Votre Message',
      form_ph_message: 'Décrivez votre projet, vos délais ou vos exigences techniques...',
      form_btn_send: 'Envoyer le Message',

      // Footer
      footer_copy: '© 2026 Hichem Bendali • Développeur Full Stack | Ingénieur IA | Designer Digital • Blida, Algérie.',

      // Lightbox
      lightbox_prev: 'Préc',
      lightbox_next: 'Suiv',
      lightbox_exit: 'Quitter l\'Image',
      toast_copied: 'E-mail copié dans le presse-papier : ',
      toast_sent: 'Merci ! Préparation de votre messagerie...'
    },

    it: {
      lang_code: 'IT',
      lang_name: 'Italiano',
      dir: 'ltr',

      // Navigation
      nav_home: 'Home',
      nav_about: 'Chi sono',
      nav_services: 'Servizi',
      nav_projects: 'Progetti',
      nav_location: 'Posizione',
      nav_contact: 'Contatti',
      nav_cv: 'Scarica CV',
      mobile_lang_label: 'Lingua / Language / اللغة',

      // Hero
      hero_badge: 'Benvenuti nel mio Portfolio',
      hero_roles: 'Sviluppatore Full Stack <span class="sep">|</span> Ingegnere IA <span class="sep">|</span> Digital Designer',
      hero_sub: 'Progettazione di soluzioni di IA Generativa pronte per la produzione, sistemi RAG locali,<br>e applicazioni web &amp; mobile scalabili con design digitale creativo,<br>guidato da continua innovazione ed eccellenza tecnica.',
      hero_btn_projects: 'Esplora i Progetti',
      hero_btn_contact: 'Contattami',
      hero_scroll: 'Scorri',

      // About
      about_eyebrow: 'Profilo & Percorso Professionale',
      about_title: 'Chi è Hichem Bendali',
      about_desc: 'Ingegnere creativo che unisce sviluppo software, graphic design e competenze avanzate in IA. Poliglotta in inglese, francese e arabo.',
      parcours_title: 'Percorso Professionale & Accademico',
      parcours_hint: 'Scorri →',

      // Checkpoints
      cp1_title: 'Maturità Scientifica',
      cp1_place: 'Liceo El Moussalaha, Algeria',
      cp2_title: 'Diploma in Energia Solare',
      cp2_place: 'Istituto di Formazione IFEG, Algeria',
      cp3_title: 'AEC in Sviluppo Web & Mobile',
      cp3_place: 'CÉGEP, Québec, Canada',
      cp4_title: 'Laurea Triennale Web & Software',
      cp4_place: '3iL École d\'Ingénieur, Limoges, Francia',
      cp5_title: 'Ingegneria Informatica Professionale',
      cp5_place: 'H2iTM, Algeri, Algeria',
      cp6_title: 'Sviluppatore Full Stack',
      cp6_place: 'SONELGAZ (App Pagamenti MERN)',
      cp7_title: 'Diploma in Graphic Design',
      cp7_place: 'Accademia ATF Media, Algeri',
      cp8_title: 'Ingegneria IA',
      cp8_place: 'IA Generativa, LangGraph, MCP, RAG',

      // Bio
      bio_h3: 'Sviluppatore Full Stack • Ingegnere IA • Digital Designer',
      bio_p1: 'Sono Hichem Bendali, ingegnere software versatile e digital designer residente in Algeria. Con una comprovata esperienza nella creazione di soluzioni scalabili e innovative, sono specializzato in Intelligenza Artificiale Generativa, sistemi multi-agente e flussi di automazione.',
      bio_p2: 'Il mio lavoro comprende la progettazione e il rilascio di soluzioni pronte per la produzione, inclusi sistemi RAG locali, applicazioni web responsive e app mobili multipiattaforma. Con solide competenze in prompt engineering, integrazione LLM e oltre <strong>+40 Certificazioni Professionali</strong>, parlo fluentemente inglese, francese e arabo e sono sempre desideroso di contribuire a progetti innovativi nel campo della tecnologia e delle energie rinnovabili.',
      highlight_certs: 'Certificazioni Professionali',
      highlight_langs: 'Lingue (Inglese, Francese, Arabo)',
      about_photo_title: 'Hichem Bendali in azione',
      about_photo_sub: 'Ingegneria di Sistemi Intelligenti • Codice & Design',

      // Diplomas
      diplomas_eyebrow: 'Credenziali Accademiche & Professionali',
      diplomas_title: 'Diplomi & Certificati',
      diplomas_desc: 'Titoli accademici ufficiali e specializzazioni internazionali in IA Agentica, Sistemi Informativi e Ingegneria Web.',
      click_to_enlarge: 'Clicca per Ingrandire',
      view_cert: 'Visualizza Certificato Completo',
      view_diploma: 'Visualizza Diploma Completo',
      view_attestation: 'Visualizza Attestato Completo',
      btn_show_diplomas: 'Mostra Tutti i Diplomi & Certificati (+40)',
      btn_hide_diplomas: 'Nascondi Diplomi Aggiuntivi',
      all_diplomas_title: 'Catalogo Completo Diplomi & Certificazioni',
      all_diplomas_desc: 'Scorri questa scheda per esplorare tutti i titoli accademici verificati e i badge professionali certificati.',
      all_diplomas_badge: '+40 Certificazioni Verificate',

      // Diploma Cards Content
      d1_title: 'Agentic AI Certified Foundations Associate',
      d1_desc: 'Certificato di Riconoscimento che dimostra la padronanza di architetture IA agentiche, flussi autonomi, modelli LLM fondamentali e soluzioni enterprise.',
      d2_title: 'Responsible AI in a Global Context',
      d2_desc: 'Certificato professionale rilasciato dalla United Nations University su politiche IA, governance globale, etica e conformità normativa.',
      d3_title: 'Information Systems Designer Diploma (CSI)',
      d3_desc: 'Qualifica certificata di Livello 6 (Laurea Triennale) in Architettura Software, Modellazione dei Sistemi Informativi, Database e Tecnologie Web Avanzate.',
      d4_title: 'AEC in Sviluppo Web (LEA.6C)',
      d4_desc: 'Programma di studi collegiale approfondito (405 ore / 13 crediti) su ingegneria web, architetture client-server e integrazione software.',

      // Services Header
      services_eyebrow: 'Competenze Principali & Soluzioni',
      services_title: 'Servizi Professionali',
      services_desc: 'Capacità ingegneristiche complete nello sviluppo software moderno, infrastrutture per energie rinnovabili pulite, sistemi di design digitale e intelligenza artificiale avanzata.',

      // Service 1: Full Stack
      s1_badge: 'Disciplina Principale • Servizio 01',
      s1_title: 'Sviluppo Full Stack',
      s1_desc: 'Progettazione e rilascio di applicazioni software complete con backend robusti, database affidabili, interfacce web e mobili reattive e flussi ottimizzati dall\'IA su scala aziendale.',
      cluster_frontend: 'Front-end',
      cluster_backend: 'Back-end',
      cluster_databases: 'Database',
      cluster_others: 'Altri (DevOps & Ingegneria)',
      cluster_ai_tools: 'Strumenti IA & Acceleratori',
      term_preview_hint: 'Clicca per Ingrandire il Dashboard del Terminale',
      term_caption: 'Mentalità hacker • Architettura di codice pulita',
      term_zoom: 'Anteprima Zoomabile ↗',

      // Service 2: Solar Energy
      s2_badge: 'Infrastrutture per Energia Pulita • Servizio 02',
      s2_title: 'Installazione e Manutenzione di Pannelli Solari',
      s2_desc: 'Sistemi fotovoltaici certificati, montaggio strutturale resistente a terra e a tetto, cablaggio inverter ad alte prestazioni e manutenzione preventiva continua.',
      solar_phase1_badge: 'Fase 1',
      solar_phase1_pill: 'Sistemi Fotovoltaici',
      solar_phase1_title: 'Installazione Pannelli Solari',
      solar_phase1_text: 'Installazione professionale di pannelli solari fotovoltaici per proprietà residenziali e commerciali. Massimizza la produzione di energia con i nostri sistemi progettati da esperti.',
      solar_phase2_badge: 'Fase 2',
      solar_phase2_pill: 'Supporto Ciclo di Vita',
      solar_phase2_title: 'Manutenzione & Riparazione Solare',
      solar_phase2_text: 'Servizi di manutenzione completi per mantenere l\'impianto solare alla massima efficienza. Ispezioni regolari e riparazioni per prestazioni durature.',
      solar_tag_array: 'Struttura Fotovoltaica',
      solar_tag_onsite: 'Installazione sul Campo',
      solar_tag_inverter: 'Inverter & Quadro Protezione',

      // Service 3: Graphic Design
      s3_badge: 'Visual Design & Branding • Servizio 03',
      s3_title: 'Graphic Design',
      s3_desc: 'Brand identity visive su misura, poster pubblicitari per prodotti, copertine editoriali e materiali promozionali realizzati con Adobe Photoshop, Illustrator e Canva.',
      created_with_canva: 'Creato con Canva',
      created_with_photoshop: 'Creato con Photoshop',
      created_with_illustrator: 'Creato con Illustrator',
      card_aroma_title: 'Poster Prodotto Caffè ARoma',
      card_carte_title: 'Design Biglietto da Visita Executive',
      card_venus_title: 'Poster Gel Doccia Venus',
      card_ysl_title: 'Post Pubblicitario Profumo YSL MYSELF',
      card_ebook_title: 'Copertina E-Book Next Stop The Top',
      card_cours_title: 'Lezioni Private Social Media Design',
      btn_show_designs: 'Mostra Tutti i Graphic Design',
      designs_count_pill: '+40 Showcase',
      graphic_modal_badge: 'Portfolio Arti Visive & Branding',
      graphic_modal_title: 'Portfolio Graphic Design & Creatività Digitale',
      graphic_modal_desc: 'Esplora tutti i progetti creativi, manifesti pubblicitari, identità di marca e pubblicazioni firmate da Hichem Bendali.',
      graphic_modal_hint: 'Clicca su una card per visualizzare a piena risoluzione',
      btn_close_window: 'Chiudi Finestra',

      // Service 4: AI Engineering
      s4_badge: 'Sistemi Autonomi • Servizio 04',
      s4_enterprise: 'Enterprise AI',
      s4_title: 'Ingegneria IA',
      s4_desc: 'Progettazione e implementazione di architetture di intelligenza artificiale generativa per aziende, pipeline multi-agente autonome, motori RAG locali con vettorizzazioni ad alta dimensionalità e infrastrutture containerizzate.',
      ai_photo_badge: 'Sistemi IA Autonomi',
      ai_photo_hint: 'Clicca per Espandere lo Schema',
      ai_photo_caption: 'Flussi Agentici • LLMs • Stack Moderno',
      ai_cluster1_title: 'IA Generativa & Agenti',
      ai_cluster1_count: '12 Tecnologie Principali',
      ai_cluster2_title: 'Framework & Automazione',
      ai_cluster2_count: '8 Strumenti di Orchestrazione',
      ai_cluster3_title: 'Deployment',
      ai_cluster3_count: 'Operazioni di Produzione',

      // Projects Section
      projects_eyebrow: 'Portfolio Ingegneristico',
      projects_title: 'I Miei Progetti',
      projects_desc: 'Una selezione di applicazioni web full-stack live, architetture mobili, dashboard gestionali e piattaforme digitali su misura.',
      projects_note: '<strong>Nota del portfolio:</strong> Questi progetti sono implementazioni front-end live create a scopo dimostrativo. Clicca su <em>"Apri Progetto"</em> per testare ciascuna applicazione interattiva.',
      btn_open_project: 'Apri Progetto',
      enlarge_preview: 'Ingrandisci',
      btn_show_projects: 'Mostra tutti i Progetti',
      projects_count_pill: '6+ Demo Live',
      projects_modal_badge: 'Applicazioni Rilasciate Live',
      projects_modal_title: 'Tutti i Progetti Web & Ingegneristici',
      projects_modal_desc: 'Esplora demo front-end live, architetture mobile, dashboard amministrative e showroom interattivi.',
      projects_modal_hint: 'Clicca su "Apri Progetto" su qualsiasi card per aprire l\'applicazione in una nuova scheda.',

      // Location Section
      location_eyebrow: 'Geografia & Copertura',
      location_title: 'Posizione & Disponibilità Globale',
      location_desc: 'Con base in Algeria ed esperienza accademica internazionale in Francia e Canada, collaboro perfettamente attraverso diversi fusi orari in tutto il mondo.',
      location_badge: 'Disponibile per progetti globali da remoto & ibridi',
      location_city: 'Blida / Algeri, Algeria',
      location_text: 'Posizionato strategicamente in Nord Africa (fuso GMT+1 / CET), garantisco una sovrapposizione perfetta in tempo reale con Europa, Medio Oriente e Nord America. Poliglotta in inglese, francese e arabo, collaboro con aziende e startup a livello internazionale.',
      loc_stat_hub: 'Hub Principale',
      loc_stat_hub_val: 'Blida & Algeri, Algeria',
      loc_stat_tz: 'Fuso Orario',
      loc_stat_tz_val: 'GMT+1 (CET / Algeri)',
      loc_stat_phone: 'Telefono',
      loc_stat_mode: 'Modalità di Lavoro',
      loc_stat_mode_val: '100% Da remoto / Disponibile a viaggiare',
      loc_hub_title: 'Hub Ingegneristico Internazionale',
      loc_hub_subtitle: 'Legami accademici intercontinentali & connettività globale',
      loc_zone_dz: '<strong>Algeria:</strong> Blida & Algeri (Hub Principale)',
      loc_zone_fr: '<strong>Francia:</strong> Limoges (3iL École d\'Ingénieur)',
      loc_zone_ca: '<strong>Canada:</strong> Québec (CÉGEP Web & Mobile)',
      loc_zone_global: '<strong>Remoto Globale:</strong> Europa, Americhe, MENA',
      loc_badge_active: 'Hub Attivo',
      loc_badge_degree: 'Laurea',
      loc_badge_available: 'Disponibile',

      // Contact Section
      contact_eyebrow: 'Mettiti in Contatto',
      contact_title: 'Connettiamoci & Collaboriamo',
      contact_desc: 'Hai un progetto in mente, un ruolo ingegneristico da ricoprire o desideri discutere di integrazioni IA? Scrivimi direttamente.',
      contact_card_title: 'Contatta Hichem Bendali',
      contact_card_desc: 'Disponibile per contratti di sviluppo software, incarichi di ingegneria IA e posizioni ingegneristiche a tempo pieno.',
      contact_direct_email: 'Email Diretta',
      contact_direct_phone: 'Telefono Diretto',
      contact_copy: 'Copia',
      contact_copied: 'Copiato!',
      form_label_name: 'Il Tuo Nome',
      form_ph_name: 'es. Mario Rossi',
      form_label_email: 'Indirizzo Email',
      form_ph_email: 'es. contatto@azienda.it',
      form_label_subject: 'Oggetto',
      form_ph_subject: 'Richiesta Progetto / Opportunità Lavorativa',
      form_label_message: 'Il Tuo Messaggio',
      form_ph_message: 'Descrivi il tuo progetto, tempistiche o requisiti tecnici...',
      form_btn_send: 'Invia Messaggio',

      // Footer
      footer_copy: '© 2026 Hichem Bendali • Sviluppatore Full Stack | Ingegnere IA | Digital Designer • Blida, Algeria.',

      // Lightbox
      lightbox_prev: 'Prec',
      lightbox_next: 'Succ',
      lightbox_exit: 'Chiudi Immagine',
      toast_copied: 'Email copiata negli appunti: ',
      toast_sent: 'Grazie! Apertura del client email...'
    },

    ar: {
      lang_code: 'AR',
      lang_name: 'العربية',
      dir: 'rtl',

      // Navigation
      nav_home: 'الرئيسية',
      nav_about: 'عني',
      nav_services: 'الخدمات',
      nav_projects: 'المشاريع',
      nav_location: 'الموقع',
      nav_contact: 'اتصل بي',
      nav_cv: 'تحميل السيرة الذاتية',
      mobile_lang_label: 'اللغة / Language / Langue',

      // Hero
      hero_badge: 'مرحباً بكم في معرض أعمالي',
      hero_roles: 'مطور فول ستاك <span class="sep">|</span> مهندس ذكاء اصطناعي <span class="sep">|</span> مصمم رقمي',
      hero_sub: 'هندسة وبناء حلول الذكاء الاصطناعي التوليدي، أنظمة RAG المحلية،<br>وتطبيقات الويب والموبايل المتكاملة بتصميم رقمي إبداعي،<br>مدفوعاً بالابتكار والتطوير المستمر والتميز التقني.',
      hero_btn_projects: 'استكشف المشاريع',
      hero_btn_contact: 'تواصل معي',
      hero_scroll: 'تمرير',

      // About
      about_eyebrow: 'الملف المهني والمسار',
      about_title: 'نبذة عن هشام بن دالي',
      about_desc: 'مهندس مبتكر يجمع بين تطوير البرمجيات والتصميم الجرافيكي والذكاء الاصطناعي المتقدم. متحدث بالإنجليزية والفرنسية والعربية.',
      parcours_title: 'المسار المهني والأكاديمي',
      parcours_hint: 'مرر ←',

      // Checkpoints
      cp1_title: 'بكالوريا علمية',
      cp1_place: 'ثانوية المصالحة، الجزائر',
      cp2_title: 'دبلوم في الطاقة الشمسية',
      cp2_place: 'معهد التكوين IFEG، الجزائر',
      cp3_title: 'شهادة جامعية في تطوير الويب والموبايل',
      cp3_place: 'كلية CÉGEP، كيبك، كندا',
      cp4_title: 'ليسانس مهندس مصمم برمجيات (CSI)',
      cp4_place: 'مدرسة المهندسين 3iL، ليموج، فرنسا',
      cp5_title: 'هندسة مهنية في علوم الحاسوب',
      cp5_place: 'معهد H2iTM، الجزائر العاصمة',
      cp6_title: 'مطور فول ستاك',
      cp6_place: 'سونلغاز (تطبيق الدفع بتقنية MERN)',
      cp7_title: 'دبلوم في التصميم الجرافيكي',
      cp7_place: 'أكاديمية ATF Media، الجزائر',
      cp8_title: 'هندسة الذكاء الاصطناعي',
      cp8_place: 'الذكاء الاصطناعي التوليدي، LangGraph، MCP، RAG',

      // Bio
      bio_h3: 'مطور فول ستاك • مهندس ذكاء اصطناعي • مصمم رقمي',
      bio_p1: 'أنا هشام بن دالي، مهندس برمجيات ومصمم رقمي مقيم في الجزائر. أتمتع بخبرة مثبتة في بناء وتطوير حلول تقنية قابلة للتوسع، ومتخصص في الذكاء الاصطناعي التوليدي، الأنظمة الوكيلة (Agentic AI) ومسارات الأتمتة المتقدمة.',
      bio_p2: 'يشمل عملي هندسة ونشر حلول متكاملة جاهزة للإنتاج، بما في ذلك أنظمة RAG المحلية، تطبيقات الويب التفاعلية، وتطبيقات الهواتف الذكية. بامتلاكي قاعدة متينة في هندسة الأوامر (Prompt Engineering)، دمج نماذج اللغات الكبيرة وأكثر من <strong>+40 شهادة مهنية معتمدة</strong>، وأتحدث بطلاقة الإنجليزية والفرنسية والعربية، وأسعى دوماً للمساهمة في مشاريع نوعية رائدة في التكنولوجيا والطاقة المتجددة.',
      highlight_certs: 'شهادات مهنية معتمدة',
      highlight_langs: 'لغات (الإنجليزية، الفرنسية، العربية)',
      about_photo_title: 'هشام بن دالي أثناء التطوير',
      about_photo_sub: 'هندسة الأنظمة الذكية • برمجة وتصميم',

      // Diplomas
      diplomas_eyebrow: 'المؤهلات الأكاديمية والمهنية',
      diplomas_title: 'الشهادات والدبلومات',
      diplomas_desc: 'شهادات أكاديمية وهندسية رسمية وتخصصات دولية معتمدة في الذكاء الاصطناعي، نظم المعلومات وهندسة الويب.',
      click_to_enlarge: 'اضغط للتكبير',
      view_cert: 'عرض الشهادة كاملة',
      view_diploma: 'عرض الدبلوم كاملاً',
      view_attestation: 'عرض الإفادة كاملة',
      btn_show_diplomas: 'عرض جميع الشهادات والدبلومات (+40)',
      btn_hide_diplomas: 'إخفاء الشهادات الإضافية',
      all_diplomas_title: 'الدليل الشامل للشهادات والمؤهلات الأكاديمية',
      all_diplomas_desc: 'مرر لأسفل داخل هذه البطاقة لاستكشاف كافة الشهادات الجامعية والدبلومات المعتمدة والاعتمادات المهنية الدولية.',
      all_diplomas_badge: '+40 شهادة معتمدة وموثقة',

      // Diploma Cards Content
      d1_title: 'Agentic AI Certified Foundations Associate',
      d1_desc: 'شهادة تقدير واعتماد من Oracle University تثبت إتقان بنى الذكاء الاصطناعي الوكيلة ومسارات العمل المستقلة ونماذج التأسيس للمؤسسات.',
      d2_title: 'Responsible AI in a Global Context',
      d2_desc: 'شهادة مهنية صادرة عن جامعة الأمم المتحدة ومايكروسوفت ولينكد إن تغطي سياسات الذكاء الاصطناعي والحوكمة العالمية والأخلاقيات الرقمية.',
      d3_title: 'دبلوم مصمم نظم المعلومات (CSI - Bac+3)',
      d3_desc: 'مؤهل معتمد من المستوى السادس (بكالوريوس / ليسانس) في هندسة البرمجيات ونمذجة نظم المعلومات وقواعد البيانات وتقنيات الويب المتقدمة.',
      d4_title: 'شهادة دراسات جامعية في تطوير الويب (LEA.6C)',
      d4_desc: 'برنامج كلية كندي متقدم (405 ساعات / 13 وحدة دراسية) في هندسة الويب وبرمجة الخوادم وتكامل البرمجيات من CÉGEP de Saint-Félicien.',

      // Services Header
      services_eyebrow: 'الخبرات والحلول الأساسية',
      services_title: 'الخدمات المهنية',
      services_desc: 'قدرات هندسية شاملة عبر تطوير البرمجيات الحديثة، البنية التحتية للطاقة النظيفة المتجددة، أنظمة التصميم الرقمي، والذكاء الاصطناعي المتقدم.',

      // Service 1: Full Stack
      s1_badge: 'التخصص الأساسي • الخدمة 01',
      s1_title: 'تطوير فول ستاك المتكامل',
      s1_desc: 'هندسة وبناء وتطوير تطبيقات برمجية متكاملة من البداية حتى الإنتاج مع خوادم خلفية متينة، قواعد بيانات عالية الأداء، واجهات ويب وموبايل تفاعلية ومسارات مدعومة بالذكاء الاصطناعي.',
      cluster_frontend: 'الواجهة الأمامية (Front-end)',
      cluster_backend: 'الواجهة الخلفية (Back-end)',
      cluster_databases: 'قواعد البيانات (Databases)',
      cluster_others: 'أخرى (DevOps والهندسة)',
      cluster_ai_tools: 'أدوات ومسرعات الذكاء الاصطناعي',
      term_preview_hint: 'اضغط لعرض لوحة الطرفية بالحجم الكامل',
      term_caption: 'عقلية الابتكار الهندسي • بنية كود برمجية نقية',
      term_zoom: 'معاينة قابلة للتكبير ↗',

      // Service 2: Solar Energy
      s2_badge: 'البنية التحتية للطاقة النظيفة • الخدمة 02',
      s2_title: 'تركيب وصيانة الألواح الشمسية الكهروضوئية',
      s2_desc: 'أنظمة طاقة شمسية كهروضوئية معتمدة، هياكل تثبيت أرضية وعلى الأسطح فائقة المتانة، تسليك وتوصيل العواكس الكهربائية عالية الكفاءة وصيانة دورية وقائية مستمرة.',
      solar_phase1_badge: 'المرحلة 1',
      solar_phase1_pill: 'أنظمة كهروضوئية',
      solar_phase1_title: 'تركيب الألواح الشمسية',
      solar_phase1_text: 'تركيب احترافي للألواح الشمسية الكهروضوئية للمباني السكنية والتجارية. ارفع إنتاجك من الطاقة إلى أقصى حد مع أنظمتنا المصممة بدقة هندسية عالية.',
      solar_phase2_badge: 'المرحلة 2',
      solar_phase2_pill: 'دعم دورة الحياة',
      solar_phase2_title: 'صيانة وإصلاح الأنظمة الشمسية',
      solar_phase2_text: 'خدمات صيانة شاملة للحفاظ على تشغيل نظامك الشمسي بأعلى كفاءة تشغيلية. فحوصات دورية وإصلاحات سريعة لضمان أداء مستدام طويل الأمد.',
      solar_tag_array: 'هيكل المصفوفة الشمسية',
      solar_tag_onsite: 'التركيب الميداني في الموقع',
      solar_tag_inverter: 'العاكس ولوحة الحماية الكهربائية',

      // Service 3: Graphic Design
      s3_badge: 'المرئيات الرقمية والعلامات التجارية • الخدمة 03',
      s3_title: 'التصميم الجرافيكي',
      s3_desc: 'هويات بصرية مخصصة، بوسترات إعلانية للمنتجات، أغلفة منشورات وكتب رقمية، وتصاميم تسويقية مبتكرة مصممة باستخدام Adobe Photoshop وIllustrator وCanva.',
      created_with_canva: 'تم الإنشاء بواسطة Canva',
      created_with_photoshop: 'تم الإنشاء بواسطة Photoshop',
      created_with_illustrator: 'تم الإنشاء بواسطة Illustrator',
      card_aroma_title: 'بوستر إعلاني لقهوة أروما (ARoma Coffee)',
      card_carte_title: 'تصميم بطاقة عمل احترافية (Business Card)',
      card_venus_title: 'بوستر إعلاني لجل الاستحمام فينوس (Venus)',
      card_ysl_title: 'منشور إعلاني لعطر إيف سان لوران (YSL MYSELF)',
      card_ebook_title: 'غلاف كتاب رقمي القمة هي المحطة القادمة',
      card_cours_title: 'تصميم إعلانات دورات سوشيال ميديا (دروس خصوصية)',
      btn_show_designs: 'عرض جميع التصاميم الجرافيكية',
      designs_count_pill: '+40 عمل إبداعي',
      graphic_modal_badge: 'معرض الفنون البصرية والهويات التجارية',
      graphic_modal_title: 'معرض التصميم الجرافيكي والإبداع الرقمي',
      graphic_modal_desc: 'استكشف كافة المشاريع الإبداعية، والبوسترات الإعلانية، والهويات التجارية، والمنشورات المصممة بواسطة هشام بن دالي.',
      graphic_modal_hint: 'اضغط على أي بطاقة لعرض العمل بالدقة الكاملة',
      btn_close_window: 'إغلاق النافذة',

      // Service 4: AI Engineering
      s4_badge: 'الأنظمة الذاتية والوكيلة • الخدمة 04',
      s4_enterprise: 'ذكاء اصطناعي للمؤسسات',
      s4_title: 'هندسة الذكاء الاصطناعي',
      s4_desc: 'تصميم ونشر بنى تحتية للذكاء الاصطناعي التوليدي للشركات، مسارات الوكلاء المستقلين (Multi-Agent)، محركات RAG المحلية مع تضمينات موجهة عالية الأبعاد، وبنية تحتية سحابية حاوية موثوقة.',
      ai_photo_badge: 'أنظمة ذكاء اصطناعي مستقلة',
      ai_photo_hint: 'اضغط لتكبير المخطط الهندسي',
      ai_photo_caption: 'مسارات وكيلة • نماذج لغوية • بيئة عمل حديثة',
      ai_cluster1_title: 'الذكاء الاصطناعي التوليدي والوكلاء',
      ai_cluster1_count: '12 تقنية جوهرية',
      ai_cluster2_title: 'أطر العمل والأتمتة',
      ai_cluster2_count: '8 أدوات إدارة وتنسيق',
      ai_cluster3_title: 'النشر والتشغيل (Deployment)',
      ai_cluster3_count: 'عمليات الإنتاج السحابية',

      // Projects Section
      projects_eyebrow: 'معرض المشاريع الهندسية',
      projects_title: 'مشاريعي',
      projects_desc: 'عرض لتطبيقات الويب الشاملة، تطبيقات الموبايل، لوحات التحكم الإدارية، ومنصات العرض الرقمية المباشرة.',
      projects_note: '<strong>تنويه المعرض:</strong> هذه المشاريع عبارة عن واجهات أمامية مباشرة مطورة للمعاينة والتجربة. اضغط على <em>«فتح المشروع»</em> لاختبار كل تطبيق تفاعلي بشكل مباشر.',
      btn_open_project: 'فتح المشروع',
      enlarge_preview: 'تكبير',
      btn_show_projects: 'عرض جميع المشاريع',
      projects_count_pill: '6+ عروض حية مباشرة',
      projects_modal_badge: 'تطبيقات منشورة مباشرة',
      projects_modal_title: 'كافة المشاريع الهندسية والويب',
      projects_modal_desc: 'استكشف العروض الحية للواجهات الأمامية، وتطبيقات الهواتف الذكية، ولوحات التحكم الإدارية المتقدمة.',
      projects_modal_hint: 'اضغط على «فتح المشروع» في أي بطاقة لفتح التطبيق المباشر في نافذة جديدة.',

      // Location Section
      location_eyebrow: 'النطاق الجغرافي والانتشار',
      location_title: 'الموقع والجاهزية العالمية',
      location_desc: 'مقيم في الجزائر مع خبرة أكاديمية دولية في فرنسا وكندا، وأتعاون بسلاسة مع فرق العمل عبر مختلف المناطق الزمنية حول العالم.',
      location_badge: 'جاهز للمشاريع العالمية عن بُعد وبنمط هجين',
      location_city: 'البليدة / الجزائر العاصمة',
      location_text: 'بموقع استراتيجي في شمال إفريقيا (منطقة توقيت GMT+1 / CET)، مع تداخل زمني مثالي وسهل مع أوروبا والشرق الأوسط وأمريكا الشمالية. متحدث بطلاقة بالإنجليزية والفرنسية والعربية، وأتعاون مع الشركات والشركات الناشئة دولياً.',
      loc_stat_hub: 'المقر الرئيسي',
      loc_stat_hub_val: 'البليدة والجزائر العاصمة',
      loc_stat_tz: 'المنطقة الزمنية',
      loc_stat_tz_val: 'GMT+1 (توقيت وسط أوروبا / الجزائر)',
      loc_stat_phone: 'هاتف الاتصال',
      loc_stat_mode: 'طبيعة العمل',
      loc_stat_mode_val: '100% عن بُعد / جاهز للتنقل',
      loc_hub_title: 'مركز هندسي دولي',
      loc_hub_subtitle: 'روابط أكاديمية عبر القارات وجاهزية للاتصال الدولي',
      loc_zone_dz: '<strong>الجزائر:</strong> البليدة والجزائر العاصمة (المقر الرئيسي)',
      loc_zone_fr: '<strong>فرنسا:</strong> ليموج (مدرسة المهندسين 3iL)',
      loc_zone_ca: '<strong>كندا:</strong> كيبك (كلية CÉGEP ويب وموبايل)',
      loc_zone_global: '<strong>عن بُعد دولياً:</strong> أوروبا، الأمريكتين، الشرق الأوسط',
      loc_badge_active: 'مركز نشط',
      loc_badge_degree: 'شهادة جامعية',
      loc_badge_available: 'متاح للعمل',

      // Contact Section
      contact_eyebrow: 'ابقَ على تواصل',
      contact_title: 'لنتواصل ونتعاون معاً',
      contact_desc: 'هل لديك مشروع في بالك، أو فرصة عمل هندسية، أو ترغب في مناقشة دمج الذكاء الاصطناعي؟ تواصل معي مباشرة.',
      contact_card_title: 'تواصل مع هشام بن دالي',
      contact_card_desc: 'متاح لعقود تطوير البرمجيات، مهام هندسة الذكاء الاصطناعي، والوظائف الهندسية بدوام كامل.',
      contact_direct_email: 'البريد الإلكتروني المباشر',
      contact_direct_phone: 'الهاتف المباشر',
      contact_copy: 'نسخ',
      contact_copied: 'تم النسخ!',
      form_label_name: 'اسمك الكريم',
      form_ph_name: 'مثال: محمد أحمد',
      form_label_email: 'البريد الإلكتروني',
      form_ph_email: 'مثال: contact@company.com',
      form_label_subject: 'الموضوع',
      form_ph_subject: 'استفسار عن مشروع / فرصة عمل',
      form_label_message: 'رسالتك',
      form_ph_message: 'أخبرني عن مشروعك، الجدول الزمني، أو المتطلبات التقنية...',
      form_btn_send: 'إرسال الرسالة',

      // Footer
      footer_copy: '© 2026 هشام بن دالي • مطور فول ستاك | مهندس ذكاء اصطناعي | مصمم رقمي • البليدة، الجزائر.',

      // Lightbox
      lightbox_prev: 'السابق',
      lightbox_next: 'التالي',
      lightbox_exit: 'إغلاق الصورة',
      toast_copied: 'تم نسخ البريد الإلكتروني إلى الحافظة: ',
      toast_sent: 'شكراً لك! جاري تحضير برنامج البريد...'
    }
  };

  // Keep track of current language
  var currentLanguage = 'en';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLanguage = lang;

    var dict = translations[lang];
    var docEl = document.documentElement;

    // 1. Direction and HTML attributes
    docEl.lang = lang;
    docEl.dir = dict.dir || 'ltr';

    if (dict.dir === 'rtl') {
      docEl.classList.add('rtl-mode');
      document.body.classList.add('rtl-mode');
    } else {
      docEl.classList.remove('rtl-mode');
      document.body.classList.remove('rtl-mode');
    }

    // 2. Update Navbar Language Dropdown Trigger Label
    var labelEl = document.getElementById('currentLangLabel');
    if (labelEl) {
      labelEl.textContent = dict.lang_name;
    }
    var shortLabelEl = document.getElementById('currentLangCodeShort');
    if (shortLabelEl) {
      shortLabelEl.textContent = dict.lang_code;
    }
    var shortSpans = document.querySelectorAll('.current-lang-code-short');
    shortSpans.forEach(function (s) {
      s.textContent = dict.lang_code;
    });

    // 3. Update Dropdown Menu and Mobile Active states
    var options = document.querySelectorAll('.lang-option');
    options.forEach(function (opt) {
      var optLang = opt.getAttribute('data-lang');
      if (optLang === lang) {
        opt.classList.add('active');
        opt.setAttribute('aria-selected', 'true');
      } else {
        opt.classList.remove('active');
        opt.setAttribute('aria-selected', 'false');
      }
    });

    var mobileChips = document.querySelectorAll('.mobile-lang-chip');
    mobileChips.forEach(function (chip) {
      var chipLang = chip.getAttribute('data-lang');
      if (chipLang === lang) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    // 4. Update elements annotated with data-i18n
    var i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // 5. Update elements annotated with data-i18n-html
    var i18nHtmlElements = document.querySelectorAll('[data-i18n-html]');
    i18nHtmlElements.forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 6. Direct Targeted Updates for sections:
    
    // Hero Section
    var heroBadge = document.querySelector('.hero-photo-badge span:last-child');
    if (heroBadge) heroBadge.textContent = dict.hero_badge;

    var heroRoles = document.querySelector('.hero-title-roles');
    if (heroRoles) heroRoles.innerHTML = dict.hero_roles;

    var heroSub = document.querySelector('.sub');
    if (heroSub) heroSub.innerHTML = dict.hero_sub;

    var btnProjects = document.querySelector('.ctas .btn-primary');
    if (btnProjects) {
      var svgP = btnProjects.querySelector('svg');
      btnProjects.textContent = dict.hero_btn_projects + ' ';
      if (svgP) btnProjects.appendChild(svgP);
    }

    var btnContact = document.querySelector('.ctas .btn-ghost');
    if (btnContact) {
      var svgC = btnContact.querySelector('svg');
      btnContact.textContent = dict.hero_btn_contact + ' ';
      if (svgC) btnContact.appendChild(svgC);
    }

    var scrollIndicator = document.querySelector('.scroll-indicator span');
    if (scrollIndicator) scrollIndicator.textContent = dict.hero_scroll;

    // About Section
    var aboutEyebrow = document.querySelector('#about .section-eyebrow');
    if (aboutEyebrow) aboutEyebrow.textContent = dict.about_eyebrow;

    var aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle) aboutTitle.textContent = dict.about_title;

    var aboutDesc = document.querySelector('#about .section-desc');
    if (aboutDesc) aboutDesc.textContent = dict.about_desc;

    var parcoursTitle = document.querySelector('.parcours-title');
    if (parcoursTitle) {
      var pSvg = parcoursTitle.querySelector('svg');
      parcoursTitle.textContent = ' ' + dict.parcours_title;
      if (pSvg) parcoursTitle.prepend(pSvg);
    }

    var parcoursHint = document.querySelector('.parcours-hint');
    if (parcoursHint) parcoursHint.textContent = dict.parcours_hint;

    // Parcours 8 checkpoints
    var checkpoints = document.querySelectorAll('.checkpoint-item');
    if (checkpoints.length >= 8) {
      var cpData = [
        { t: dict.cp1_title, p: dict.cp1_place },
        { t: dict.cp2_title, p: dict.cp2_place },
        { t: dict.cp3_title, p: dict.cp3_place },
        { t: dict.cp4_title, p: dict.cp4_place },
        { t: dict.cp5_title, p: dict.cp5_place },
        { t: dict.cp6_title, p: dict.cp6_place },
        { t: dict.cp7_title, p: dict.cp7_place },
        { t: dict.cp8_title, p: dict.cp8_place }
      ];
      checkpoints.forEach(function (cp, i) {
        if (cpData[i]) {
          var tEl = cp.querySelector('.checkpoint-title');
          var pEl = cp.querySelector('.checkpoint-place');
          if (tEl) tEl.textContent = cpData[i].t;
          if (pEl) pEl.textContent = cpData[i].p;
        }
      });
    }

    // About Bio & Highlights
    var bioH3 = document.querySelector('.about-bio-left h3');
    if (bioH3) bioH3.textContent = dict.bio_h3;

    var bioParas = document.querySelectorAll('.about-bio-left p');
    if (bioParas.length >= 2) {
      bioParas[0].textContent = dict.bio_p1;
      bioParas[1].innerHTML = dict.bio_p2;
    }

    var highlightLabels = document.querySelectorAll('.highlight-label');
    if (highlightLabels.length >= 2) {
      highlightLabels[0].textContent = dict.highlight_certs;
      highlightLabels[1].textContent = dict.highlight_langs;
    }

    var aboutPhotoTitle = document.querySelector('.about-photo-title');
    if (aboutPhotoTitle) aboutPhotoTitle.textContent = dict.about_photo_title;

    var aboutPhotoSub = document.querySelector('.about-photo-subtitle');
    if (aboutPhotoSub) aboutPhotoSub.textContent = dict.about_photo_sub;

    // Diplomas Section
    var dipEyebrow = document.querySelector('.diplomas-eyebrow');
    if (dipEyebrow) dipEyebrow.textContent = dict.diplomas_eyebrow;

    var dipTitle = document.querySelector('.diplomas-title');
    if (dipTitle) dipTitle.textContent = dict.diplomas_title;

    var dipDesc = document.querySelector('.diplomas-desc');
    if (dipDesc) dipDesc.textContent = dict.diplomas_desc;

    // Diplomas Cards
    var dipCards = document.querySelectorAll('.diploma-card');
    if (dipCards.length >= 4) {
      var dTitles = [dict.d1_title, dict.d2_title, dict.d3_title, dict.d4_title];
      var dDetails = [dict.d1_desc, dict.d2_desc, dict.d3_desc, dict.d4_desc];
      var dBtns = [dict.view_cert, dict.view_cert, dict.view_diploma, dict.view_attestation];

      dipCards.forEach(function (card, idx) {
        var t = card.querySelector('.diploma-title');
        var d = card.querySelector('.diploma-detail');
        var b = card.querySelector('.diploma-btn-expand');
        var z = card.querySelector('.diploma-zoom-overlay span');
        if (t && dTitles[idx]) t.textContent = dTitles[idx];
        if (d && dDetails[idx]) d.textContent = dDetails[idx];
        if (z) z.textContent = dict.click_to_enlarge;
        if (b && dBtns[idx]) {
          var bSvg = b.querySelector('svg');
          b.textContent = ' ' + dBtns[idx];
          if (bSvg) b.prepend(bSvg);
        }
      });
    }

    var toggleDiplomasText = document.getElementById('toggleDiplomasText');
    if (toggleDiplomasText) {
      var allDipCard = document.getElementById('allDiplomasCard');
      var isExpanded = allDipCard && allDipCard.style.display !== 'none' && allDipCard.style.display !== '';
      toggleDiplomasText.textContent = isExpanded ? dict.btn_hide_diplomas : dict.btn_show_diplomas;
    }

    var allDipTopTitle = document.querySelector('.all-diplomas-top-title');
    if (allDipTopTitle) {
      var adSvg = allDipTopTitle.querySelector('svg');
      allDipTopTitle.textContent = ' ' + dict.all_diplomas_title;
      if (adSvg) allDipTopTitle.prepend(adSvg);
    }

    var allDipTopDesc = document.querySelector('.all-diplomas-top-desc');
    if (allDipTopDesc) allDipTopDesc.textContent = dict.all_diplomas_desc;

    var allDipCounter = document.querySelector('.all-diplomas-counter-badge');
    if (allDipCounter) allDipCounter.textContent = dict.all_diplomas_badge;

    // Services Header
    var srvEyebrow = document.querySelector('#services .section-eyebrow');
    if (srvEyebrow) srvEyebrow.textContent = dict.services_eyebrow;

    var srvTitle = document.querySelector('#services .section-title');
    if (srvTitle) srvTitle.textContent = dict.services_title;

    var srvDesc = document.querySelector('#services .section-desc');
    if (srvDesc) srvDesc.textContent = dict.services_desc;

    // Service 1: Full Stack
    var s1Badge = document.querySelector('.flagship-info .service-badge');
    if (s1Badge) {
      var s1Svg = s1Badge.querySelector('svg');
      s1Badge.textContent = ' ' + dict.s1_badge;
      if (s1Svg) s1Badge.prepend(s1Svg);
    }

    var s1Title = document.querySelector('.flagship-info .service-title');
    if (s1Title) s1Title.textContent = dict.s1_title;

    var s1Desc = document.querySelector('.flagship-info .service-desc');
    if (s1Desc) s1Desc.textContent = dict.s1_desc;

    var clusterNames = document.querySelectorAll('.tech-cluster-name');
    if (clusterNames.length >= 5) {
      var cNames = [dict.cluster_frontend, dict.cluster_backend, dict.cluster_databases, dict.cluster_others, dict.cluster_ai_tools];
      clusterNames.forEach(function (cEl, idx) {
        if (cNames[idx]) {
          var cSvg = cEl.querySelector('svg');
          cEl.textContent = ' ' + cNames[idx];
          if (cSvg) cEl.prepend(cSvg);
        }
      });
    }

    var termHint = document.querySelector('.terminal-overlay-hint span');
    if (termHint) termHint.textContent = dict.term_preview_hint;

    var termCaptionSpan = document.querySelector('.terminal-caption span:first-child');
    if (termCaptionSpan) termCaptionSpan.textContent = dict.term_caption;

    var termZoomSpan = document.querySelector('.terminal-caption span:last-child');
    if (termZoomSpan) termZoomSpan.textContent = dict.term_zoom;

    // Service 2: Solar Energy
    var s2Badge = document.querySelector('.solar-service .service-badge');
    if (s2Badge) {
      var s2Svg = s2Badge.querySelector('svg');
      s2Badge.textContent = ' ' + dict.s2_badge;
      if (s2Svg) s2Badge.prepend(s2Svg);
    }

    var s2Title = document.querySelector('.solar-service .solar-header-row .service-title');
    if (s2Title) s2Title.textContent = dict.s2_title;

    var s2Desc = document.querySelector('.solar-service .solar-header-row .service-desc');
    if (s2Desc) s2Desc.textContent = dict.s2_desc;

    var solarSubblocks = document.querySelectorAll('.solar-subblock');
    if (solarSubblocks.length >= 2) {
      // Phase 1
      var p1Step = solarSubblocks[0].querySelector('.solar-step-badge');
      var p1Pill = solarSubblocks[0].querySelector('.solar-spec-pill');
      var p1Title = solarSubblocks[0].querySelector('.solar-info-title');
      var p1Text = solarSubblocks[0].querySelector('.solar-info-text');
      if (p1Step) p1Step.textContent = dict.solar_phase1_badge;
      if (p1Pill) p1Pill.textContent = dict.solar_phase1_pill;
      if (p1Title) p1Title.textContent = dict.solar_phase1_title;
      if (p1Text) p1Text.textContent = dict.solar_phase1_text;

      // Phase 2
      var p2Step = solarSubblocks[1].querySelector('.solar-step-badge');
      var p2Pill = solarSubblocks[1].querySelector('.solar-spec-pill');
      var p2Title = solarSubblocks[1].querySelector('.solar-info-title');
      var p2Text = solarSubblocks[1].querySelector('.solar-info-text');
      if (p2Step) p2Step.textContent = dict.solar_phase2_badge;
      if (p2Pill) p2Pill.textContent = dict.solar_phase2_pill;
      if (p2Title) p2Title.textContent = dict.solar_phase2_title;
      if (p2Text) p2Text.textContent = dict.solar_phase2_text;
    }

    var solarTags = document.querySelectorAll('.solar-photo-tag');
    if (solarTags.length >= 3) {
      var sTags = [dict.solar_tag_array, dict.solar_tag_onsite, dict.solar_tag_inverter];
      solarTags.forEach(function (tagEl, i) {
        if (sTags[i]) {
          var tSvg = tagEl.querySelector('svg');
          tagEl.textContent = ' ' + sTags[i];
          if (tSvg) tagEl.prepend(tSvg);
        }
      });
    }

    var solarOverlays = document.querySelectorAll('.solar-photo-overlay span');
    solarOverlays.forEach(function (o) {
      o.textContent = dict.click_to_enlarge;
    });

    // Service 3: Graphic Design
    var s3Badge = document.querySelector('.graphic-service .service-badge');
    if (s3Badge) {
      var s3Svg = s3Badge.querySelector('svg');
      s3Badge.textContent = ' ' + dict.s3_badge;
      if (s3Svg) s3Badge.prepend(s3Svg);
    }

    var s3Title = document.querySelector('.graphic-service .service-title');
    if (s3Title) s3Title.textContent = dict.s3_title;

    var s3Desc = document.querySelector('.graphic-service .service-desc');
    if (s3Desc) s3Desc.textContent = dict.s3_desc;

    // 6 Design Cards
    var designCards = document.querySelectorAll('.design-grid-6 .design-card-item');
    if (designCards.length >= 6) {
      var designCardData = [
        { title: dict.card_aroma_title, tool: dict.created_with_canva },
        { title: dict.card_carte_title, tool: dict.created_with_canva },
        { title: dict.card_venus_title, tool: dict.created_with_canva },
        { title: dict.card_ysl_title, tool: dict.created_with_canva },
        { title: dict.card_ebook_title, tool: dict.created_with_canva },
        { title: dict.card_cours_title, tool: dict.created_with_photoshop }
      ];
      designCards.forEach(function (card, idx) {
        var cData = designCardData[idx];
        if (cData) {
          var tEl = card.querySelector('.design-card-title');
          var lEl = card.querySelector('.design-tool-label .tool-badge-pill');
          var zEl = card.querySelector('.design-zoom-overlay span');
          if (tEl) tEl.textContent = cData.title;
          if (lEl) lEl.textContent = cData.tool;
          if (zEl) zEl.textContent = dict.click_to_enlarge;
        }
      });
    }

    var btnShowDesigns = document.querySelector('.btn-show-all-designs span:not(.design-count-pill)');
    if (btnShowDesigns) btnShowDesigns.textContent = dict.btn_show_designs;

    var designPill = document.querySelector('.design-count-pill');
    if (designPill) designPill.textContent = dict.designs_count_pill;

    var gModalBadge = document.querySelector('.graphic-modal-header .service-badge');
    if (gModalBadge) gModalBadge.textContent = dict.graphic_modal_badge;

    var gModalTitle = document.querySelector('.graphic-modal-title');
    if (gModalTitle) gModalTitle.textContent = dict.graphic_modal_title;

    var gModalDesc = document.querySelector('.graphic-modal-desc');
    if (gModalDesc) gModalDesc.textContent = dict.graphic_modal_desc;

    var gModalHint = document.querySelector('.graphic-modal-footer span:last-child');
    if (gModalHint) gModalHint.textContent = dict.graphic_modal_hint;

    var gModalCloseBtn = document.querySelector('.graphic-modal-footer .btn-ghost');
    if (gModalCloseBtn) gModalCloseBtn.textContent = dict.btn_close_window;

    // Service 4: AI Engineering
    var s4Badge = document.querySelector('.ai-content-wrap .service-badge');
    if (s4Badge) {
      var s4Svg = s4Badge.querySelector('svg');
      s4Badge.textContent = ' ' + dict.s4_badge;
      if (s4Svg) s4Badge.prepend(s4Svg);
    }

    var s4Enterprise = document.querySelector('.ai-content-wrap .tech-cluster-badge');
    if (s4Enterprise) s4Enterprise.textContent = dict.s4_enterprise;

    var s4Title = document.querySelector('.ai-content-wrap .service-title');
    if (s4Title) s4Title.textContent = dict.s4_title;

    var s4Desc = document.querySelector('.ai-content-wrap .service-desc');
    if (s4Desc) s4Desc.textContent = dict.s4_desc;

    var aiPhotoBadge = document.querySelector('.ai-photo-badge');
    if (aiPhotoBadge) {
      var aibSvg = aiPhotoBadge.querySelector('svg');
      aiPhotoBadge.textContent = ' ' + dict.ai_photo_badge;
      if (aibSvg) aiPhotoBadge.prepend(aibSvg);
    }

    var aiPhotoOverlay = document.querySelector('.ai-photo-overlay span');
    if (aiPhotoOverlay) aiPhotoOverlay.textContent = dict.ai_photo_hint;

    var aiPhotoCaption = document.querySelector('.ai-photo-caption span:first-child');
    if (aiPhotoCaption) aiPhotoCaption.textContent = dict.ai_photo_caption;

    var aiClusterCards = document.querySelectorAll('.ai-cluster-card');
    if (aiClusterCards.length >= 3) {
      var aiClustersData = [
        { t: dict.ai_cluster1_title, c: dict.ai_cluster1_count },
        { t: dict.ai_cluster2_title, c: dict.ai_cluster2_count },
        { t: dict.ai_cluster3_title, c: dict.ai_cluster3_count }
      ];
      aiClusterCards.forEach(function (cCard, idx) {
        if (aiClustersData[idx]) {
          var t = cCard.querySelector('.ai-cluster-title');
          var c = cCard.querySelector('.ai-cluster-counter');
          if (t) t.textContent = aiClustersData[idx].t;
          if (c) c.textContent = aiClustersData[idx].c;
        }
      });
    }

    // Projects Section
    var prjEyebrow = document.querySelector('#projects .section-eyebrow');
    if (prjEyebrow) prjEyebrow.textContent = dict.projects_eyebrow;

    var prjTitle = document.querySelector('#projects .section-title');
    if (prjTitle) prjTitle.textContent = dict.projects_title;

    var prjDesc = document.querySelector('#projects .section-desc');
    if (prjDesc) prjDesc.textContent = dict.projects_desc;

    var prjNote = document.querySelector('.projects-preview-note .note-text');
    if (prjNote) prjNote.innerHTML = dict.projects_note;

    var btnOpenProjects = document.querySelectorAll('.btn-open-project span');
    btnOpenProjects.forEach(function (btn) {
      btn.textContent = dict.btn_open_project;
    });

    var prjZooms = document.querySelectorAll('.project-zoom-overlay');
    prjZooms.forEach(function (z) {
      var zSvg = z.querySelector('svg');
      z.textContent = ' ' + dict.enlarge_preview;
      if (zSvg) z.prepend(zSvg);
    });

    var btnShowProjects = document.querySelector('.btn-show-all-projects span:not(.project-count-pill)');
    if (btnShowProjects) btnShowProjects.textContent = dict.btn_show_projects;

    var prjPill = document.querySelector('.project-count-pill');
    if (prjPill) prjPill.textContent = dict.projects_count_pill;

    var pModalBadge = document.querySelector('.projects-modal-header .service-badge');
    if (pModalBadge) pModalBadge.textContent = dict.projects_modal_badge;

    var pModalTitle = document.querySelector('.projects-modal-title');
    if (pModalTitle) pModalTitle.textContent = dict.projects_modal_title;

    var pModalDesc = document.querySelector('.projects-modal-desc');
    if (pModalDesc) pModalDesc.textContent = dict.projects_modal_desc;

    var pModalHint = document.querySelector('.projects-modal-footer span');
    if (pModalHint) pModalHint.textContent = dict.projects_modal_hint;

    var pModalCloseBtn = document.querySelector('.projects-modal-footer .btn-ghost');
    if (pModalCloseBtn) pModalCloseBtn.textContent = dict.btn_close_window;

    // Location Section
    var locEyebrow = document.querySelector('#location .section-eyebrow');
    if (locEyebrow) locEyebrow.textContent = dict.location_eyebrow;

    var locTitle = document.querySelector('#location .section-title');
    if (locTitle) locTitle.textContent = dict.location_title;

    var locDesc = document.querySelector('#location .section-desc');
    if (locDesc) locDesc.textContent = dict.location_desc;

    var locBadge = document.querySelector('.location-badge');
    if (locBadge) {
      var lDot = locBadge.querySelector('.pulse-dot');
      locBadge.textContent = ' ' + dict.location_badge;
      if (lDot) locBadge.prepend(lDot);
    }

    var locCity = document.querySelector('.location-info h3');
    if (locCity) {
      var lCitySvg = locCity.querySelector('svg');
      locCity.textContent = ' ' + dict.location_city;
      if (lCitySvg) locCity.prepend(lCitySvg);
    }

    var locText = document.querySelector('.location-text');
    if (locText) locText.textContent = dict.location_text;

    var locStatTitles = document.querySelectorAll('.loc-stat-title');
    if (locStatTitles.length >= 4) {
      locStatTitles[0].textContent = dict.loc_stat_hub;
      locStatTitles[1].textContent = dict.loc_stat_tz;
      locStatTitles[2].textContent = dict.loc_stat_phone;
      locStatTitles[3].textContent = dict.loc_stat_mode;
    }

    var locStatVals = document.querySelectorAll('.loc-stat-val');
    if (locStatVals.length >= 4) {
      locStatVals[0].textContent = dict.loc_stat_hub_val;
      locStatVals[1].textContent = dict.loc_stat_tz_val;
      locStatVals[3].textContent = dict.loc_stat_mode_val;
    }

    var locHubTitle = document.querySelector('.loc-hub-details h4');
    if (locHubTitle) locHubTitle.textContent = dict.loc_hub_title;

    var locHubSub = document.querySelector('.loc-hub-details p');
    if (locHubSub) locHubSub.textContent = dict.loc_hub_subtitle;

    var locZoneItems = document.querySelectorAll('.loc-zone-item');
    if (locZoneItems.length >= 4) {
      var zLabels = [dict.loc_zone_dz, dict.loc_zone_fr, dict.loc_zone_ca, dict.loc_zone_global];
      var zBadges = [dict.loc_badge_active, dict.loc_badge_degree, dict.loc_badge_degree, dict.loc_badge_available];
      locZoneItems.forEach(function (zi, idx) {
        var s1 = zi.querySelector('span:first-child');
        var s2 = zi.querySelector('span:last-child');
        if (s1 && zLabels[idx]) s1.innerHTML = zLabels[idx];
        if (s2 && zBadges[idx]) s2.textContent = zBadges[idx];
      });
    }

    // Contact Section
    var cntEyebrow = document.querySelector('#contact .section-eyebrow');
    if (cntEyebrow) cntEyebrow.textContent = dict.contact_eyebrow;

    var cntTitle = document.querySelector('#contact .section-title');
    if (cntTitle) cntTitle.textContent = dict.contact_title;

    var cntDesc = document.querySelector('#contact .section-desc');
    if (cntDesc) cntDesc.textContent = dict.contact_desc;

    var cntCardH3 = document.querySelector('.contact-info-card h3');
    if (cntCardH3) cntCardH3.textContent = dict.contact_card_title;

    var cntCardP = document.querySelector('.contact-info-card p');
    if (cntCardP) cntCardP.textContent = dict.contact_card_desc;

    var methodLabels = document.querySelectorAll('.method-label');
    if (methodLabels.length >= 2) {
      methodLabels[0].textContent = dict.contact_direct_email;
      methodLabels[1].textContent = dict.contact_direct_phone;
    }

    var copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn) copyBtn.textContent = dict.contact_copy;

    // Contact Form
    var formLabels = document.querySelectorAll('.form-label');
    if (formLabels.length >= 4) {
      formLabels[0].textContent = dict.form_label_name;
      formLabels[1].textContent = dict.form_label_email;
      formLabels[2].textContent = dict.form_label_subject;
      formLabels[3].textContent = dict.form_label_message;
    }

    var nameInput = document.getElementById('userName');
    if (nameInput) nameInput.placeholder = dict.form_ph_name;

    var emailInput = document.getElementById('userEmail');
    if (emailInput) emailInput.placeholder = dict.form_ph_email;

    var subjectInput = document.getElementById('userSubject');
    if (subjectInput) subjectInput.placeholder = dict.form_ph_subject;

    var messageInput = document.getElementById('userMessage');
    if (messageInput) messageInput.placeholder = dict.form_ph_message;

    var formBtn = document.querySelector('.form-btn-submit');
    if (formBtn) {
      var fbSvg = formBtn.querySelector('svg');
      formBtn.textContent = dict.form_btn_send + ' ';
      if (fbSvg) formBtn.appendChild(fbSvg);
    }

    // Footer
    var footerCopy = document.querySelector('.footer-copy');
    if (footerCopy) footerCopy.textContent = dict.footer_copy;

    // Lightbox Buttons
    var lbPrev = document.querySelector('.lightbox-actions button[onclick="prevDiploma()"]');
    if (lbPrev) {
      var lbpSvg = lbPrev.querySelector('svg');
      lbPrev.textContent = ' ' + dict.lightbox_prev;
      if (lbpSvg) lbPrev.prepend(lbpSvg);
    }

    var lbNext = document.querySelector('.lightbox-actions button[onclick="nextDiploma()"]');
    if (lbNext) {
      var lbnSvg = lbNext.querySelector('svg');
      lbNext.textContent = dict.lightbox_next + ' ';
      if (lbnSvg) lbNext.appendChild(lbnSvg);
    }

    var lbExit = document.querySelector('.lightbox-btn-close');
    if (lbExit) {
      var lbxSvg = lbExit.querySelector('svg');
      lbExit.textContent = ' ' + dict.lightbox_exit;
      if (lbxSvg) lbExit.prepend(lbxSvg);
    }

    // Save to LocalStorage
    try {
      localStorage.setItem('portfolio_language', lang);
    } catch (e) {}

    // Dispatch custom event in case other components react
    window.dispatchEvent(new CustomEvent('portfolio_language_changed', { detail: { lang: lang, dict: dict } }));
  }

  // Toggle Dropdown
  function setupLanguageSwitcher() {
    var switcher = document.getElementById('langSwitcher');
    var btn = document.getElementById('langDropdownBtn');
    var menu = document.getElementById('langDropdownMenu');

    if (!switcher || !btn) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = switcher.classList.contains('open');
      if (isOpen) {
        switcher.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        switcher.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Option Clicks
    var options = document.querySelectorAll('.lang-option');
    options.forEach(function (opt) {
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        var selectedLang = this.getAttribute('data-lang');
        applyLanguage(selectedLang);
        switcher.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Mobile Chips Click
    var mobileChips = document.querySelectorAll('.mobile-lang-chip');
    mobileChips.forEach(function (chip) {
      chip.addEventListener('click', function (e) {
        e.stopPropagation();
        var selectedLang = this.getAttribute('data-lang');
        applyLanguage(selectedLang);
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!switcher.contains(e.target)) {
        switcher.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && switcher.classList.contains('open')) {
        switcher.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  // Expose global methods
  window.setLanguage = applyLanguage;
  window.getCurrentLanguage = function () { return currentLanguage; };
  window.getTranslations = function () { return translations; };

  // Initialize once DOM is ready
  function init() {
    setupLanguageSwitcher();
    var savedLang = 'en';
    try {
      savedLang = localStorage.getItem('portfolio_language') || 'en';
    } catch (e) {
      savedLang = 'en';
    }
    applyLanguage(savedLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
