import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import {
  contact,
  featuredProjects,
  metrics,
  projects,
  skillStacks,
  strengths,
  timeline,
} from "./projectData";

gsap.registerPlugin(ScrollTrigger);

const strengthIcons = [BrainCircuit, PenTool, Sparkles, Workflow, Code2, Presentation];

function projectHref(project) {
  return `/projects/${project.slug}`;
}

function getRoute() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/") return { type: "landing" };
  if (path === "/portfolio") return { type: "home" };
  if (path === "/projects") return { type: "projects" };
  if (path.startsWith("/projects/")) {
    const slug = path.split("/").filter(Boolean)[1];
    return { type: "project", slug };
  }
  return { type: "landing" };
}

function usePortfolioMotion(rootRef, { opening = false } = {}) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      root.querySelector(".opening-animation")?.setAttribute("hidden", "");
      root.classList.add("motion-ready");
      return undefined;
    }

    const ctx = gsap.context(() => {
      const silk = "expo.out";
      const liquid = "power4.inOut";
      const shouldPlayOpening = opening && Boolean(root.querySelector(".opening-animation"));
      const hasHeroBg = Boolean(root.querySelector(".hero-bg"));
      const hasHero = Boolean(root.querySelector(".hero"));

      gsap.set(".site-shell", { autoAlpha: 1 });

      if (shouldPlayOpening) {
        gsap.set(".opening-word span", { yPercent: 120, scaleY: 0.28, skewY: 8 });
        gsap.set(".opening-scan", { scaleX: 0, transformOrigin: "left center" });
        gsap.set(".hero-bg", { scale: 1.14, yPercent: -4, filter: "blur(7px)" });
        gsap.set(".landing-nav", {
          y: -72,
          clipPath: "inset(0 0 100% 0)",
        });
        gsap.set(".hero-title-line", {
          yPercent: 118,
          scaleY: 0.34,
          skewY: 7,
          transformOrigin: "left bottom",
        });
        gsap.set(
          [".landing-meta", ".hero .eyebrow", ".hero-text", ".hero-actions > a", ".landing-index > span", ".hero-peek span"],
          {
            y: 42,
            clipPath: "inset(100% 0 0 0)",
          }
        );

        const openingTimeline = gsap.timeline({
          defaults: { ease: liquid },
          onComplete: () => {
            root.classList.add("motion-ready");
            ScrollTrigger.refresh();
          },
        });

        openingTimeline
          .to(".opening-word span", {
            yPercent: 0,
            scaleY: 1,
            skewY: 0,
            duration: 1.25,
            stagger: 0.11,
          })
          .to(
            ".opening-scan",
            {
              scaleX: 1,
              duration: 1.05,
              stagger: 0.08,
            },
            0.16
          )
          .to(
            ".opening-glyph",
            {
              clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)",
              xPercent: 16,
              duration: 1.1,
            },
            0.2
          )
          .to(
            ".opening-panel",
            {
              scaleY: 0,
              transformOrigin: "top center",
              duration: 1.35,
              stagger: { each: 0.08, from: "end" },
            },
            1.16
          )
          .to(
            ".opening-animation",
            {
              autoAlpha: 0,
              duration: 0.45,
            },
            2.22
          )
          .to(
            ".hero-bg",
            {
              scale: 1,
              yPercent: 0,
              filter: "blur(0px)",
              duration: 2,
              ease: silk,
            },
            1.05
          )
          .to(
            ".landing-nav",
            {
              y: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.25,
              ease: silk,
            },
            1.56
          )
          .to(
            ".hero-title-line",
            {
              yPercent: 0,
              scaleY: 1,
              skewY: 0,
              duration: 1.7,
              stagger: 0.16,
              ease: silk,
            },
            1.62
          )
          .to(
            [".landing-meta", ".hero .eyebrow", ".hero-text", ".hero-actions > a", ".landing-index > span", ".hero-peek span"],
            {
              y: 0,
              clipPath: "inset(0% 0 0 0)",
              duration: 1.2,
              stagger: 0.08,
              ease: silk,
            },
            1.88
          );
      } else {
        root.classList.add("motion-ready");
        if (hasHeroBg) {
          gsap.set(".hero-bg", { scale: 1, yPercent: 0, filter: "blur(0px)" });
        }
        requestAnimationFrame(() => ScrollTrigger.refresh());
      }

      gsap.utils.toArray("[data-motion-section]").forEach((section) => {
        const ghostTitle = section.querySelector("[data-section-title]");
        const copy = section.querySelectorAll("[data-reveal-copy]");
        const cards = section.querySelectorAll("[data-reveal-card]");

        if (ghostTitle) {
          gsap.fromTo(
            ghostTitle,
            {
              xPercent: -46,
              y: 110,
              scaleX: 1.35,
              skewX: -14,
              clipPath: "inset(0 100% 0 0)",
            },
            {
              xPercent: 0,
              y: 0,
              scaleX: 1,
              skewX: 0,
              clipPath: "inset(0 0% 0 0)",
              duration: 1.75,
              ease: silk,
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                once: true,
              },
            }
          );
        }

        if (copy.length) {
          gsap.fromTo(
            copy,
            {
              y: 72,
              scaleY: 0.82,
              clipPath: "inset(0 0 100% 0)",
            },
            {
              y: 0,
              scaleY: 1,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.28,
              stagger: 0.08,
              ease: silk,
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                once: true,
              },
            }
          );
        }

        if (cards.length) {
          gsap.fromTo(
            cards,
            {
              y: 118,
              scaleY: 0.72,
              scaleX: 0.96,
              rotateX: -7,
              clipPath: "inset(0 0 100% 0)",
              transformOrigin: "center bottom",
            },
            {
              y: 0,
              scaleY: 1,
              scaleX: 1,
              rotateX: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.42,
              stagger: 0.12,
              ease: silk,
              scrollTrigger: {
                trigger: section,
                start: "top 64%",
                once: true,
              },
            }
          );
        }
      });

      gsap.utils.toArray("[data-image-reveal]").forEach((wrap) => {
        const img = wrap.querySelector("img");
        const curtain = wrap.querySelector(".image-curtain");

        gsap.fromTo(
          wrap,
          {
            clipPath: "inset(0 100% 0 0)",
            scaleX: 1.08,
            transformOrigin: "left center",
          },
          {
            clipPath: "inset(0 0% 0 0)",
            scaleX: 1,
            duration: 1.35,
            ease: silk,
            scrollTrigger: {
              trigger: wrap,
              start: "top 82%",
              once: true,
            },
          }
        );

        if (curtain) {
          gsap.fromTo(
            curtain,
            { xPercent: 0 },
            {
              xPercent: 108,
              duration: 1.45,
              ease: silk,
              scrollTrigger: {
                trigger: wrap,
                start: "top 82%",
                once: true,
              },
            }
          );
        }

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12, xPercent: -2 },
            {
              scale: 1.03,
              xPercent: 0,
              duration: 1.65,
              ease: silk,
              scrollTrigger: {
                trigger: wrap,
                start: "top 82%",
                once: true,
              },
            }
          );

          gsap.to(img, {
            yPercent: -3,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.15,
            },
          });
        }
      });

      if (hasHeroBg && hasHero) {
        gsap.to(".hero-bg", {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      }
    }, root);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [rootRef, opening]);
}

