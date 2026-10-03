// Footer component: closes the page with copyright and secondary navigation links.
import { portfolio } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
