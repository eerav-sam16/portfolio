const STATS = [
  { val: '3',      lbl: 'Years Exp.'   },
  { val: '10M+',   lbl: 'Users Served' },
  { val: '<200ms', lbl: 'P95 Latency'  },
  { val: '99.95%', lbl: 'Uptime SLA'   },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/eerav-sam16',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/eerav-sameer',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@LocalhostLab',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@eerav_sam',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container">
        <div className="hero-grid">
          {/* Left — text content */}
          <div>
            <span className="hero-greeting">// Senior Software Engineer</span>

            <h1 className="hero-name gradient-text">Eerav Sameer</h1>

            <p className="hero-role">
              FinTech &amp; Payments
              <span className="hero-role-sep">·</span>
              Java Microservices
              <span className="hero-role-sep">·</span>
              Distributed Systems
            </p>

            <p className="hero-desc">
              I design and ship payment systems that move real money at scale —
              10M+ users, &lt;200ms latency, 99.95% uptime. Promoted to Senior in
              18&nbsp;months by owning platforms end-to-end: architecture sessions,
              schema design, performance tuning, and 3am production RCAs.
            </p>

            <div className="hero-stats">
              {STATS.map(s => (
                <div key={s.lbl} className="hero-stat">
                  <span className="stat-val gradient-text">{s.val}</span>
                  <span className="stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>

            <div className="hero-btns">
              <button
                className="btn btn-primary"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects →
              </button>
              <a
                href="/Eerav_Sameer_Resume.pdf"
                download="Eerav_Sameer_Resume.pdf"
                className="btn btn-outline"
              >
                Download Resume
              </a>
            </div>

            <div className="hero-socials">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <div className="hero-photo-inner">
                <img src="/profile.jpg" alt="Eerav Sameer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
