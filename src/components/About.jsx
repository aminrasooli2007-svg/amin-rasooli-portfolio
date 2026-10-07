
function About() {
  return (
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
  )
}

export default About
