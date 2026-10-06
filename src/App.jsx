import { useState } from "react"
import {
  ArrowDown,
  ArrowUpRight,
  Atom,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Mail,
  Menu,
  Moon,
  Palette,
  Sun,
  Wind,
  X
} from "lucide-react"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const skills = [
    { name: "HTML", icon: FileCode2 },
    { name: "CSS", icon: Palette },
    { name: "JavaScript", icon: Braces },
    { name: "React", icon: Atom },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: GitBranch },
    { name: "Next.js", icon: Globe },
    { name: "SQL", icon: Database },
    { name: "Programming", icon: Code2 }
  ]

  const projects = [
    {
      title: "TodoFlow",
      description:
        "A modern task management application with filters, search, notifications, LocalStorage and dark mode.",
      image: "/projects/todoflow.png",
      github: "https://github.com/aminrasooli2007-svg/todo-app-react",
      technologies: ["React", "JavaScript", "CSS", "LocalStorage"]
    },
    {
      title: "Find Your Everyday Tech",
      description:
        "A product discovery interface with search and price sorting features.",
      image: "/projects/everyday-tech.png",
      github: "#",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      title: "Word Duel",
      description:
        "A JavaScript typing game focused on speed, accuracy and user interaction.",
      image: "/projects/word-duel.png",
      github: "#",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Workshop Management",
      description:
        "A practical workshop management project built with vanilla JavaScript.",
      image: "/projects/workshop-management.png",
      github: "#",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    })

    setMenuOpen(false)
  }

  return (
    <div className={darkMode ? "portfolio" : "portfolio light"}>
      <header className="navbar">
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          Amin<span>.</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("about")
            }}
          >
            About
          </a>

          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("skills")
            }}
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("projects")
            }}
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact")
            }}
          >
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span></span>
              Available for opportunities
            </div>

            <p className="hero-small-title">Hello, I'm</p>

            <h1>
              Amin <span>Rasooli</span>
            </h1>

            <h2>
              Software Engineering Student & Junior Frontend Developer
            </h2>

            <p className="hero-description">
              I build modern and responsive web experiences with React,
              JavaScript and Tailwind CSS. I'm focused on improving my
              frontend skills and building real-world projects.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowDown size={18} />
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
                <Mail size={18} />
              </button>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/aminrasooli2007-svg"
                target="_blank"
                rel="noreferrer"
              >
                GH
              </a>

              <a
                href="https://linkedin.com/in/amin-rasooli-8325b440/"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>

              <a href="mailto:amin.rasooli@example.com">
                @
              </a>

              <a href="#" onClick={(e) => e.preventDefault()}>
                IG
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow"></div>

            <div className="code-card">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>developer.js</span>
              </div>

              <div className="code-content">
                <p>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </p>

                <p>
                  <span className="code-space">name:</span>{" "}
                  <span className="code-green">
                    "Amin Rasooli"
                  </span>
                  ,
                </p>

                <p>
                  <span className="code-space">role:</span>{" "}
                  <span className="code-green">
                    "Frontend Developer"
                  </span>
                  ,
                </p>

                <p>
                  <span className="code-space">stack:</span>{" "}
                  <span className="code-green">
                    ["React", "JS", "Tailwind"]
                  </span>
                  ,
                </p>

                <p>
                  <span className="code-space">learning:</span>{" "}
                  <span className="code-green">
                    "Every day"
                  </span>
                </p>

                <p>{"}"}</p>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <ArrowDown size={14} />
            Scroll to explore
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span>01</span>

            <div>
              <p>About Me</p>
              <h2>A little about me</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm Amin Rasooli, a Software Engineering student and
                Junior Frontend Developer who enjoys building clean and
                practical web applications.
              </p>

              <p>
                My main focus is frontend development with React,
                JavaScript and Tailwind CSS. I enjoy turning ideas into
                responsive and user-friendly interfaces.
              </p>

              <p>
                I'm continuously learning, building projects and
                improving my problem-solving skills with the goal of
                becoming a strong software engineer.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <strong>1+</strong>
                <span>Years Learning</span>
              </div>

              <div className="stat-card">
                <strong>4+</strong>
                <span>Projects</span>
              </div>

              <div className="stat-card">
                <strong>React</strong>
                <span>Main Focus</span>
              </div>

              <div className="stat-card">
                <strong>∞</strong>
                <span>Learning</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span>02</span>

            <div>
              <p>Skills</p>
              <h2>Technologies I work with</h2>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon

              return (
                <div className="skill-card" key={skill.name}>
                  <Icon size={25} />
                  <span>{skill.name}</span>
                </div>
              )
            })}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span>03</span>

            <div>
              <p>Projects</p>
              <h2>Some things I've built</h2>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className="project-top">
                  <div className="project-icon">
                    <Code2 size={21} />
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="contact-content">
              <span>04 — Contact</span>

              <h2>
                Let's build something
                <span> together.</span>
              </h2>

              <p>
                Have a project, opportunity or idea? Feel free to
                reach out.
              </p>

              <a
                className="primary-button"
                href="mailto:amin.rasooli@example.com"
              >
                Get In Touch
                <Mail size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          © 2026 Amin Rasooli. All rights reserved.
        </span>

        <div>
          <a
            href="https://github.com/aminrasooli2007-svg"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/amin-rasooli-8325b440/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App