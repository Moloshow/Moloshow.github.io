import { useEffect, useState } from 'react'

const TITLES = [
  'Computer Vision Engineer',
  'MLOps Engineer',
  'Embedded AI Specialist',
  'Edge AI Developer',
]

function useTypewriter(texts: string[], speed = 65, pause = 2200) {
  const [display, setDisplay] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, speed)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, speed / 2)
    } else {
      setDeleting(false)
      setTextIndex((i) => (i + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex, texts, speed, pause])

  return display
}

/* Interactive 3D Avatar */
function TiltAvatar() {
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const tiltX = ((y - centerY) / centerY) * -15
    const tiltY = ((x - centerX) / centerX) * 15
    setTransform(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`)
  }

  const handleMouseLeave = () => {
    setTransform('')
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.15s ease-out',
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        position: 'relative',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: '0 10px 40px rgba(249, 115, 22, 0.15), inset 0 0 0 2px rgba(251, 146, 60, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <img 
        src="/aaries3.png" 
        alt="Arthur's Avatar" 
        style={{ 
          width: '105%', 
          height: 'auto',
          marginBottom: '-5%',
          filter: 'drop-shadow(0 -10px 20px rgba(251, 146, 60,0.15))',
          position: 'relative',
          zIndex: 2
        }} 
      />
    </div>
  )
}

export function Hero() {
  const typed = useTypewriter(TITLES)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249, 115, 22,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '10%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(251, 146, 60,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '4rem', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>

          {/* Left: text */}
          <div style={{ maxWidth: '600px', flex: 1 }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem',
              letterSpacing: '0.04em',
            }}>
              Mulhouse, France
            </p>

            <h1
              className="hero-name"
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
              }}
            >
              Arthur
              <br />
              <span style={{ color: 'var(--accent)' }}>Aries</span>
            </h1>

            {/* Typewriter */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: 'var(--accent)',
                fontWeight: 600,
                marginBottom: '1.5rem',
                minHeight: '1.6em',
                letterSpacing: '0.01em',
              }}
            >
              <span style={{ opacity: 0.6, color: 'var(--text-secondary)' }}>A </span>{typed}
              <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--text-primary)' }}>|</span>
            </div>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '550px',
            }}>
              I build <span className="orange-text">AI systems that run in the real world</span>.
              <br />
              6+ years of experience in Computer Vision, Deep Learning, Edge AI, and MLOps.
              <br />
              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                marginTop: '0.5rem',
                color: 'var(--accent)',
                fontWeight: 500
              }}>
                <span style={{ 
                  width: '10px', 
                  height: '10px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--accent)', 
                  display: 'inline-block',
                  boxShadow: '0 0 8px rgba(251, 146, 60,0.6)'
                }} />
                Open to new opportunities
              </span>
            </p>

            {/* Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center' }}>
              <a
                href="#resume"
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #ea580c, #fb923c)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'opacity 0.2s, transform 0.2s',
                  boxShadow: '0 4px 20px rgba(249, 115, 22,0.35)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none' }}
              >
                View Resume
              </a>

              {[
                { label: 'GitHub', href: 'https://github.com/Moloshow' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/arthur-aries' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.65rem 1.4rem',
                    borderRadius: '8px',
                    background: 'transparent',
                    color: 'var(--text-secondary)',
                    border: '1px solid rgba(251, 146, 60,0.2)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(251, 146, 60,0.5)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(251, 146, 60,0.2)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: illustration */}
          <div className="hero-illustration">
            <TiltAvatar />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.6,
          animation: 'fadeInUp 1s ease 1s both',
          pointerEvents: 'none'
        }}
      >
        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-secondary)' }}>
          Scroll
        </span>
        <svg 
          className="bounce-arrow"
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" 
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>

      <style>{`
        .hero-name { animation: fadeInUp 0.7s ease both; }
        @keyframes blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }
        @keyframes bounce-down { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(6px); } 
        }
        .bounce-arrow { animation: bounce-down 2s infinite ease-in-out; }
        .hero-illustration { flex-shrink: 0; }
        @media (max-width: 900px) { .hero-illustration { display: none; } }
      `}</style>
    </section>
  )
}
