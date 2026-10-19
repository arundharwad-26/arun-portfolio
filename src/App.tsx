
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  BrainCircuit,
  Layers3,
  Sparkles,
  Download,
  Send,
  Terminal,
  Activity,
  Globe2,
} from "lucide-react";

const github = "https://github.com/arundharwad-26";
const linkedin = "https://www.linkedin.com/in/arun-dharwad";
const email = "mailto:arundharwad26@gmail.com";
const resumePath = "/resume.pdf";

const projects = [
  {
    number: "01",
    name: "Drone Monitoring System",
    category: "FULL-STACK · REAL-TIME",
    description:
      "A drone monitoring dashboard designed to display telemetry, GPS locations, battery status, altitude, speed, and simulator information.",
    stack: ["React", "FastAPI", "WebSockets", "SQLite"],
    icon: Activity,
    tone: "mint",
    github:
      "https://github.com/arundharwad-26/drone-monitoring-system",
    demo: "https://sensational-trifle-f86f3f.netlify.app",
    status: "FRONTEND DEMO · BACKEND IN PROGRESS",
  },
  {
    number: "02",
    name: "Collaborative Code Editor",
    category: "FULL-STACK · WEBSOCKETS",
    description:
      "A collaborative coding workspace built with real-time editing, shared rooms, and a React frontend connected to a Django backend.",
    stack: ["React", "TypeScript", "Django", "Channels"],
    icon: Code2,
    tone: "violet",
    github:
      "https://github.com/arundharwad-26/collaborative-code-editor",
    demo: "",
    status: "DEMO NOT DEPLOYED",
  },
  {
    number: "03",
    name: "Healthcare Prediction System",
    category: "MACHINE LEARNING · HEALTHCARE",
    description:
      "A machine-learning project for stroke and cardiac-risk prediction, model evaluation, and analysis of patient data.",
    stack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Machine Learning",
    ],
    icon: BrainCircuit,
    tone: "orange",
    github:
      "https://github.com/arundharwad-26/brain-stroke-cardiac-arrest-prediction",
    demo: "",
    status: "PROJECT AVAILABLE",
  },
  {
    number: "04",
    name: "RAG Knowledge Assistant",
    category: "AI · RETRIEVAL",
    description:
      "A retrieval-augmented question-answering prototype using document processing and vector search to ground responses in supplied content.",
    stack: ["Python", "FastAPI", "LangChain", "FAISS"],
    icon: Sparkles,
    tone: "blue",
    github,
    demo: "",
    status: "PROJECT",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    icon: Layers3,
    title: "Web & APIs",
    items: [
      "React",
      "TypeScript",
      "FastAPI",
      "Django",
      "REST APIs",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "EDA",
      "Model Evaluation",
      "RAG / LLMs",
    ],
  },
  {
    icon: Database,
    title: "Data & Tools",
    items: ["MySQL", "SQLite", "MongoDB", "Git", "VS Code"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    "About",
    "Skills",
    "Projects",
    "Resume",
    "Contact",
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Arun Dharwad home"
        >
          <span className="brand-mark">
            A<span>.</span>
          </span>
          <span className="brand-name">ARUN DHARWAD</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={
            menuOpen ? "nav-links open" : "nav-links"
          }
        >
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span className="pulse-dot" />
              OPEN TO OPPORTUNITIES
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              I build things
              <br />
              for the{" "}
              <span className="gradient-text">
                real world.
              </span>
            </motion.h1>

            <motion.p
              className="hero-lede"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Software developer exploring the intersection of{" "}
              <strong>
                Python, full-stack engineering, and AI/ML
              </strong>{" "}
              — turning ideas into useful, reliable applications.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <a
                className="button button-primary"
                href="#projects"
              >
                Explore projects <ArrowDownRight size={17} />
              </a>

              <a
                className="button button-quiet"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub{" "}
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            <motion.div
              className="hero-footnote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="tiny-line" />
              BASED IN INDIA{" "}
              <span className="footnote-sep">/</span>{" "}
              BUILDING, LEARNING, ITERATING
            </motion.div>
          </div>

          <motion.div
            className="hero-art"
            initial={{
              opacity: 0,
              scale: 0.92,
              rotate: 2,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="orb orb-c" />

            <div className="hero-card">
              <div className="card-top">
                <span />
                <span />
                <span />
                <label>developer.tsx</label>
              </div>

              <div className="code-snippet">
                <p>
                  <i>01</i>{" "}
                  <span className="code-purple">const</span>{" "}
                  developer = {"{"}
                </p>
                <p>
                  <i>02</i> &nbsp; name:{" "}
                  <span className="code-green">'Arun'</span>,
                </p>
                <p>
                  <i>03</i> &nbsp; focus: [
                </p>
                <p>
                  <i>04</i> &nbsp;&nbsp;{" "}
                  <span className="code-green">
                    'Software'
                  </span>
                  ,
                </p>
                <p>
                  <i>05</i> &nbsp;&nbsp;{" "}
                  <span className="code-green">
                    'AI / ML'
                  </span>
                  ,
                </p>
                <p>
                  <i>06</i> &nbsp;&nbsp;{" "}
                  <span className="code-green">
                    'Problem solving'
                  </span>
                </p>
                <p>
                  <i>07</i> &nbsp; ],
                </p>
                <p>
                  <i>08</i> &nbsp; alwaysLearning:{" "}
                  <span className="code-orange">true</span>
                </p>
                <p>
                  <i>09</i> {"}"};
                </p>
                <p className="code-cursor">
                  <i>10</i> <span className="cursor-bar" />
                </p>
              </div>

              <div className="card-bottom">
                <span>
                  <span className="status-dot" /> AVAILABLE
                  FOR WORK
                </span>
                <span>INDIA · IST</span>
              </div>
            </div>

            <div className="floating-tag tag-top">
              <Terminal size={14} />
              <span>BUILD / SHIP / LEARN</span>
            </div>

            <div className="floating-tag tag-bottom">
              <span className="tag-spark">✳</span>
              MADE WITH CURIOSITY
            </div>
          </motion.div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={15} />
          </a>
        </section>

        <section className="intro-strip">
          <div className="strip-track">
            {[
              "SOFTWARE ENGINEERING",
              "AI & MACHINE LEARNING",
              "BACKEND DEVELOPMENT",
              "DATA-DRIVEN PRODUCTS",
              "SOFTWARE ENGINEERING",
              "AI & MACHINE LEARNING",
            ].map((text, i) => (
              <span key={`${text}-${i}`}>
                {text}
                <b>✳</b>
              </span>
            ))}
          </div>
        </section>

        <section
          className="section-wrap section-block"
          id="about"
        >
          <motion.div
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-index">01 / ABOUT</span>
            <h2>
              Curious by nature.
              <br />
              <span className="muted-heading">
                Builder by practice.
              </span>
            </h2>
          </motion.div>

          <div className="about-grid">
            <motion.div
              className="about-copy"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="large-copy">
                I’m Arun — a developer who enjoys turning complex
                problems into clear, practical software.
              </p>

              <p>
                My work spans web applications, backend APIs,
                data workflows, and machine-learning prototypes.
                I like understanding how the pieces fit together:
                from a clean user interface to the data and logic
                powering it.
              </p>

              <p>
                I’ve completed my MCA and continue to strengthen
                my engineering fundamentals through hands-on
                projects, collaboration, and consistent learning.
              </p>

              <a className="text-link" href="#contact">
                Let's build something useful{" "}
                <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              className="about-stats"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="stat-card">
                <span className="stat-number">01</span>
                <span className="stat-label">
                  FULL-STACK THINKING
                </span>
                <p>From interface to API and data layer.</p>
              </div>

              <div className="stat-card">
                <span className="stat-number">02</span>
                <span className="stat-label">
                  AI-DRIVEN EXPLORATION
                </span>
                <p>Building and evaluating ML-powered ideas.</p>
              </div>

              <div className="stat-card">
                <span className="stat-number">03</span>
                <span className="stat-label">
                  ALWAYS ITERATING
                </span>
                <p>Learn, test, improve, repeat.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap section-block">
            <motion.div
              className="section-heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="section-index">02 / TOOLKIT</span>
              <h2>
                Tools I use to
                <br />
                <span className="muted-heading">
                  make ideas work.
                </span>
              </h2>
              <p className="heading-note">
                A growing toolkit — chosen to solve problems, not
                just fill a list.
              </p>
            </motion.div>

            <div className="skills-grid">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    className="skill-card"
                    key={skill.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="skill-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{skill.title}</h3>
                    <div className="skill-pills">
                      {skill.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="section-wrap section-block projects-section"
          id="projects"
        >
          <motion.div
            className="section-heading project-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <span className="section-index">
                03 / SELECTED WORK
              </span>
              <h2>
                Projects with
                <br />
                <span className="muted-heading">purpose.</span>
              </h2>
            </div>

            <p className="heading-note">
              A few things I’ve been building, exploring, and
              improving.
            </p>
          </motion.div>

          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <motion.article
                  className={`project-card ${project.tone}`}
                  key={project.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-main">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span className="project-status">
                        {project.status}
                      </span>
                    </div>

                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <div className="project-stack">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github size={15} /> Source code{" "}
                        <ArrowUpRight size={13} />
                      </a>

                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe2 size={15} /> Live demo{" "}
                          <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span className="demo-soon">
                          <Globe2 size={15} /> Live demo coming
                          soon
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="project-visual">
                    <div className="visual-ring ring-one" />
                    <div className="visual-ring ring-two" />
                    <div className="visual-icon">
                      <Icon size={38} strokeWidth={1.3} />
                    </div>
                    <span className="visual-index">
                      {project.number} — 04
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="project-foot">
            <span>MORE EXPERIMENTS ON GITHUB</span>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              Browse repositories <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="resume-section" id="resume">
          <div className="section-wrap resume-inner">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="section-index">04 / RESUME</span>

              <h2>
                A little more
                <br />
                <span className="muted-heading">
                  about my journey.
                </span>
              </h2>

              <p className="resume-copy">
                Want the concise version? My resume brings
                together my education, technical toolkit,
                internship, and selected project work.
              </p>

              <a
                className="button button-primary"
                href={resumePath}
                download
              >
                <Download size={16} /> Download resume{" "}
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            <motion.div
              className="resume-timeline"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-date">
                  2024 – 2026
                </span>
                <h3>Master of Computer Applications</h3>
                <p>
                  Nitte Meenakshi Institute of Technology,
                  Bengaluru.
                </p>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-date">
                  FEB – MAR 2026
                </span>
                <h3>Data Science Intern</h3>
                <p>
                  CodeTech IT Solutions Pvt. Ltd.
                </p>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-date">
                  2025 – 2026
                </span>
                <h3>KSCST Project Selection</h3>
                <p>
                  Healthcare prediction project selected among
                  365 projects statewide under the KSCST Student
                  Project Programme.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          className="section-wrap section-block contact-section"
          id="contact"
        >
          <motion.div
            className="contact-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="contact-orb" />

            <span className="section-index">05 / CONTACT</span>

            <h2>
              Have a good problem?
              <br />
              <span className="gradient-text">Let's talk.</span>
            </h2>

            <p>
              I’m open to entry-level opportunities,
              collaborations, and conversations about software,
              data, and AI.
            </p>

            <a
              className="button button-primary"
              href={email}
            >
              <Mail size={16} /> Get in touch{" "}
              <ArrowUpRight size={14} />
            </a>

            <div className="contact-links">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub{" "}
                <ArrowUpRight size={13} />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn{" "}
                <ArrowUpRight size={13} />
              </a>

              <a href={email}>
                <Send size={16} /> Email{" "}
                <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">
            A<span>.</span>
          </span>
          <span className="brand-name">ARUN DHARWAD</span>
        </a>

        <span>
          DESIGNED & BUILT WITH INTENTION · ©{" "}
          {new Date().getFullYear()}
        </span>

        <a href="#home" className="back-top">
          BACK TO TOP <ArrowUpRight size={13} />
        </a>
      </footer>
    </div>
  );
}

export default App;
