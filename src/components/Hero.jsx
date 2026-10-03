// Hero section: the first visible content block on the page.
// It introduces the developer and includes the primary call-to-action buttons.
import { portfolio } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">{portfolio.name}</h1>
        <h2 className="hero-title">{portfolio.title}</h2>
        <p className="hero-tagline">{portfolio.tagline}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
