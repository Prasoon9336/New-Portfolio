import { useEffect, useRef, useState } from "react";
import "./index.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
  "Bootstrap", "Tailwind CSS", "C", "C++",
  "SQL", "Git", "GitHub", "REST API", "ASP.NET Core", "EF Core"
];

const appBasePath = import.meta.env.BASE_URL || "/";

const projects = [
  {
    number: "01",
    title: "School Management System",
    text: "A full-stack school management platform with student, teacher, attendance and academic workflows.",
    stack: ["React", "Node.js", "SQL Server"],
    appType: "Web Application",
    link: "#"
  },
  {
    number: "02",
    title: "Scientist API",
    text: "A REST API built with ASP.NET Core and Entity Framework Core, connected to SQL Server.",
    stack: ["ASP.NET Core", "EF Core", "SQL Server"],
    appType: "Web Application",
    link: "#"
  },
  {
    number: "03",
    title: "Portfolio",
    text: "A personal developer portfolio redesigned around immersive typography, motion and minimal UI.",
    stack: ["React", "CSS", "JavaScript"],
    appType: "Web Application",
    link: "#"
  },
  {
    number: "04",
    title: "Calculator",
    text: "A simple arithmetic calculator built for quick console-based mathematical operations and beginner C# practice.",
    stack: ["C#", ".NET"],
    appType: "Console Application",
    link: "https://github.com/Prasoon9336/Calculator"
  },
  {
    number: "05",
    title: "CharHandling",
    text: "A C# console project focused on character and string manipulation tasks for learning core programming fundamentals.",
    stack: ["C#", ".NET"],
    appType: "Console Application",
    link: "https://github.com/Prasoon9336/CharHandling"
  },
  {
    number: "06",
    title: "ToDo-List",
    text: "A task-tracking app for creating, updating and organizing daily tasks in a clean and simple interface.",
    stack: ["React", "JavaScript", "CSS"],
    appType: "Web Application",
    link: "https://github.com/Prasoon9336/ToDo-List",
    previewUrl: `${appBasePath}projects/todo-list/index.html`
  },
  {
    number: "07",
    title: "WeatherForcast",
    text: "A forecast dashboard built with HTML, CSS and JavaScript to display weather updates from a live data source.",
    stack: ["HTML", "CSS", "JavaScript"],
    appType: "Web Application",
    link: "https://github.com/Prasoon9336/WeatherForcast",
    previewUrl: `${appBasePath}projects/weatherforcast/WeatherForcast.html`
  }
];

