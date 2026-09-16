import type { Article, Capability, ContentImage, Experience, Project, Section, Source } from './types';
import { rankerArticle } from './rankerArticle.ts';

// Editorial reconstruction date, not the original publication date of the source material.
export const contentUpdatedAt = '2026-09-06';
const pending = (text: string) => `[To confirm: ${text}]`;
const resumeSource: Source = {
  label: 'Lance Li — supplied 2026 resume',
  href: '/assets/files/lance-li-resume-2026.pdf',
  note: 'Self-reported experience and results; preserved as a resume snapshot.',
};
const legacy = (file: string, label: string): Source => ({
  label,
  href: `https://github.com/DevLance112/DevLance112.github.io/blob/main/old_content/devlance112.github.io/${encodeURIComponent(file)}`,
  note: `Local source: old_content/devlance112.github.io/${file}. The repository link is a source reference; the current live deployment was not verified.`,
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
  editorialNote: 'FDE describes the direction of this portfolio, not a past employment title. Project status reflects supplied records unless a newer date is given.',
};

const aiSource = legacy('AI-Resume-Builder-Detail.html', 'Original AI Resume Builder project record');
const newuSource = legacy('NewU-InscribeX-Detail.html', 'Original NewU InscribeX project record');
const movieSource = legacy('Movie-Browser-Detail.html', 'Original Movie Browsing Website project record');
const searchSource = legacy('Webcrawler-Indexer-Ranker-Project-Detail.html', 'Original crawler, indexer, and ranker project record');
const pantrySource = legacy('Pantry-Pal-Detail.html', 'Original Pantry Pal project record');
const ocrSource = legacy('ORC and Translate.html', 'Original OCR and Translate project record');
const audiobookSource = legacy('Multi-Reader-Audiobook.html', 'Original Multi-Reader Audiobook concept record');

export const projects: Project[] = [
  {
    slug: 'ai-resume-builder',
    title: 'AI Secretary & Resume Builder',
    subtitle: 'From job requirements to an AI-assisted workflow',
    summary: 'A resume builder that translates job descriptions into targeted editing suggestions, with a related virtual secretary experiment for calls and scheduling.',
    problem: 'Make job-specific resume editing and routine scheduling easier to manage without hiding the work behind a single AI output.',
    role: 'Lead Developer & Founder',
    team: pending('team composition and ownership beyond the lead developer'),
    date: 'Aug 2024 – ongoing in supplied resume',
    duration: '12-week development cycles',
    category: 'AI & Automation',
    tags: ['AI applications', 'Product development', 'Full-stack'],
    techStack: ['React', 'PostgreSQL', 'Strapi v5', 'Render'],
    status: 'Testing · last documented status',
    featured: true,
    coverImage: asset('/assets/project-resume-builder.png', 'Existing portfolio illustration for the resume builder', 'Portfolio illustration retained from the previous site; not verified as a production screenshot.'),
    outcome: 'Resume builder documented in final testing; secretary reported 80% of manual cases passing in the supplied resume.',
    relatedArticles: [],
    sources: [resumeSource, aiSource],
    sections: [
      section('overview', 'Overview', [
        'This independent product combines two related strands of work: job-specific resume assistance and a virtual secretary for incoming calls, appointment scheduling, and calendar synchronization. The resume builder is the better-documented implementation; the secretary is described as a testing-stage initiative.',
        'The supplied resume identifies my role as Lead Developer & Founder from August 2024 and describes repeated 12-week development cycles. This case preserves that record without implying that the product has since launched.',
      ]),
      section('context', 'Context', [
        'The resume builder is organized around a specific input: a job description. Instead of offering generic writing assistance, the documented product extracts role-specific information and uses it to suggest changes to resume sections.',
        'The related secretary work extends the product into service automation: deciding which incoming calls need attention and connecting appointments to a user’s calendar. The sources do not establish a shared production deployment or a common user population for these two workflows.',
      ]),
      section('problem', 'Problem', [
        'The product problem is the gap between a broad candidate profile and the requirements of one particular job. The software needs to connect those two inputs and present useful editing suggestions in an interface that remains understandable.',
        'For the secretary, the problem is routing routine calls and scheduling work into a usable sequence. Success depends on correct workflow behavior as well as generated language.',
      ]),
      section('constraints', 'Constraints', [
        'The documented development cadence was 12 weeks. The implementation used a React interface, a PostgreSQL database, Strapi v5, and Render hosting. The original project record still described launch preparation and testing.',
        pending('budget, target user segment, data retention rules, model provider, API limits, and current deployment status'),
      ]),
      section('my-role', 'My Role', [
        'The resume attributes product development, job-description parsing, resume tailoring, and PostgreSQL schema implementation to my role. It also records the initiation of the virtual secretary workflow.',
        'The previous project page documents React form state, modular components, preview behavior, and a content management layer. The sources do not separate individual contributions from any collaborators, so this case does not claim sole authorship of every feature.',
        pending('collaborator responsibilities and review or approval ownership'),
      ]),
      section('discovery', 'Discovery', [
        'The original project record lists market research, user-needs analysis, a development timeline, and technical requirements as planning activities. It also describes feedback being incorporated during implementation.',
        'No interview notes, sample sizes, user recordings, or prioritization artifacts were supplied. Those activities can be acknowledged, but they cannot yet support a detailed account of what users said or which assumption changed.',
        pending('a concrete discovery finding, its source, and the product decision it changed'),
      ]),
      section('problem-breakdown', 'Problem Breakdown', [
        'The documented features can be read as a sequence of inspectable stages: collect a job description, extract relevant terms, generate section-level suggestions, update the resume, and preview the result. This diagram is an editorial reconstruction of those features, not a recovered architecture artifact.',
      ], {
        diagram: { title: 'Resume workflow', nodes: ['Job description', 'Keyword extraction', 'Section suggestions', 'Resume editing', 'Live preview'], caption: 'Reconstructed from the feature list in the original project record.' },
      }),
      section('options-considered', 'Options Considered', [
        'The sources identify the implemented stack but do not include a comparison of model providers, content systems, or database options. Inventing rejected alternatives would make the case appear more complete without making it more reliable.',
      ], {
        table: { headers: ['Documented choice', 'What is established', 'Missing decision evidence'], rows: [
          ['PostgreSQL + Strapi v5', 'Structured data and content supervision', 'Alternatives, operating cost, and selection rationale'],
          ['React editor and preview', 'Interactive resume form and real-time preview', 'Usability comparison and user preference evidence'],
          ['AI-assisted suggestions', 'Job parsing and resume-section suggestions', 'Model evaluation and baseline comparison'],
        ] },
      }),
      section('key-decisions', 'Key Decisions', [
        'The product explicitly connects suggestions to a job description. It also presents resume building and previewing as interface features. These are observable product choices in the source material; the underlying decision history is not recorded.',
        'The resume describes PostgreSQL schema work in terms of data integrity and scalability. That supports discussing the intended role of structured storage, but it does not establish measured scale or a completed security review.',
        pending('one decision log showing the alternatives, owner, constraint, and acceptance criterion'),
      ]),
      section('final-solution', 'Final Solution', [
        'The resume-builder record describes a React frontend for complex form handling, modular interface components, job-description parsing, AI-generated section suggestions, and real-time resume preview. PostgreSQL stores structured data under a Strapi v5 layer, with Render used for hosting.',
        'The secretary initiative covers incoming calls, unwanted-caller screening, scheduling, and calendar synchronization. Integration providers, permission boundaries, fallback behavior, and production deployment are not described in the supplied material.',
      ], { bullets: ['Resume workflow: job requirements → suggestions → editable resume → preview.', 'Data layer: PostgreSQL schema supervised through Strapi v5.', 'Secretary workflow: call handling, screening, appointment scheduling, and calendar sync.'] }),
      section('delivery', 'Delivery', [
        'The source describes planning, agile implementation, regular testing, optimization, and feedback within the development cycle. Its last stated resume-builder status is final testing and preparation for launch.',
        'The supplied resume reports that the virtual secretary passed 80% of manual testing cases. The denominator, test date, scenario definitions, and failure distribution were not provided. That percentage is a historical reported test result, not a production reliability claim.',
        pending('test matrix, release checklist, deployment URL, support process, and latest status'),
      ]),
      section('outcome', 'Outcome', [
        'The documented outcome is a resume-building implementation in final testing and a related secretary prototype undergoing manual evaluation. The source material supports technical implementation and testing progress.',
        'It does not establish a launch date, active-user count, hiring improvement, time saved, or commercial outcome. Those results remain unreported.',
      ]),
      section('reflection', 'Reflection', [
        'Editorial follow-up: the most useful next artifact would connect representative inputs to expected behavior, actual output, and user corrections. It would make the resume workflow and the secretary’s remaining failures easier to evaluate.',
        'This is a proposed direction for strengthening the project record, not a retrospective statement attributed to the original team.',
        pending('the author’s retrospective: what worked, what failed, and what would change in another cycle'),
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
    team: 'Cross-functional team; size differs between source records',
    date: 'Mar – Jul 2024',
    duration: '8-week cycle in resume; 10 weeks in project record',
    category: 'Product & Delivery',
    tags: ['Stakeholder alignment', 'Systems thinking', 'Web3'],
    techStack: ['JavaScript', 'React', 'Firebase', 'Cloud Firestore'],
    status: 'Development goals delivered · resume record',
    featured: true,
    coverImage: asset('/assets/legacy/NewU-InscribeX-img/image20.png', 'NewU InscribeX interface from the original project archive', 'Original project image. Designs and implementation were team work; individual screen ownership is not documented.'),
    outcome: 'The resume reports on-time delivery of planned development goals. The archive preserves requirements, screens, and database reasoning.',
    relatedArticles: ['profile-data-read-cost'],
    sources: [resumeSource, newuSource],
    sections: [
      section('overview', 'Overview', [
        'NewU InscribeX was a sponsored Web3 communication project connecting wallet-based identity with social and marketplace features. The scope included global and direct messaging, friends, group chats, buying and selling flows, and proposals around staking, lending, and BTC-GPT.',
        'My resume records the role of Team Lead / Project Coordinator from March to July 2024. The project archive preserves personas, scenarios, functional requirements, non-functional requirements, interface designs, and the reasoning behind the data structure.',
      ]),
      section('context', 'Context', [
        'The original record names Phillip Liu as the sponsor and lists Santiago Palomares, Xiaohua Zhang, Anthony Wen, and Husain Wafaie as collaborators. It also states that an existing Figma design came from another team.',
        'This was a coordination problem as well as a software problem: sponsor expectations, an inherited design direction, wallet interactions, and several feature families had to become shared implementation work.',
      ]),
      section('problem', 'Problem', [
        'Wallet identity does not by itself define a communication product. The team needed to specify what happened when a user connected a wallet, entered a global conversation, added a friend, or started a group.',
        'The larger marketplace ambition also introduced safety expectations around trades and transfers. The record treats confirmation, failure states, and platform constraints as part of the requirements, rather than describing the product only through its screens.',
      ]),
      section('constraints', 'Constraints', [
        'Firebase was a sponsor requirement. The archive also records a JavaScript dependency, an unresolved TypeScript transition, limited frontend design experience, an inherited Figma design, and an assumption that desktop Chrome was the primary client.',
        'Avalanche integration depended on further API understanding. Login and chat were assumed to remain centralized even while decentralization was being discussed. These are documented project assumptions, not claims about the current platform.',
        pending('reconcile the resume’s 4-person, 8-week cycle with the archive’s 10-week cycle and four named collaborators; budget and shipped scope are also unconfirmed'),
      ]),
      section('my-role', 'My Role', [
        'My resume attributes daily stand-ups, task assignments, progress check-ins, weekly schedules, meeting agendas, milestone reports, and stakeholder briefings to my coordination role.',
        'The technical artifact is collaborative. This case uses “the team” for the documented architecture and preserves the CTO’s contribution to the profile-data decision. It does not attribute every screen, feature, or database decision to me.',
        pending('exact implementation ownership and the responsibilities of each collaborator'),
      ]),
      section('discovery', 'Discovery', [
        'The project record organizes discovery into personas and scenarios, then describes user actions as use cases with basic, alternate, and exception flows. Communication, marketplace transactions, staking, lending, and BTC-GPT queries each receive their own behavioral definition.',
        'Non-functional requirements distinguish security, scalability, and safety as high priorities. That structure gives sponsor and engineering discussions something more precise than a feature name to review.',
        pending('which personas came from direct research, interview evidence, and how priorities were validated'),
      ]),
      section('problem-breakdown', 'Problem Breakdown', [
        'The archive separates the social system into users, messages, friend relationships, global chat, direct chat, and group membership. Each collection serves a user-visible relationship or state.',
        'The following map is a simplified reading of that documented structure. It explains the domain sequence without claiming to reproduce deployed service boundaries.',
      ], { diagram: { title: 'From identity to conversation', nodes: ['Wallet identity', 'User profile', 'Friend relationships', 'Direct / group chat', 'Message history'], caption: 'Editorial domain map based on the original Firebase documentation.' } }),
      section('options-considered', 'Options Considered', [
        'The strongest recorded tradeoff concerns usernames and profile pictures. The team initially copied those values into other records, including messages. As profile editing approached, it considered storing profile data once and reading it wherever needed.',
        'The archive credits the CTO with recommending centralized profile reads so edits would appear promptly. It also records the cost of that direction: frequent Firebase calls.',
      ], { table: { headers: ['Approach', 'Reason in the source', 'Observed or expected cost'], rows: [
        ['Copy profile values into messages', 'Initial implementation before editable profiles', 'Copies need updating when a profile changes'],
        ['Read from a single user record', 'Keep displayed profile information timely', 'More API calls; migration was still in progress'],
        ['Introduce Redis caching', 'Reduce redundant Firebase calls', 'Deferred until core functionality was complete'],
      ] } }),
      section('key-decisions', 'Key Decisions', [
        'The documented identity model uses wallet addresses as user document identifiers. That allows the client to address a known user record after wallet login. The archive does not establish the authentication or authorization controls needed around those identifiers.',
        'For editable profiles, the team moved toward a single source for profile information. The archive describes the migration as halfway complete at the time of writing, then explicitly places Redis optimization after core feature completion.',
        'This sequence makes the delivery tradeoff visible: accept a known read-cost concern while finishing functionality, and retain caching as future work. It is not evidence that Redis was shipped.',
      ]),
      section('final-solution', 'Final Solution', [
        'The documented solution uses Firebase / Cloud Firestore for users, chat history, friend lists, and group relationships. Wallet-linked user documents connect profile information to messages and membership records.',
        'The interface archive covers home, wallet login, chats, friends, group creation, profiles, marketplace browsing, asset details, and bids. These screens and requirements describe product coverage; they do not independently prove that every transaction flow reached production.',
      ], { image: asset('/assets/legacy/NewU-InscribeX-img/image23.png', 'Original NewU user-profile database diagram', 'Original database artifact accompanying the discussion of wallet identifiers and profile updates.') }),
      section('delivery', 'Delivery', [
        'The resume documents daily team coordination alongside weekly sponsor briefings, schedules, agendas, and milestone reports. Blockers were surfaced during these briefings so the team could discuss progress and risks.',
        'It reports 100% on-time delivery of development goals. The underlying sprint plan and acceptance records were not supplied, so the claim is attributed to the resume rather than presented as an independently audited delivery metric.',
        pending('release date, acceptance criteria, testing evidence, deployment ownership, and sponsor handover materials'),
      ]),
      section('outcome', 'Outcome', [
        'The available evidence is a substantial product and technical archive plus the resume’s account of planned development goals being delivered on time. The project made identity, communication flows, data relationships, and delivery coordination inspectable.',
        'The sources do not provide active-user counts, transaction volume, production reliability, or a later launch status. The resume’s separate risk-reduction percentage is omitted here because its measurement method is absent.',
      ]),
      section('reflection', 'Reflection', [
        'The original record identifies two unfinished technical concerns: reducing repeated profile reads and ensuring unambiguous direct-chat identifiers. Both are useful because they preserve what remained unresolved instead of presenting the design as complete.',
        'Editorial follow-up: recover the final migration state, a read-cost measurement, and the released feature list before claiming that these issues were resolved.',
        pending('the team’s own retrospective and what changed after the archived record'),
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
        'The source identifies a six-week academic development window and a Java/Tomcat/MySQL implementation. XML was the input format for the import work. Deployment introduced an ongoing cloud cost, which later motivated retiring the AWS instance.',
        pending('dataset size, traffic profile, memory budget, test hardware, course acceptance criteria, and exact project dates'),
      ]),
      section('my-role', 'My Role', [
        'The original page lists cloud setup, servlet APIs, MySQL imports, XML parsers, authentication-related features, session handling, and database optimizations among my project implementations.',
        'It also explicitly credits collaboration with Anthony Wen. The supplied record does not allocate every module between us, so the case describes the joint system and avoids claiming exclusive ownership.',
        pending('division of implementation and testing responsibilities'),
      ]),
      section('discovery', 'Discovery', [
        'The source connects the implementation to the course’s web-application techniques. It documents concrete service concerns: sensitive requests, repeat database operations, session continuity, and search behavior.',
        'No customer interviews, usability study, or operational discovery notes were supplied. For this academic project, the evidence begins with the implemented system and its documented technical objectives.',
        pending('initial requirement brief and the sequence of problems encountered during implementation'),
      ]),
      section('problem-breakdown', 'Problem Breakdown', [
        'The application can be explained through two paths. The ingestion path parses XML and batch-inserts records. The request path moves from a browser or Android client to a servlet API and then to MySQL.',
        'This separation makes the dependencies visible: improving page behavior alone would not resolve an expensive query, and optimizing a query would not fix an interrupted user session.',
      ], { diagram: { title: 'Documented service path', nodes: ['Browser / Android', 'Servlet API', 'Tomcat + Java', 'MySQL queries', 'Catalog results'], caption: 'Simplified architecture reconstructed from the original implementation notes. XML parsing feeds the database separately.' } }),
      section('options-considered', 'Options Considered', [
        'The archive records testing on both AWS and Google Cloud and states that Google Cloud was faster in that scenario. It does not provide equivalent instance specifications, test methodology, or measured times.',
        'DOM and SAX parsers, prepared statements, connection pooling, replication, and full-text search appear in the implementation list. The source does not give a formal comparison between each technique and a baseline.',
      ], { table: { headers: ['Comparison or change', 'Source evidence', 'Limit of the evidence'], rows: [
        ['AWS and Google Cloud', 'Both were tested; source favors Google Cloud for that scenario', 'No instance configuration or benchmark logs'],
        ['Repeated database requests', 'Prepared statements and connection pooling were applied', 'No before/after latency distribution'],
        ['Search behavior', 'FULLTEXT attributes were introduced', 'No relevance evaluation or query corpus'],
      ] } }),
      section('key-decisions', 'Key Decisions', [
        'The source separates the HTML/JavaScript client from servlet APIs hosted on Tomcat. That boundary also supported a smaller Android client retaining the key login and search features.',
        'Database work used batch imports, prepared statements, connection pooling, and a primary/replica architecture described as “master and slave” in the original record. These are documented implementations, not a claim about production capacity.',
        'The original page linked POST requests with injection prevention. That explanation is not repeated here: the record establishes the method change, but using POST alone does not establish injection protection.',
      ]),
      section('final-solution', 'Final Solution', [
        'The resulting system combined a cloud-hosted Tomcat service, Java servlet APIs, a MySQL database, and an HTML/JavaScript frontend. DOM and SAX processing handled XML imports, while sessions and sticky cookies supported navigation across pages and tabs.',
        'The source also records password protection using Jasypt, reCAPTCHA, HTTPS, prepared statements, and FULLTEXT-based search. These are historical implementation descriptions; source code and security verification were not included in this review.',
      ], { image: asset('/assets/legacy/webisteMobileApp.JPG', 'Android movie application showing the mobile client interface', 'Original Android client screenshot; the source says login and search were retained.') }),
      section('delivery', 'Delivery', [
        'The application was deployed to an AWS instance with Tomcat, Java, and MySQL installed. The source also describes a comparison deployment on Google Cloud and an Android extension of the client experience.',
        'The original page states that the old AWS instances were deleted to avoid charges. This case therefore offers an archive of the work and does not direct visitors to an assumed live service.',
        pending('release checklist, load-test script, original repository, and deployment recovery instructions'),
      ]),
      section('outcome', 'Outcome', [
        'The supplied record documents a working web-application build, an Android client, and several applied database and serving optimizations. It also makes the eventual deployment retirement explicit.',
        'The previous rewritten portfolio included a sub-500 ms claim that is not present in this original project page. That number is not carried into this case. There is no verified adoption or performance result to report here.',
      ]),
      section('reflection', 'Reflection', [
        'Editorial follow-up: preserve a reproducible import command, deployment configuration, and representative request benchmark alongside the screenshots. Those artifacts would let a future reader assess performance and recreate the service after cloud retirement.',
        'This is a recommendation for completing the archive, not an invented account of what the original team concluded.',
        pending('the author’s retrospective and a specific technical choice they would now revisit'),
      ]),
    ],
  },
];

// Archive entries keep the same thirteen-section contract as selected cases.
// Evidence gaps are explicit so adding material never requires changing a page component.
function archiveSections(input: { context: string; problem: string; constraints: string; role: string; breakdown: string[]; solution: string; outcome: string; reflection: string; image?: ContentImage }): Section[] {
  return [
    section('overview', 'Overview', [input.context]),
    section('context', 'Context', ['This entry is reconstructed from the original portfolio archive. It retains the recorded scope and clearly separates completed work from a concept or proposed extension.']),
    section('problem', 'Problem', [input.problem]),
    section('constraints', 'Constraints', [input.constraints]),
    section('my-role', 'My Role', [input.role]),
    section('discovery', 'Discovery', [pending('original discovery notes, user evidence, and how requirements were prioritized')]),
    section('problem-breakdown', 'Problem Breakdown', ['The archived description separates the system into the following parts.'], { bullets: input.breakdown }),
    section('options-considered', 'Options Considered', [pending('alternatives actually evaluated, their costs, and reasons for accepting or rejecting them')]),
    section('key-decisions', 'Key Decisions', ['The implementation or concept choices described below are recorded in the original archive. A complete decision history was not supplied.', pending('decision ownership and supporting evidence')]),
    section('final-solution', 'Final Solution', [input.solution], input.image ? { image: input.image } : {}),
    section('delivery', 'Delivery', [pending('milestones, exact individual responsibilities, validation procedure, and final handover or release status')]),
    section('outcome', 'Outcome', [input.outcome]),
    section('reflection', 'Reflection', [input.reflection, pending('the author’s retrospective and next iteration')]),
  ];
}

projects.push(
  {
    slug: 'webcrawler-indexer-ranker', title: 'Webcrawler, Indexer, Ranker', subtitle: 'Search fundamentals under a storage constraint',
    summary: 'A six-week academic search engine covering bounded crawling, duplicate detection, disk-backed indexing, and ranked retrieval.',
    problem: 'Retrieve relevant pages without loading the entire postings index into memory.',
    role: 'Search systems contributor', team: 'Lance Li, Anthony Wen, Van Pham, and Aileen Tran; guided by Professor Alberto Krone-Martins',
    date: '2023 · year to confirm', duration: '6 weeks', category: 'Architecture & Systems', tags: ['Information retrieval', 'Academic project'],
    techStack: ['Python', 'Inverted index', 'TF-IDF', 'Cosine similarity'], status: 'Academic prototype · archived', featured: false,
    coverImage: asset('/assets/legacy/WebCrawler-Indexer-Ranker.JPG', 'Archived crawler and search-engine project image', 'Original search-project image.'),
    outcome: 'Original record reports searches within 100 ms; benchmark conditions were not supplied.', relatedArticles: ['designing-a-search-ranker', 'search-with-a-file-backed-index'], sources: [searchSource],
    sections: archiveSections({
      context: 'The project first crawled a historical UCI network copy, then used a shared course dataset to build an indexer and ranker. The archive credits a four-person collaboration under Professor Alberto Krone-Martins.',
      problem: 'The crawler needed bounded, polite traversal and duplicate handling. The search system then needed to find and rank documents using local files rather than a database.',
      constraints: 'The project lasted six weeks. Crawling stayed within four supplied domains. The indexer had to use local file storage and could not load the full inverted index into memory. The original page contains an unrelated 2019 heading; the later portfolio lists 2023. [To confirm: correct project year.]',
      role: 'The original account specifically attributes the TF-IDF weighting design to me and credits the crawler/indexer/ranker as collaborative work. [To confirm: remaining module ownership.]',
      breakdown: ['Filter URLs and handle successful responses and redirects.', 'Respect recorded robots rules and detect similar pages using three-gram fingerprints.', 'Store term postings on disk with a small byte-offset lookup.', 'Rank matching documents with TF-IDF and cosine similarity; return the top five URLs.'],
      solution: 'The system used a disk-backed inverted index, compact URL identifiers, a term-to-byte-position map, TF-IDF weights, and cosine similarity. The offset map allowed the query path to read relevant postings without loading the full index.',
      outcome: 'The original author reports search execution within 100 ms. No benchmark script, query distribution, hardware specification, percentile, or relevance evaluation accompanies that result; it remains a historical self-reported measurement.',
      reflection: 'Editorial follow-up: preserve query-level timings and relevance examples. A byte-offset lookup is a useful access mechanism, but it does not make the entire retrieval or ranking operation constant-time.',
      image: asset('/assets/legacy/Cosine-Similarity-Visulization.JPG', 'Cosine similarity illustration retained from the search project', 'Original ranking illustration; provided as historical project material.'),
    }),
  },
  {
    slug: 'pantry-pal', title: 'Pantry Pal', subtitle: 'Recommendations shaped by inventory and timing',
    summary: 'A mobile recipe prototype that ranks meals using available ingredients, preferences, preparation time, and eating patterns.',
    problem: 'Recommend a practical meal based on what someone has and when they need to start cooking.',
    role: 'Mobile product contributor', team: pending('team members and individual ownership'), date: '2023 · year to confirm', duration: pending('project duration'),
    category: 'Product & Delivery', tags: ['Recommendation systems', 'Mobile'], techStack: ['Flutter', 'Dart', 'MongoDB Realm', 'Atlas', 'Spoonacular API'],
    status: 'Prototype · archived', featured: false,
    coverImage: asset('/assets/legacy/PantryPalFrontPage.JPG', 'Pantry Pal mobile recipe interface from the original project', 'Original mobile prototype screenshot.'),
    outcome: 'Documented a pantry-aware recommendation and notification flow; no adoption or recommendation-quality evaluation was supplied.', relatedArticles: [], sources: [pantrySource],
    sections: archiveSections({
      context: 'Pantry Pal combines pantry management, recipe browsing, likes and dislikes, and notification timing. The original account describes a shared team build without naming members.',
      problem: 'A relevant recipe must fit a user’s ingredients, available preparation time, and preferences. A useful notification must also arrive early enough to act on it.',
      constraints: 'The source explicitly describes a small recipe dataset, on-device recommendation processing in Dart, and a missing frontend control for excluding ingredients. Project dates conflict with an unrelated copied heading in the legacy page. [To confirm: dates, team, and duration.]',
      role: 'The previous portfolio describes work on recommendation logic and the mobile product. The original uses collective authorship. [To confirm: personal contributions before presenting component-level ownership.]',
      breakdown: ['Manage pantry inventory through ingredient search.', 'Rank recipes by ingredient overlap, time, and liked/disliked meals.', 'Update preference records when the user interacts.', 'Schedule prompts using estimated dining time and preparation needs.'],
      solution: 'The frontend offers pantry and recipe pages with recommended, liked, and disliked recipe groups. Dart computes recommendations on the device. MongoDB Realm and Atlas retain user, recipe, and ingredient records, including ingredient-to-recipe links. Spoonacular is listed as the recipe data source.',
      outcome: 'The source describes an implemented prototype with recommendation and scheduling behavior. It also records a real gap: ingredient exclusion existed in the recommender but lacked a frontend interface. No clinical, dietary-safety, or effectiveness claim is made.',
      reflection: 'Editorial follow-up: connect the missing exclusion control to the underlying logic and document test cases before claiming complete preference handling.',
      image: asset('/assets/legacy/PantryPalDatabaseSchema.JPG', 'Pantry Pal user, recipe, and ingredient schema', 'Original database schema from the project archive.'),
    }),
  },
  {
    slug: 'ocr-translate', title: 'OCR & Translate', subtitle: 'A small tool with a visible processing pipeline',
    summary: 'An image-to-text translation tool with an upload preview, language controls, and side-by-side original and translated lines.',
    problem: 'Help a user compare extracted text and translation without switching between separate tools.',
    role: 'Application developer', team: pending('collaborators, if any'), date: '2024', duration: pending('project duration'),
    category: 'AI & Automation', tags: ['AI-assisted development', 'Prototype'], techStack: ['Python', 'Flask', 'Tesseract OCR', 'googletrans', 'JavaScript'],
    status: 'Prototype · archived', featured: false,
    coverImage: asset('/assets/legacy/ORC%20and%20translate-web.PNG', 'OCR and Translate interface with uploaded image and translation output', 'Original web prototype screenshot; legacy filename retains its original spelling.'),
    outcome: 'Documented upload, OCR, translation, and line-by-line comparison; no accuracy benchmark or deployment status supplied.', relatedArticles: [], sources: [ocrSource],
    sections: archiveSections({
      context: 'The original project describes a Flask application for uploading images, extracting their text, and translating that text into a selected language. It also records experience fixing errors in AI-generated code.',
      problem: 'Text inside an image cannot be directly used as translation input. The application must join image handling, OCR, language selection, and output comparison into a readable sequence.',
      constraints: 'The implementation was intentionally small and used Flask, Tesseract, and googletrans. The source describes temporary cookie-based state without a server-side database. That is an implementation note, not proof of privacy protection.',
      role: 'The author describes building the tool and debugging AI-generated code. [To confirm: development duration and any additional contributors.]',
      breakdown: ['Upload and preview an image.', 'Extract text with Tesseract.', 'Select source and target languages.', 'Translate through googletrans and align original and translated lines.'],
      solution: 'Flask handles the web application, Tesseract performs OCR, and googletrans supplies translation access. HTML, CSS, and JavaScript present an image preview and a table comparing original and translated text. The archive records basic upload and translation error handling.',
      outcome: 'The documented prototype combines the complete upload-to-comparison workflow. The source does not provide OCR accuracy, language coverage validation, user testing, or a current public URL.',
      reflection: 'Editorial follow-up: evaluate difficult images, partial OCR failures, and translation-service failures, then preserve the results alongside example inputs.',
    }),
  },
  {
    slug: 'multi-reader-audiobook', title: 'Multi-Reader Audiobook', subtitle: 'A community narration concept',
    summary: 'A product concept for voluntary narration, listener feedback, and participation rewards inside an audiobook experience.',
    problem: 'Explore how an audiobook app might support multiple community narrators and encourage continued participation.',
    role: 'Product concept author', team: pending('concept collaborators, if any'), date: '2023', duration: pending('concept development period'),
    category: 'Experiments', tags: ['Product concept', 'Community participation'], techStack: ['Concept design'], status: 'Concept only · not an implemented product', featured: false,
    coverImage: asset('/assets/legacy/work-details-image-1.jpg', 'Legacy editorial image retained with the audiobook concept', 'Decorative image from the old portfolio; not evidence of a built audiobook product.'),
    outcome: 'A documented concept and proposed participation model. The source explicitly says implementation was a next step.', relatedArticles: [], sources: [audiobookSource],
    sections: archiveSections({
      context: 'This archival concept proposes inviting community readers to narrate audiobook segments and asking listeners for brief feedback. Its source explicitly places the feature at the conceptual stage.',
      problem: 'The idea explores whether community participation could support multiple narrators and ongoing listener engagement. It does not establish that users wanted or adopted the proposed approach.',
      constraints: 'No implementation, user research, licensing agreement, budget, or validation result was supplied. The proposed rewards, matching, recording, and playback systems are concept scope.',
      role: 'The portfolio presents this as a product concept. [To confirm: authorship history, collaborators, and whether any implementation followed.]',
      breakdown: ['Invite voluntary readers to record story segments.', 'Connect recordings to playback.', 'Collect brief listener feedback.', 'Track contribution and distribute proposed in-app rewards.'],
      solution: 'The concept proposes random reader selection, surveys about story characters, user profiles, contribution tracking, and rewards such as ad-free time or chapter access. These describe intended behavior rather than delivered functionality.',
      outcome: 'The original record identifies reader selection and reward-system integration as next steps. No shipped feature, cost reduction, engagement improvement, or user adoption is claimed.',
      reflection: 'Editorial follow-up: establish rights, recording quality criteria, and a small participant study before interpreting the concept’s proposed benefits as results.',
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
    editorialNote: 'Editorial adaptation created on September 6, 2026 from the original NewU InscribeX project record. This is not an original 2024 publication or a claim about the system’s current state. The diagram and pseudocode are explanatory reconstructions.',
    sections: [
      section('the-change', 'A small feature changes the data problem', [
        'A chat message needs a sender. In the NewU InscribeX archive, messages included wallet-linked identity alongside display information such as a username and profile picture. That was workable while profile editing remained later in the plan.',
        'Once a user could change a name or picture, the team had to decide what an old message should display. The original record describes two approaches: keep copies in message-related records and update them periodically, or read profile information from one user record.',
      ]),
      section('the-options', 'The tradeoff is visible in the original record', [
        'The archive says the team began with copied values. It then credits the CTO with recommending a single location for profile information to keep it timely. That makes this a documented decision rather than a reconstructed story about an ideal architecture.',
      ], { table: { headers: ['Profile strategy', 'What it makes easier', 'What it asks the system to handle'], rows: [
        ['Copied into message data', 'Rendering from already-available message fields', 'Updating or accepting stale copies'],
        ['Read from one user record', 'Displaying the current profile value', 'Repeated profile lookups'],
        ['Add a cache', 'Potentially reducing repeated remote reads', 'Cache freshness, invalidation, and another service'],
      ] } }),
      section('identity-and-display', 'Keep identity and display values separate', [
        'The original data model uses the wallet address as the user document identifier. The explanatory distinction is between identifying a sender and displaying that sender’s current profile. A display name can change while the identity reference remains stable.',
        'The small example below illustrates that relationship only. It is not recovered production code, and it omits authorization, validation, error handling, and caching.',
      ], { code: { language: 'typescript', value: "// Explanatory pseudocode, not the original implementation.\ntype Message = { senderId: string; text: string };\ntype Profile = { displayName: string };\n\nasync function presentMessage(message: Message) {\n  const profile: Profile = await readUser(message.senderId);\n  return {\n    sender: profile.displayName,\n    text: message.text,\n  };\n}" } }),
      section('read-cost', 'The next constraint was read cost', [
        'The archive describes the migration as 50% complete at the time of writing and names frequent Firebase API calls as the largest setback. Redis appears as a proposed way to reduce redundant calls, not as a completed integration.',
        'That distinction matters. A diagram with Redis in the request path would imply a later state than the evidence supports. The documented state is a migration in progress, with caching planned after functionality was finished.',
      ], { diagram: { title: 'Documented direction', nodes: ['Message sender ID', 'User profile lookup', 'Current display values', 'Repeated-read concern'], caption: 'Redis was proposed as future optimization and is intentionally absent from this implemented-flow reconstruction.' } }),
      section('delivery-choice', 'Sequence the work without hiding the debt', [
        'The original record says the team shifted toward completing all functionality before returning to Redis optimization. This is a concrete scope decision: it preserves the intended profile behavior while acknowledging an unresolved cost issue.',
        'The archive does not tell us whether the migration completed, whether caching was later introduced, or how much the read volume changed. No numerical improvement can be attributed to the proposed cache.',
      ]),
      section('next-evidence', 'What would make the decision easier to evaluate?', [
        'Editorial follow-up: record profile reads per conversation view, the behavior after a profile edit, and the difference between cold and repeated views. Those observations would let a reader compare freshness, request volume, and complexity.',
        'The enduring value of this artifact is its specificity. It names the original approach, the change that made it uncomfortable, the person who contributed the recommendation, the resulting constraint, and the work deliberately left for later.',
      ]),
    ],
  },
  {
    slug: 'search-with-a-file-backed-index', title: 'A search index that doesn’t need to fit in memory',
    summary: 'How the archived search project used a small byte-offset map to retrieve term postings from disk before ranking results.',
    category: 'Full-stack Engineering', tags: ['Search', 'Storage', 'Academic notes'], date: contentUpdatedAt, readingTime: '4 min read', featured: false,
    relatedProjects: ['webcrawler-indexer-ranker', 'movie-browser'], sources: [searchSource],
    editorialNote: 'Editorial adaptation created on September 6, 2026 from the original crawler, indexer, and ranker project page. The publication date marks this adaptation. The code is explanatory pseudocode, not recovered source code.',
    sections: [
      section('constraint', 'Start with the storage constraint', [
        'The academic search project required local file storage instead of a database. The original account also states that the full inverted index was too large to load into memory. Those two constraints shaped the retrieval design.',
        'An inverted index associates a term with the documents containing it. The project stored those postings on disk, kept compact URL identifiers, and used a separate map from a word to its byte position in the index.',
      ]),
      section('two-layers', 'Two layers of information', [
        'The smaller lookup answers where a term’s postings begin. The larger file contains the postings themselves. This lets a query read the relevant section of the file without first loading every other term’s document list.',
        'The original record describes direct access as O(1). That should be read narrowly: finding a stored offset does not make reading a long posting list, scoring candidate documents, or sorting results constant-time.',
      ], { diagram: { title: 'Query path', nodes: ['Query term', 'Byte-offset map', 'Read postings from disk', 'Score candidates', 'Top-ranked URLs'], caption: 'Reconstructed from the original indexer and ranker description.' } }),
      section('lookup', 'An illustrative lookup', [
        'This pseudocode shows the separation between locating data and processing it. The archived implementation details such as record boundaries and serialization were not supplied.',
      ], { code: { language: 'python', value: '# Explanatory pseudocode; record format is illustrative.\ndef load_postings(term, offsets, index_file):\n    offset = offsets.get(term)\n    if offset is None:\n        return []\n    index_file.seek(offset)\n    return decode_posting_record(index_file.readline())' } }),
      section('ranking', 'Retrieval still needs relevance', [
        'After locating candidate data, the project used TF-IDF and cosine similarity to rank documents. The original account also discusses additional weighting for emphasized text and returning the top five scored URLs.',
        'A faster lookup is only one part of that pipeline. Relevance depends on tokenization, weighting, candidate selection, and how the query is represented. The source includes the algorithm description but not a judged relevance dataset.',
      ]),
      section('measurement', 'Keep the performance claim bounded', [
        'The source reports searches within 100 ms. That is retained as a historical self-reported result. It does not include a query distribution, hardware configuration, repeated benchmark, or percentile breakdown.',
        'Editorial follow-up: preserve both timing and relevance examples. A query that returns quickly but fails to surface a useful document does not establish a good search experience.',
      ]),
    ],
  },
];

export const experience: Experience[] = [
  {
    role: 'Project Coordinator', organization: 'Self-Help for the Elderly', date: 'Jan 2026 – current in resume',
    summary: 'Turning workforce-program operations into a repeatable delivery system.',
    details: ['Led Health Care Academy coordination, SOP design, curriculum oversight, and stakeholder communication.', 'The supplied resume reports programming for 82 students, an 88% graduation rate, and a 95% work placement rate among graduates. These are program-level results, not individual software-product metrics.'],
  },
  {
    role: 'Career Advisor', organization: 'Self-Help for the Elderly', date: 'May 2025 – Jan 2026',
    summary: 'Working directly with the practical constraints of employment support.',
    details: ['Coordinated a workforce development initiative and employment placement support.', 'The supplied resume reports 909 people served and 792 employment placements, with an 87% program placement rate. The measurement period and attribution method were not supplied.'],
  },
  {
    role: 'Lead Developer & Founder', organization: 'AI Secretary', date: 'Aug 2024 – ongoing in resume',
    summary: 'Connecting job-specific AI assistance to a full-stack product implementation.',
    details: ['Developed resume parsing and tailoring workflows in 12-week cycles.', 'Implemented PostgreSQL schema and Strapi v5 integration; initiated calls and scheduling automation.'],
  },
  {
    role: 'Team Lead / Project Coordinator', organization: 'NewU InscribeX', date: 'Mar – Jul 2024',
    summary: 'Bringing sponsor requirements, team cadence, and technical dependencies into one plan.',
    details: ['Coordinated stand-ups, task assignments, weekly schedules, milestone reporting, and stakeholder briefings.', 'Team size and cycle duration differ between the resume and original project page; the case study preserves that discrepancy.'],
  },
];

export const capabilities: Capability[] = [
  { title: 'Technical Discovery', description: 'Make the environment and constraints explicit. NewU’s archive records sponsor requirements, inherited designs, and platform assumptions.', projectSlugs: ['newu-inscribex'] },
  { title: 'Requirement Translation', description: 'Turn feature requests into actions, alternatives, and failure states that can guide implementation.', projectSlugs: ['newu-inscribex'] },
  { title: 'Solution Architecture', description: 'Connect identity, data relationships, API boundaries, and storage behavior to the product’s actual flow.', projectSlugs: ['newu-inscribex', 'movie-browser'] },
  { title: 'Full-stack Delivery', description: 'Work across interface state, service APIs, data imports, databases, and cloud setup.', projectSlugs: ['movie-browser', 'ai-resume-builder'] },
  { title: 'AI Integration', description: 'Build bounded workflows around job parsing, resume suggestions, OCR, and translation; preserve the distinction between a prototype and validated performance.', projectSlugs: ['ai-resume-builder', 'ocr-translate'] },
  { title: 'Product Thinking', description: 'Connect recommendations to a user’s inventory and timing, or define what a broad sponsor idea should do in specific scenarios.', projectSlugs: ['pantry-pal', 'newu-inscribex'] },
  { title: 'Stakeholder Management', description: 'Use weekly briefings, progress reports, and visible blockers to keep a shared picture of delivery.', projectSlugs: ['newu-inscribex'] },
  { title: 'Project Planning', description: 'Translate scope into schedules, task ownership, milestones, and regular check-ins.', projectSlugs: ['newu-inscribex'] },
  { title: 'Cross-functional Collaboration', description: 'Coordinate engineering work with sponsor expectations and a design direction supplied by another team.', projectSlugs: ['newu-inscribex'] },
  { title: 'Delivery & Iteration', description: 'Use testing and recorded implementation gaps to identify the next work. Separate planned improvements from delivered behavior.', projectSlugs: ['ai-resume-builder', 'newu-inscribex'] },
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
