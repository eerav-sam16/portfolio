import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#about',          label: 'About' },
  { href: '#experience',     label: 'Experience' },
  { href: '#projects',       label: 'Projects' },
  { href: '#skills',         label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact',        label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [progress,  setProgress]  = useState(0)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    function onScroll() {
      const { scrollY } = window
      const total = document.body.scrollHeight - window.innerHeight
      setScrolled(scrollY > 60)
      setProgress(total > 0 ? (scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goTo(href) {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="scroll-bar" style={{ width: `${progress}%` }} />

      <div className="nav-inner">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          eerav<span style={{ color: 'var(--cyan)' }}>.</span>
        </button>

        <nav className="nav-links">
          {LINKS.map(l => (
            <button key={l.href} className="nav-link" onClick={() => goTo(l.href)}>
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline nav-resume"
        >
          Resume
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className="ham-bar" />
          <span className="ham-bar" />
          <span className="ham-bar" />
        </button>
      </div>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {LINKS.map(l => (
          <button key={l.href} className="mobile-nav-link" onClick={() => goTo(l.href)}>
            {l.label}
          </button>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ marginTop: '8px' }}
        >
          Resume
        </a>
      </div>
    </header>
  )
}
