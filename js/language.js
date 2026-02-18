// --- Language toggle (EN/FR) ---
const I18N = {
  en: {
    nav_intro: "Intro",
    nav_get_started: "Get Started",
    nav_modules: "Modules",
    nav_faq: "FAQ",
    welcome_title: "Welcome to FLORA",
    welcome_subtitle: `French Learning Opportunities <span class="welcome-highlighted-text">Reaching All</span>`,
    intro_kicker: "Inside the resource",
    intro_title: "What is FLORA?",
    intro_lead:
      "FLORA invites students into the world of Rigolo and Rigolette, where learning French feels like play and teaching feels effortless",
    intro_pill: "Fun • Engaging • Effective",
    get_started_title: `Get started in 3 steps... <i>allons-y!</i>`,
    step1_verb: "Read",
    step1_link: "quick start guide",
    step2_verb: "Use",
    step2_link1: "level guides",
    step2_link2: "printables",
    step3_verb: "Access",
    step3_link: "modules",
    modules_kicker: "Interactive Modules",
    modules_title: "Access modules.",
    level1_link: "Level 1",
    level2_link: "Level 2",
    level3_link: "Level 3",
    level4_link: "Level 4",
    owl_title: "Professor Owl",
    owl_body:
      "Professor Owl is your guide through the modules. Select the Owl button at the top of any screen to see Professor Owl and hear his audio instructions.",
    faq_kicker: "Need-to-know details",
    faq_title: "Frequently Asked Questions",
    faq_subtitle:
      "Select the commonly asked questions below to expand and see the answers.",
    faq1_q: "How much preparation is required to use FLORA?",
    faq2_q: "What age group and curricula is FLORA designed for?",
    faq4_q: "Can I still download the FLORA modules using Articulate?",
    faq3_q: "Where can I direct my FLORA support questions?",
    faq6_q: "Can students use FLORA at home with their families?",
    faq1_a: `FLORA is ready to go with built-in instructions and supports, learning activities and materials. <a href="https://nbed.sharepoint.com/:f:/r/sites/Test880/Shared%20Documents/1.1%20FLORA?csf=1&web=1&e=GZ5jpD" target="_blank">Select here</a> to access all resources.`,
    faq2_a: `The is created for <strong>K-4</strong> (primary/elementary) learners in mind. Instructions, recommended timing, and notes are written for teachers in the <a href="https://nbed.sharepoint.com/:f:/r/sites/Test880/Shared%20Documents/1.1%20FLORA/1.%20Quick%20Start%20Guide?csf=1&web=1&e=6gFP62" target="_blank">Quick Start Guide</a> so that the content stays fun, engaging and effective for students and structured for you. For K-2 learners, FLORA aligns with <a href="https://curriculum.nbed.ca/learning-areas/primary-block/explore-your-world/" target="_blank">Explore Your World</a> curriculum.`,
    faq4_a: `Articulate is no longer supported, so you cannot download the FLORA modules. Please access the <a href="#modules">modules</a> on this site.`,
    faq3_a: `Contact your district's <strong>FSL Subject Coordinator</strong> for pedagogical and resource support. Please make a <strong>helpdesk ticket</strong> through your district's IT support.`,
    faq6_a: `Of course! Strong home-school connections will support French language learning. Feel free to use this <strong><a href="https://nbed.sharepoint.com/:f:/r/sites/Test880/Shared%20Documents/1.1%20FLORA/3.%20Printable%20Resources?csf=1&web=1&e=kpK1cN" target="_blank">QR Code Take Home Printable</a></strong> so families can easily access FLORA at home.`,
    footer_org: "NB Department of Education and Early Childhood Development",
    footer_funding:
      "Funding from the Government of Canada through the Action Plan for Official Languages 2018-2023",
  },
  fr: {
    nav_intro: "Aperçu",
    nav_get_started: "Démarrer",
    nav_modules: "Modules",
    nav_faq: "FAQ",
    welcome_title: "Bienvenue à FLORA",
    welcome_subtitle: `Occasions d’apprentissage du français langue seconde <span class="welcome-highlighted-text">pour tous</span>`,
    intro_kicker: "Dans la ressource",
    intro_title: "Qu’est-ce que FLORA?",
    intro_lead:
      "FLORA invite les élèves dans l’univers de Rigolo et Rigolette, où apprendre le français ressemble à un jeu et enseigner devient simple",
    intro_pill: "Ludique • Engageant • Efficace",
    get_started_title: `Commencez en 3 étapes... <i>allons-y!</i>`,
    step1_verb: "Lire",
    step1_link: "le guide de démarrage rapide",
    step2_verb: "Utiliser",
    step2_link1: "les guides par niveau",
    step2_link2: "les fiches reproductibles",
    step3_verb: "Accéder",
    step3_link: "aux modules",
    modules_kicker: "Modules interactifs",
    modules_title: "Accéder aux modules.",
    level1_link: "Niveau 1",
    level2_link: "Niveau 2",
    level3_link: "Niveau 3",
    level4_link: "Niveau 4",
    owl_title: "Professeur Hibou",
    owl_body:
      "Le Professeur Hibou vous guide dans les modules. Sélectionnez le bouton Hibou en haut de l’écran pour le voir et écouter ses consignes audio.",
    faq_kicker: "Infos essentielles",
    faq_title: "Foire aux questions",
    faq_subtitle:
      "Sélectionnez une question ci-dessous pour afficher la réponse.",
    faq1_q: "Quelle préparation est nécessaire pour utiliser FLORA?",
    faq2_q: "Pour quel groupe d’âge et quels programmes FLORA est-il conçu?",
    faq4_q: "Puis-je encore télécharger les modules FLORA avec Articulate?",
    faq3_q: "À qui puis-je adresser mes questions de soutien FLORA?",
    faq6_q: "Les élèves peuvent-ils utiliser FLORA à la maison?",
    faq1_a: `FLORA est prêt à utiliser grâce aux consignes intégrées, aux soutiens, aux activités et au matériel. <a href="https://nbed.sharepoint.com/:f:/r/sites/Test880/Shared%20Documents/1.1%20FLORA?csf=1&web=1&e=GZ5jpD" target="_blank">Cliquez ici</a> pour accéder à toutes les ressources.`,
    faq2_a: `FLORA est conçu pour des élèves de <strong>M à 4e année</strong>. Les consignes, le temps recommandé et les notes sont rédigés pour le personnel enseignant dans le <a href="https://nbed.sharepoint.com/:f:/r/sites/Test880/Shared%20Documents/1.1%20FLORA/1.%20Quick%20Start%20Guide?csf=1&web=1&e=6gFP62" target="_blank">Guide de démarrage rapide</a> afin que le contenu demeure ludique, engageant et efficace pour les élèves, tout en étant structuré pour vous. Pour les élèves de M à 2e année, FLORA s’aligne sur le programme <a href="https://curriculum.nbed.ca/learning-areas/primary-block/explore-your-world/" target="_blank">Explore Your World</a>.`,
    faq4_a:
      'Articulate n’est plus pris en charge; vous ne pouvez donc plus télécharger les modules FLORA. Veuillez accéder aux <a href="#modules">modules</a> sur ce site.',
    faq3_a: `Communiquez avec la personne coordonnatrice en <strong>FLS</strong> de votre district pour le soutien pédagogique et les ressources. Pour les enjeux techniques, veuillez créer un <strong>billet d’assistance</strong> auprès du soutien TI de votre district.`,
    faq6_a: `Bien sûr! De solides liens école-famille soutiennent l’apprentissage du français. N’hésitez pas à utiliser ce <strong><a href="https://nbed.sharepoint.com/:f:/r/sites/Test880/Shared%20Documents/1.1%20FLORA/3.%20Printable%20Resources?csf=1&web=1&e=kpK1cN" target="_blank">Code QR à emporter</a></strong> pour que les familles puissent accéder facilement à FLORA à la maison.`,
    footer_org:
      "Ministère de l’Éducation et du Développement de la petite enfance du N.-B. (secteur anglophone)",
    footer_funding:
      "Financement du gouvernement du Canada dans le cadre du Plan d’action pour les langues officielles 2018-2023",
  },
};

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;

  // 🔹 STOP the video that is about to be hidden
  document.querySelectorAll(".intro-video").forEach((iframe) => {
    const isFr = lang === "fr";
    const shouldBeVisible =
      (isFr && iframe.classList.contains("lang-fr")) ||
      (!isFr && iframe.classList.contains("lang-en"));

    if (!shouldBeVisible) {
      iframe.src = iframe.src; // reload = stops playback
    }
  });

  // 🔹 Now switch language
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = lang === "fr" ? "EN" : "FR";

  localStorage.setItem("flora_lang", lang);
}

const savedLang = localStorage.getItem("flora_lang");
const browserPrefIsFr = (navigator.language || "")
  .toLowerCase()
  .startsWith("fr");
const initialLang = savedLang ? savedLang : browserPrefIsFr ? "fr" : "en";
applyLanguage(initialLang);

const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "fr" ? "en" : "fr";
    applyLanguage(next);
  });
}
