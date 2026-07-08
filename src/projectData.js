export const contact = {
  email: "lanceprofe@gmail.com",
  phone: "(415) 519-1480",
  location: "Bay Area, CA",
  linkedin: "https://www.linkedin.com/in/lance-li-3158aa142/",
  github: "https://github.com/DevLance112",
};

export const metrics = [
  { value: "909", label: "individuals served through workforce initiatives" },
  { value: "792", label: "successful employment placements coordinated" },
  { value: "87%", label: "job placement rate across a major program" },
  { value: "95%", label: "work placement rate among academy graduates" },
];

export const timeline = [
  {
    role: "Project Coordinator",
    company: "Self-Help for the Elderly",
    date: "2026 - Present",
    type: "Workforce systems / Program operations",
    detail:
      "Leading healthcare academy operations, SOP design, curriculum oversight, stakeholder coordination, and measurable workforce outcomes.",
  },
  {
    role: "Career Advisor",
    company: "Self-Help for the Elderly",
    date: "2025 - 2026",
    type: "Career strategy / Public service",
    detail:
      "Supported job seekers through placement strategy, employer coordination, program tracking, and communication across a large workforce initiative.",
  },
  {
    role: "Lead Developer and Founder",
    company: "AI Secretary",
    date: "2024 - Present",
    type: "AI product / Service automation",
    detail:
      "Designing an AI-powered resume builder and virtual secretary that parses job descriptions, schedules appointments, and screens calls.",
  },
  {
    role: "Team Lead and Administrative Coordinator",
    company: "NewU InscribeX",
    date: "2024",
    type: "Web3 product / Team delivery",
    detail:
      "Directed a four-person product sprint with weekly schedules, stakeholder briefings, milestone reports, and on-time delivery.",
  },
];

export const skillStacks = [
  {
    title: "Visual and Brand",
    skills: ["Art direction", "Interface hierarchy", "Brand systems", "Presentation design"],
  },
  {
    title: "AI and Product",
    skills: ["AI workflow design", "Prompt logic", "Resume optimization", "Virtual assistant flows"],
  },
  {
    title: "Frontend and Prototyping",
    skills: ["React", "JavaScript", "HTML/CSS", "Flutter", "API integration"],
  },
  {
    title: "Systems and Operations",
    skills: ["SOP design", "Agile/Scrum", "Stakeholder briefings", "Jira", "Airtable", "Slack"],
  },
  {
    title: "Data and Backend",
    skills: ["PostgreSQL", "Strapi v5", "Firebase", "MongoDB", "MySQL", "NoSQL"],
  },
  {
    title: "Technical Foundation",
    skills: ["Python", "Java", "C++/C#", "SQL", "AWS", "GCP", "Ubuntu Linux"],
  },
];

