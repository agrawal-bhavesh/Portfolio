// Services section: showcases the types of consulting and development work available.
import { portfolio } from '../data/portfolio'

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="section-title">Services</h2>
      <div className="services-grid">
        {portfolio.services.map((service) => (
          <div key={service.title} className="service-card glass-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
