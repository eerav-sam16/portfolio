import { useEffect, useRef } from 'react'

const CATEGORIES = [
  {
    title: 'Backend & Architecture',
    dot:   'var(--lilac)',
    skills: ['Java 8/11/17/21', 'Spring Boot 3.x', 'Spring Security', 'Spring Data JPA', 'REST APIs', 'gRPC', 'Microservices', 'CQRS'],
  },
  {
    title: 'Distributed Systems',
    dot:   'var(--cyan)',
    skills: ['Apache Kafka', 'RabbitMQ', 'Redis Caching', 'Redis Pub/Sub', 'Redis Rate Limiting', 'Event-Driven Architecture'],
  },
  {
    title: 'Databases',
    dot:   'var(--lilac)',
    skills: ['PostgreSQL', 'Oracle SQL', 'Query Optimisation', 'Index Tuning', 'Execution Plans', 'Connection Pooling'],
  },
  {
    title: 'Cloud & DevOps',
    dot:   'var(--cyan)',
    skills: ['Docker', 'Kubernetes', 'Jenkins CI/CD', 'AWS EC2', 'AWS S3', 'AWS SQS', 'Zero-Downtime Deploys'],
  },
  {
    title: 'API & Security',
    dot:   'var(--lilac)',
    skills: ['OAuth2', 'JWT', 'WSO2', 'KrakenD', 'NGINX', 'Rate Limiting', 'Idempotency', 'SSL/TLS', 'PCI-DSS'],
  },
  {
    title: 'Observability',
    dot:   'var(--cyan)',
    skills: ['Grafana', 'Prometheus', 'Elasticsearch', 'Logstash', 'Kibana', 'Distributed Tracing'],
  },
]

export default function Skills() {
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
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">04</span>
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-line" />
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              ref={el => (cardRefs.current[i] = el)}
              className="glass-card skill-card reveal"
            >
              <div className="skill-cat-header">
                <span className="skill-cat-dot" style={{ background: cat.dot }} />
                <span className="skill-cat-title">{cat.title}</span>
              </div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
