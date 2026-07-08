export const contact = {
  email: "lanceprofe@gmail.com",
  phone: "(415) 519-1480",
  location: "Bay Area, CA",
  linkedin: "https://www.linkedin.com/in/lance-li-3158aa142/",
  github: "https://github.com/DevLance112",
  resume: "/assets/files/lance-li-resume-2026.pdf",
};

export const metrics = [
  { value: "909", label: "individuals served through workforce initiatives" },
  { value: "792", label: "successful employment placements coordinated" },
  { value: "87%", label: "job placement rate across the workforce program" },
  { value: "95%", label: "work placement rate among Health Care Academy graduates" },
];

export const timeline = [
  {
    role: "Project Coordinator",
    company: "Self-Help for the Elderly",
    date: "Jan 2026 - Present",
    type: "Health Care Academy / Workforce operations",
    detail:
      "Leads Health Care Academy operations for 82 students through SOP design, curriculum oversight, stakeholder coordination, and graduate placement tracking.",
  },
  {
    role: "Career Advisor",
    company: "Self-Help for the Elderly",
    date: "May 2025 - Jan 2026",
    type: "Career strategy / Public service",
    detail:
      "Coordinated workforce support for 909 individuals and 792 successful employment placements, contributing to an 87% job placement rate.",
  },
  {
    role: "Lead Developer and Founder",
    company: "AI Secretary",
    date: "Aug 2024 - Present",
    type: "AI product / Service automation",
    detail:
      "Builds an AI-powered resume builder and virtual secretary for job-description parsing, call screening, appointment scheduling, and calendar sync.",
  },
  {
    role: "Team Lead and Administrative Coordinator",
    company: "NewU InscribeX",
    date: "Mar 2024 - Jul 2024",
    type: "Web3 product / Team delivery",
    detail:
      "Directed a four-person, eight-week product cycle with schedules, stakeholder briefings, milestone reports, 100% on-time delivery, and reduced project risk.",
  },
];

