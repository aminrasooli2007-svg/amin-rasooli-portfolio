
import {
  ArrowDown,
  Mail
} from "lucide-react"

function Hero({ scrollToSection }) {
  return (
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


          <a href="https://www.instagram.com/engineer_amin2007/" >
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
  )
}

export default Hero
