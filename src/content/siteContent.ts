import type { Article, Capability, ContentImage, Experience, Project, Section, Source } from './types';
import { rankerArticle } from './rankerArticle.ts';
import { githubProjects } from './githubProjects.ts';

// Editorial reconstruction date, not the original publication date of the source material.
export const contentUpdatedAt = '2026-09-06';
const resumeSource: Source = {
  label: 'Lance Li — 2026 resume',
  href: '/assets/files/lance-li-resume-2026.pdf',
};
const legacy = (file: string, label: string): Source => ({
  label,
  href: `https://github.com/DevLance112/DevLance112.github.io/blob/main/old_content/devlance112.github.io/${encodeURIComponent(file)}`,
});
const section = (id: string, title: string, paragraphs: string[], extra: Partial<Section> = {}): Section => ({ id, title, paragraphs, ...extra });
const asset = (src: string, alt: string, caption: string): ContentImage => ({ src, alt, caption });

export const profile = {
  name: 'Lance Li',
  firstName: 'Lance',
  lastName: 'Li',
  role: 'Full-stack Engineer · Product & Project Delivery',
  positioning: 'I turn ambiguous, real-world problems into working products and systems.',
  bio: 'I connect requirements, product decisions, and implementation. My work spans AI applications, full-stack systems, and the coordination that helps a team deliver.',
  location: 'Bay Area, California',
  email: 'lanceprofe@gmail.com',
  github: 'https://github.com/DevLance112',
  linkedin: 'https://www.linkedin.com/in/lance-li-3158aa142/',
  resume: '/assets/files/lance-li-resume-2026.pdf',
  availability: 'Let’s discuss your next project.',
  focus: 'AI applications, full-stack engineering, and FDE-oriented delivery',
  timezone: 'America/Los_Angeles',
  education: [
    'B.S. Computer Science — University of California, Irvine, June 2024',
    'B.A. Business Administration, Information Systems — University of California, Irvine, June 2024',
  ],
};

const aiSource = legacy('AI-Resume-Builder-Detail.html', 'Original AI Resume Builder project record');
const newuSource = legacy('NewU-InscribeX-Detail.html', 'Original NewU InscribeX project record');
const movieSource = legacy('Movie-Browser-Detail.html', 'Original Movie Browsing Website project record');
const searchSource = legacy('Webcrawler-Indexer-Ranker-Project-Detail.html', 'Original crawler, indexer, and ranker project record');
const pantrySource = legacy('Pantry-Pal-Detail.html', 'Original Pantry Pal project record');
const ocrSource = legacy('ORC and Translate.html', 'Original OCR and Translate project record');
const audiobookSource = legacy('Multi-Reader-Audiobook.html', 'Original Multi-Reader Audiobook concept record');

