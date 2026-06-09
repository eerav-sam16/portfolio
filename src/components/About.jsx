import useReveal from '../hooks/useReveal'

const YTIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
)
const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

export default function About() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          {/* Left — bio */}
          <div ref={leftRef} className="reveal">
            <p className="about-text">
              I&apos;m a <span className="text-lilac">Senior Software Engineer</span> specialising
              in FinTech and Payments — building systems that handle real money at scale. At
              Comviva Technologies I own the payment gateway orchestration platform end-to-end:
              HLD, implementation, query optimisation, and production incident response.
            </p>
            <p className="about-text">
              In <span className="text-lilac">3 years</span> I&apos;ve shipped APIs across Card,
              UPI, Net Banking, and Wallet flows serving <span className="text-cyan">10M+ users</span>{' '}
              at &lt;200ms p95 latency and 99.95% uptime — then got promoted to Senior in 18 months.
              I care deeply about system reliability, clean design patterns, and code that
              doesn&apos;t page you at 3am.
            </p>
            <p className="about-text">
              I&apos;m actively looking for <span className="text-lilac">senior backend or
              platform engineering roles</span> at product companies where I can work on
              distributed systems problems that matter. If your team moves fast and values
              engineering rigour — let&apos;s talk.
            </p>
            <p className="about-text" style={{ marginBottom: 0 }}>
              Outside work I run{' '}
              <a
                href="https://www.youtube.com/@LocalhostLab"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                LocalhostLab
              </a>{' '}
              on YouTube and write on{' '}
              <a
                href="https://medium.com/@eerav_sam"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                Medium
              </a>{' '}
              — covering System Design, Java, and backend engineering.
            </p>

            <div className="fun-fact">
              <span className="fun-fact-icon">✎</span>
              <span>When I&apos;m not building systems, I write short horror stories.</span>
            </div>
          </div>

          {/* Right — cards */}
          <div ref={rightRef} className="reveal delay-2 about-cards">
            {/* Education */}
            <div className="glass-card about-card">
              <div className="card-eyebrow">Education</div>
              <div className="card-title">B.E.</div>
              <div className="card-sub">M S Ramaiah Institute of Technology</div>
              <div className="card-meta">CGPA: 8.72 / 10 · 2019 – 2023</div>
            </div>

            {/* Content creator */}
            <div className="glass-card about-card">
              <div className="card-eyebrow">Content Creator</div>
              <div className="content-links">
                <a
                  href="https://www.youtube.com/@LocalhostLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-link"
                >
                  <span className="content-icon icon-yt"><YTIcon /></span>
                  <div>
                    <div className="content-info-title">LocalhostLab</div>
                    <div className="content-info-sub">DSA · System Design · Backend · Java</div>
                  </div>
                </a>
                <a
                  href="https://medium.com/@eerav_sam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-link"
                >
                  <span className="content-icon icon-medium"><MediumIcon /></span>
                  <div>
                    <div className="content-info-title">@eerav_sam on Medium</div>
                    <div className="content-info-sub">Technical articles &amp; engineering blogs</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