export const projects = [
  {
    slug: "newu-inscribex",
    title: "NewU InscribeX",
    label: "Web3 communication platform",
    year: "2024",
    role: "Team Lead / Administrative Coordinator / Product systems contributor",
    status: "Delivered 100% of sprint goals on time",
    cover: "/assets/legacy/NewU-InscribeX-img/image20.png",
    images: [
      "/assets/legacy/NewU-InscribeX-img/image20.png",
      "/assets/legacy/NewU-InscribeX-img/image21.png",
      "/assets/legacy/NewU-InscribeX-img/image9.png",
      "/assets/legacy/NewU-InscribeX-img/image23.png",
    ],
    tags: ["Web3", "Firebase", "React", "NoSQL", "Nginx", "Crypto"],
    summary:
      "A Web3 communication and marketplace platform bridging wallet-based identity, community chat, trading surfaces, staking/lending concepts, and BTC-GPT style query flows.",
    challenge:
      "The project needed to translate a broad sponsor vision into a coherent product system: users had to connect wallets, chat securely, manage friends and groups, browse marketplace assets, and understand transaction-heavy flows without losing trust.",
    contribution:
      "I coordinated the team through weekly schedules, stakeholder briefings, milestone reporting, functional requirements, UI planning, user flows, and database reasoning for chat and identity features.",
    outcome:
      "The team delivered the planned development goals on time, reduced project risk through weekly blocker visibility, and produced a documented system that could support future Web3 social and marketplace features.",
    highlights: [
      "Led a four-person cross-functional sprint with daily coordination and weekly sponsor updates.",
      "Documented communication, buying, selling, staking, lending, BTC-GPT, and group chat use cases.",
      "Defined security, scalability, safety, maintainability, performance, usability, and robustness requirements.",
      "Structured Firebase collections around wallet identity, global chat, direct chat, group chat, and friend relationships.",
    ],
    analysis: [
      {
        title: "Research and personas",
        body:
          "The old case study began with personas and scenarios to clarify how users would enter the system, connect a wallet, read global conversations, send messages, add friends, and interact with marketplace or token flows. This gave the team a shared map before implementation.",
      },
      {
        title: "Functional requirements",
        body:
          "Core flows covered wallet login, direct messaging, group chat creation, marketplace buying and selling, staking, lending, BTC-GPT queries, crypto bookmarking, and editable usernames. Each flow documented basic, alternate, and exception paths so engineering could build around real product states.",
      },
      {
        title: "Non-functional requirements",
        body:
          "Security and safety were treated as high priority because wallet-based products can create irreversible user consequences. Scalability, usability, maintainability, portability, robustness, and sustainability were captured as explicit system expectations rather than afterthoughts.",
      },
      {
        title: "Interface design",
        body:
          "The UI system covered home, login, chat tab, friend tab, create group chat, user profile, marketplace, token detail, and bid pages. The design intent was to make dense Web3 actions feel navigable, readable, and compatible across desktop and mobile.",
      },
      {
        title: "Architecture and database",
        body:
          "The database used Firebase / Cloud Firestore as a NoSQL structure. Wallet addresses became meaningful document identifiers for user identity, while global chat, individual chat, group chat, friend list, and message objects supported future social and direct transaction features.",
      },
    ],
  },
  {
    slug: "ai-resume-builder",
    title: "AI Resume Builder",
    label: "AI career design tool",
    year: "2024 - Present",
    role: "Lead Developer / Founder",
    status: "Final testing and launch preparation",
    cover: "/assets/project-resume-builder.png",
    images: ["/assets/project-resume-builder.png"],
    tags: ["React", "PostgreSQL", "Strapi v5", "AI Integration", "Render"],
    summary:
      "An AI-powered resume platform for job-specific optimization, job description parsing, automated content generation, and scalable candidate data management.",
    challenge:
      "Users need resumes that respond to specific job descriptions without becoming generic. The product had to turn messy job text into structured guidance and keep the resume-building interface clear enough for repeated use.",
    contribution:
      "I designed the product concept, AI optimization flow, PostgreSQL schema, Strapi v5 content layer, front-end component structure, and launch/testing plan.",
    outcome:
      "The platform reached final testing with continuous improvements driven by user feedback and test results.",
    highlights: [
      "Implemented job description parsing for keyword extraction and resume matching.",
      "Created AI-driven suggestions for resume sections and automated optimization logic.",
      "Designed PostgreSQL data architecture supervised through Strapi v5.",
      "Built a responsive resume-building interface with real-time preview behavior.",
    ],
    analysis: [
      {
        title: "AI product flow",
        body:
          "The old case study centered on parsing job descriptions, extracting keywords, and turning the result into concrete resume edits. The key design problem was creating enough automation to be useful while keeping user control visible.",
      },
      {
        title: "System architecture",
        body:
          "The backend used PostgreSQL for structured candidate and resume data, Strapi v5 for content management, and Render.com for hosting. The schema was planned for scalability, data integrity, and later iteration.",
      },
      {
        title: "Interface design",
        body:
          "The interface focused on an intuitive builder, modular sections, responsive behavior, and real-time preview so users could see how AI suggestions changed the final artifact.",
      },
      {
        title: "Development process",
        body:
          "The project followed a 12-week development cycle with market research, user need analysis, technical requirement planning, agile implementation, testing, optimization, and feedback loops.",
      },
    ],
  },
  {
    slug: "ocr-translate",
    title: "OCR and Translate",
    label: "AI-assisted utility prototype",
    year: "2024",
    role: "Full-stack prototype developer",
    status: "Built in under 4 hours",
    cover: "/assets/legacy/ORC%20and%20translate-web.PNG",
    images: ["/assets/legacy/ORC%20and%20translate-web.PNG", "/assets/legacy/ORC%20and%20translate-mobile.jpg"],
    tags: ["Python", "Flask", "Tesseract OCR", "Google Translate", "HTML/CSS"],
    summary:
      "A rapid web app that lets users upload an image, extract text through OCR, and translate the extracted text line by line into a selected language.",
    challenge:
      "The goal was to test how quickly AI-driven development could produce a useful interface while still handling file upload, OCR extraction, translation, and readable output states.",
    contribution:
      "I built the Flask app, integrated Tesseract-OCR and googletrans, designed the desktop/mobile interface, and debugged AI-generated code into a working tool.",
    outcome:
      "The project became a compact test of fast AI-assisted development and practical bug fixing under time pressure.",
    highlights: [
      "Image upload with immediate preview beside the translation output.",
      "Tesseract-OCR processing for text extraction from image files.",
      "Google Translate integration through the googletrans library.",
      "Line-by-line original and translated text display for readability.",
    ],
    analysis: [
      {
        title: "Frontend decisions",
        body:
          "The interface stayed intentionally minimal: upload, language selection, image preview, and a line-by-line translation table. On mobile, columns stack to preserve legibility.",
      },
      {
        title: "Backend decisions",
        body:
          "Flask was chosen because it is lightweight and fast for small tools. Cookies handled temporary session data, avoiding server-side storage and keeping the prototype privacy-conscious.",
      },
      {
        title: "Learning value",
        body:
          "The case study is less about production scale and more about rapid AI-assisted execution: translating generated code into a working, debuggable user-facing utility.",
      },
    ],
  },
  {
    slug: "movie-browser",
    title: "Movie Browsing Website",
    label: "Database-backed web application",
    year: "2023",
    role: "Full-stack developer",
    status: "Legacy AWS instance archived",
    cover: "/assets/legacy/frontPage2.JPG",
    images: ["/assets/legacy/frontPage.png", "/assets/legacy/frontPage2.JPG", "/assets/legacy/webisteMobileApp.JPG"],
    tags: ["Java", "Tomcat", "JavaScript", "MySQL", "AWS", "Android"],
    summary:
      "A Tomcat-hosted movie browsing website containing 20,000+ movies, MySQL-backed search, secure login, sessions, and performance optimization.",
    challenge:
      "The system needed to serve a large movie dataset with reliable session behavior, secure authentication, fast search, and efficient database queries under realistic traffic patterns.",
    contribution:
      "I set up cloud hosting, Tomcat, Java/MySQL infrastructure, servlet APIs, XML parsing, session behavior, security protections, and query/traffic optimizations.",
    outcome:
      "The website achieved consistent sub-500ms response time and included an Android app version retaining key login and search features.",
    highlights: [
      "Hosted Java servlet architecture on AWS with Tomcat and MySQL.",
      "Batch inserted movie, user, and star data from XML datasets.",
      "Added password encryption, reCAPTCHA, HTTPS, sessions, and sticky cookies.",
      "Optimized traffic with connection pooling, master/slave architecture, prepared statements, and FULLTEXT fuzzy search.",
    ],
    analysis: [
      {
        title: "Service architecture",
        body:
          "The frontend requested data through servlet APIs hosted on Tomcat. Sensitive operations were moved to POST requests, reducing exposure to injection-style attacks.",
      },
      {
        title: "Data pipeline",
        body:
          "DOM and SAX parsers imported XML movie data into MySQL, making the application a practical database and backend systems exercise rather than just a static interface.",
      },
      {
        title: "Optimization",
        body:
          "PreparedStatement reuse, connection pooling, cloud comparison, and FULLTEXT indexing improved repeated query speed and search quality.",
      },
    ],
  },
  {
    slug: "webcrawler-indexer-ranker",
    title: "Webcrawler, Indexer, Ranker",
    label: "Search engine architecture",
    year: "2023",
    role: "Search systems developer",
    status: "Academic search engine prototype",
    cover: "/assets/legacy/WebCrawler-Indexer-Ranker.JPG",
    images: [
      "/assets/legacy/WebCrawler-Indexer-Ranker.JPG",
      "/assets/legacy/tf-idf%20visualization.JPG",
      "/assets/legacy/Cosine-Similarity-Visulization.JPG",
    ],
    tags: ["Python", "Crawler", "Inverted Index", "TF-IDF", "Cosine Similarity"],
    summary:
      "A from-scratch crawler, indexer, ranker, and search engine built over six weeks to crawl a UCI network snapshot and return ranked results.",
    challenge:
      "The system needed safe crawling behavior, duplicate/similarity detection, compact storage, fast lookup, and a ranking model that could operate without loading everything into memory.",
    contribution:
      "I worked on crawler logic, URL validation, similarity detection, inverted index storage, byte-position indexing, TF-IDF scoring, and cosine similarity ranking.",
    outcome:
      "The system returned top-ranked URLs in under 100ms, significantly improving perceived search responsiveness.",
    highlights: [
      "Crawler politeness through robots.txt checking and disallowed-path tracking.",
      "Status code handling for 200 responses and 300 redirects.",
      "Three-gram fingerprinting to avoid parsing near-duplicate pages.",
      "Inverted index with byte-position lookup for O(1) access to word postings.",
    ],
    analysis: [
      {
        title: "Crawler design",
        body:
          "Starting from four domains, the crawler collected hyperlinks, filtered invalid or repeated URLs, separated status code behavior, respected robots.txt, and continued through a frontier while avoiding infinite loops.",
      },
      {
        title: "Indexer design",
        body:
          "The inverted index mapped words to URL identifiers and additional metadata. Byte positions were stored separately so the system could load only the needed slice instead of holding the entire index in memory.",
      },
      {
        title: "Ranking model",
        body:
          "TF-IDF values, cosine similarity, and special-character weighting were combined to return the top five scored URLs for a query.",
      },
    ],
  },
  {
    slug: "pantry-pal",
    title: "Pantry Pal",
    label: "Mobile recipe recommendation app",
    year: "2023",
    role: "Mobile product developer",
    status: "Prototype with recommendation logic",
    cover: "/assets/legacy/PantryPalFrontPage.JPG",
    images: ["/assets/legacy/PantryPalFrontPage.JPG", "/assets/legacy/image3.png", "/assets/legacy/PantryPalDatabaseSchema.JPG"],
    tags: ["Flutter", "Dart", "MongoDB Realm", "Spoonacular API", "Mobile UX"],
    summary:
      "A mobile recipe app that recommends meals based on ingredients, liked/disliked recipes, preparation time, and eating patterns.",
    challenge:
      "The app had to combine pantry data, user preference signals, contextual timing, and a recipe dataset into useful meal recommendations and timely notifications.",
    contribution:
      "I worked on the recommendation model, mobile app experience, pantry/recipe interface logic, data collection structure, and MongoDB Realm-backed architecture.",
    outcome:
      "The prototype demonstrated a personalized recommendation flow that could refine itself as users added ingredients and rated recipes.",
    highlights: [
      "Recipes scored by owned ingredients, preparation time, and similarity to liked/disliked recipes.",
      "Notifications scheduled around estimated dining times and recipe preparation needs.",
      "Pantry page for ingredient search and pantry management.",
      "MongoDB Realm and Atlas storing users, recipes, and ingredients.",
    ],
    analysis: [
      {
        title: "Recommendation model",
        body:
          "The system scored recipes from a candidate pool using pantry overlap, prep time, user likes/dislikes, and dietary constraints. Ingredient-to-recipe relationships functioned like an inverted index for filtering.",
      },
      {
        title: "Frontend structure",
        body:
          "The app centered on two main pages: pantry management and recipe browsing. Recipe carousels surfaced recommended, liked, and disliked meals while interactions updated the user's personal model.",
      },
      {
        title: "Backend structure",
        body:
          "MongoDB Realm stored user preferences, recipe details, ingredient relationships, and scheduling data so the app could retain history after closing.",
      },
    ],
  },
  {
    slug: "multi-reader-audiobook",
    title: "Multi-Reader Audiobook",
    label: "Community narration concept",
    year: "Concept",
    role: "Product concept designer",
    status: "Conceptual stage",
    cover: "/assets/legacy/work-details-image-1.jpg",
    images: ["/assets/legacy/work-details-image-1.jpg", "/assets/legacy/work-details-image-2.jpg"],
    tags: ["Product concept", "Community design", "Rewards", "Audiobook UX"],
    summary:
      "A collaborative audiobook concept where community readers record segments and receive app-specific rewards for participation.",
    challenge:
      "Audiobooks with multiple voices can be expensive to produce. The concept explores how a community participation model could create diverse narration without relying entirely on machine-generated voices.",
    contribution:
      "I defined the reader selection concept, feedback survey loop, participation rewards, and future enhancement path.",
    outcome:
      "The idea became a product concept ready for algorithm design, reward-system integration, and playback experience prototyping.",
    highlights: [
      "Randomly selects community readers to record audiobook segments.",
      "Collects post-listening surveys about story characters and content quality.",
      "Rewards participation with ad-free time, chapter access, badges, or leaderboard recognition.",
      "Plans future matching between narrators and fitting story segments.",
    ],
    analysis: [
      {
        title: "Community mechanism",
        body:
          "Instead of treating narration as a single production bottleneck, the concept turns reading into a participatory loop where users contribute segments and receive value inside the app.",
      },
      {
        title: "Reward design",
        body:
          "Rewards such as ad-free time, free chapters, badges, and leaderboards create a lightweight incentive structure without requiring external payments.",
      },
      {
        title: "Future direction",
        body:
          "Next steps include reader selection algorithms, professional narrator support for premium sections, and feedback-informed quality control.",
      },
    ],
  },
];

export const featuredProjects = projects.slice(0, 4);

export const strengths = [
  {
    title: "AI-native thinking",
    text: "Transforms ambiguous workflows into AI-assisted product experiences with clear user intent and practical technical constraints.",
  },
  {
    title: "Visual systems",
    text: "Builds restrained, high-contrast interfaces, campaign surfaces, and modular design rules that keep brands recognizable.",
  },
  {
    title: "Brand direction",
    text: "Shapes identity, voice, and presentation logic so a product feels precise before a user reads the supporting copy.",
  },
  {
    title: "Operational design",
    text: "Turns SOPs, stakeholder needs, and team rituals into repeatable systems that can be measured, taught, and improved.",
  },
  {
    title: "Prototype fluency",
    text: "Moves comfortably between design intent and front-end implementation across JavaScript, HTML/CSS, SQL, and API workflows.",
  },
  {
    title: "Executive narrative",
    text: "Communicates progress, risks, and decisions through crisp briefs that help teams align without slowing delivery.",
  },
];
