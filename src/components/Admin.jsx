
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  FolderKanban,
  Code2,
  FileText,
  ExternalLink,
  Settings,
  Plus,
  Pencil,
  Trash2,
  X,
  Save
} from "lucide-react"
import "./Admin.css"

function Admin({ darkMode, projects, setProjects, skills }) {
  const [showForm, setShowForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    github: "",
    technologies: ""
  })

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

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      github: "",
      technologies: ""
    })
    setEditingIndex(null)
    setShowForm(false)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const project = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      image: formData.image.trim(),
      github: formData.github.trim() || "#",
      technologies: formData.technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean)
    }

    if (!project.title || !project.description) {
      return
    }

    if (editingIndex !== null) {
      setProjects((previous) =>
        previous.map((item, index) =>
          index === editingIndex ? project : item
        )
      )
    } else {
      setProjects((previous) => [...previous, project])
    }

    resetForm()
  }

  const handleEdit = (index) => {
    const project = projects[index]

    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      github: project.github,
      technologies: project.technologies.join(", ")
    })

    setEditingIndex(index)
    setShowForm(true)
  }

  const handleDelete = (index) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${projects[index].title}"?`
    )

    if (!confirmed) {
      return
    }

    setProjects((previous) =>
      previous.filter((_, projectIndex) => projectIndex !== index)
    )

    if (editingIndex === index) {
      resetForm()
    } else if (editingIndex !== null && editingIndex > index) {
      setEditingIndex((previous) => previous - 1)
    }
  }

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
            <p>Here is an overview of your portfolio.</p>
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
            <p>Manage your portfolio projects.</p>
          </div>

          <button
            type="button"
            className="admin-primary-button"
            onClick={() => {
              resetForm()
              setShowForm(true)
            }}
          >
            <Plus size={18} />
            Add Project
          </button>
        </div>

        {showForm && (
          <form className="admin-project-form" onSubmit={handleSubmit}>
            <div className="admin-form-header">
              <h2>
                {editingIndex !== null ? "Edit Project" : "Add New Project"}
              </h2>

              <button
                type="button"
                className="admin-icon-button"
                onClick={resetForm}
                aria-label="Close form"
              >
                <X size={20} />
              </button>
            </div>

            <label>
              Project Title
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter project title"
                required
              />
            </label>

            <label>
              Description
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project"
                rows={3}
                required
              />
            </label>

            <label>
              Image Path
              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="/img/project.png"
              />
            </label>

            <label>
              GitHub URL
              <input
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/username/project"
              />
            </label>

            <label>
              Technologies
              <input
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="React, JavaScript, CSS"
              />
            </label>

            <div className="admin-form-actions">
              <button
                type="button"
                className="admin-secondary-button"
                onClick={resetForm}
              >
                Cancel
              </button>

              <button type="submit" className="admin-primary-button">
                <Save size={17} />
                {editingIndex !== null ? "Save Changes" : "Add Project"}
              </button>
            </div>
          </form>
        )}

        <div className="admin-section-header admin-projects-heading">
          <div>
            <h2>Your Projects</h2>
            <p>{projects.length} projects in your portfolio.</p>
          </div>
        </div>

        <div className="admin-project-list">
          {projects.length === 0 ? (
            <p className="admin-empty-message">
              No projects yet. Click Add Project to create your first project.
            </p>
          ) : (
            projects.map((project, index) => (
              <article className="admin-project-item" key={`${project.title}-${index}`}>
                <div className="admin-project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="admin-project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="admin-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="admin-project-actions">
                  <button
                    type="button"
                    className="admin-icon-button"
                    onClick={() => handleEdit(index)}
                    aria-label={`Edit ${project.title}`}
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    type="button"
                    className="admin-icon-button admin-delete-button"
                    onClick={() => handleDelete(index)}
                    aria-label={`Delete ${project.title}`}
                  >
                    <Trash2 size={17} />
                  </button>

                  <Link
                    to="/projects"
                    className="admin-project-link"
                    aria-label={`View ${project.title} on projects page`}
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="admin-management-grid">
          <article className="admin-management-card">
            <div className="admin-card-icon">
              <FolderKanban size={24} />
            </div>

            <h3>Projects</h3>
            <p>Manage the projects displayed on your portfolio.</p>

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
            <p>Review the technical skills shown on your portfolio.</p>

            <Link to="/skills" className="admin-action-link">
              View Skills
              <ExternalLink size={16} />
            </Link>
          </article>
        </div>

        <p className="admin-notice">
          Project changes currently exist in application memory only. They
          will reset when the page is refreshed.
        </p>
      </div>
    </section>
  )
}

export default Admin
