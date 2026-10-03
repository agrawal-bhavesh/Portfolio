// Chatbot component: provides a simple AI-style assistant for portfolio questions.
// It responds to common queries like skills, services, projects, and contact details.
import { useState, useRef, useEffect } from 'react'
import { portfolio } from '../data/portfolio'

const quickReplies = ['Skills', 'Services', 'Projects', 'Contact']

const getResponse = (input) => {
  const lower = input.toLowerCase()

  if (lower.match(/skill|tech|stack|language|framework|tool/)) {
    return `My core skills include:\n\nFrontend: React, Next.js, TypeScript, Tailwind CSS\nBackend: Node.js, Python, Go, PostgreSQL, MongoDB\nSecurity: Penetration Testing, OWASP, Kali Linux, Burp Suite\nDevOps: Docker, Kubernetes, AWS, CI/CD\n\nWant to know more about any specific area?`
  }
  if (lower.match(/experience|year|work|background/)) {
    return `I have 5+ years of experience in full stack development and cyber security. I've completed 50+ projects and hold 10+ certifications including CEH, CompTIA Security+, AWS Solutions Architect, and OSCP.`
  }
  if (lower.match(/service|offer|do|provide/)) {
    return `I offer a range of services:\n\nWeb Development - Full-stack apps\nPenetration Testing - Security assessments\nSecurity Audits - Code & infrastructure\nAPI Development - Secure REST/GraphQL\nThreat Modeling - Risk identification\nSecurity Consulting - Strategy & policies\n\nWhich service interests you?`
  }
  if (lower.match(/project|built|work|portfolio/)) {
    return `Here are some featured projects:\n\nSecureChat - E2E encrypted messaging\nVulnScanner - Automated vulnerability scanner\nCloudVault - Secure cloud storage\nPhishDetect - ML-powered phishing detection\n\nCheck the Projects section for details!`
  }
  if (lower.match(/contact|email|reach|hire|connect/)) {
    return `You can reach me at:\n\nEmail: ${portfolio.email}\nGitHub: ${portfolio.social.github}\nLinkedIn: ${portfolio.social.linkedin}\n\nOr use the contact form below. I usually respond within 24 hours!`
  }
  if (lower.match(/certification|certified|certificate|cert/)) {
    return `My certifications include:\n\nCEH - Certified Ethical Hacker (2023)\nCompTIA Security+ (2022)\nAWS Solutions Architect (2023)\nOSCP - Offensive Security Certified Professional (2024)\n\nSee the Certifications section for the full list!`
  }
  if (lower.match(/security|cyber|penetration|hacking|hack/)) {
    return `Cyber security is my passion! I specialize in:\n\nPenetration Testing & Ethical Hacking\nVulnerability Assessment\nSecurity Audits & Compliance\nThreat Modeling & Analysis\nIncident Response\n\nI help organizations identify and remediate security risks before attackers do.`
  }
  if (lower.match(/price|cost|rate|charge|budget/)) {
    return `My rates depend on project scope and complexity. For a detailed quote, please reach out via the contact form or email me at ${portfolio.email}. I'm happy to discuss your requirements!`
  }
  if (lower.match(/hello|hi|hey|greetings/)) {
    return `Hello! I'm the AI assistant for ${portfolio.name}'s portfolio. I can help you learn about skills, services, projects, certifications, and how to get in touch. What would you like to know?`
  }
  if (lower.match(/thank|thanks/)) {
    return `You're welcome! Feel free to ask if you have more questions. You can also explore the portfolio sections above. Have a great day!`
  }
  return `I'm not sure about that, but I can help with:\n\nSkills & expertise\nServices offered\nFeatured projects\nCertifications\nContact information\n\nTry asking about any of these topics!`
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: `Hi! I'm the AI assistant for ${portfolio.name}'s portfolio. Ask me anything about skills, services, projects, or how to get in touch!`,
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = (text) => {
    const msg = text.trim()
    if (!msg) return

    const userMsg = { id: Date.now(), type: 'user', text: msg }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const response = getResponse(msg)
      const botMsg = { id: Date.now() + 1, type: 'bot', text: response }
      setMessages((prev) => [...prev, botMsg])
      setTyping(false)
    }, 800 + Math.random() * 600)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="chatbot">
      <button
        className="chatbot-fab"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI chatbot"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <h4>AI Assistant</h4>
              <span className="chatbot-status">
                <span className="status-dot" />
                Online
              </span>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-msg ${msg.type}`}>
                {msg.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < msg.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            ))}
            {typing && (
              <div className="chatbot-msg bot typing-indicator">
                <span />
                <span />
                <span />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-quick-replies">
            {quickReplies.map((qr) => (
              <button key={qr} onClick={() => sendMessage(qr)}>
                {qr}
              </button>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" aria-label="Send message">
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
