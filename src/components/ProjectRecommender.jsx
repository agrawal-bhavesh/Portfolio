// ProjectRecommender component: lets visitors choose interests and filter related projects.
import { useState } from 'react'
import { portfolio } from '../data/portfolio'

const interests = [
  { id: 'web-security', label: 'Web Security', icon: '🔒' },
  { id: 'cloud', label: 'Cloud', icon: '☁️' },
  { id: 'ml-ai', label: 'ML/AI', icon: '🤖' },
  { id: 'full-stack', label: 'Full Stack', icon: '⚡' },
  { id: 'encryption', label: 'Encryption', icon: '🔐' },
  { id: 'devops', label: 'DevOps', icon: '🚀' },
]

const projectMatches = {
  'web-security': ['SecureChat', 'VulnScanner', 'PhishDetect'],
  'cloud': ['CloudVault'],
  'ml-ai': ['PhishDetect'],
  'full-stack': ['SecureChat', 'CloudVault'],
  'encryption': ['SecureChat', 'CloudVault'],
  'devops': ['VulnScanner'],
}

export default function ProjectRecommender() {
  const [selected, setSelected] = useState([])

  const toggleInterest = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const getRecommendedProjects = () => {
    if (selected.length === 0) return portfolio.projects

    const matchedNames = selected.flatMap((id) => projectMatches[id] || [])
    const uniqueNames = [...new Set(matchedNames)]
    return portfolio.projects.filter((p) => uniqueNames.includes(p.title))
  }

  const recommended = getRecommendedProjects()

  return (
    <section id="recommender" className="section">
      <h2 className="section-title">AI Project Recommender</h2>
      <p className="recommender-description">
        Select your interests and I'll recommend the most relevant projects from my portfolio.
      </p>

      <div className="recommender-tags">
        {interests.map((interest) => (
          <button
            key={interest.id}
            className={`recommender-tag ${selected.includes(interest.id) ? 'active' : ''}`}
            onClick={() => toggleInterest(interest.id)}
          >
            <span className="tag-icon">{interest.icon}</span>
            <span>{interest.label}</span>
          </button>
        ))}
      </div>

      <div className="recommender-results">
        <div className="results-header">
          <span className="results-count">
            {selected.length === 0
              ? `Showing all ${recommended.length} projects`
              : `${recommended.length} project${recommended.length !== 1 ? 's' : ''} matched`
            }
          </span>
          {selected.length > 0 && (
            <button className="btn btn-secondary btn-sm" onClick={() => setSelected([])}>
              Clear filters
            </button>
          )}
        </div>

        <div className="projects-grid">
          {recommended.map((project) => (
            <div key={project.title} className="project-card glass-card">
              <div className="project-image">
                <span>{project.title[0]}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {recommended.length === 0 && (
          <div className="no-results">
            <p>No projects match your selected interests. Try selecting different tags!</p>
          </div>
        )}
      </div>
    </section>
  )
}
