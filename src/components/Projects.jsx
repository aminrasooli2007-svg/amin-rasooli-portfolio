
import {
  ArrowUpRight,
  Code2
} from "lucide-react"

function Projects({ projects }) {
  return (
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
          <article
            className="project-card"
            key={project.title}
          >
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
  )
}

export default Projects
