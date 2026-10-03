// App component: this is the main page layout for the portfolio website.
// It composes all individual sections into one continuous landing page.
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import SecurityScan from './components/SecurityScan'
import ProjectRecommender from './components/ProjectRecommender'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <SecurityScan />
        <ProjectRecommender />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
