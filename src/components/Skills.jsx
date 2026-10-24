import { Code2, Sparkles } from "lucide-react";

function Skills({ skills }) {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <span>02</span>

        <div>
          <p>MY TECH STACK</p>
          <h2>Technologies I work with</h2>
        </div>
      </div>

      <div className="skills-intro">
        <div className="skills-intro-icon">
          <Code2 size={20} />
        </div>

        <p>
          The tools and technologies I use to build modern,
          responsive, and user-friendly web experiences.
        </p>

        <div className="skills-intro-badge">
          <Sparkles size={14} />
          <span>Always learning</span>
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              className="skill-card"
              key={skill.name}
              style={{ "--skill-index": index }}
            >
              <div className="skill-card-top">
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="skill-card-arrow">↗</span>
              </div>

              <div className="skill-icon-wrapper">
                <Icon size={29} strokeWidth={1.7} />
              </div>

              <div className="skill-card-content">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-caption">TECHNOLOGY</span>
              </div>

              <div className="skill-card-line">
                <span />
              </div>
            </div>
          );
        })}
      </div>

      <div className="skills-footer">
        <span className="skills-footer-dot" />
        <p>Learning, building, and improving every day.</p>
      </div>
    </section>
  );
}

export default Skills;
