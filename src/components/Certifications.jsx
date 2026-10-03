// Certifications section: lists professional credentials and achievement badges.
import { portfolio } from '../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-list">
        {portfolio.certifications.map((cert) => (
          <div key={cert.name} className="cert-card glass-card">
            <div className="cert-icon">🏆</div>
            <div className="cert-info">
              <h3>{cert.name}</h3>
              <p>
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