export const projects: Project[] = [
  ...githubProjects,
  {
    slug: 'ai-resume-builder',
    title: 'AI Secretary & Resume Builder',
    subtitle: 'From job requirements to an AI-assisted workflow',
    summary: 'A resume builder that translates job descriptions into targeted editing suggestions, with a related virtual secretary experiment for calls and scheduling.',
    problem: 'Make job-specific resume editing and routine scheduling easier to manage without hiding the work behind a single AI output.',
    role: 'Lead Developer & Founder',
    team: '',
    date: 'Aug 2024 – present',
    duration: '12-week development cycles',
    category: 'AI & Automation',
    tags: ['AI applications', 'Product development', 'Full-stack'],
    techStack: ['React', 'PostgreSQL', 'Strapi v5', 'Render'],
    status: 'In testing',
    featured: true,
    coverImage: asset('/assets/project-resume-builder.png', 'Existing portfolio illustration for the resume builder', 'Resume builder illustration.'),
    outcome: 'Resume builder in final testing; virtual secretary passed 80% of manual test cases.',
    relatedArticles: [],
    sources: [resumeSource, aiSource],
    sections: [
      section('overview', 'Overview', [
        'This independent product combines job-specific resume assistance with a virtual secretary for incoming calls, appointment scheduling, and calendar synchronization.',
        'I led product development from August 2024, working in 12-week cycles. The resume builder reached final testing, while the secretary remained in manual testing.',
      ]),
      section('context', 'Context', [
        'The resume builder is organized around a specific input: a job description. Instead of offering generic writing assistance, the documented product extracts role-specific information and uses it to suggest changes to resume sections.',
        'The related secretary work extends the product into service automation: deciding which incoming calls need attention and connecting appointments to a user’s calendar.',
      ]),
      section('problem', 'Problem', [
        'The product problem is the gap between a broad candidate profile and the requirements of one particular job. The software needs to connect those two inputs and present useful editing suggestions in an interface that remains understandable.',
        'For the secretary, the problem is routing routine calls and scheduling work into a usable sequence. Success depends on correct workflow behavior as well as generated language.',
      ]),
      section('constraints', 'Constraints', [
        'Development ran in 12-week cycles with a React interface, PostgreSQL database, Strapi v5, and Render hosting. The resume builder reached launch preparation and testing.',
      ]),
      section('my-role', 'My Role', [
        'I led product development, job-description parsing, resume tailoring, and PostgreSQL schema implementation. I also initiated the virtual secretary workflow.',
        'The product includes React form state, modular components, live preview behavior, and a content management layer.',
      ]),
      section('discovery', 'Discovery', [
        'Planning covered market research, user needs, a development timeline, and technical requirements. Feedback informed changes during implementation.',
      ]),
      section('problem-breakdown', 'Problem Breakdown', [
        'The resume workflow follows five stages: collect a job description, extract relevant terms, generate section-level suggestions, update the resume, and preview the result.',
      ], {
        diagram: { title: 'Resume workflow', nodes: ['Job description', 'Keyword extraction', 'Section suggestions', 'Resume editing', 'Live preview'], caption: 'From job requirements to an editable resume.' },
      }),
      section('key-decisions', 'Key Decisions', [
        'The product connects suggestions to a specific job description, then gives the user an editor and live preview to review each change.',
        'PostgreSQL stores structured resume data, with Strapi v5 providing a content management layer.',
      ]),
      section('final-solution', 'Final Solution', [
        'The resume builder uses a React frontend for form handling, modular components, job-description parsing, AI-generated section suggestions, and real-time preview. PostgreSQL stores structured data under a Strapi v5 layer, with Render used for hosting.',
        'The secretary workflow covers incoming calls, unwanted-caller screening, scheduling, and calendar synchronization.',
      ], { bullets: ['Resume workflow: job requirements → suggestions → editable resume → preview.', 'Data layer: PostgreSQL schema supervised through Strapi v5.', 'Secretary workflow: call handling, screening, appointment scheduling, and calendar sync.'] }),
      section('delivery', 'Delivery', [
        'Development combined planning, implementation, regular testing, optimization, and feedback. The resume builder reached final testing and launch preparation.',
        'The virtual secretary passed 80% of manual testing cases.',
      ]),
      section('outcome', 'Outcome', [
        'The resume builder reached final testing, and the related secretary workflow underwent manual evaluation.',
      ]),
      section('reflection', 'Reflection', [
        'A useful next step is to compare representative job descriptions with expected suggestions, actual output, and user corrections. The same approach can clarify the secretary workflow’s remaining test failures.',
      ]),
    ],
  },
  {
    slug: 'newu-inscribex',
    title: 'NewU InscribeX',
    subtitle: 'Giving a broad Web3 product a delivery structure',
    summary: 'A sponsored communication platform connecting wallet identity, messaging, and marketplace flows, with explicit requirements and a small-team delivery cadence.',
    problem: 'Turn a broad sponsor vision into defined user flows, a workable data model, and a coordinated development plan.',
    role: 'Team Lead / Project Coordinator',
    team: 'Cross-functional team',
    date: 'Mar – Jul 2024',
    duration: '8-week cycle in resume; 10 weeks in project record',
    category: 'Product & Delivery',
    tags: ['Stakeholder alignment', 'Systems thinking', 'Web3'],
    techStack: ['JavaScript', 'React', 'Firebase', 'Cloud Firestore'],
    status: 'Development goals delivered',
    featured: true,
    coverImage: asset('/assets/legacy/NewU-InscribeX-img/image20.png', 'NewU InscribeX interface from the original project archive', 'NewU InscribeX interface from the team project.'),
    outcome: 'Delivered planned development goals on time, alongside requirements, screens, and database design work.',
    relatedArticles: ['profile-data-read-cost'],
    sources: [resumeSource, newuSource],
    sections: [
      section('overview', 'Overview', [
        'NewU InscribeX was a sponsored Web3 communication project connecting wallet-based identity with social and marketplace features. The scope included global and direct messaging, friends, group chats, buying and selling flows, and proposals around staking, lending, and BTC-GPT.',
        'As Team Lead / Project Coordinator from March to July 2024, I organized work around personas, scenarios, requirements, interface designs, and the data structure.',
      ]),
      section('context', 'Context', [
        'The original record names Phillip Liu as the sponsor and lists Santiago Palomares, Xiaohua Zhang, Anthony Wen, and Husain Wafaie as collaborators. It also states that an existing Figma design came from another team.',
        'This was a coordination problem as well as a software problem: sponsor expectations, an inherited design direction, wallet interactions, and several feature families had to become shared implementation work.',
      ]),
      section('problem', 'Problem', [
        'Wallet identity does not by itself define a communication product. The team needed to specify what happened when a user connected a wallet, entered a global conversation, added a friend, or started a group.',
        'The marketplace scope also introduced safety expectations around trades and transfers. Confirmation, failure states, and platform constraints became part of the requirements.',
      ]),
      section('constraints', 'Constraints', [
        'Firebase was a sponsor requirement. The team also worked with a JavaScript dependency, an unresolved TypeScript transition, limited frontend design experience, an inherited Figma design, and desktop Chrome as the primary client.',
        'Avalanche integration depended on further API work. Login and chat were planned as centralized services while the team explored decentralized features.',
      ]),
      section('my-role', 'My Role', [
        'I coordinated daily stand-ups, task assignments, progress check-ins, weekly schedules, meeting agendas, milestone reports, and stakeholder briefings.',
        'The team developed the architecture together; the CTO recommended the shift toward centralized profile reads.',
      ]),
      section('discovery', 'Discovery', [
        'The project record organizes discovery into personas and scenarios, then describes user actions as use cases with basic, alternate, and exception flows. Communication, marketplace transactions, staking, lending, and BTC-GPT queries each receive their own behavioral definition.',
        'Non-functional requirements distinguish security, scalability, and safety as high priorities. That structure gives sponsor and engineering discussions something more precise than a feature name to review.',
      ]),
      section('problem-breakdown', 'Problem Breakdown', [
        'The archive separates the social system into users, messages, friend relationships, global chat, direct chat, and group membership. Each collection serves a user-visible relationship or state.',
        'The map shows how wallet identity connects to profiles, relationships, conversations, and message history.',
      ], { diagram: { title: 'From identity to conversation', nodes: ['Wallet identity', 'User profile', 'Friend relationships', 'Direct / group chat', 'Message history'], caption: 'A map of the project’s Firebase data relationships.' } }),
      section('options-considered', 'Options Considered', [
        'The strongest recorded tradeoff concerns usernames and profile pictures. The team initially copied those values into other records, including messages. As profile editing approached, it considered storing profile data once and reading it wherever needed.',
        'The archive credits the CTO with recommending centralized profile reads so edits would appear promptly. It also records the cost of that direction: frequent Firebase calls.',
      ], { table: { headers: ['Approach', 'Reason in the source', 'Observed or expected cost'], rows: [
        ['Copy profile values into messages', 'Initial implementation before editable profiles', 'Copies need updating when a profile changes'],
        ['Read from a single user record', 'Keep displayed profile information timely', 'More API calls; migration was still in progress'],
        ['Introduce Redis caching', 'Reduce redundant Firebase calls', 'Deferred until core functionality was complete'],
      ] } }),
      section('key-decisions', 'Key Decisions', [
        'The identity model uses wallet addresses as user document identifiers, allowing the client to address a known user record after wallet login.',
        'For editable profiles, the team moved toward a single source for profile information. The archive describes the migration as halfway complete at the time of writing, then explicitly places Redis optimization after core feature completion.',
        'The team chose to finish core functionality before revisiting read cost with Redis caching.',
      ]),
      section('final-solution', 'Final Solution', [
        'The documented solution uses Firebase / Cloud Firestore for users, chat history, friend lists, and group relationships. Wallet-linked user documents connect profile information to messages and membership records.',
        'The interface designs cover home, wallet login, chats, friends, group creation, profiles, marketplace browsing, asset details, and bids.',
      ], { image: asset('/assets/legacy/NewU-InscribeX-img/image23.png', 'Original NewU user-profile database diagram', 'Original database artifact accompanying the discussion of wallet identifiers and profile updates.') }),
      section('delivery', 'Delivery', [
        'The resume documents daily team coordination alongside weekly sponsor briefings, schedules, agendas, and milestone reports. Blockers were surfaced during these briefings so the team could discuss progress and risks.',
        'The resume records 100% on-time delivery of planned development goals.',
      ]),
      section('outcome', 'Outcome', [
        'The project delivered planned development goals on time and established a detailed record of identity, communication flows, data relationships, and delivery coordination.',
      ]),
      section('reflection', 'Reflection', [
        'Two technical concerns remained: reducing repeated profile reads and ensuring unambiguous direct-chat identifiers.',
        'The next iteration would measure profile reads and settle the direct-chat identifier design.',
      ]),
    ],
  },
  {
    slug: 'movie-browser',
    title: 'Movie Browsing Website',
    subtitle: 'A full-stack service, from imported data to search',
    summary: 'A Java servlet application that brings together XML imports, MySQL search, authentication, session handling, cloud deployment, and an Android client.',
    problem: 'Make a movie dataset usable through a deployed application with persistent sessions and efficient database access.',
    role: 'Full-stack developer · academic collaboration',
    team: 'Lance Li and Anthony Wen; guided by Professor Chen Li',
    date: '2023',
    duration: '6 weeks',
    category: 'Full-stack Engineering',
    tags: ['Backend systems', 'Search', 'Cloud deployment'],
    techStack: ['Java', 'Tomcat', 'MySQL', 'JavaScript', 'AWS', 'Android'],
    status: 'Archived · cloud instance retired',
    featured: true,
    coverImage: asset('/assets/legacy/frontPage2.JPG', 'Movie browsing application interface from the original archive', 'Original application screenshot; the documented AWS instance has been retired.'),
    outcome: 'Documented web and Android clients, cloud deployment, and database optimization. The AWS instance was later removed to avoid ongoing charges.',
    relatedArticles: ['search-with-a-file-backed-index'],
    sources: [movieSource],
    sections: [
      section('overview', 'Overview', [
        'This six-week academic project was completed with Anthony Wen under Professor Chen Li in COMPSCI 122B, Data & Web Applications. The source describes a movie-browsing website backed by Java servlets and MySQL.',
        'The work spans a full application path: load source data, expose it through APIs, maintain user sessions, deploy the service, and improve repeated database access. An Android client retained login and search functionality.',
      ]),
      section('context', 'Context', [
        'The project applied web-serving and database techniques taught in the course. It required a functioning service rather than an isolated interface: Tomcat, Java, and MySQL were installed on a cloud instance, and the frontend requested information through servlet APIs.',
        'Movie, user, and star data were imported into MySQL. This created a useful setting for working through the relationship between data ingestion, request handling, and the experience of browsing a catalog.',
      ]),
      section('problem', 'Problem', [
        'A movie catalog is only useful when users can move from authentication to browsing and search without losing their session or waiting on unnecessary database work. The project therefore combines interface behavior with backend concerns.',
        'The engineering problem was to make that whole request path work: accepted data must be queryable, APIs must serve the frontend, and connections and repeated queries must be handled efficiently.',
      ]),
      section('constraints', 'Constraints', [
        'The six-week academic project used Java, Tomcat, MySQL, and XML imports. Ongoing cloud cost later motivated retiring the AWS instance.',
      ]),
      section('my-role', 'My Role', [
        'My work covered cloud setup, servlet APIs, MySQL imports, XML parsers, authentication, session handling, and database optimization.',
        'I built the system with Anthony Wen.',
      ]),
      section('discovery', 'Discovery', [
        'The project applied web-application techniques to sensitive requests, repeated database operations, session continuity, and search behavior.',
      ]),
      section('problem-breakdown', 'Problem Breakdown', [
        'The application can be explained through two paths. The ingestion path parses XML and batch-inserts records. The request path moves from a browser or Android client to a servlet API and then to MySQL.',
        'This separation makes the dependencies visible: improving page behavior alone would not resolve an expensive query, and optimizing a query would not fix an interrupted user session.',
      ], { diagram: { title: 'Service path', nodes: ['Browser / Android', 'Servlet API', 'Tomcat + Java', 'MySQL queries', 'Catalog results'], caption: 'XML parsing feeds the database separately.' } }),
      section('options-considered', 'Options Considered', [
        'The team tested both AWS and Google Cloud; Google Cloud was faster in that comparison.',
        'The implementation used DOM and SAX parsers, prepared statements, connection pooling, replication, and full-text search.',
      ], { table: { headers: ['Area', 'Approach', 'Purpose'], rows: [
        ['Cloud hosting', 'AWS and Google Cloud tested', 'Compare service performance'],
        ['Database requests', 'Prepared statements and connection pooling', 'Reduce repeated setup work'],
        ['Search', 'FULLTEXT attributes', 'Support catalog queries'],
      ] } }),
      section('key-decisions', 'Key Decisions', [
        'The source separates the HTML/JavaScript client from servlet APIs hosted on Tomcat. That boundary also supported a smaller Android client retaining the key login and search features.',
        'Database work used batch imports, prepared statements, connection pooling, and a primary/replica architecture.',
        'The service used POST for sensitive requests and prepared statements for database queries.',
      ]),
      section('final-solution', 'Final Solution', [
        'The resulting system combined a cloud-hosted Tomcat service, Java servlet APIs, a MySQL database, and an HTML/JavaScript frontend. DOM and SAX processing handled XML imports, while sessions and sticky cookies supported navigation across pages and tabs.',
        'The service also used Jasypt, reCAPTCHA, HTTPS, prepared statements, and FULLTEXT-based search.',
      ], { image: asset('/assets/legacy/webisteMobileApp.JPG', 'Android movie application showing the mobile client interface', 'Original Android client screenshot; the source says login and search were retained.') }),
      section('delivery', 'Delivery', [
        'The application was deployed to an AWS instance with Tomcat, Java, and MySQL installed. The source also describes a comparison deployment on Google Cloud and an Android extension of the client experience.',
        'The AWS instances were later retired to avoid ongoing charges.',
      ]),
      section('outcome', 'Outcome', [
        'The result was a working web application and Android client with database and serving optimizations. The cloud deployment was later retired.',
      ]),
      section('reflection', 'Reflection', [
        'A reproducible import command, deployment configuration, and representative request benchmark would make the service easier to recreate and evaluate.',
      ]),
    ],
  },
];

