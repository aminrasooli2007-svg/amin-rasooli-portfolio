
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
        "A modern task management app built with React to organize daily tasks.",
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

  return (
    <BrowserRouter>
      <div className={darkMode ? "portfolio" : "portfolio light"}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills skills={skills} />
                  <Projects projects={projects} />
                  <Services />
                  <Contact />
                </>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills skills={skills} />} />
            <Route path="/projects" element={<Projects projects={projects} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
