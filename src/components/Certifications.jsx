import { useEffect, useRef } from 'react'

const CERTS = [
  {
    issuer: 'Udemy',
    name:   'Kubernetes for the Absolute Beginners — Hands-on',
    date:   'Sep 2023',
    skills: ['Kubernetes', 'Jenkins'],
  },
  {
    issuer: 'Udemy',
    name:   'Helm Kubernetes Packaging Manager for Developers and DevOps',
    date:   'Sep 2023',
    skills: ['Kubernetes', 'Helm Charts'],
  },
  {
    issuer: 'Udemy',
    name:   'The DevOps Essentials — The Handbook',
    date:   'Jun 2023',
    skills: ['DevOps', 'Git'],
  },
  {
    issuer: 'Udemy',
    name:   'Introduction to Cloud Computing',
    date:   'Jun 2023',
    skills: ['AWS', 'Cloud Computing'],
  },
  {
    issuer: 'Udemy',
    name:   'Learn JAVA Programming — Beginner to Master',
    date:   'Apr 2024',
    skills: ['Java', 'Backend', 'Jakarta EE'],
  },
  {
    issuer: 'Udemy',
    name:   'Java JDBC',
    date:   'Feb 2026',
    skills: ['JDBC', 'Java'],
  },
]

export default function Certifications() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 80)
            obs.unobserve(el)
          }
        },
        { threshold: 0.06 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-num">05</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </div>

        <div className="certs-grid">
          {CERTS.map((cert, i) => (
            <div
              key={i}
              ref={el => (cardRefs.current[i] = el)}
              className="glass-card cert-card reveal"
            >
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-date">Issued {cert.date}</div>
              <div className="cert-skills">
                {cert.skills.map(s => (
                  <span key={s} className="cert-skill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