function archiveSections(input: { context: string; problem: string; constraints: string; role: string; breakdown: string[]; solution: string; outcome: string; reflection: string; image?: ContentImage }): Section[] {
  return [
    section('overview', 'Overview', [input.context]),
    section('problem', 'Problem', [input.problem]),
    section('constraints', 'Constraints', [input.constraints]),
    section('my-role', 'My Role', [input.role]),
    section('problem-breakdown', 'How it works', ['The system brings these parts together.'], { bullets: input.breakdown }),
    section('final-solution', 'Final Solution', [input.solution], input.image ? { image: input.image } : {}),
    section('outcome', 'Outcome', [input.outcome]),
    section('reflection', 'Next steps', [input.reflection]),
  ];
}

projects.push(
  {
    slug: 'webcrawler-indexer-ranker', title: 'Webcrawler, Indexer, Ranker', subtitle: 'Search fundamentals under a storage constraint',
    summary: 'A six-week academic search engine covering bounded crawling, duplicate detection, disk-backed indexing, and ranked retrieval.',
    problem: 'Retrieve relevant pages without loading the entire postings index into memory.',
    role: 'Search systems contributor', team: 'Lance Li, Anthony Wen, Van Pham, and Aileen Tran; guided by Professor Alberto Krone-Martins',
    date: '2023', duration: '6 weeks', category: 'Architecture & Systems', tags: ['Information retrieval', 'Academic project'],
    techStack: ['Python', 'Inverted index', 'TF-IDF', 'Cosine similarity'], status: 'Academic prototype · archived', featured: false,
    coverImage: asset('/assets/legacy/WebCrawler-Indexer-Ranker.JPG', 'Archived crawler and search-engine project image', 'Search project illustration.'),
    outcome: 'Searches ran within 100 ms in the original project record.', relatedArticles: ['designing-a-search-ranker', 'search-with-a-file-backed-index'], sources: [searchSource],
    sections: archiveSections({
      context: 'The project first crawled a UCI network copy, then used a shared course dataset to build an indexer and ranker. I worked with Anthony Wen, Van Pham, and Aileen Tran under Professor Alberto Krone-Martins.',
      problem: 'The crawler needed bounded, polite traversal and duplicate handling. The search system then needed to find and rank documents using local files rather than a database.',
      constraints: 'The project lasted six weeks. Crawling stayed within four supplied domains. The indexer had to use local file storage and could not load the full inverted index into memory.',
      role: 'I designed the TF-IDF weighting within a collaborative crawler, indexer, and ranker project.',
      breakdown: ['Filter URLs and handle successful responses and redirects.', 'Respect recorded robots rules and detect similar pages using three-gram fingerprints.', 'Store term postings on disk with a small byte-offset lookup.', 'Rank matching documents with TF-IDF and cosine similarity; return the top five URLs.'],
      solution: 'The system used a disk-backed inverted index, compact URL identifiers, a term-to-byte-position map, TF-IDF weights, and cosine similarity. The offset map allowed the query path to read relevant postings without loading the full index.',
      outcome: 'The project record reports search execution within 100 ms.',
      reflection: 'Query-level timings and relevance examples would make ranking quality easier to assess. The byte-offset lookup speeds access, while retrieval and scoring still depend on the matching data.',
      image: asset('/assets/legacy/Cosine-Similarity-Visulization.JPG', 'Cosine similarity illustration retained from the search project', 'Ranking illustration from the project.'),
    }),
  },
  {
    slug: 'pantry-pal', title: 'Pantry Pal', subtitle: 'Recommendations shaped by inventory and timing',
    summary: 'A mobile recipe prototype that ranks meals using available ingredients, preferences, preparation time, and eating patterns.',
    problem: 'Recommend a practical meal based on what someone has and when they need to start cooking.',
    role: 'Mobile product contributor', team: '', date: '2023', duration: '',
    category: 'Product & Delivery', tags: ['Recommendation systems', 'Mobile'], techStack: ['Flutter', 'Dart', 'MongoDB Realm', 'Atlas', 'Spoonacular API'],
    status: 'Prototype · archived', featured: false,
    coverImage: asset('/assets/legacy/PantryPalFrontPage.JPG', 'Pantry Pal mobile recipe interface from the original project', 'Original mobile prototype screenshot.'),
    outcome: 'Built a pantry-aware recommendation and notification flow.', relatedArticles: [], sources: [pantrySource],
    sections: archiveSections({
      context: 'Pantry Pal combines pantry management, recipe browsing, likes and dislikes, and notification timing in a team-built mobile prototype.',
      problem: 'A relevant recipe must fit a user’s ingredients, available preparation time, and preferences. A useful notification must also arrive early enough to act on it.',
      constraints: 'The prototype used a small recipe dataset and on-device recommendation processing in Dart. An ingredient-exclusion control was still missing from the interface.',
      role: 'I contributed to the recommendation logic and mobile product.',
      breakdown: ['Manage pantry inventory through ingredient search.', 'Rank recipes by ingredient overlap, time, and liked/disliked meals.', 'Update preference records when the user interacts.', 'Schedule prompts using estimated dining time and preparation needs.'],
      solution: 'The frontend offers pantry and recipe pages with recommended, liked, and disliked recipe groups. Dart computes recommendations on the device. MongoDB Realm and Atlas retain user, recipe, and ingredient records, including ingredient-to-recipe links. Spoonacular is listed as the recipe data source.',
      outcome: 'The prototype recommends recipes and times cooking prompts around a planned meal. Ingredient exclusion existed in the recommendation logic but lacked a frontend control.',
      reflection: 'Connecting ingredient exclusion to the interface would give users control over that part of the recommendation.',
      image: asset('/assets/legacy/PantryPalDatabaseSchema.JPG', 'Pantry Pal user, recipe, and ingredient schema', 'Original database schema from the project archive.'),
    }),
  },
  {
    slug: 'ocr-translate', title: 'OCR & Translate', subtitle: 'A small tool with a visible processing pipeline',
    summary: 'An image-to-text translation tool with an upload preview, language controls, and side-by-side original and translated lines.',
    problem: 'Help a user compare extracted text and translation without switching between separate tools.',
    role: 'Application developer', team: '', date: '2024', duration: '',
    category: 'AI & Automation', tags: ['AI-assisted development', 'Prototype'], techStack: ['Python', 'Flask', 'Tesseract OCR', 'googletrans', 'JavaScript'],
    status: 'Prototype · archived', featured: false,
    coverImage: asset('/assets/legacy/ORC%20and%20translate-web.PNG', 'OCR and Translate interface with uploaded image and translation output', 'Original web prototype screenshot; legacy filename retains its original spelling.'),
    outcome: 'Built an upload-to-translation workflow with line-by-line comparison.', relatedArticles: [], sources: [ocrSource],
    sections: archiveSections({
      context: 'The original project describes a Flask application for uploading images, extracting their text, and translating that text into a selected language. It also records experience fixing errors in AI-generated code.',
      problem: 'Text inside an image cannot be directly used as translation input. The application must join image handling, OCR, language selection, and output comparison into a readable sequence.',
      constraints: 'The small Flask application used Tesseract and googletrans with temporary cookie-based state rather than a server-side database.',
      role: 'I built the tool and debugged AI-generated code during development.',
      breakdown: ['Upload and preview an image.', 'Extract text with Tesseract.', 'Select source and target languages.', 'Translate through googletrans and align original and translated lines.'],
      solution: 'Flask handles the web application, Tesseract performs OCR, and googletrans supplies translation access. HTML, CSS, and JavaScript present an image preview and a table comparing original and translated text. The archive records basic upload and translation error handling.',
      outcome: 'The prototype combines image upload, text extraction, translation, and side-by-side comparison.',
      reflection: 'The next iteration would test difficult images, partial OCR failures, and translation-service failures against example inputs.',
    }),
  },
  {
    slug: 'multi-reader-audiobook', title: 'Multi-Reader Audiobook', subtitle: 'A community narration concept',
    summary: 'A product concept for voluntary narration, listener feedback, and participation rewards inside an audiobook experience.',
    problem: 'Explore how an audiobook app might support multiple community narrators and encourage continued participation.',
    role: 'Product concept author', team: '', date: '2023', duration: '',
    category: 'Experiments', tags: ['Product concept', 'Community participation'], techStack: ['Concept design'], status: 'Concept only · not an implemented product', featured: false,
    coverImage: asset('/assets/legacy/work-details-image-1.jpg', 'Legacy editorial image retained with the audiobook concept', 'Illustration for the audiobook concept.'),
    outcome: 'A concept for community narration, listener feedback, and participation rewards.', relatedArticles: [], sources: [audiobookSource],
    sections: archiveSections({
      context: 'This concept invites community readers to narrate audiobook segments and asks listeners for brief feedback.',
      problem: 'The idea explores how an audiobook app could support multiple narrators and ongoing listener engagement.',
      constraints: 'Reader matching, recording, playback, and rewards are proposed features. Licensing and recording quality would shape implementation.',
      role: 'I developed the product concept and its proposed participation model.',
      breakdown: ['Invite voluntary readers to record story segments.', 'Connect recordings to playback.', 'Collect brief listener feedback.', 'Track contribution and distribute proposed in-app rewards.'],
      solution: 'The concept proposes random reader selection, surveys about story characters, user profiles, contribution tracking, and rewards such as ad-free time or chapter access.',
      outcome: 'A community narration concept with reader selection and reward-system integration identified as next steps.',
      reflection: 'Rights, recording quality, and a small participant study would be the first implementation questions.',
    }),
  },
);

