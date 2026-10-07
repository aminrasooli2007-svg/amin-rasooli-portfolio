
function Skills({ skills }) {
  return (
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
  )
}

export default Skills
