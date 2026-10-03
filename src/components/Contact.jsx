// Contact section: includes a social profile summary and a simple contact form.
// The form currently provides a friendly success state without sending data to a backend.
import { useState } from 'react'
import { portfolio } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-grid">
        <div className="contact-info glass-card">
          <h3>Let's work together</h3>
          <p>
            Have a project in mind? Let's build something secure and amazing.
          </p>
          <div className="social-links">
            <a href={portfolio.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={portfolio.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={portfolio.social.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit" className="btn btn-primary">
            {sent ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
