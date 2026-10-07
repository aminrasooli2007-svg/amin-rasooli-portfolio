
import {
  Menu,
  Moon,
  Sun,
  X
} from "lucide-react"

function Navbar({
  darkMode,
  setDarkMode,
  menuOpen,
  setMenuOpen,
  scrollToSection
}) {
  return (
    <header className="navbar">
      <button
        className="logo"
        onClick={() => scrollToSection("home")}
      >
        Amin Rasooli<span>.</span>
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("home")
          }}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("about")
          }}
        >
          About
        </a>

        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("skills")
          }}
        >
          Skills
        </a>

        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("projects")
          }}
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("contact")
          }}
        >
          Contact
        </a>
      </nav>

      <div className="nav-actions">
        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
