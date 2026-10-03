// SecurityScan component: simulates a lightweight AI-powered security assessment.
// It animates progress through several validation stages and shows a summary report.
import { useState, useEffect, useRef } from 'react'

const scanSteps = [
  { label: 'Initializing AI security engine...', status: 'info', duration: 600 },
  { label: 'Checking OWASP Top 10 vulnerabilities', status: 'pass', duration: 1000 },
  { label: 'Scanning for SQL injection points', status: 'pass', duration: 900 },
  { label: 'Testing XSS attack vectors', status: 'warning', duration: 1100 },
  { label: 'Analyzing authentication mechanisms', status: 'pass', duration: 800 },
  { label: 'Reviewing API security headers', status: 'pass', duration: 700 },
  { label: 'Checking for CSRF vulnerabilities', status: 'pass', duration: 800 },
  { label: 'Scanning dependencies for known CVEs', status: 'warning', duration: 1000 },
  { label: 'Analyzing encryption protocols', status: 'pass', duration: 900 },
  { label: 'Generating security report...', status: 'info', duration: 600 },
]

export default function SecurityScan() {
  const [scanning, setScanning] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [results, setResults] = useState([])
  const [complete, setComplete] = useState(false)
  const [score, setScore] = useState(0)
  const terminalRef = useRef(null)

  useEffect(() => {
    terminalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [results])

  const startScan = () => {
    setScanning(true)
    setComplete(false)
    setResults([])
    setCurrentStep(0)
    setScore(0)
    runStep(0)
  }

  const runStep = (stepIndex) => {
    if (stepIndex >= scanSteps.length) {
      setScanning(false)
      setComplete(true)
      setScore(87)
      return
    }

    const step = scanSteps[stepIndex]
    setCurrentStep(stepIndex)

    setTimeout(() => {
      setResults((prev) => [...prev, step])
      runStep(stepIndex + 1)
    }, step.duration)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pass': return '✓'
      case 'warning': return '⚠'
      case 'fail': return '✗'
      default: return '→'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pass': return 'var(--accent)'
      case 'warning': return '#f59e0b'
      case 'fail': return '#ef4444'
      default: return 'var(--text-muted)'
    }
  }

  return (
    <section id="security-scan" className="section">
      <h2 className="section-title">AI Security Scan</h2>
      <p className="scan-description">
        Experience a simulated AI-powered security assessment. Click the button below to run a demo scan.
      </p>

      <div className="scan-container glass-card">
        <div className="scan-header">
          <div className="scan-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="scan-title">AI Security Scanner v2.0</span>
        </div>

        <div className="scan-terminal" ref={terminalRef}>
          {results.length === 0 && !scanning && !complete && (
            <div className="scan-idle">
              <p>Ready to scan. Click "Start Scan" to begin the security assessment.</p>
            </div>
          )}

          {results.map((result, i) => (
            <div key={i} className="scan-line" style={{ color: getStatusColor(result.status) }}>
              <span className="scan-icon">{getStatusIcon(result.status)}</span>
              <span>{result.label}</span>
            </div>
          ))}

          {scanning && (
            <div className="scan-line scanning">
              <span className="scan-spinner" />
              <span>Scanning...</span>
            </div>
          )}

          {complete && (
            <div className="scan-summary">
              <div className="scan-score">
                <span className="score-value">{score}</span>
                <span className="score-label">/ 100</span>
              </div>
              <div className="scan-stats">
                <div className="stat pass">
                  <span className="stat-num">8</span>
                  <span className="stat-text">Passed</span>
                </div>
                <div className="stat warning">
                  <span className="stat-num">2</span>
                  <span className="stat-text">Warnings</span>
                </div>
                <div className="stat fail">
                  <span className="stat-num">0</span>
                  <span className="stat-text">Failed</span>
                </div>
              </div>
              <p className="scan-verdict">Security Grade: <strong>A-</strong> — Good security posture with minor improvements needed.</p>
            </div>
          )}
        </div>

        <div className="scan-progress">
          <div
            className="scan-progress-bar"
            style={{ width: `${(currentStep / scanSteps.length) * 100}%` }}
          />
        </div>

        <div className="scan-actions">
          <button
            className="btn btn-primary"
            onClick={startScan}
            disabled={scanning}
          >
            {scanning ? 'Scanning...' : complete ? 'Run Again' : 'Start Scan'}
          </button>
          {complete && (
            <button
              className="btn btn-secondary"
              onClick={() => { setResults([]); setComplete(false); setCurrentStep(0) }}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