export const articles: Article[] = [
  rankerArticle,
  {
    slug: 'profile-data-read-cost', title: 'One profile, many messages: the cost of keeping names current',
    summary: 'A recorded NewU InscribeX decision: move profile data toward one source of truth, then confront the cost of repeated reads.',
    category: 'Architecture & Systems', tags: ['Data modeling', 'Tradeoffs', 'Delivery'], date: contentUpdatedAt, readingTime: '5 min read', featured: true,
    relatedProjects: ['newu-inscribex'], sources: [newuSource],
    editorialNote: '',
    sections: [
      section('the-change', 'A small feature changes the data problem', [
        'A chat message needs a sender. In the NewU InscribeX archive, messages included wallet-linked identity alongside display information such as a username and profile picture. That was workable while profile editing remained later in the plan.',
        'Once a user could change a name or picture, the team had to decide what an old message should display. The original record describes two approaches: keep copies in message-related records and update them periodically, or read profile information from one user record.',
      ]),
      section('the-options', 'The tradeoff is visible in the original record', [
        'The team began with copied values. The CTO then recommended keeping profile information in one place so edits would appear promptly.',
      ], { table: { headers: ['Profile strategy', 'What it makes easier', 'What it asks the system to handle'], rows: [
        ['Copied into message data', 'Rendering from already-available message fields', 'Updating or accepting stale copies'],
        ['Read from one user record', 'Displaying the current profile value', 'Repeated profile lookups'],
        ['Add a cache', 'Potentially reducing repeated remote reads', 'Cache freshness, invalidation, and another service'],
      ] } }),
      section('identity-and-display', 'Keep identity and display values separate', [
        'The original data model uses the wallet address as the user document identifier. The explanatory distinction is between identifying a sender and displaying that sender’s current profile. A display name can change while the identity reference remains stable.',
        'This simplified example separates a stable sender identifier from a display name that can change.',
      ], { code: { language: 'typescript', value: "type Message = { senderId: string; text: string };\ntype Profile = { displayName: string };\n\nasync function presentMessage(message: Message) {\n  const profile: Profile = await readUser(message.senderId);\n  return {\n    sender: profile.displayName,\n    text: message.text,\n  };\n}" } }),
      section('read-cost', 'The next constraint was read cost', [
        'The migration was 50% complete when the team documented frequent Firebase API calls as its largest setback. Redis caching was planned to reduce redundant reads after core functionality was finished.',
      ], { diagram: { title: 'Profile lookup', nodes: ['Message sender ID', 'User profile lookup', 'Current display values', 'Repeated-read concern'], caption: 'The read path brought current profile values into messages.' } }),
      section('delivery-choice', 'Sequence the work without hiding the debt', [
        'The original record says the team shifted toward completing all functionality before returning to Redis optimization. This is a concrete scope decision: it preserves the intended profile behavior while acknowledging an unresolved cost issue.',
      ]),
      section('next-evidence', 'What would make the decision easier to evaluate?', [
        'A useful next measurement is profile reads per conversation view, including the behavior after an edit and the difference between cold and repeated views.',
        'The enduring value of this artifact is its specificity. It names the original approach, the change that made it uncomfortable, the person who contributed the recommendation, the resulting constraint, and the work deliberately left for later.',
      ]),
    ],
  },
  {
    slug: 'search-with-a-file-backed-index', title: 'A search index that doesn’t need to fit in memory',
    summary: 'How the archived search project used a small byte-offset map to retrieve term postings from disk before ranking results.',
    category: 'Full-stack Engineering', tags: ['Search', 'Storage', 'Academic notes'], date: contentUpdatedAt, readingTime: '4 min read', featured: false,
    relatedProjects: ['webcrawler-indexer-ranker', 'movie-browser'], sources: [searchSource],
    editorialNote: '',
    sections: [
      section('constraint', 'Start with the storage constraint', [
        'The academic search project required local file storage instead of a database. The original account also states that the full inverted index was too large to load into memory. Those two constraints shaped the retrieval design.',
        'An inverted index associates a term with the documents containing it. The project stored those postings on disk, kept compact URL identifiers, and used a separate map from a word to its byte position in the index.',
      ]),
      section('two-layers', 'Two layers of information', [
        'The smaller lookup answers where a term’s postings begin. The larger file contains the postings themselves. This lets a query read the relevant section of the file without first loading every other term’s document list.',
        'The byte-offset lookup gives direct access to a term’s postings. Reading, scoring, and sorting the matching documents still take additional work.',
      ], { diagram: { title: 'Query path', nodes: ['Query term', 'Byte-offset map', 'Read postings from disk', 'Score candidates', 'Top-ranked URLs'], caption: 'A term lookup reads only the postings needed for ranking.' } }),
      section('lookup', 'An illustrative lookup', [
        'The simplified lookup separates locating a posting record from decoding it.',
      ], { code: { language: 'python', value: 'def load_postings(term, offsets, index_file):\n    offset = offsets.get(term)\n    if offset is None:\n        return []\n    index_file.seek(offset)\n    return decode_posting_record(index_file.readline())' } }),
      section('ranking', 'Retrieval still needs relevance', [
        'After locating candidate data, the project used TF-IDF and cosine similarity to rank documents. The original account also discusses additional weighting for emphasized text and returning the top five scored URLs.',
        'A faster lookup is only one part of that pipeline. Relevance also depends on tokenization, weighting, candidate selection, and how the query is represented.',
      ]),
      section('measurement', 'Keep the performance claim bounded', [
        'The project record reports searches within 100 ms. Speed and relevance still need to be considered together: a fast query has little value if it misses the useful document.',
      ]),
    ],
  },
];

