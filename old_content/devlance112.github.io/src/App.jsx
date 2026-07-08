import React, { useState } from 'react';

import profileImage from '../assets/images/profile-image.png';
import heroVisual from '../assets/images/NewU-InscribeX-img/image20.png';
import newuProfile from '../assets/images/NewU-InscribeX-img/image21.png';
import newuFlow from '../assets/images/NewU-InscribeX-img/image9.png';
import ocrTool from '../assets/images/ORC and translate-web.PNG';
import mobileApp from '../assets/images/webisteMobileApp.JPG';
import travelUi from '../assets/images/work-details-image-1.jpg';

const contact = {
  email: 'lanceprofe@gmail.com',
  phone: '(415) 519-1480',
  location: 'Bay Area, CA',
  linkedin: 'https://www.linkedin.com/in/lance-li-3158aa142/',
  github: 'https://github.com/DevLance112',
};

const projectMetrics = [
  { value: '909', label: 'people served through workforce initiatives' },
  { value: '87%', label: 'job placement rate across the program' },
  { value: '95%', label: 'work placement rate among academy graduates' },
  { value: '80%', label: 'AI secretary manual test cases passing' },
];

const experience = [
  {
    period: '2025 - Present',
    role: 'Project Coordinator / Career Advisor',
    company: 'Self-Help for the Elderly',
    note:
      'Coordinating workforce programs, SOP design, stakeholder updates, and student outcomes for healthcare career cohorts.',
  },
  {
    period: '2024 - Present',
    role: 'Lead Developer & Founder',
    company: 'AI Secretary',
    note:
      'Designing AI-powered resume and virtual secretary products that parse context, automate actions, and reduce manual work.',
  },
  {
    period: 'Mar - Jul 2024',
    role: 'Team Lead / Administrative Coordinator',
    company: 'NewU InscribeX',
    note:
      'Directed an 8-week Web3 product cycle with schedules, stakeholder briefings, risk tracking, and cross-functional delivery.',
  },
];

const featuredProjects = [
  {
    title: 'NewU InscribeX',
    type: 'Web3 Brand & Interface',
    year: '2024',
    image: heroVisual,
    link: 'NewU-InscribeX-Detail.html',
    description:
      'A dark Web3 marketplace and communication platform with wallet connection, community chat, asset navigation, and stakeholder-ready flows.',
    tags: ['Visual Direction', 'Interface Design', 'Team Lead'],
  },
  {
    title: 'AI Resume Builder & Secretary',
    type: 'AI Product Design',
    year: '2024 - Present',
    image: ocrTool,
    link: 'AI-Resume-Builder-Detail.html',
    description:
      'An AI workflow for job-specific resume optimization, intake parsing, appointment logic, and calendar-aware assistant behavior.',
    tags: ['AI UX', 'Prompt Flow', 'Product System'],
  },
  {
    title: 'Interaction Flow Library',
    type: 'Systems Thinking',
    year: '2024',
    image: newuFlow,
    link: 'NewU-InscribeX-Detail.html',
    description:
      'User flows, data structures, and requirements translated into visible decision paths for faster alignment across product teams.',
    tags: ['User Flow', 'Architecture', 'Documentation'],
  },
  {
    title: 'Mobile Product Studies',
    type: 'Responsive UI',
    year: '2023 - 2024',
    image: travelUi,
    link: 'Project-List.html',
    description:
      'Mobile-first product explorations focused on hierarchy, state clarity, compact interactions, and interface polish.',
    tags: ['Mobile UI', 'Visual Design', 'Prototype'],
  },
];

const strengths = [
  {
    title: 'Visual Direction',
    body:
      'Builds disciplined art direction with clear hierarchy, restrained color, photographic framing, and interface rhythm.',
  },
  {
    title: 'AI Design Workflow',
    body:
      'Turns ambiguous AI behavior into useful flows, human review points, prompt logic, and testable product loops.',
  },
  {
    title: 'Brand Systems',
    body:
      'Connects identity, tone, layout, and reusable components so a product can feel consistent without becoming generic.',
  },
  {
    title: 'Product Operations',
    body:
      'Uses project plans, SOPs, stakeholder briefings, and measurable outcomes to move teams from concept to delivery.',
  },
  {
    title: 'Design to Code',
    body:
      'Bridges visual design and implementation with React, HTML/CSS, JavaScript, databases, and practical prototyping.',
  },
  {
    title: 'Cross-functional Clarity',
    body:
      'Communicates between business, design, engineering, and community stakeholders with calm structure and useful artifacts.',
  },
];

