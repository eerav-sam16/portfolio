import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    eyebrow: 'Platform',
    name:    'Mobiquity One',
    sub:     'PG Orchestration Platform',
    period:  '2025 – Present',
    accent:  'var(--lilac)',
    divider: 'rgba(192,132,252,0.25)',
    stack:   ['Java', 'Spring Boot', 'Kafka', 'Redis', 'OAuth2', 'PostgreSQL'],
    bullets: [
      'Pluggable microservice architecture with Strategy + Registry pattern — new payment gateway integrations with zero changes to core service.',
      'Idempotency layer via distributed Redis locks preventing duplicate charges across retries at scale.',
      'Kafka-based async payment status propagation reducing downstream polling by ~60%.',
      'PCI-DSS compliant audit logging across Card, UPI Intent & Net Banking flows.',
    ],
  },
  {
    eyebrow: 'Platform',
    name:    'Mobiquity Pay',
    sub:     'Digital Payments Platform',
    period:  '2023 – 2025',
    accent:  'var(--cyan)',
    divider: 'rgba(34,211,238,0.22)',
    stack:   ['Java', 'Spring Boot', 'Oracle', 'PostgreSQL', 'Redis', 'Kafka'],
    bullets: [
      'High-throughput P2P, B2B, wallet-bank & bill payment APIs at 10M+ user scale.',
      'Circuit breakers + fallback strategies for upstream partner failures, sustaining 99.9% availability.',
      'Async Kafka notification pipeline delivering real-time payment status to mobile/web clients.',
      'Configurable biller onboarding framework — 20+ financial institutions live in under 2 weeks.',
    ],
  },
]

export default function Projects() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 130)
            obs.unobserve(el)
          }
        },
        { threshold: 0.08 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              ref={el => (cardRefs.current[i] = el)}
              className="glass-card project-card reveal"
            >
              <div className="project-top">
                <p className="project-eyebrow" style={{ color: p.accent }}>{p.eyebrow}</p>
                <span className="project-period">{p.period}</span>
              </div>

              <h3 className="project-name">{p.name}</h3>
              <p className="project-sub" style={{ color: p.accent }}>{p.sub}</p>

              <div className="project-divider" style={{ background: `linear-gradient(to right, ${p.divider}, transparent)` }} />

              <div className="project-tags">
                {p.stack.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <ul className="project-bullets">
                {p.bullets.map((b, j) => (
                  <li key={j} className="project-bullet">
                    <span style={{ color: p.accent, flexShrink: 0, marginTop: '3px', fontSize: '10px' }}>▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
