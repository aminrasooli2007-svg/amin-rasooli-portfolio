
import { useEffect, useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Toaster } from "react-hot-toast"
import toast from "react-hot-toast"
import {
  Atom,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Palette,
  Wind,
  LockKeyhole,
  Eye,
  EyeOff
} from "lucide-react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Admin from "./components/Admin"

const ADMIN_PASSWORD = "amin1386"
const AUTH_KEY = "portfolioAdminAuthenticated"

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 }
}

const defaultProjects = [
  {
    title: "TodoFlow",
    description:
      "A modern task management app built with React to help organize daily tasks.",
    image: "/img/Todo.png",
    github: "https://github.com/aminrasooli2007-svg/todo-app-react",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"]
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance tracker built with React, Vite, and Supabase.",
    image: "/img/Exp.png",
    github: "#",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "Vite",
      "Supabase",
      "PostgreSQL"
    ]
  },
  {
    title: "Workshop Management",
    description:
      "A shop management system for products, inventory, and sales.",
    image: "/img/Shop.png",
    github: "#",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
]

const defaultSkills = [
  { name: "HTML", icon: FileCode2 },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "React", icon: Atom },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "Next.js", icon: Globe },
  { name: "SQL", icon: Database }
]

const getStoredData = (key, fallback) => {
  try {
    const savedData = localStorage.getItem(key)

    if (savedData !== null) {
      const parsedData = JSON.parse(savedData)

      if (Array.isArray(parsedData)) {
        return parsedData
      }
    }
  } catch {
    return fallback
  }

  return fallback
}

const getInitialSkills = () => {
  const savedSkills = getStoredData("portfolioSkills", null)

  if (savedSkills === null) {
    return defaultSkills
  }

  return savedSkills.map((skill) => {
    const matchingSkill = defaultSkills.find(
      (item) => item.name === skill.name
    )

    return {
      name: skill.name,
      icon: matchingSkill?.icon || Code2
    }
  })
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (password !== ADMIN_PASSWORD) {
      setError("Incorrect password. Please try again.")
      toast.error("Incorrect password")
      return
    }

    onLogin()
    toast.success("Login successful!")
    navigate("/admin", { replace: true })
  }

  return (
    <section className="admin-page light">
      <div className="admin-container">
        <div className="admin-login-card">
          <div className="admin-login-icon">
            <LockKeyhole size={30} />
          </div>

          <span className="admin-label">ADMIN PANEL</span>
          <h1>Welcome Back</h1>
          <p>Enter your password to manage your portfolio.</p>

          <form className="admin-login-form" onSubmit={handleSubmit}>
            <label htmlFor="admin-password">Password</label>

            <div className="admin-password-field">
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  setError("")
                }}
                placeholder="Enter admin password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            {error && <p className="admin-login-error">{error}</p>}

            <button type="submit" className="admin-primary-button">
              <LockKeyhole size={18} />
              Sign In
            </button>
          </form>

          <button
            type="button"
            className="admin-login-back"
            onClick={() => navigate("/")}
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)

  const [projects, setProjects] = useState(() =>
    getStoredData("portfolioProjects", defaultProjects)
  )

  const [skills, setSkills] = useState(getInitialSkills)
  const location = useLocation()

  useEffect(() => {
    try {
      localStorage.setItem("portfolioProjects", JSON.stringify(projects))
    } catch {
      return
    }
  }, [projects])

  useEffect(() => {
    try {
      localStorage.setItem(
        "portfolioSkills",
        JSON.stringify(skills.map((skill) => ({ name: skill.name })))
      )
    } catch {
      return
    }
  }, [skills])

  const handleLogin = () => {
    sessionStorage.setItem(AUTH_KEY, "true")
    setIsAdminAuthenticated(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY)
    setIsAdminAuthenticated(false)
    toast.success("Logged out successfully!")
  }

  const isAdminRoute = location.pathname === "/admin"

  return (
    <div className={darkMode ? "portfolio" : "portfolio light"}>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            fontSize: "14px"
          },
          success: {
            style: {
              background: "#4033C3",
              color: "#ffffff"
            }
          },
          error: {
            style: {
              background: "#E66B3B",
              color: "#ffffff"
            }
          }
        }}
      />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Hero darkMode={darkMode} />
                </AnimatedPage>
              }
            />

            <Route
              path="/about"
              element={
                <AnimatedPage>
                  <About />
                </AnimatedPage>
              }
            />

            <Route
              path="/skills"
              element={
                <AnimatedPage>
                  <Skills skills={skills} />
                </AnimatedPage>
              }
            />

            <Route
              path="/projects"
              element={
                <AnimatedPage>
                  <Projects projects={projects} />
                </AnimatedPage>
              }
            />

            <Route
              path="/services"
              element={
                <AnimatedPage>
                  <Services />
                </AnimatedPage>
              }
            />

            <Route
              path="/contact"
              element={
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              }
            />

            <Route
              path="/admin"
              element={
                <AnimatedPage>
                  {isAdminAuthenticated ? (
                    <Admin
                      darkMode={darkMode}
                      projects={projects}
                      setProjects={setProjects}
                      skills={skills}
                      setSkills={setSkills}
                      onLogout={handleLogout}
                    />
                  ) : (
                    <AdminLogin onLogin={handleLogin} />
                  )}
                </AnimatedPage>
              }
            />

            <Route
              path="*"
              element={
                <AnimatedPage>
                  <section className="not-found">
                    <h1>404</h1>
                    <p>Page not found.</p>
                  </section>
                </AnimatedPage>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {location.pathname !== "/admin" && <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
