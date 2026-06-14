import { ScrollReveal } from './ScrollReveal'

/* Floating geometric SVG illustration */
function HeroIllustration() {
  return (
    <div
      style={{
        position: 'relative',
        width: '420px',
        height: '420px',
        flexShrink: 0,
        animation: 'float 6s ease-in-out infinite',
      }}
    >
      <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        {/* Outer ring */}
        <circle cx="210" cy="210" r="180" stroke="rgba(251, 146, 60,0.12)" strokeWidth="1" strokeDasharray="6 8" />
        <circle cx="210" cy="210" r="140" stroke="rgba(251, 146, 60,0.08)" strokeWidth="1" />

        {/* Central hexagon */}
        <polygon
          points="210,110 286,155 286,245 210,290 134,245 134,155"
          stroke="rgba(251, 146, 60,0.4)"
          strokeWidth="1.5"
          fill="rgba(249, 115, 22,0.06)"
        />

        {/* Inner hexagon */}
        <polygon
          points="210,148 254,172 254,220 210,244 166,220 166,172"
          stroke="rgba(251, 146, 60,0.2)"
          strokeWidth="1"
          fill="rgba(249, 115, 22,0.04)"
        />

        {/* Center dot */}
        <circle cx="210" cy="196" r="6" fill="rgba(251, 146, 60,0.7)" />

        {/* Orbit nodes */}
        <circle cx="210" cy="110" r="4" fill="rgba(251, 146, 60,0.5)" />
        <circle cx="286" cy="155" r="4" fill="rgba(251, 146, 60,0.5)" />
        <circle cx="286" cy="245" r="3" fill="rgba(251, 146, 60,0.3)" />
        <circle cx="210" cy="290" r="4" fill="rgba(251, 146, 60,0.5)" />
        <circle cx="134" cy="245" r="3" fill="rgba(251, 146, 60,0.3)" />
        <circle cx="134" cy="155" r="4" fill="rgba(251, 146, 60,0.5)" />

        {/* Connector lines to outer ring */}
        <line x1="210" y1="110" x2="210" y2="50" stroke="rgba(251, 146, 60,0.15)" strokeWidth="1" />
        <line x1="286" y1="155" x2="340" y2="122" stroke="rgba(251, 146, 60,0.15)" strokeWidth="1" />
        <line x1="286" y1="245" x2="340" y2="278" stroke="rgba(251, 146, 60,0.1)" strokeWidth="1" />
        <line x1="210" y1="290" x2="210" y2="350" stroke="rgba(251, 146, 60,0.15)" strokeWidth="1" />
        <line x1="134" y1="245" x2="80" y2="278" stroke="rgba(251, 146, 60,0.1)" strokeWidth="1" />
        <line x1="134" y1="155" x2="80" y2="122" stroke="rgba(251, 146, 60,0.15)" strokeWidth="1" />

        {/* Floating dots */}
        <circle cx="80" cy="122" r="3" fill="rgba(251, 146, 60,0.25)" />
        <circle cx="340" cy="122" r="3" fill="rgba(251, 146, 60,0.25)" />
        <circle cx="210" cy="50" r="3" fill="rgba(251, 146, 60,0.25)" />
        <circle cx="210" cy="350" r="3" fill="rgba(251, 146, 60,0.25)" />
        <circle cx="80" cy="278" r="2" fill="rgba(251, 146, 60,0.15)" />
        <circle cx="340" cy="278" r="2" fill="rgba(251, 146, 60,0.15)" />

        {/* Glowing outer dots */}
        <circle cx="30" cy="210" r="2" fill="rgba(251, 146, 60,0.2)" />
        <circle cx="390" cy="210" r="2" fill="rgba(251, 146, 60,0.2)" />
        <circle cx="155" cy="35" r="2" fill="rgba(251, 146, 60,0.15)" />
        <circle cx="265" cy="35" r="2" fill="rgba(251, 146, 60,0.15)" />
      </svg>

      {/* Purple glow behind illustration */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249, 115, 22,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: -1,
      }} />
    </div>
  )
}export function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-container">
        <div style={{ maxWidth: '560px' }}>
          <ScrollReveal>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Contact
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              I'm open to new opportunities - CV/embedded AI roles, ML engineering, or anything that sounds interesting.
              Prefer Alsace or remote, but flexible. Best way to reach me is email.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Email */}
              <a
                id="email-link"
                href="mailto:arthur.aries@outlook.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Email</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontFamily: "'JetBrains Mono', monospace" }}>
                  arthur.aries@outlook.com
                </span>
              </a>

              {/* LinkedIn */}
              <a
                id="linkedin-link"
                href="https://linkedin.com/in/arthur-aries"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>LinkedIn</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontFamily: "'JetBrains Mono', monospace" }}>
                  linkedin.com/in/arthur-aries
                </span>
              </a>

              {/* GitHub */}
              <a
                id="github-link"
                href="https://github.com/Moloshow"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>GitHub</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontFamily: "'JetBrains Mono', monospace" }}>
                  github.com/Moloshow
                </span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <a
              href="#resume"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '2rem',
                padding: '0.65rem 1.5rem',
                borderRadius: '6px',
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              View Resume
            </a>
          </ScrollReveal>
        </div>
        
        {/* Right: illustration */}
        <div className="contact-illustration" style={{ display: 'none' }}>
          <HeroIllustration />
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-illustration {
            display: block !important;
          }
          #contact .section-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