function App() {
  const [copyLabel, setCopyLabel] = useState('Copy email');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyLabel('Email copied');
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <img className="hero__image" src={heroVisual} alt="Dark NewU interface visual background" />
        <div className="hero__shade" />
        <header className="site-nav" aria-label="Main navigation">
          <a className="brand-mark" href="#top" aria-label="Lance Li home">
            <span>LL</span>
            <strong>Lance Li</strong>
          </a>
          <nav className="nav-links">
            <a href="#profile">Profile</a>
            <a href="#projects">Projects</a>
            <a href="#strengths">Strengths</a>
          </nav>
          <a className="nav-contact" href={`mailto:${contact.email}`}>
            Contact
          </a>
        </header>

        <div className="hero__content content-frame">
          <div className="hero__copy">
            <p className="eyebrow">Visual Designer / AI Designer / Brand Designer</p>
            <h1>Designing AI-native brands with visual restraint.</h1>
            <p className="hero__lede">
              I shape digital products, brand systems, and AI workflows for teams that need work to feel sharp,
              intelligent, and quietly memorable.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View work
              </a>
              <button className="button button--ghost" type="button" onClick={copyEmail}>
                {copyLabel}
              </button>
            </div>
          </div>

          <aside className="hero__signal" aria-label="Portfolio summary">
            <span>Based in {contact.location}</span>
            <strong>AI product logic, brand language, and visual systems.</strong>
          </aside>
        </div>
      </section>

      <section className="profile-section" id="profile">
        <div className="content-frame profile-grid">
          <div className="profile-media" aria-label="Portrait and project imagery">
            <img className="profile-media__portrait" src={profileImage} alt="Portrait of Lance Li" />
            <img className="profile-media__screen" src={newuProfile} alt="NewU profile interface screen" />
            <img className="profile-media__mobile" src={mobileApp} alt="Mobile product interface study" />
          </div>

          <div className="profile-copy">
            <p className="eyebrow">Profile</p>
            <h2>Designer with a product operator's discipline.</h2>
            <p>
              I work at the intersection of visual design, AI tooling, and brand systems. My background combines
              Business Administration, Computer Science, project coordination, and hands-on product building, which
              helps me move from abstract identity to shipped interface with fewer gaps.
            </p>
            <div className="contact-strip" aria-label="Contact information">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}>{contact.phone}</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="metrics-grid" aria-label="Project data">
            {projectMetrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.company}-${item.role}`}>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="content-frame">
          <div className="section-heading">
            <p className="eyebrow">Selected Projects</p>
            <h2>Large-format work samples across AI, brand, and interface systems.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <a href={project.link} aria-label={`Open ${project.title}`}>
                  <img src={project.image} alt={`${project.title} project preview`} />
                </a>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list" aria-label={`${project.title} tags`}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strengths-section" id="strengths">
        <div className="content-frame">
          <div className="section-heading">
            <p className="eyebrow">Strengths</p>
            <h2>Calm systems for complex work.</h2>
          </div>

          <div className="strength-grid">
            {strengths.map((item, index) => (
              <article className="strength-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="contact-finale" id="contact">
        <div className="contact-finale__media" aria-hidden="true">
          <img src={heroVisual} alt="" />
        </div>
        <div className="content-frame contact-finale__content">
          <p className="eyebrow">Contact</p>
          <h2>Let's build a sharper visual system with intelligence in it.</h2>
          <div className="finale-actions">
            <a className="button button--primary" href={`mailto:${contact.email}`}>
              Email Lance
            </a>
            <button className="button button--ghost" type="button" onClick={copyEmail}>
              {copyLabel}
            </button>
          </div>
          <div className="finale-details">
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <span>{contact.location}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
