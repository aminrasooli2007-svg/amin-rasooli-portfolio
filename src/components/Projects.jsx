
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

const projectLinks = {
  expense: "https://hisabchi.vercel.app/",
  workshop: "https://workshop-management-eight.vercel.app/",
  todo: "https://todo-app-react-chi-seven.vercel.app/",
};

function getProjectLink(title = "") {
  const name = title.toLowerCase();

  if (name.includes("expense")) return projectLinks.expense;
  if (name.includes("workshop")) return projectLinks.workshop;
  if (name.includes("todo")) return projectLinks.todo;

  return null;
}

function Projects({ projects = [] }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span>03</span>

        <div>
          <p>SELECTED WORK</p>
          <h2>Some things I've built</h2>
        </div>
      </div>

      <div className="projects-intro">
        <p>
          A selection of projects where I turn ideas into useful,
          responsive, and user-friendly web experiences.
        </p>

        <span className="projects-count">
          <Code2 size={15} />
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const projectLink = getProjectLink(project.title);
          const technologies = project.technologies || [];

          return (
            <article
              className="project-card"
              key={project.title}
              style={{ "--project-index": index }}
            >
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <Code2 size={38} strokeWidth={1.4} />
                  </div>
                )}

                <div className="project-image-overlay" />

                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {projectLink && (
                  <a
                    className="project-image-link"
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={17} />
                    <span>Live preview</span>
                  </a>
                )}
              </div>

              <div className="project-card-body">
                <div className="project-top">
                  <div className="project-icon">
                    <Code2 size={20} />
                  </div>

                  {projectLink ? (
                    <a
                      className="project-open-link"
                      href={projectLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  ) : (
                    <span
                      className="project-open-link project-open-link-disabled"
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={20} />
                    </span>
                  )}
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span>PERSONAL PROJECT</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