function OpeningAnimation() {
  return (
    <div className="opening-animation" aria-hidden="true">
      <div className="opening-panels">
        <span className="opening-panel" />
        <span className="opening-panel" />
        <span className="opening-panel" />
        <span className="opening-panel" />
      </div>
      <div className="opening-glyph" />
      <div className="opening-copy">
        <span className="opening-word">
          <span>Visual</span>
        </span>
        <span className="opening-word">
          <span>AI</span>
        </span>
        <span className="opening-word">
          <span>Brand</span>
        </span>
      </div>
      <div className="opening-meta">
        <span>LANCE LI</span>
        <span>PORTFOLIO SYSTEM 2026</span>
      </div>
      <div className="opening-scans">
        <span className="opening-scan" />
        <span className="opening-scan" />
        <span className="opening-scan" />
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="section-ghost-title" data-section-title aria-hidden="true">
      {children}
    </div>
  );
}

function Nav({ current = "home" }) {
  const isHome = current === "home";
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <a className="brand-mark" href="/portfolio" aria-label="Lance Li portfolio">
        <span>LL</span>
        <strong>Lance Li</strong>
      </a>
      <nav className="nav-links" aria-label="Sections">
        <a href={isHome ? "#experience" : "/portfolio#experience"}>Experience</a>
        <a href="/projects">All Work</a>
        <a href={isHome ? "#strengths" : "/portfolio#strengths"}>Strengths</a>
        <a href={isHome ? "#contact" : "/portfolio#contact"}>Contact</a>
      </nav>
      <a className="nav-cta" href={`mailto:${contact.email}`}>
        <Mail size={18} aria-hidden="true" />
        <span>Contact</span>
      </a>
    </header>
  );
}