const webProjects = projects.filter((project) => project.appType === "Web Application" && project.previewUrl);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const cursor = useRef(null);

  const roles = [
    "FULL-STACK DEVELOPER",
    "REACT DEVELOPER",
    "SOFTWARE DEVELOPER",
    "PROBLEM SOLVER"
  ];
  //dsh

  useEffect(() => {
    const timer = setInterval(() => {
      setRole((currentRole) => (currentRole + 1) % roles.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [roles.length]);

  useEffect(() => {
    const move = (event) => {
      if (!cursor.current) return;
      cursor.current.style.transform =
        `translate3d(${event.clientX - 5}px, ${event.clientY - 5}px, 0)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="cursor-dot" ref={cursor} />

      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          PRASOON<span>.</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "experience", "skills", "projects", "web-apps", "contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
        </nav>

        <button className="availability" onClick={() => scrollTo("contact")}>
          LET&apos;S TALK
        </button>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">HI, I&apos;M PRASOON — {roles[role]}</p>
            <h1>
              BUILDING
              <br />
              <span className="outline">DIGITAL</span>
              <br />
              EXPERIENCES.
            </h1>

            <div className="hero-bottom">
              <p>
                I design and build modern web experiences with clean code,
                thoughtful interaction and a strong focus on performance.
              </p>
              <div className="hero-actions">
                <button className="pill filled" onClick={() => scrollTo("projects")}>
                  VIEW MY WORK ↗
                </button>
                <button className="pill" onClick={() => scrollTo("contact")}>
                  CONTACT ME
                </button>
              </div>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <img
              className="portrait"
              src="https://res.cloudinary.com/dp2mxstew/image/upload/v1788425383/ChatGPT_Image_Sep_1_2026_09_04_36_PM_obq0mg.png"
              alt="Prasoon"
              onError={(event) => {
                event.currentTarget.style.opacity = "0";
              }}
            />
          </div>

          <div className="scroll-hint">
            <span>↓</span> SCROLL TO EXPLORE
          </div>
          <div className="hero-index" aria-hidden="true">01 <span>/</span> 05</div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-content">
            <p className="kicker">A DEVELOPER WHO LOVES TO BUILD.</p>
            <h2>
              Turning ideas into <em>useful</em>,
              <br /> fast and memorable products.
            </h2>
            <p className="body-copy">
              I&apos;m Prasoon, a BCA student and developer focused on becoming
              exceptionally strong at React and modern full-stack development.
              I enjoy understanding how things work under the hood and then
              turning that knowledge into real projects.
            </p>
          </div>
          <div className="stats">
            <div><strong>18+</strong><span>TECHNOLOGIES</span></div>
            <div><strong>09</strong><span>MAJOR PROJECTS</span></div>
            <div><strong>∞</strong><span>THINGS TO LEARN</span></div>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-label">02 / EXPERIENCE</div>
          <div className="experience-head">
            <p className="kicker">CURRENTLY LEARNING &amp; BUILDING</p>
            <h2>MY JOURNEY<span>.</span></h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="year">2026 — NOW</span>
              <div>
                <h3>BCA / COMPUTER SCIENCE</h3>
                <p>Deepening fundamentals in data structures, operating systems, DBMS, web programming and software development.</p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="year">2025 — NOW</span>
              <div>
                <h3>REACT DEEP DIVE</h3>
                <p>Exploring React from fundamentals to advanced patterns, architecture, performance and reusable component design.</p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="year">ONGOING</span>
              <div>
                <h3>FULL-STACK PROJECTS</h3>
                <p>Building practical applications with React, Node.js, SQL Server and ASP.NET Core.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-label">03 / SKILLS</div>
          <div className="center-title">
            <p className="kicker">TOOLS I WORK WITH</p>
            <h2>TECHNOLOGIES I WORK WITH</h2>
            <p>My current toolkit keeps evolving as I learn, experiment and build.</p>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">04 / SELECTED WORK</div>
          <div className="project-intro">
            <p className="kicker">A FEW THINGS I&apos;VE BUILT</p>
            <h2>SELECTED<br /><span>PROJECTS.</span></h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="project-actions">
                    <span className="project-type">{project.appType}</span>
                    {project.link && project.link !== "#" ? (
                      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                        View Repo ↗
                      </a>
                    ) : null}
                  </div>
                  <div className="tags">
                    {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="project-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section id="web-apps" className="section web-apps">
          <div className="section-label">05 / WEB APPS</div>
          <div className="project-intro">
            <p className="kicker">FULLY INTERACTIVE BUILDS</p>
            <h2>WEB<br /><span>APPLICATIONS.</span></h2>
          </div>
          <div className="web-project-grid">
            {webProjects.map((project) => (
              <article className="web-card" key={project.number}>
                <div className="web-card-top">
                  <span className="web-card-badge">WEB APP</span>
                  <span className="web-card-index">{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tags">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="web-card-actions">
                  <button className="web-card-link" type="button" onClick={() => setSelectedProject(project)}>
                    OPEN APP ↗
                  </button>
                  {project.link && project.link !== "#" ? (
                    <a className="web-card-link subtle" href={project.link} target="_blank" rel="noreferrer">
                      SOURCE ↗
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {selectedProject ? (
          <div className="preview-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="preview-modal" onClick={(event) => event.stopPropagation()}>
              <div className="preview-header">
                <div>
                  <span className="preview-badge">LIVE PREVIEW</span>
                  <h3>{selectedProject.title}</h3>
                </div>
                <button type="button" className="preview-close" onClick={() => setSelectedProject(null)}>
                  CLOSE
                </button>
              </div>
              <iframe
                title={selectedProject.title}
                src={selectedProject.previewUrl}
                className="preview-frame"
                loading="lazy"
              />
            </div>
          </div>
        ) : null}

        <section className="marquee" aria-hidden="true">
          <div>BUILD • LEARN • CREATE • REPEAT • BUILD • LEARN • CREATE • REPEAT • </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-label">06 / CONTACT</div>
          <div className="contact-content">
            <p className="kicker">HAVE A PROJECT OR OPPORTUNITY?</p>
            <h2>LET&apos;S MAKE<br /><span>SOMETHING.</span></h2>
            <a className="email" href="mailto:prasoon9336@gmail.com">
              prasoon9336@gmail.com ↗
            </a>
            <div className="socials">
              <a href="https://github.com/Prasoon9336" target="_blank" rel="noreferrer">GITHUB ↗</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} PRASOON</span>
        <span>DESIGNED &amp; BUILT WITH CODE</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>BACK TO TOP ↑</button>
      </footer>
    </div>
  );
}
export default App;