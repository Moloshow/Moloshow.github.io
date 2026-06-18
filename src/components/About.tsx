import { ScrollReveal } from './ScrollReveal'
import { certifications } from '../data/skills'

const quickFacts: { label: string; value: string | string[] }[] = [
  { label: 'Location', value: 'Mulhouse, France' },
  { label: 'Company', value: 'Technology & Strategy' },
  { label: 'Degree', value: ["Master's Artificial Intelligence & Software Development", 'EISTI (now CY Tech), Pau, France'] },
  { label: 'Experience', value: '6+ years' },
  { label: 'Languages', value: ['French (native)', 'English (C1)', 'Spanish & Chinese (notions)'] },
]

export function About() {
  return (
    <section id="about" className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.7fr) minmax(0, 1fr)',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Bio */}
          <div>
            <ScrollReveal>
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.025em',
                  color: 'var(--text-primary)',
                  marginBottom: '2rem',
                }}
              >
                About
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Hi Everyone, I am <span className="orange-text">Arthur Aries</span> from <span className="orange-text">Mulhouse, France.</span>
              </p>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                I am an AI engineer with <span className="orange-text">6+ years of experience</span> doing computer vision and embedded AI.
                I primarily work on <span className="orange-text">industrial and defense</span> projects, deploying systems on edge hardware.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                I cover the <span className="orange-text">whole stack:</span> collecting data, training architectures, optimizing for <span className="orange-text">TensorRT / ONNX</span>, writing the <span className="orange-text">ROS 2</span> nodes, and deploying.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                On the side, I built two tools:
                <br />
                - <span className="orange-text">AimFlow</span>: a proprietary end-to-end MLOps ecosystem built from scratch.
                <br />
                - <span className="orange-text">AimLab</span>: a custom desktop annotation studio packed with geometry tools and SAM 2 integration.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Outside of work, I explore ideas through <span className="orange-text">personal projects</span>, from a tactical padel AI engine (<span className="orange-text">BandejAI</span>) and F1 tracking pipeline (<span className="orange-text">FormulIA1</span>) to a 2D game (<span className="orange-text">Flavoria</span>) and others.
              </p>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div>
            <ScrollReveal delay={1}>
              <div style={{ position: 'sticky', top: '90px' }}>
                {/* Facts */}
                <div
                  className="card"
                  style={{
                    padding: '1.5rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {quickFacts.map((fact) => (
                      <div key={fact.label}>
                        <div
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            color: 'var(--accent)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '0.3rem',
                            opacity: 0.9,
                          }}
                        >
                          {fact.label}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                          {Array.isArray(fact.value)
                            ? fact.value.map((line) => (
                                <span key={line} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'block' }}>
                                  {line}
                                </span>
                              ))
                            : <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{fact.value}</span>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div
                  className="card"
                  style={{
                    padding: '1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.8rem',
                      opacity: 0.9,
                    }}
                  >
                    Certifications
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {certifications.map((cert) => (
                      <p key={cert} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {cert}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