export const experience: Experience[] = [
  {
    role: 'Project Coordinator', organization: 'Self-Help for the Elderly', date: 'Jan 2026 – present',
    summary: 'Turning workforce-program operations into a repeatable delivery system.',
    details: ['Led Health Care Academy coordination, SOP design, curriculum oversight, and stakeholder communication.', 'Managed programming for 82 students; the program reached an 88% graduation rate and a 95% work placement rate among graduates.'],
  },
  {
    role: 'Career Advisor', organization: 'Self-Help for the Elderly', date: 'May 2025 – Jan 2026',
    summary: 'Working directly with the practical constraints of employment support.',
    details: ['Coordinated a workforce development initiative and employment placement support.', 'The program served 909 people and placed 792 in employment, an 87% placement rate.'],
  },
  {
    role: 'Lead Developer & Founder', organization: 'AI Secretary', date: 'Aug 2024 – present',
    summary: 'Connecting job-specific AI assistance to a full-stack product implementation.',
    details: ['Developed resume parsing and tailoring workflows in 12-week cycles.', 'Implemented PostgreSQL schema and Strapi v5 integration; initiated calls and scheduling automation.'],
  },
  {
    role: 'Team Lead / Project Coordinator', organization: 'NewU InscribeX', date: 'Mar – Jul 2024',
    summary: 'Bringing sponsor requirements, team cadence, and technical dependencies into one plan.',
    details: ['Coordinated stand-ups, task assignments, weekly schedules, milestone reporting, and stakeholder briefings.', 'Delivered planned development goals on time.'],
  },
];

