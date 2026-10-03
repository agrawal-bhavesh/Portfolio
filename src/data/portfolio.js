// Central portfolio data source used across the app.
// This object keeps profile details, skills, services, projects, certifications,
// and contact links in one place so the page content stays easy to maintain.
export const portfolio = {
  name: "BHAVESH",
  title: "Full Stack Developer & Cyber Security Specialist",
  tagline: "Building secure, scalable applications and protecting digital assets from threats.",
  bio: "I'm a passionate full stack developer with deep expertise in cyber security. I build robust web applications and ensure they're fortified against modern threats. From frontend to backend to penetration testing, I cover the full spectrum of secure software development.",
  // Key professional metrics shown in the About section.
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "10+", label: "Certifications" },
    { value: "100%", label: "Commitment" },
  ],
  // Skill groups are rendered as separate cards with associated technology tags.
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", "Go", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "Cyber Security",
      items: ["Penetration Testing", "SIEM", "OWASP", "Kali Linux", "Burp Suite", "Metasploit", "Wireshark"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Terraform", "Linux"],
    },
  ],
  // Services offered to clients and prospects.
  services: [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Full-stack web applications built with modern frameworks and best practices.",
    },
    {
      icon: "🔒",
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify and remediate vulnerabilities.",
    },
    {
      icon: "🛡️",
      title: "Security Audits",
      description: "In-depth code and infrastructure audits to ensure compliance and security.",
    },
    {
      icon: "⚡",
      title: "API Development",
      description: "Secure, scalable REST and GraphQL APIs with proper authentication.",
    },
    {
      icon: "🔍",
      title: "Threat Modeling",
      description: "Proactive identification of security risks in your architecture.",
    },
    {
      icon: "📊",
      title: "Security Consulting",
      description: "Expert guidance on security strategy, policies, and implementation.",
    },
  ],
  // Featured portfolio projects; each item contains links and technology tags.
  projects: [
    {
      title: "SecureChat",
      description: "End-to-end encrypted messaging platform with real-time communication and zero-knowledge architecture.",
      tech: ["React", "Node.js", "WebRTC", "AES-256"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "VulnScanner",
      description: "Automated vulnerability scanner that detects OWASP Top 10 vulnerabilities in web applications.",
      tech: ["Python", "Docker", "Selenium", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "CloudVault",
      description: "Secure cloud storage solution with client-side encryption and zero-knowledge proof.",
      tech: ["Next.js", "AWS S3", "TypeScript", "Prisma"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "PhishDetect",
      description: "ML-powered phishing detection system that analyzes URLs and emails in real-time.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ],
  certifications: [
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2023" },
    { name: "CompTIA Security+", issuer: "CompTIA", year: "2022" },
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { name: "OSCP", issuer: "Offensive Security", year: "2024" },
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  email: "hello@bhavesh.dev",
}
