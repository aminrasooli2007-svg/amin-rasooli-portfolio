
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
import Services from "./components/Services"
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
        "A full-stack personal finance tracker built with React, Vite, and Supabase. Features user authentication, secure user-specific transaction management, income and expense tracking, search, filtering, and dashboard summaries. PostgreSQL Row Level Security (RLS) policies help ensure users can access only their own transactions.",
      image: "/img/Exp.png",
      github: "#",
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "Vite",
        "Supabase",
        "PostgreSQL",
        "Row Level Security (RLS)",
        "Lucide React"
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
    const element = document.getElementById(id)

    if (!element) return

    const start = window.scrollY
    const target = element.getBoundingClientRect().top + window.scrollY - 75
    const distance = target - start
    const duration = 750
    let startTime = null

    const easeInOut = (time) => {
      return time < 0.5
        ? 4 * time * time * time
        : 1 - Math.pow(-2 * time + 2, 3) / 2
    }

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOut(progress)

      window.scrollTo(0, start + distance * easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)

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
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