function LandingPage() {
  return (
    <section className="landing-page hero section-band" id="landing">
      <img className="hero-bg landing-bg" src="/assets/hero-lance.png" alt="" />
      <div className="landing-shade" />
      <header className="landing-nav" aria-label="Landing navigation">
        <a className="brand-mark" href="/portfolio" aria-label="Enter Lance Li portfolio">
          <span>LL</span>
          <strong>Lance Li</strong>
        </a>
        <div className="landing-nav-links">
          <a href="/projects">Archive</a>
          <a href={`mailto:${contact.email}`}>Contact</a>
        </div>
      </header>
      <div className="landing-portal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="landing-inner">
        <div className="landing-meta">
          <span>Visual / AI / Brand</span>
          <span>Bay Area, CA</span>
          <span>Portfolio 2026</span>
        </div>
        <div className="landing-copy">
          <p className="eyebrow">Visual Designer / AI Designer / Brand Designer</p>
          <h1 className="landing-title hero-title" aria-label="Lance Li">
            <span className="title-mask">
              <span className="hero-title-line">Lance</span>
            </span>
            <span className="title-mask title-mask-offset">
              <span className="hero-title-line">Li</span>
            </span>
          </h1>
          <p className="hero-text">
            A restrained, high-contrast portfolio system for intelligent products, brand identities, and AI-driven visual direction.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="/portfolio">
              <span>Enter portfolio</span>
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="secondary-action" href="/projects">
              <span>Project archive</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="landing-index" aria-label="Portfolio summary">
          <span>{featuredProjects.length.toString().padStart(2, "0")} featured systems</span>
          <span>{projects.length.toString().padStart(2, "0")} detailed studies</span>
          <span>Identity / AI UX / product narrative</span>
        </div>
      </div>
      <div className="hero-peek landing-peek">
        <span>Selected work, experience, skills, and contact live inside the portfolio.</span>
        <span>Launch the full system</span>
      </div>
    </section>
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
          <h1 className="hero-title" aria-label="Designing identities for intelligent products.">
            <span className="title-mask">
              <span className="hero-title-line">Designing </span>
            </span>
            <span className="title-mask">
              <span className="hero-title-line">identities for </span>
            </span>
            <span className="title-mask">
              <span className="hero-title-line">intelligent </span>
            </span>
            <span className="title-mask">
              <span className="hero-title-line">products.</span>
            </span>
          </h1>
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
    <section className="experience section-band" id="experience" data-motion-section>
      <SectionTitle>Experience</SectionTitle>
      <div className="section-inner experience-grid">
        <div className="media-column">
          <div className="portrait-wrap image-reveal" data-image-reveal>
            <img src="/assets/avatar-lance.png" alt="Abstract portrait for Lance Li" />
            <span className="image-curtain" aria-hidden="true" />
          </div>
          <figure className="motion-frame image-reveal" data-image-reveal>
            <img src="/assets/motion-still.png" alt="Abstract motion system still" />
            <span className="image-curtain" aria-hidden="true" />
            <figcaption>
              <span>Signal study</span>
              <span>AI workflow / brand motion</span>
            </figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <p className="section-kicker" data-reveal-copy>Experience</p>
          <h2 data-reveal-copy>Design instincts backed by product execution.</h2>
          <p data-reveal-copy>
            I am Lance Li, a Bay Area designer working across visual identity, AI-assisted product experiences, and brand systems. My background combines design direction with project coordination, software prototyping, and stakeholder communication, which helps me move ideas from concept into measurable systems.
          </p>
          <div className="contact-list" aria-label="Contact details">
            <a href={`mailto:${contact.email}`} data-reveal-card>
              <Mail size={18} aria-hidden="true" />
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`} data-reveal-card>
              <Phone size={18} aria-hidden="true" />
              {contact.phone}
            </a>
            <span data-reveal-card>
              <MapPin size={18} aria-hidden="true" />
              {contact.location}
            </span>
          </div>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <div className="metric-item" key={metric.value} data-reveal-card>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`} data-reveal-card>
                <div>
                  <p>{item.date}</p>
                  <h3>{item.role}</h3>
                </div>
                <div>
                  <span>{item.company}</span>
                  <strong>{item.type}</strong>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="skills-matrix" data-reveal-card>
            {skillStacks.map((stack) => (
              <article className="skill-stack" key={stack.title}>
                <h3>{stack.title}</h3>
                <div>
                  {stack.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
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
    <section className="projects section-band" id="projects" data-motion-section>
      <SectionTitle>Selected Work</SectionTitle>
      <div className="section-inner">
        <div className="section-heading">
          <div data-reveal-copy>
            <p className="section-kicker">Selected projects</p>
            <h2>Selected case studies from product, AI, and systems work.</h2>
          </div>
          <a className="text-link" href="/projects" data-reveal-card>
            View all projects
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <article className="project-card" key={project.title} data-reveal-card>
              <a className="project-image image-reveal" href={projectHref(project)} data-image-reveal>
                <img src={project.cover} alt={`${project.title} visual cover`} />
                <span className="image-curtain" aria-hidden="true" />
              </a>
              <div className="project-info">
                <div>
                  <span>{project.label}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.summary}</p>
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.status}</strong>
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
    <section className="strengths section-band" id="strengths" data-motion-section>
      <SectionTitle>Strengths</SectionTitle>
      <div className="section-inner">
        <div className="section-heading compact">
          <div data-reveal-copy>
            <p className="section-kicker">Strengths</p>
            <h2>A practice built for intelligent brands.</h2>
          </div>
          <p data-reveal-copy>
            The throughline is clarity: visual precision, system thinking, and enough technical fluency to make AI concepts feel real.
          </p>
        </div>
        <div className="strength-grid">
          {strengths.map((strength, index) => {
            const Icon = strengthIcons[index % strengthIcons.length];
            return (
              <article className="strength-card" key={strength.title} data-reveal-card>
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
    <footer className="contact-footer section-band" id="contact" data-motion-section>
      <SectionTitle>Contact</SectionTitle>
      <div className="footer-inner">
        <p className="section-kicker" data-reveal-copy>Contact</p>
        <h2 data-reveal-copy>Let us build the next intelligent visual system.</h2>
        <div className="footer-actions">
          <a className="primary-action" href={`mailto:${contact.email}`} data-reveal-card>
            <Mail size={19} aria-hidden="true" />
            <span>Email Lance</span>
          </a>
          <a className="secondary-action" href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`} data-reveal-card>
            <Phone size={18} aria-hidden="true" />
            <span>{contact.phone}</span>
          </a>
        </div>
        <div className="footer-line" data-reveal-card>
          <span>{contact.location}</span>
          <span>Available for visual identity, AI design, brand systems, and product prototypes.</span>
        </div>
      </div>
    </footer>
  );
}

function ProjectsArchive() {
  return (
    <>
      <section className="hero library-hero section-band" id="projects-library">
        <img className="hero-bg" src="/assets/legacy/NewU-InscribeX-img/image20.png" alt="" />
        <div className="hero-shade" />
        <Nav current="projects" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Project journal</p>
            <h1 className="hero-title" aria-label="Case study journal.">
              <span className="title-mask">
                <span className="hero-title-line">Case study </span>
              </span>
              <span className="title-mask">
                <span className="hero-title-line">journal.</span>
              </span>
            </h1>
            <p className="hero-text">
              A sequential archive of product builds, AI experiments, search systems, mobile prototypes, and long-form analysis from the older portfolio.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="/portfolio">
                <span>Back home</span>
                <ArrowRight size={19} aria-hidden="true" />
              </a>
              <a className="secondary-action" href={`mailto:${contact.email}`}>
                <Mail size={18} aria-hidden="true" />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Project archive summary">
            <span>07 long-form studies</span>
            <span>AI, Web3, search, mobile, backend</span>
            <span>Built to be read from top to bottom</span>
          </div>
        </div>
        <div className="hero-peek">
          <span>Project journal</span>
          <span>Each entry keeps image context, decisions, and technical reasoning together</span>
        </div>
      </section>

      <section className="project-archive section-band" data-motion-section>
        <SectionTitle>Archive</SectionTitle>
        <div className="section-inner">
          <div className="section-heading">
            <div data-reveal-copy>
              <p className="section-kicker">All projects</p>
              <h2>Choose a story, then read through the thinking in order.</h2>
            </div>
            <a className="text-link" href="/portfolio#projects" data-reveal-card>
              Selected work
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="archive-grid">
            {projects.map((project, index) => (
              <article className="archive-card" key={project.slug} data-reveal-card>
                <a className="archive-media image-reveal" href={projectHref(project)} data-image-reveal>
                  <img src={project.cover} alt={`${project.title} project preview`} />
                  <span className="image-curtain" aria-hidden="true" />
                </a>
                <div className="archive-card-body">
                  <div className="archive-card-index">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.year}</span>
                  </div>
                  <p>{project.label}</p>
                  <h3>{project.title}</h3>
                  <strong>{project.status}</strong>
                  <p className="archive-excerpt">{project.summary}</p>
                  <div className="project-tags" aria-label={`${project.title} technologies`}>
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="archive-read-link" href={projectHref(project)}>
                    Read case
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  );
}

function ProjectDetail({ project }) {
  if (!project) {
    return <NotFoundPage />;
  }

  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const projectIndex = projects.findIndex((item) => item.slug === project.slug) + 1;
  const articleImages = project.images.length ? project.images : [project.cover];
  const heroImage = articleImages[0];
  const leadImage = articleImages[1] || articleImages[0];
  const readingLinks = [
    { href: "#case-brief", label: "Opening brief" },
    ...project.analysis.map((item, index) => ({
      href: `#chapter-${index + 1}`,
      label: item.title,
    })),
    { href: "#case-notes", label: "Field notes" },
  ];

  return (
    <>
      <section className="case-blog-hero section-band" id="project-detail">
        <Nav current="projects" />
        <div className="case-hero-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="case-hero-grid">
          <div className="case-hero-copy">
            <a className="case-back-link" href="/projects">
              Project journal
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="eyebrow">{project.label}</p>
            <h1 className="case-hero-title">{project.title}</h1>
            <p className="case-hero-summary">{project.summary}</p>
            <div className="case-hero-actions">
              <a className="primary-action" href="/projects">
                <span>All projects</span>
                <ArrowRight size={19} aria-hidden="true" />
              </a>
              <a className="secondary-action" href={`mailto:${contact.email}`}>
                <Mail size={18} aria-hidden="true" />
                <span>Discuss this work</span>
              </a>
            </div>
          </div>
          <aside className="case-hero-media" aria-label={`${project.title} preview`}>
            <div className="case-hero-frame image-reveal" data-image-reveal>
              <img src={heroImage} alt={`${project.title} editorial cover`} />
              <span className="image-curtain" aria-hidden="true" />
            </div>
            <div className="case-hero-metadata">
              <span>{String(projectIndex).padStart(2, "0")}</span>
              <span>{project.year}</span>
              <span>{project.role}</span>
            </div>
          </aside>
        </div>
        <div className="case-hero-spine">
          <span>Read from the brief downward</span>
          <span>{project.tags.join(" / ")}</span>
        </div>
      </section>

      <section className="case-blog-shell section-band">
        <SectionTitle>Journal</SectionTitle>
        <div className="section-inner case-blog-layout">
          <aside className="case-reading-rail" aria-label={`${project.title} reading order`}>
            <p>Reading order</p>
            {readingLinks.map((link, index) => (
              <a href={link.href} key={link.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {link.label}
              </a>
            ))}
          </aside>

          <article className="case-story">
            <section className="case-story-block case-lead-block" id="case-brief" data-motion-section>
              <span className="chapter-watermark" data-section-title>Brief</span>
              <div className="case-story-copy" data-reveal-copy>
                <p className="section-kicker">Opening brief</p>
                <h2>{project.challenge}</h2>
                <p>{project.summary}</p>
              </div>
              <div className="case-brief-cards">
                <article data-reveal-card>
                  <span>Contribution</span>
                  <p>{project.contribution}</p>
                </article>
                <article data-reveal-card>
                  <span>Outcome</span>
                  <p>{project.outcome}</p>
                </article>
              </div>
              <figure className="case-context-figure image-reveal" data-image-reveal>
                <img src={leadImage} alt={`${project.title} contextual visual`} />
                <span className="image-curtain" aria-hidden="true" />
                <figcaption>
                  <span>Context visual</span>
                  <span>{project.label}</span>
                </figcaption>
              </figure>
            </section>

            {project.analysis.map((item, index) => {
              const image = articleImages[index + 2] || (articleImages.length > 1 ? articleImages[(index + 1) % articleImages.length] : null);
              return (
                <section className="case-story-block case-chapter" id={`chapter-${index + 1}`} key={item.title} data-motion-section>
                  <span className="chapter-watermark" data-section-title>{String(index + 1).padStart(2, "0")}</span>
                  <div className="case-story-copy" data-reveal-copy>
                    <span className="chapter-number">{String(index + 1).padStart(2, "0")}</span>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                  </div>
                  {image && (
                    <figure className="case-context-figure image-reveal" data-image-reveal>
                      <img src={image} alt={`${project.title} ${item.title} visual`} />
                      <span className="image-curtain" aria-hidden="true" />
                      <figcaption>
                        <span>{item.title}</span>
                        <span>{project.title}</span>
                      </figcaption>
                    </figure>
                  )}
                </section>
              );
            })}

            <section className="case-story-block case-notes-block" id="case-notes" data-motion-section>
              <span className="chapter-watermark" data-section-title>Notes</span>
              <div className="case-story-copy" data-reveal-copy>
                <p className="section-kicker">Field notes</p>
                <h2>What this project proves about the system.</h2>
              </div>
              <div className="case-notes-grid">
                {project.highlights.map((highlight, index) => (
                  <article key={highlight} data-reveal-card>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{highlight}</p>
                  </article>
                ))}
              </div>
              <div className="case-tags case-blog-tags" data-reveal-card>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>

      <section className="related-work section-band" data-motion-section>
        <SectionTitle>Next</SectionTitle>
        <div className="section-inner">
          <div className="section-heading">
            <div data-reveal-copy>
              <p className="section-kicker">Related work</p>
              <h2>Continue through the archive.</h2>
            </div>
          </div>
          <div className="related-grid">
            {relatedProjects.map((item) => (
              <a className="related-card" href={projectHref(item)} key={item.slug} data-reveal-card>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <section className="hero library-hero section-band">
        <img className="hero-bg" src="/assets/hero-lance.png" alt="" />
        <div className="hero-shade" />
        <Nav current="projects" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Project not found</p>
            <h1 className="hero-title" aria-label="Project not found.">
              <span className="title-mask">
                <span className="hero-title-line">Project not </span>
              </span>
              <span className="title-mask">
                <span className="hero-title-line">found.</span>
              </span>
            </h1>
            <p className="hero-text">The requested case study does not exist in the current archive.</p>
            <div className="hero-actions">
              <a className="primary-action" href="/projects">
                <span>Back to archive</span>
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Strengths />
      <ContactFooter />
    </>
  );
}

export default function App() {
  const rootRef = useRef(null);
  const route = getRoute();
  usePortfolioMotion(rootRef, { opening: route.type === "landing" });
  const currentProject = route.type === "project" ? projects.find((project) => project.slug === route.slug) : null;

  return (
    <div className="portfolio-root" ref={rootRef}>
      {route.type === "landing" && <OpeningAnimation />}
      <main className="site-shell">
        {route.type === "landing" && <LandingPage />}
        {route.type === "projects" && <ProjectsArchive />}
        {route.type === "project" && <ProjectDetail project={currentProject} />}
        {route.type === "home" && <HomePage />}
      </main>
    </div>
  );
}
