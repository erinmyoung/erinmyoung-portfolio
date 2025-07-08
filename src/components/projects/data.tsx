import {
  THEME_1999_SRC,
  THEME_2000_SRC,
  THEME_2003_SRC,
  THEME_2005_SRC,
  THEME_2005_BELOW_SRC,
  THEME_2011_SRC,
  THEME_2011_BELOW_SRC,
  DF_ARTICLE_BOTTOM_SRC,
  DF_ARTICLE_MOBILE_SRC,
  DF_ARTICLE_TOP_SRC,
  DF_CARD_MOBILE_SRC,
  DF_GAMEPAGE_SRC,
  DF_HOMEPAGE_SRC,
  DF_LATEST_MOBILE_SRC,
  DF_MENU_MOBILE_SRC,
  VG247_ARTICLE_MOBILE_SRC,
  VG247_ARTICLE_SRC,
  VG247_GAMEPAGE_MOBILE_SRC,
  VG247_GAMEPAGE_SRC,
  VG247_HOMEPAGE_SRC,
  VG247_MENU_MOBILE_SRC,
  POLL_MULTI_SRC,
  POLL_MULTI_MOBILE_SRC,
  POLL_NEXT_SRC,
  POLL_NEXT_MOBILE_SRC,
  POLL_VOTED_SRC,
  POLL_VOTED_MOBILE_SRC,
  POLL_ADS_SRC,
  POLL_ADS_MOBILE_SRC,
} from "../../constants/projects";

export const data = [
  {
    title: "E-commerce art store (in progress)",
    description:
      "Building an e-commerce store for original Erin Young artwork. Designed with Figma and using NextJS, React, TypeScript, Sanity headless CMS, Graph-Relational Object Queries (GROQ), Stripe integration for purchases, Zustand for state management, Tailwind CSS, and Vercel for deployments.",
    link: "",
    images: [],
  },
  {
    title: "Digital Foundry site rebuild",
    description:
      "Rebuilt YouTube channel site Digital Foundry in Django. Teamed up with a backend engineer who managed the Patreon integration. Erin led team meetings with editorial staff, gathered requirements, triaged pre and post launch tasks, conducted design reviews, and created wireframes for page layouts in Adobe XD. She integrated Patreon subscriptions with the frontend to display downloaded content to specific user types in the Django views.",
    link: "https://www.digitalfoundry.net",
    images: [
      {
        src: DF_HOMEPAGE_SRC,
        alt: "Digital Foundry homepage",
      },
      {
        src: DF_ARTICLE_TOP_SRC,
        alt: "Digital Foundry article top",
      },
      {
        src: DF_ARTICLE_BOTTOM_SRC,
        alt: "Digital Foundry article bottom",
      },
      {
        src: DF_GAMEPAGE_SRC,
        alt: "Digital Foundry game page",
      },
      {
        src: DF_MENU_MOBILE_SRC,
        alt: "Digital Foundry mobile article page",
      },
      {
        src: DF_ARTICLE_MOBILE_SRC,
        alt: "Digital Foundry mobile menu",
      },
      {
        src: DF_LATEST_MOBILE_SRC,
        alt: "Digital Foundry mobile latest feed",
      },
      {
        src: DF_CARD_MOBILE_SRC,
        alt: "Digital Foundry mobile card",
      },
    ],
  },
  {
    title: "VG247 site rebuild",
    description:
      "Frontend build for editorial site VG247 which was migrated from WordPress to Django. Teamed up with a backend engineer who managed the data import. Erin managed project tasks in GitHub, created XD wireframes, and ran communications with senior leadership stakeholders from editorial, design, backend, SEO, and product growth. Rebuilt queries with Elasticsearch DSL filters, implemented view-level caching, and worked closely with the design team to implement the new branding.",
    link: "https://www.vg247.com",
    images: [
      {
        src: VG247_HOMEPAGE_SRC,
        alt: "VG247 homepage",
      },
      {
        src: VG247_ARTICLE_SRC,
        alt: "VG247 article page",
      },
      {
        src: VG247_GAMEPAGE_SRC,
        alt: "VG247 game page",
      },
      {
        src: VG247_MENU_MOBILE_SRC,
        alt: "VG247 mobile menu",
      },
      {
        src: VG247_ARTICLE_MOBILE_SRC,
        alt: "VG247 mobile article page",
      },
      {
        src: VG247_GAMEPAGE_MOBILE_SRC,
        alt: "VG247 mobile game page",
      },
    ],
  },
  {
    title: "In-house content polls",
    description: `<p>Designed and built in-house content poll system, iterating and improving for over two years as a replacement for a third party platform with poor performance, CLS issues, and low accessibility. Erin developed a voting API which returned additional polls for continuous voting, AJAX for rendering voting percentages in real-time, and localStorage to store previous votes.</p><br/><p>Built within JavaScript class and Django class-based views. Polls achieved average of 750k clicks per month, saving the business over $6k in annual costs and bringing in ~15% more ads revenue. The iterated improvements included paid sponsorships, google data visualization charts, CSV downloading in the CMS for tracking engagement, tagging for relevant polls in articles, and timed voting.</p>`,
    link: "",
    images: [
      {
        src: POLL_MULTI_SRC,
        alt: "Poll multiple choice desktop",
      },
      {
        src: POLL_MULTI_MOBILE_SRC,
        alt: "Poll multiple choice mobile",
      },
      {
        src: POLL_NEXT_SRC,
        alt: "Poll up next desktop",
      },
      {
        src: POLL_NEXT_MOBILE_SRC,
        alt: "Poll up next mobile",
      },
      {
        src: POLL_VOTED_SRC,
        alt: "Poll voted desktop",
      },
      {
        src: POLL_VOTED_MOBILE_SRC,
        alt: "Poll voted mobile",
      },
      {
        src: POLL_ADS_SRC,
        alt: "Poll ads desktop",
      },
      {
        src: POLL_ADS_MOBILE_SRC,
        alt: "Poll ads mobile",
      },
    ],
  },
  {
    title: "Eurogamer 25th Anniversary theme switcher",
    description: `<p>Created an interactive theme switcher for Eurogamer's 25th anniversary, allowing users to toggle between site designs from 1999, 2000, 2003, 2005, and 2011. The content of the page could not be changed, so all styling was applied with Less CSS by preloading the new theme stylesheets and then swapping on click of the theme button. The feature received positive reader feedback and generated 16k interactions in the week it was active.</p><br/><p><strong>"Impressed there are no html changes. This is some expert level CSS hacking!"</strong> - Luke Reed #7629<br/><strong>"This theme switcher is amazing, congratulation on an amazing piece of CSS."</strong> - StooMonster #5704</p>`,
    link: "https://www.eurogamer.net/eg25-theme-switcher",
    images: [
      {
        src: THEME_1999_SRC,
        alt: "Eurogamer 1999 theme",
      },
      {
        src: THEME_2000_SRC,
        alt: "Eurogamer 2000 theme",
      },
      {
        src: THEME_2003_SRC,
        alt: "Eurogamer 2003 theme",
      },
      {
        src: THEME_2005_SRC,
        alt: "Eurogamer 2005 theme",
      },
      {
        src: THEME_2005_BELOW_SRC,
        alt: "Eurogamer 2005 theme below",
      },
      {
        src: THEME_2011_SRC,
        alt: "Eurogamer 2011 theme",
      },
      {
        src: THEME_2011_BELOW_SRC,
        alt: "Eurogamer 2011 theme below",
      },
    ],
  },
];
