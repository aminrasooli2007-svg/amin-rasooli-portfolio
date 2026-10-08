import { Mail } from "lucide-react"

function Contact() {
  const handleContact = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=aminrasooli2007@gmail.com",
      "_blank"
    )
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-card">
        <div className="contact-content">
          <span>05 — Contact</span>

          <h2>
            Let's build something
            <span> together.</span>
          </h2>

          <p>
            Have a project, opportunity or idea? Feel free to
            reach out.
          </p>

          <button
            className="primary-button"
            onClick={handleContact}
          >
            Get In Touch
            <Mail size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact