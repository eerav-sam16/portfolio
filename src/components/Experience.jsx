import { useEffect, useRef } from 'react'

const EXPERIENCES = [
  {
    role:    'Senior Software Engineer',
    company: 'Comviva Technologies',
    period:  'Jan 2025 – Present',
    badge:   'Current',
    badgeClass: 'badge-cyan',
    bullets: [
      'Architected PG orchestration microservice for Card, UPI Intent, Net Banking & Mandate flows using Strategy, Registry, Facade & Template Method patterns — cut new gateway integration time by 85% (3 weeks → 3 days).',
      'Owned end-to-end HLD/LLD for the orchestration platform; documentation adopted as canonical reference across 2 engineering teams.',
      'Introduced Redis sliding-window rate limiting on merchant-facing APIs — sustained 50K+ req/min under peak load without SLA breach.',
      'Optimised Oracle/PostgreSQL queries (index tuning, execution plans) + layered Redis caching — reduced API latency by 40%, maintained 99.95% uptime.',
      'Delivered OAuth2/JWT-secured multi-partner APIs with token scoping & claim validation — cut partner onboarding time by 60%, eliminated 3 auth vulnerability classes.',
      'Mentored 3 junior engineers via structured code reviews and design sessions — improved team delivery velocity by ~25%.',
    ],
  },
  {
    role:    'Software Engineer',
    company: 'Comviva Technologies',
    period:  'Aug 2023 – Dec 2024',
    badge:   'Promoted ↑',
    badgeClass: 'badge-lilac',
    bullets: [
      'Built and owned core payment APIs (P2P, B2B, wallet-bank, bill payments) for Mobiquity Pay — 10M+ users, <200ms p95 latency, 99.9% availability.',
      'Engineered configurable biller onboarding framework — reduced integration turnaround by 50%, enabling 20+ financial institutions to go live in under 2 weeks.',
      'Implemented Redis caching on hot read paths (biller catalog, fee configs) — reduced DB load by 40%, improved throughput 2× during peak traffic bursts.',
      'Built PIN-based transaction auth with replay-attack prevention; owned CI/CD improvements enabling zero-downtime deployments, cutting release cycles by 30%.',
      'Led RCA on 2 high-severity production incidents; implemented systemic fixes reducing MTTR by 45%.',
    ],
  },
]

export default function Experience() {
  const itemRefs = useRef([])

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 140)
            obs.unobserve(el)
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              ref={el => (itemRefs.current[i] = el)}
              className="exp-item reveal"
            >
              <div className="exp-dot" />

              <div className="glass-card exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-right">
                    <span className="exp-period">{exp.period}</span>
                    <span className={`exp-badge ${exp.badgeClass}`}>{exp.badge}</span>
                  </div>
                </div>

                <div className="exp-divider" />

                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="exp-bullet">
                      <span className="bullet-arr">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
