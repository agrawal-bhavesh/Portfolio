// Skills section: renders the professional skill categories and tags.
import { portfolio } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-grid">
        {portfolio.skills.map((group) => (
          <div key={group.category} className="skill-group glass-card">
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
