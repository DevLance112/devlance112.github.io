import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Presentation,
  Sparkles,
  Workflow,
} from "lucide-react";

const contact = {
  email: "lanceprofe@gmail.com",
  phone: "(415) 519-1480",
  location: "Bay Area, CA",
};

const metrics = [
  { value: "909", label: "individuals served through workforce initiatives" },
  { value: "792", label: "successful employment placements coordinated" },
  { value: "87%", label: "job placement rate across a major program" },
  { value: "95%", label: "work placement rate among academy graduates" },
];

const timeline = [
  {
    role: "Project Coordinator",
    company: "Self-Help for the Elderly",
    date: "2026 - Present",
    detail:
      "Leading healthcare academy operations, SOP design, curriculum oversight, stakeholder coordination, and measurable workforce outcomes.",
  },
  {
    role: "Lead Developer and Founder",
    company: "AI Secretary",
    date: "2024 - Present",
    detail:
      "Designing an AI-powered resume builder and virtual secretary that parses job descriptions, schedules appointments, and screens calls.",
  },
  {
    role: "Team Lead and Administrative Coordinator",
    company: "NewU InscribeX Crypto",
    date: "2024",
    detail:
      "Directed a four-person product sprint with weekly schedules, stakeholder briefings, milestone reports, and on-time delivery.",
  },
];

const projects = [
  {
    title: "AI Secretary",
    tag: "AI product system",
    image: "/assets/project-ai-secretary.png",
    description:
      "A multifunctional assistant concept for call screening, appointment scheduling, calendar sync, and user-facing trust flows.",
    metric: "80% manual test pass rate",
  },
  {
    title: "AI Resume Builder",
    tag: "Career design tool",
    image: "/assets/project-resume-builder.png",
    description:
      "A 12-week AI product cycle for job description parsing, resume fine-tuning, content structure, and scalable data architecture.",
    metric: "PostgreSQL + Strapi v5",
  },
  {
    title: "Health Care Academy",
    tag: "Service experience",
    image: "/assets/project-healthcare-academy.png",
    description:
      "Operational design for an 82-student government-funded program with SOPs, cohort consistency, and outcome reporting.",
    metric: "88% graduation rate",
  },
  {
    title: "InscribeX Crypto",
    tag: "Launch coordination",
    image: "/assets/project-inscribex.png",
    description:
      "A fast-moving product sprint shaped through team rituals, stakeholder narratives, milestone visibility, and risk control.",
    metric: "100% on-time goals",
  },
];

const strengths = [
  {
    icon: BrainCircuit,
    title: "AI-native thinking",
    text: "Transforms ambiguous workflows into AI-assisted product experiences with clear user intent and practical technical constraints.",
  },
  {
    icon: PenTool,
    title: "Visual systems",
    text: "Builds restrained, high-contrast interfaces, campaign surfaces, and modular design rules that keep brands recognizable.",
  },
  {
    icon: Sparkles,
    title: "Brand direction",
    text: "Shapes identity, voice, and presentation logic so a product feels precise before a user reads the supporting copy.",
  },
  {
    icon: Workflow,
    title: "Operational design",
    text: "Turns SOPs, stakeholder needs, and team rituals into repeatable systems that can be measured, taught, and improved.",
  },
  {
    icon: Code2,
    title: "Prototype fluency",
    text: "Moves comfortably between design intent and front-end implementation across JavaScript, HTML/CSS, SQL, and API workflows.",
  },
  {
    icon: Presentation,
    title: "Executive narrative",
    text: "Communicates progress, risks, and decisions through crisp briefs that help teams align without slowing delivery.",
  },
];

function Nav() {
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <a className="brand-mark" href="#home" aria-label="Lance Li home">
        <span>LL</span>
        <strong>Lance Li</strong>
      </a>
      <nav className="nav-links" aria-label="Sections">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#strengths">Strengths</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href={`mailto:${contact.email}`}>
        <Mail size={18} aria-hidden="true" />
        <span>Contact</span>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-band" id="home">
      <img className="hero-bg" src="/assets/hero-lance.png" alt="" />
      <div className="hero-shade" />
      <Nav />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Visual Designer / AI Designer / Brand Designer</p>
          <h1>Designing identities for intelligent products.</h1>
          <p className="hero-text">
            I combine visual systems, AI product thinking, and operational strategy to build brands and interfaces that feel sharp, useful, and future-facing.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              <span>View selected work</span>
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="secondary-action" href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Portfolio focus areas">
          <span>01 Visual Systems</span>
          <span>02 AI Product Experience</span>
          <span>03 Brand Strategy</span>
        </div>
      </div>
      <div className="hero-peek">
        <span>Bay Area, CA</span>
        <span>AI products, service systems, launch narratives</span>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-band" id="experience">
      <div className="section-inner experience-grid">
        <div className="media-column">
          <div className="portrait-wrap">
            <img src="/assets/avatar-lance.png" alt="Abstract portrait for Lance Li" />
          </div>
          <figure className="motion-frame">
            <img src="/assets/motion-still.png" alt="Abstract motion system still" />
            <figcaption>
              <span>Signal study</span>
              <span>AI workflow / brand motion</span>
            </figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <p className="section-kicker">Experience</p>
          <h2>Design instincts backed by product execution.</h2>
          <p>
            I am Lance Li, a Bay Area designer working across visual identity, AI-assisted product experiences, and brand systems. My background combines design direction with project coordination, software prototyping, and stakeholder communication, which helps me move ideas from concept into measurable systems.
          </p>
          <div className="contact-list" aria-label="Contact details">
            <a href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}>
              <Phone size={18} aria-hidden="true" />
              {contact.phone}
            </a>
            <span>
              <MapPin size={18} aria-hidden="true" />
              {contact.location}
            </span>
          </div>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <div className="metric-item" key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div>
                  <p>{item.date}</p>
                  <h3>{item.role}</h3>
                </div>
                <div>
                  <span>{item.company}</span>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects section-band" id="projects">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected projects</p>
            <h2>Large-format work snapshots.</h2>
          </div>
          <a className="text-link" href={`mailto:${contact.email}`}>
            Request full case studies
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={`${project.title} visual cover`} />
              </div>
              <div className="project-info">
                <div>
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.metric}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="strengths section-band" id="strengths">
      <div className="section-inner">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">Strengths</p>
            <h2>A practice built for intelligent brands.</h2>
          </div>
          <p>
            The throughline is clarity: visual precision, system thinking, and enough technical fluency to make AI concepts feel real.
          </p>
        </div>
        <div className="strength-grid">
          {strengths.map((strength) => {
            const Icon = strength.icon;
            return (
              <article className="strength-card" key={strength.title}>
                <div className="strength-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer className="contact-footer section-band" id="contact">
      <div className="footer-inner">
        <p className="section-kicker">Contact</p>
        <h2>Let us build the next intelligent visual system.</h2>
        <div className="footer-actions">
          <a className="primary-action" href={`mailto:${contact.email}`}>
            <Mail size={19} aria-hidden="true" />
            <span>Email Lance</span>
          </a>
          <a className="secondary-action" href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}>
            <Phone size={18} aria-hidden="true" />
            <span>{contact.phone}</span>
          </a>
        </div>
        <div className="footer-line">
          <span>{contact.location}</span>
          <span>Available for visual identity, AI design, brand systems, and product prototypes.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="site-shell">
      <Hero />
      <Experience />
      <Projects />
      <Strengths />
      <ContactFooter />
    </main>
  );
}
