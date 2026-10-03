// About section: presents the professional bio and highlights key statistics.
import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text glass-card">
          <p>{portfolio.bio}</p>
        </div>
        <div className="about-stats">
          {portfolio.stats.map((stat) => (
            <div key={stat.label} className="stat-card glass-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
