
import { useState } from "react"
import {
  Atom,
  Braces,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Palette,
  Wind
} from "lucide-react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const skills = [
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

  const projects = [
    {
      title: "TodoFlow",
      description:
        "TodoFlow — A modern and elegant task management app built with React, designed to help you organize your day, stay focused, and get things done.",
      image: "/img/Todo.png",
      github:
        "https://github.com/aminrasooli2007-svg/todo-app-react",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "LocalStorage"
      ]
    },
    {
      title: "Expense Tracker",
      description:
        "A modern Expense Tracker built with React. This project is being developed step by step, with new features and improvements added regularly while practicing React, JavaScript, UI design, and problem-solving.",
      image: "/img/Exp.png",
      github: "#",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "LocalStorage"
      ]
    },
    {
      title: "Workshop Management",
      description:
        "A JavaScript-based shop management system for managing products, inventory, and sales.",
      image: "/img/Shop.png",
      github: "#",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    })

    setMenuOpen(false)
  }

  return (
    <div className={darkMode ? "portfolio" : "portfolio light"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
