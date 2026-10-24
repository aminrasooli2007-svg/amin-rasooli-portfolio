
import { useState } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
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
  Save,
  LogOut
} from "lucide-react"
import "./Admin.css"

function Admin({
  darkMode,
  projects,
  setProjects,
  skills,
  setSkills,
  onLogout
}) {
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showSkillForm, setShowSkillForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null)

  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    image: "",
    github: "",
    technologies: ""
  })

  const [skillName, setSkillName] = useState("")

  const stats = [
    { title: "Total Projects", value: projects.length, icon: FolderKanban },
    { title: "Total Skills", value: skills.length, icon: Code2 },
    { title: "Portfolio Pages", value: 6, icon: FileText }
  ]

  const resetProjectForm = () => {
    setProjectForm({
      title: "",
      description: "",
      image: "",
      github: "",
      technologies: ""
    })
    setEditingIndex(null)
    setShowProjectForm(false)
  }

  const handleProjectChange = (event) => {
    const { name, value } = event.target
    setProjectForm((previous) => ({ ...previous, [name]: value }))
  }

  const handleProjectSubmit = (event) => {
    event.preventDefault()

    const project = {
      title: projectForm.title.trim(),
      description: projectForm.description.trim(),
      image: projectForm.image.trim(),
      github: projectForm.github.trim() || "#",
      technologies: projectForm.technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean)
    }

    if (!project.title || !project.description) {
      toast.error("Please fill in the required fields.")
      return
    }

    if (editingIndex !== null) {
      setProjects((previous) =>
        previous.map((item, index) =>
          index === editingIndex ? project : item
        )
      )
      toast.success("Project updated successfully!")
    } else {
      setProjects((previous) => [...previous, project])
      toast.success("Project added successfully!")
    }

    resetProjectForm()
  }

  const handleProjectEdit = (index) => {
    const project = projects[index]

    setProjectForm({
      title: project.title,
      description: project.description,
      image: project.image || "",
      github: project.github || "",
      technologies: (project.technologies || []).join(", ")
    })

    setEditingIndex(index)
    setShowProjectForm(true)
    setShowSkillForm(false)
  }

  const handleProjectDelete = (index) => {
    const project = projects[index]

    if (!window.confirm(`Delete "${project.title}"?`)) {
      return
    }

    setProjects((previous) =>
      previous.filter((_, projectIndex) => projectIndex !== index)
    )

    if (editingIndex === index) {
      resetProjectForm()
    } else if (editingIndex !== null && editingIndex > index) {
      setEditingIndex((previous) => previous - 1)
    }

    toast.success("Project deleted successfully!")
  }

  const handleSkillSubmit = (event) => {
    event.preventDefault()

    const name = skillName.trim()

    if (!name) {
      toast.error("Please enter a skill name.")
      return
    }

    const alreadyExists = skills.some(
      (skill) => skill.name.toLowerCase() === name.toLowerCase()
    )

    if (alreadyExists) {
      toast.error("This skill already exists!")
      return
    }

    setSkills((previous) => [...previous, { name, icon: Code2 }])
    setSkillName("")
    setShowSkillForm(false)
    toast.success("Skill added successfully!")
  }

  const handleSkillDelete = (name) => {
    setSkills((previous) =>
      previous.filter((skill) => skill.name !== name)
    )
    toast.success("Skill deleted successfully!")
  }

  return (
    <section className={`admin-page ${darkMode ? "dark" : "light"}`}>
      <div className="admin-container">
        <div className="admin-header">
          <div>
            <span className="admin-label">ADMIN PANEL</span>
            <h1>Dashboard</h1>
            <p>Manage your portfolio content.</p>
          </div>

          <div className="admin-header-actions">
            <Link to="/" className="admin-back-link">
              <ArrowLeft size={18} />
              <span>View Portfolio</span>
            </Link>

            <button
              type="button"
              className="admin-secondary-button"
              onClick={onLogout}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
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
            <h2>Project Management</h2>
            <p>Add, edit, and delete portfolio projects.</p>
          </div>

          <button
            type="button"
            className="admin-primary-button"
            onClick={() => {
              resetProjectForm()
              setShowProjectForm(true)
              setShowSkillForm(false)
            }}
          >
            <Plus size={18} />
            Add Project
          </button>
        </div>

        {showProjectForm && (
          <form className="admin-project-form" onSubmit={handleProjectSubmit}>
            <div className="admin-form-header">
              <h2>
                {editingIndex !== null ? "Edit Project" : "Add New Project"}
              </h2>

              <button
                type="button"
                className="admin-icon-button"
                onClick={resetProjectForm}
                aria-label="Close form"
              >
                <X size={20} />
              </button>
            </div>

            <label>
              Project Title
              <input
                name="title"
                value={projectForm.title}
                onChange={handleProjectChange}
                placeholder="Enter project title"
                required
              />
            </label>

            <label>
              Description
              <textarea
                name="description"
                value={projectForm.description}
                onChange={handleProjectChange}
                placeholder="Describe your project"
                rows={3}
                required
              />
            </label>

            <label>
              Image Path
              <input
                name="image"
                value={projectForm.image}
                onChange={handleProjectChange}
                placeholder="/img/project.png"
              />
            </label>

            <label>
              GitHub URL
              <input
                name="github"
                value={projectForm.github}
                onChange={handleProjectChange}
                placeholder="https://github.com/username/project"
              />
            </label>

            <label>
              Technologies
              <input
                name="technologies"
                value={projectForm.technologies}
                onChange={handleProjectChange}
                placeholder="React, JavaScript, CSS"
              />
            </label>

            <div className="admin-form-actions">
              <button
                type="button"
                className="admin-secondary-button"
                onClick={resetProjectForm}
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
              No projects yet. Click Add Project to create one.
            </p>
          ) : (
            projects.map((project, index) => (
              <article
                className="admin-project-item"
                key={`${project.title}-${index}`}
              >
                <div className="admin-project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="admin-project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="admin-technologies">
                    {(project.technologies || []).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="admin-project-actions">
                  <button
                    type="button"
                    className="admin-icon-button"
                    onClick={() => handleProjectEdit(index)}
                    aria-label={`Edit ${project.title}`}
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    type="button"
                    className="admin-icon-button admin-delete-button"
                    onClick={() => handleProjectDelete(index)}
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

        <div className="admin-section-header admin-skills-heading">
          <div>
            <h2>Skills Management</h2>
            <p>Add or remove skills shown on your portfolio.</p>
          </div>

          <button
            type="button"
            className="admin-primary-button"
            onClick={() => {
              setShowSkillForm((previous) => !previous)
              setShowProjectForm(false)
            }}
          >
            <Plus size={18} />
            Add Skill
          </button>
        </div>

        {showSkillForm && (
          <form className="admin-project-form" onSubmit={handleSkillSubmit}>
            <div className="admin-form-header">
              <h2>Add New Skill</h2>

              <button
                type="button"
                className="admin-icon-button"
                onClick={() => setShowSkillForm(false)}
                aria-label="Close skill form"
              >
                <X size={20} />
              </button>
            </div>

            <label>
              Skill Name
              <input
                value={skillName}
                onChange={(event) => setSkillName(event.target.value)}
                placeholder="e.g. TypeScript"
                required
              />
            </label>

            <div className="admin-form-actions">
              <button
                type="button"
                className="admin-secondary-button"
                onClick={() => {
                  setSkillName("")
                  setShowSkillForm(false)
                }}
              >
                Cancel
              </button>

              <button type="submit" className="admin-primary-button">
                <Save size={17} />
                Save Skill
              </button>
            </div>
          </form>
        )}

        <div className="admin-project-list">
          {skills.length === 0 ? (
            <p className="admin-empty-message">
              No skills yet. Click Add Skill to create one.
            </p>
          ) : (
            skills.map((skill, index) => (
              <article className="admin-project-item" key={skill.name}>
                <div className="admin-project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="admin-project-info">
                  <h3>{skill.name}</h3>
                </div>

                <div className="admin-project-actions">
                  <button
                    type="button"
                    className="admin-icon-button admin-delete-button"
                    onClick={() => handleSkillDelete(skill.name)}
                    aria-label={`Delete ${skill.name}`}
                  >
                    <Trash2 size={17} />
                  </button>
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
            <p>View the projects displayed on your portfolio.</p>
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
            <p>View the technical skills displayed on your portfolio.</p>
            <Link to="/skills" className="admin-action-link">
              View Skills
              <ExternalLink size={16} />
            </Link>
          </article>
        </div>

        <p className="admin-notice">
          Projects and skills are saved in this browser using localStorage.
          They remain after refreshing the page.
        </p>
      </div>
    </section>
  )
}

export default Admin
