
import {
  Atom,
  Layout,
  Smartphone,
  PanelsTopLeft,
  Code2,
  Sparkles
} from "lucide-react"

function Services() {
  const services = [
    {
      icon: Atom,
      title: "Frontend Development",
      description:
        "Building modern and interactive web interfaces with React, JavaScript, and clean component-based architecture."
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description:
        "Creating websites that provide a smooth and consistent experience across desktops, tablets, and mobile devices."
    },
    {
      icon: Code2,
      title: "React Development",
      description:
        "Developing reusable, scalable, and interactive React applications with a focus on performance and usability."
    },
    {
      icon: Layout,
      title: "Landing Page Development",
      description:
        "Building modern landing pages for businesses, products, personal brands, and digital projects."
    },
    {
      icon: PanelsTopLeft,
      title: "UI Development",
      description:
        "Turning designs and ideas into clean, polished, and user-friendly interfaces using modern frontend technologies."
    },
    {
      icon: Sparkles,
      title: "Website Improvement",
      description:
        "Improving existing websites by enhancing their UI, responsiveness, usability, and overall frontend experience."
    }
  ]

  return (
    <section id="services" className="section services-section">
      <div className="section-heading">
        <span>04</span>

        <div>
          <p>What I do</p>
          <h2>Services</h2>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                <Icon size={20} strokeWidth={1.8} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
