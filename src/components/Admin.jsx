
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  FolderKanban,
  Code2,
  FileText,
  ExternalLink,
  Settings
} from "lucide-react"
import "./Admin.css"

function Admin({ darkMode, projects, skills }) {
  const stats = [
    {
      title: "Total Projects",
      value: projects.length,
      icon: FolderKanban
    },
    {
      title: "Total Skills",
      value: skills.length,
      icon: Code2
    },
    {
      title: "Portfolio Pages",
      value: 6,
      icon: FileText
    }
  ]

  return (
    <section className={`admin-page ${darkMode ? "dark" : "light"}`}>
      <div className="admin-container">
        <div className="admin-header">
          <div>
            <span className="admin-label">ADMIN PANEL</span>
            <h1>Dashboard</h1>
            <p>Manage and review your portfolio content.</p>
          </div>

          <Link to="/" className="admin-back-link">
            <ArrowLeft size={18} />
            <span>View Portfolio</span>
          </Link>
        </div>

        <div className="admin-welcome">
          <div>
            <h2>Welcome back, Amin!</h2>
            <p>
              Here is an overview of your portfolio.
            </p>
          </div>

          <div className="admin-welcome-icon">
            <Settings size={30} />
          </div>
        </div>

        <div className="admin-stats">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <article className="admin-stat-card" key={stat.title}>
                <div className="admin-stat-icon">
                  <Icon size={22} />
                </div>

                <div>
                  <p>{stat.title}</p>
                  <h3>{stat.value}</h3>
                </div>
              </article>
            )
          })}
        </div>

        <div className="admin-section-header">
          <div>
            <h2>Content Management</h2>
            <p>Quick access to your portfolio sections.</p>
          </div>
        </div>

        <div className="admin-management-grid">
          <article className="admin-management-card">
            <div className="admin-card-icon">
              <FolderKanban size={24} />
            </div>

            <h3>Projects</h3>
            <p>
              Review the projects currently displayed on your portfolio.
            </p>

            <Link to="/projects" className="admin-action-link">
              View Projects
              <ExternalLink size={16} />
            </Link>
          </article>

          <article className="admin-management-card">
            <div className="admin-card-icon">
              <Code2 size={24} />
            </div>

            <h3>Skills</h3>
            <p>
              Review the technical skills shown on your portfolio.
            </p>

            <Link to="/skills" className="admin-action-link">
              View Skills
              <ExternalLink size={16} />
            </Link>
          </article>
        </div>

        <div className="admin-section-header admin-projects-heading">
          <div>
            <h2>Your Projects</h2>
            <p>A quick overview of your current projects.</p>
          </div>
        </div>

        <div className="admin-project-list">
          {projects.map((project, index) => (
            <article className="admin-project-item" key={project.title}>
              <div className="admin-project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="admin-project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <Link
                to="/projects"
                className="admin-project-link"
                aria-label={`View ${project.title}`}
              >
                <ExternalLink size={18} />
              </Link>
            </article>
          ))}
        </div>

        <p className="admin-notice">
          This dashboard currently displays existing portfolio data.
          Editing and saving content will be added in a later step.
        </p>
      </div>
    </section>
  )
}

export default Admin
