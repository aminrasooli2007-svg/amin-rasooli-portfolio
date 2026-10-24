import { ArrowDownRight, Code2, GraduationCap, Sparkles } from "lucide-react";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <span>01</span>

        <div>
          <p>GET TO KNOW ME</p>
          <h2>A little about me</h2>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <div className="about-intro-label">
            <span className="about-status-dot"></span>
            SOFTWARE ENGINEERING STUDENT
          </div>

          <h3 className="about-title">
            Turning ideas into
            <span> meaningful digital </span>
            experiences.
          </h3>

          <p>
            I'm Amin Rasooli, a Software Engineering student and
            Junior Frontend Developer passionate about building
            clean, responsive, and user-friendly web applications.
          </p>

          <p>
            I work mainly with React, JavaScript, and Tailwind CSS.
            I enjoy transforming ideas into practical interfaces
            while continuously improving my development skills.
          </p>

          <p>
            My goal is to grow into a skilled software engineer by
            building real projects, learning new technologies, and
            solving problems one step at a time.
          </p>

          <a href="#projects" className="about-cta">
            Explore my work
            <ArrowDownRight size={18} />
          </a>
        </div>

        <div className="about-visual">
          <div className="about-visual-glow"></div>

          <div className="about-card-main">
            <div className="about-card-top">
              <div className="about-card-icon">
                <Code2 size={24} />
              </div>

              <span className="about-card-tag">MY PROFILE</span>
            </div>

            <p className="about-card-eyebrow">HELLO, I'M</p>
            <h3>Amin Rasooli</h3>
            <p className="about-card-description">
              Frontend Developer building modern web experiences.
            </p>

            <div className="about-card-divider"></div>

            <div className="about-info-row">
              <div className="about-info-icon">
                <GraduationCap size={19} />
              </div>
              <div>
                <span>Education</span>
                <strong>Software Engineering</strong>
              </div>
            </div>

            <div className="about-info-row">
              <div className="about-info-icon">
                <Sparkles size={19} />
              </div>
              <div>
                <span>Currently focused on</span>
                <strong>React & Frontend Development</strong>
              </div>
            </div>
          </div>

          <div className="about-floating-card">
            <span className="about-floating-icon">
              <Code2 size={18} />
            </span>
            <div>
              <strong>Building & Learning</strong>
              <span>One project at a time</span>
            </div>
          </div>

          <div className="about-decoration about-decoration-one"></div>
          <div className="about-decoration about-decoration-two"></div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-card">
          <strong>1+</strong>
          <span>Year of Learning</span>
        </div>

        <div className="stat-card">
          <strong>4+</strong>
          <span>Projects Built</span>
        </div>

        <div className="stat-card">
          <strong>React</strong>
          <span>Current Focus</span>
        </div>

        <div className="stat-card">
          <strong>∞</strong>
          <span>Curiosity to Learn</span>
        </div>
      </div>
    </section>
  );
}

export default About;
