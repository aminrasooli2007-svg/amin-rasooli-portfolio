
import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function BrandIcon({ name, size = 20 }) {
  const paths = {
    github: (
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.52.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z"
      />
    ),
    linkedin: (
      <path
        fill="currentColor"
        d="M5.2 3.5a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.1 7h3.8v14H1.1V7Zm6.1 0h3.65v1.92h.05A4 4 0 0 1 14.5 6.8c3.9 0 4.6 2.56 4.6 5.9V21h-3.8v-7.35c0-1.75-.03-4-2.44-4-2.44 0-2.82 1.9-2.82 3.87V21H7.2V7Z"
      />
    ),
    instagram: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {paths[name]}
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject) {
      nextErrors.subject = "Please select a subject.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please enter your message.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setStatus("idle");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("not-configured");
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-layout">
        <div className="contact-info">
          <p className="contact-eyebrow">Contact</p>

          <h2 className="contact-title">
            Let’s build something{" "}
            <span>together.</span>
          </h2>

          <p className="contact-description">
            Have a project, opportunity or idea? Feel free to reach out.
            I’d love to hear from you.
          </p>

          <div className="contact-links">
            <a href="mailto:aminrasooli2007@gmail.com">
              <Mail size={20} />
              <span>aminrasooli2007@gmail.com</span>
            </a>

            <div>
              <MapPin size={20} />
              <span>Afghanistan</span>
            </div>

            <a
              href="https://www.linkedin.com/in/amin-rasooli-8325b4408/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon name="linkedin" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/aminrasooli2007-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon name="github" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/engineer_amin2007/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon name="instagram" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="contact-form"
        >
          <div className="contact-form-heading">
            <Send size={28} />

            <div>
              <h3>Send me a message</h3>
              <p>Fill out the form below to get in touch.</p>
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="contact-input"
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" className="contact-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="contact-input"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="contact-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className="contact-input"
            >
              <option value="">Select a subject</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && (
              <p id="subject-error" className="contact-error">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="contact-input"
              placeholder="Your message..."
            />
            {errors.message && (
              <p id="message-error" className="contact-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="contact-submit">
            <Send size={18} />
            Send Message
          </button>

          {status === "not-configured" && (
            <p role="status" className="contact-error">
              Your details are valid, but message delivery has not been
              configured yet.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