export const skillStacks = [
  {
    title: "Project Management",
    skills: ["Agile/Scrum", "Jira", "Airtable", "Trello", "Slack", "Zoom/Teams"],
  },
  {
    title: "AI Applications",
    skills: ["Job description parsing", "Resume optimization", "Call screening", "Calendar sync"],
  },
  {
    title: "Full-Stack Development",
    skills: ["React", "JavaScript", "HTML/CSS", "Flutter", "API integration", "Git"],
  },
  {
    title: "Operations",
    skills: ["SOP design", "Stakeholder briefings", "Curriculum oversight", "Time management", "Team leadership"],
  },
  {
    title: "Data and Backend",
    skills: ["PostgreSQL", "Strapi v5", "Firebase", "MongoDB", "MySQL", "NoSQL"],
  },
  {
    title: "Technical Foundation",
    skills: ["Python", "Java", "C++/C#", "SQL", "AWS", "GCP", "Ubuntu Linux", "API tuning"],
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
    article: {
      lede:
        "NewU InscribeX started as a broad Web3 product idea with social communication, wallet identity, marketplace behavior, and token-adjacent tools all competing for attention. The work became a study in turning a noisy product vision into a system that a small team could actually build.",
      intro: [
        "The challenge was not simply to draw screens or list features. The project needed a believable path through wallet login, chat, friend management, group conversations, marketplace browsing, token detail pages, and BTC-GPT style query flows. Each part had to feel connected, because trust breaks quickly when a Web3 product asks people to move between identity, messaging, and transaction-heavy actions.",
        "My role sat between coordination and product structure. I organized weekly schedules, prepared stakeholder updates, tracked blockers, shaped requirements, and helped the team reason through interface flows and Firebase data relationships. That combination mattered because the project could only move if the design, engineering, and sponsor conversations stayed aligned.",
      ],
      sections: [
        {
          title: "Making a Broad Web3 Idea Readable",
          paragraphs: [
            "The first step was to make the product understandable before implementation began. I helped translate the sponsor's vision into personas, scenarios, and user journeys that showed how someone would arrive, connect a wallet, read public conversations, send direct messages, create a group, and eventually encounter marketplace or token interactions. That mapping gave the team a shared language for what the product was trying to become.",
            "This early structure also exposed the places where the experience could become confusing. A wallet address can act like an identity, but it does not automatically feel human. A marketplace can create excitement, but it also increases the need for clear states and careful language. By writing those tensions down, the team could design for them instead of discovering them late.",
          ],
        },
        {
          title: "Turning Requirements Into Product Behavior",
          paragraphs: [
            "Once the main paths were visible, I documented the functional requirements in a way that connected product intent to real behavior. Wallet login, direct messaging, group chat, marketplace buying and selling, staking and lending concepts, crypto bookmarking, editable usernames, and BTC-GPT prompts were described as flows rather than isolated tasks. Each flow included ordinary use, alternate paths, and exception states.",
            "That approach made the requirements useful for engineering. Instead of asking the team to build a generic chat product or a generic marketplace, the documentation showed what the user expected to happen at each point. It also gave stakeholder conversations a stable reference, which helped reduce drift across the sprint.",
          ],
        },
        {
          title: "Designing for Trust and Density",
          paragraphs: [
            "The interface had to carry a lot of information without making the product feel unsafe or chaotic. Screens for home, login, chat, friends, group creation, profile, marketplace, token detail, and bid behavior all needed to live in one coherent system. I focused on making each surface readable enough that users could understand where they were and what kind of action they were taking.",
            "Security and safety were treated as product qualities, not just technical requirements. Wallet-based actions can create consequences that are difficult to reverse, so the non-functional requirements emphasized scalability, robustness, maintainability, usability, and clear states. Those details gave the product more credibility than a feature list alone could provide.",
          ],
        },
        {
          title: "Shaping the Data Around Identity",
          paragraphs: [
            "The Firebase structure followed the social identity model of the product. Wallet addresses became meaningful document identifiers, while global chat, individual chat, group chat, friend lists, and message objects formed the core relationships. That structure let the team think about the product as a set of connected social states rather than a pile of disconnected screens.",
            "By the end of the sprint, the most valuable deliverable was not only the interface or the database diagram. It was the shared product system: the requirements, flows, team cadence, and technical reasoning that made future development possible.",
          ],
        },
      ],
      closingTitle: "Where the Sprint Landed",
      closing: [
        "The team delivered the planned goals on time because the work stayed organized around a clear product story. NewU InscribeX remained ambitious, but it no longer felt shapeless. The project ended with a documented Web3 communication platform that connected identity, chat, marketplace behavior, and future social features in a form the team could explain and extend.",
      ],
    },
  },
  {
    slug: "ai-resume-builder",
    title: "AI Secretary and Resume Builder",
    label: "AI career and service automation",
    year: "2024 - Present",
    role: "Lead Developer / Founder",
    status: "Resume builder in final testing; assistant passes 80% manual tests",
    cover: "/assets/project-ai-secretary.png",
    images: ["/assets/project-ai-secretary.png", "/assets/project-resume-builder.png"],
    tags: ["React", "PostgreSQL", "Strapi v5", "AI Integration", "Calendar Sync", "Render"],
    summary:
      "A multifunctional AI product pairing job-specific resume optimization with a virtual secretary for call screening, appointment scheduling, and calendar sync.",
    challenge:
      "The product needed to make two high-friction workflows feel controllable: tailoring resumes to specific job descriptions and handling inbound scheduling or unwanted calls without losing user trust.",
    contribution:
      "I led the product concept, 12-week development cycles, resume optimization flow, virtual secretary workflow, PostgreSQL schema, Strapi v5 content layer, front-end structure, and manual testing plan.",
    outcome:
      "The resume builder reached final launch preparation, and the virtual secretary is currently passing 80% of manual testing cases.",
    highlights: [
      "Implemented job description parsing for keyword extraction and resume matching.",
      "Created AI-driven suggestions for resume sections and automated optimization logic.",
      "Initiated call screening, appointment scheduling, and calendar-sync workflows.",
      "Architected PostgreSQL data supervised through Strapi v5 and hosted on Render.com.",
    ],
    analysis: [
      {
        title: "Job-matched resume flow",
        body:
          "The resume builder parses job descriptions, extracts role-specific signals, and turns those findings into practical resume edits. The key design problem is making automation useful without turning the candidate's voice into generic output.",
      },
      {
        title: "Virtual secretary workflow",
        body:
          "The secretary workflow focuses on incoming calls, unwanted-caller screening, appointment scheduling, and calendar sync. Manual testing is being used to verify whether the assistant handles real service states reliably.",
      },
      {
        title: "System architecture",
        body:
          "The backend uses PostgreSQL for structured candidate, resume, and workflow data, Strapi v5 for content supervision, and Render.com for hosting. The schema is planned for scalability, data integrity, and later iteration.",
      },
      {
        title: "Development process",
        body:
          "The product follows 12-week development cycles with market research, user need analysis, technical requirement planning, agile implementation, testing, optimization, and feedback loops.",
      },
    ],
    article: {
      lede:
        "AI Secretary and Resume Builder grew from two practical service problems: candidates need resumes that adapt to specific jobs, and busy people need help screening calls and scheduling appointments without giving up control.",
      intro: [
        "The career side of the product avoids the flat, generic feeling that many AI resume tools create. Job descriptions are messy, repetitive, and full of signals that matter differently depending on the role. The interface needs to parse that material, surface useful guidance, and help users revise their resumes without making the process feel like a black box.",
        "The service side extends that same logic into a virtual secretary: incoming calls, unwanted-caller screening, appointment scheduling, and calendar sync. I worked across the concept, data architecture, AI workflow, Strapi content layer, PostgreSQL schema, front-end structure, and manual testing plan.",
      ],
      sections: [
        {
          title: "Starting With the Job Description",
          paragraphs: [
            "The job description became the center of the product flow. Instead of asking users to guess which words matter, the system parses the posting, extracts repeated skills and role-specific signals, and turns those findings into suggestions for resume sections. The goal is not to blindly stuff keywords into a document. It is to show the user what the employer appears to value and where their current resume may be underselling that match.",
            "This creates a different rhythm from a traditional resume builder. The resume is no longer a static form. It becomes a working draft that responds to a specific opportunity, with AI acting as an editor and comparison layer rather than an invisible author.",
          ],
        },
        {
          title: "Keeping Automation Understandable",
          paragraphs: [
            "A useful AI tool needs to reveal enough of its reasoning for users to trust it. I designed the optimization flow around concrete edits: section suggestions, wording improvements, keyword alignment, and job-specific adjustments. The interface needed to help users see what changed and why, especially when a recommendation affected the tone or emphasis of their experience.",
            "That visibility also matters in the secretary flow. Screening calls and scheduling appointments are personal service actions, so the product has to make decisions legible and recoverable. The assistant is currently passing 80% of manual testing cases, which keeps the development loop grounded in real behavior rather than demo-only success.",
          ],
        },
        {
          title: "Building the Content System Behind It",
          paragraphs: [
            "The backend pairs PostgreSQL with Strapi v5 so candidate data, resume content, job descriptions, and workflow outputs can remain structured. I planned the schema for iteration, not just for the first release, because the product becomes more useful when it can remember versions, support feedback, and evolve the way it scores alignment or handles service states.",
            "Render.com supports the deployment path, while the development process follows a test-and-improve cycle. The product is still moving through final testing, which makes the feedback loop especially important. Every real user interaction can reveal whether the AI guidance feels helpful, too vague, or too forceful.",
          ],
        },
      ],
      closingTitle: "What the Product Is Proving",
      closing: [
        "The current version shows how AI can make career documents and service tasks more specific without removing user control. The strongest direction is not full automation. It is a guided system where a person can bring in a messy workflow, understand what the AI is doing, and leave with a cleaner result.",
      ],
    },
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
    article: {
      lede:
        "OCR and Translate was a deliberately fast build: a small web utility made to test how much useful product could be created in a few focused hours with AI-assisted development and careful debugging.",
      intro: [
        "The idea was direct. A user uploads an image, the app extracts the visible text, and the extracted lines are translated into a selected language. That sounds simple until the interface has to handle file input, preview states, OCR quality, translation output, and mobile layout without turning into a confusing developer demo.",
        "I built the prototype with Flask, Tesseract OCR, googletrans, HTML, and CSS. The speed of the build was part of the experiment, but the real value was in turning generated code into a working, readable tool that someone could understand without instructions.",
      ],
      sections: [
        {
          title: "A Utility That Needed to Stay Small",
          paragraphs: [
            "The interface stayed intentionally compact because the task was narrow. Upload an image, choose a language, see the image, and read the original text beside the translated result. Keeping those pieces visible at the same time made the tool feel immediate. The user did not need to navigate a multi-step workflow to understand whether the OCR worked.",
            "On mobile, the same content stacks so the preview and translation remain legible. That responsive behavior mattered because many image-translation use cases happen from a phone, where users may be working from screenshots, signs, documents, or quick photos.",
          ],
        },
        {
          title: "Connecting OCR to Translation",
          paragraphs: [
            "The backend used Flask because the project needed a light server that could accept uploads and return results quickly. Tesseract handled the text extraction, and googletrans handled translation. The app displayed results line by line so users could compare original and translated text without losing the structure of the source image.",
            "Temporary session data was handled through cookies rather than a heavier storage layer. For a prototype, that choice kept the system simple and avoided collecting more data than the task required.",
          ],
        },
        {
          title: "The Useful Part of AI-Assisted Speed",
          paragraphs: [
            "The project was also a practical test of how AI can accelerate implementation without removing the need for judgment. Generated code can create momentum, but it still has to be read, debugged, and shaped into a coherent experience. In this build, the useful work was deciding what to keep, what to simplify, and how to make the final interface feel intentional.",
          ],
        },
      ],
      closingTitle: "What the Prototype Showed",
      closing: [
        "OCR and Translate is not presented as a large platform. It is a compact proof that a focused AI-assisted workflow can become a usable tool quickly when the scope is clear and the developer keeps control of the user experience.",
      ],
    },
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
    article: {
      lede:
        "The Movie Browsing Website was a full-stack systems project built around a large movie dataset, secure user sessions, and the practical reality of making database-backed search feel fast enough for everyday browsing.",
      intro: [
        "The application served more than twenty thousand movies through a Java servlet architecture hosted on Tomcat. It needed login, session handling, HTTPS, search, browsing, and enough backend optimization that users could move through the catalog without feeling the weight of the database underneath.",
        "My work covered the cloud setup, Tomcat and MySQL infrastructure, servlet APIs, XML import pipeline, authentication protections, query behavior, and performance improvements. The project was archived after its AWS instance was no longer active, but the build remains a strong example of backend and application fundamentals.",
      ],
      sections: [
        {
          title: "Building Around a Real Dataset",
          paragraphs: [
            "The project became interesting once the movie data stopped being sample content and started behaving like a real catalog. XML files were parsed with DOM and SAX approaches, then inserted into MySQL in batches. Users, movies, stars, and relationships all had to be stored in a way that supported browsing and search without making every page request expensive.",
            "That data pipeline changed the nature of the work. The site was not just a front-end exercise. It required the backend to manage large imports, preserve relationships, and serve consistent results through servlet endpoints.",
          ],
        },
        {
          title: "Making the Service Safer",
          paragraphs: [
            "Authentication and session behavior were treated as first-class parts of the application. Password encryption, reCAPTCHA, HTTPS, sessions, and sticky cookies all contributed to a more realistic login flow. Sensitive operations were moved through POST requests, and database access used prepared statements to reduce injection risk.",
            "These decisions made the website feel closer to a deployed service than a classroom demo. Users could log in, search, and move through pages with the same expectations they would bring to a normal web application.",
          ],
        },
        {
          title: "Optimizing for Repeated Search",
          paragraphs: [
            "Search performance became a separate design problem. Connection pooling, master/slave architecture, prepared statement reuse, cloud comparison, and FULLTEXT fuzzy search all helped reduce response time. The target was not theoretical elegance. It was the simple user feeling that search results arrive quickly and consistently.",
            "The website achieved consistent sub-500ms response time, and an Android version retained the core login and search features. That extension showed that the system could support more than one client once the underlying APIs and data model were stable.",
          ],
        },
      ],
      closingTitle: "Why This Build Still Matters",
      closing: [
        "The archived AWS instance means the project now lives as documentation and screenshots, but the engineering lessons remain current. It taught the practical relationship between data import, secure sessions, query design, deployment, and the small optimizations that make a database-backed product feel responsive.",
      ],
    },
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
    article: {
      lede:
        "Webcrawler, Indexer, Ranker was a six-week search systems project that rebuilt the core pieces of a search engine from the ground up: crawling, filtering, indexing, scoring, and returning ranked URLs quickly.",
      intro: [
        "The project began with a UCI network snapshot and a practical constraint: the system had to crawl safely, avoid duplicates, store a compact inverted index, and answer queries without loading the entire world into memory. That made the work less about a polished interface and more about the mechanics that determine whether search feels responsive.",
        "I worked on crawler logic, URL validation, similarity detection, inverted index storage, byte-position lookup, TF-IDF scoring, and cosine similarity ranking. Each piece affected the others, so the project required thinking about the whole pipeline instead of one isolated algorithm.",
      ],
      sections: [
        {
          title: "Crawling Without Losing Control",
          paragraphs: [
            "The crawler started from a bounded set of domains and expanded through discovered hyperlinks. It had to filter invalid URLs, avoid repeated pages, understand redirects, and respect robots.txt rules. Those constraints kept the crawler from becoming noisy or unsafe as the frontier grew.",
            "Near-duplicate detection was another form of control. Three-gram fingerprinting helped the system avoid wasting time on pages that were effectively the same. That made later indexing cleaner and reduced the chance that ranking would be distorted by repeated content.",
          ],
        },
        {
          title: "Turning Pages Into an Index",
          paragraphs: [
            "After crawling, the system needed a way to retrieve term matches quickly. The inverted index mapped words to URL identifiers and related metadata, while byte positions let the search process jump directly to the needed postings. That design avoided loading the entire index into memory every time a user searched.",
            "This storage decision changed the feel of the final search tool. A smaller interface can still feel powerful when the underlying lookup is efficient, and the index made that possible.",
          ],
        },
        {
          title: "Ranking the Results",
          paragraphs: [
            "The ranking model combined TF-IDF, cosine similarity, and special-character weighting to score documents for a query. The goal was to return the top results quickly while preserving enough relevance that the results made sense to a user.",
            "The final system returned top-ranked URLs in under 100ms. That number mattered because it connected the algorithmic work to user perception. Search is judged by relevance, but it is also judged by the feeling that the system is ready when the user is.",
          ],
        },
      ],
      closingTitle: "What the System Clarified",
      closing: [
        "The project made search feel less mysterious by breaking it into visible decisions: how pages are accepted, how words are stored, how duplicates are reduced, and how scores are calculated. The final prototype was academic in scope, but the engineering pattern was the same one larger systems depend on.",
      ],
    },
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
    article: {
      lede:
        "Pantry Pal was a mobile recipe recommendation prototype built around a common everyday question: what can I cook with what I already have, and what should the app learn from the meals I keep choosing?",
      intro: [
        "The app needed to combine pantry data, recipe data, preparation time, liked and disliked meals, dietary preferences, and eating patterns into suggestions that felt personal. A recipe app can quickly become a static catalog, so the main challenge was to make the recommendation behavior feel adaptive.",
        "I worked on the recommendation model, mobile experience, pantry and recipe interface logic, data collection structure, and MongoDB Realm architecture. The result was a prototype that could use user behavior as part of the product rather than treating every session as a fresh start.",
      ],
      sections: [
        {
          title: "Starting From the Pantry",
          paragraphs: [
            "The pantry page gave the recommendation model its strongest context. Users could search for ingredients, manage what they had, and create a source of truth for what the app should prioritize. Recipes were then scored against owned ingredients, preparation time, preferences, and constraints.",
            "That ingredient-to-recipe relationship functioned like an inverted index. Instead of making the app search blindly through every recipe, the model could use pantry overlap to narrow the field and rank meals that were actually possible for the user.",
          ],
        },
        {
          title: "Letting Preferences Change the Model",
          paragraphs: [
            "The recipe experience used carousels for recommended, liked, and disliked meals. Those interactions were not just interface feedback. They became signals that could improve future recommendations, especially when combined with preparation time and dietary constraints.",
            "This created a loop between browsing and personalization. The more the user interacted with recipes, the more the app could understand what should appear again, what should be avoided, and what kind of meals fit the user's routine.",
          ],
        },
        {
          title: "Designing for Timing and Memory",
          paragraphs: [
            "Food recommendations depend on timing. A meal that is technically relevant may not be useful if it appears too late for preparation. Pantry Pal explored notifications based on estimated dining times and recipe preparation needs, so the app could prompt users while there was still time to act.",
            "MongoDB Realm and Atlas supported the memory of the product: users, recipes, ingredients, preferences, and scheduling data. That persistence let the prototype behave more like a personal assistant than a one-time recipe search.",
          ],
        },
      ],
      closingTitle: "Where the Prototype Points",
      closing: [
        "Pantry Pal showed how recommendation logic can become more useful when it is tied to the user's real inventory and habits. The project is still a prototype, but the product direction is clear: combine pantry awareness, preference learning, and timely prompts so meal suggestions feel practical instead of generic.",
      ],
    },
  },
];

export const featuredProjects = projects.slice(0, 4);

export const strengths = [
  {
    title: "AI application thinking",
    text: "Transforms ambiguous service and career workflows into AI-assisted product experiences with clear user intent and practical technical constraints.",
  },
  {
    title: "Project management",
    text: "Coordinates schedules, stand-ups, task ownership, milestone reports, and blocker visibility so teams can deliver against real timelines.",
  },
  {
    title: "Full-stack execution",
    text: "Moves between front-end interfaces, API workflows, PostgreSQL, Strapi, Firebase, MongoDB, MySQL, and cloud deployment decisions.",
  },
  {
    title: "Operational design",
    text: "Turns SOPs, stakeholder needs, curriculum oversight, and team rituals into repeatable systems that can be measured, taught, and improved.",
  },
  {
    title: "Technical-business bridge",
    text: "Connects business administration, computer science, and information systems training to product decisions that are clear to technical and non-technical teams.",
  },
  {
    title: "Stakeholder narrative",
    text: "Communicates progress, risks, and decisions through concise briefings that help teams align without slowing delivery.",
  },
];
