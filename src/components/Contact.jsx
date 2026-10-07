
import { Mail } from "lucide-react"

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-card">
        <div className="contact-content">
          <span>04 — Contact</span>

          <h2>
            Let's build something
            <span> together.</span>
          </h2>

          <p>
            Have a project, opportunity or idea? Feel free to
            reach out.
          </p>

          <a
            className="primary-button"
            href="mailto:amin.rasooli@example.com"
          >
            Get In Touch
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
