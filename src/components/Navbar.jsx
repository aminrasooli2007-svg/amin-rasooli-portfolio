
import { Link, useLocation } from "react-router-dom"
import { Menu, Moon, Sun, X } from "lucide-react"

function Navbar({
  darkMode,
  setDarkMode,
  menuOpen,
  setMenuOpen
}) {
  const location = useLocation()

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/admin" }
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        Amin Rasooli<span>.</span>
      </Link>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={
              location.pathname === link.path ? "active" : ""
            }
          >
            {link.name}
          </Link>
        ))}
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
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
