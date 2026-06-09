import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const SOCIALS = [
  {
    label: 'GitHub',
    href:  'https://github.com/eerav-sam16',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href:  'https://www.youtube.com/@LocalhostLab',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    label: 'Medium',
    href:  'https://medium.com/@eerav_sam',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText('eeravsameer16@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className="reveal contact-inner">
          <h2 className="contact-heading">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Great.</span>
          </h2>

          <p className="contact-sub">
            Open to senior engineering roles in FinTech, Payments, and high-scale
            distributed systems. Let&apos;s connect and build something impactful.
          </p>

          <div className="contact-btns">
            <button className="btn btn-primary" onClick={copyEmail}>
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
            <a
              href="https://linkedin.com/in/eerav-sameer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="contact-socials">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>

          <div className="contact-info">
            <span>📍 Bangalore, India</span>
            <span className="info-sep">·</span>
            <a href="mailto:eeravsameer16@gmail.com" className="contact-email-link">
              eeravsameer16@gmail.com
            </a>
            <span className="info-sep">·</span>
            <span>+91 70912 04933</span>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            EERAV SAMEER · 2026 · BUILT WITH REACT &amp; VITE
          </p>
        </div>
      </footer>
    </section>
  )
}
