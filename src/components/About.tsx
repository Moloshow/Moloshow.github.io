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
                Hi Everyone, I am <span className="purple">Arthur Aries</span> from <span className="purple">Mulhouse, France.</span>
                <br />
                <br />
                I am an AI engineer with <span className="purple">6+ years of experience</span> doing computer vision and embedded AI.
                I primarily work on <span className="purple">industrial and defense</span> projects, deploying systems on edge hardware.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                I cover the <span className="purple">whole stack:</span> collecting data, training architectures, optimizing for <span className="purple">TensorRT / ONNX</span>, writing the <span className="purple">ROS 2</span> nodes, and deploying.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                On the side, I built two tools:
                <br />
                - <span className="purple">AimFlow</span>: a desktop MLOps platform.
                <br />
                - <span className="purple">AimLab</span>: an annotation tool using <span className="purple">SAM 2</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                I am actively looking for <span className="purple">new opportunities</span> in CV, embedded AI, or ML engineering (Alsace or remote).
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