export const capabilities: Capability[] = [
  { title: 'Technical Discovery', description: 'Make the environment and constraints explicit. NewU’s archive records sponsor requirements, inherited designs, and platform assumptions.', projectSlugs: ['newu-inscribex'] },
  { title: 'Requirement Translation', description: 'Turn feature requests into actions, alternatives, and failure states that can guide implementation.', projectSlugs: ['newu-inscribex'] },
  { title: 'Solution Architecture', description: 'Connect identity, data relationships, API boundaries, and storage behavior to the product’s actual flow.', projectSlugs: ['newu-inscribex', 'movie-browser'] },
  { title: 'Full-stack Delivery', description: 'Work across interface state, service APIs, data imports, databases, and cloud setup.', projectSlugs: ['movie-browser', 'ai-resume-builder'] },
  { title: 'AI Integration', description: 'Build workflows around job parsing, resume suggestions, OCR, and translation.', projectSlugs: ['ai-resume-builder', 'ocr-translate'] },
  { title: 'Product Thinking', description: 'Connect recommendations to a user’s inventory and timing, or define what a broad sponsor idea should do in specific scenarios.', projectSlugs: ['pantry-pal', 'newu-inscribex'] },
  { title: 'Stakeholder Management', description: 'Use weekly briefings, progress reports, and visible blockers to keep a shared picture of delivery.', projectSlugs: ['newu-inscribex'] },
  { title: 'Project Planning', description: 'Translate scope into schedules, task ownership, milestones, and regular check-ins.', projectSlugs: ['newu-inscribex'] },
  { title: 'Cross-functional Collaboration', description: 'Coordinate engineering work with sponsor expectations and a design direction supplied by another team.', projectSlugs: ['newu-inscribex'] },
  { title: 'Delivery & Iteration', description: 'Use testing and implementation feedback to identify the next improvements.', projectSlugs: ['ai-resume-builder', 'newu-inscribex'] },
];

// These describe an intended working method, not a claim that every past project followed every step.
export const workProcess = [
  { step: '01', title: 'Discover', description: 'Understand the users, existing systems, stakeholders, and practical constraints.' },
  { step: '02', title: 'Frame', description: 'Define the problem, scope, dependencies, and what a useful result would look like.' },
  { step: '03', title: 'Decide', description: 'Compare options, make tradeoffs visible, and record what stays outside the first release.' },
  { step: '04', title: 'Build', description: 'Connect the interface, data, and services into a working product.' },
  { step: '05', title: 'Deliver', description: 'Coordinate validation, milestones, documentation, and the handover.' },
  { step: '06', title: 'Learn', description: 'Review failures and feedback, then define the next iteration with evidence.' },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const featuredArticles = articles.filter((article) => article.featured);
