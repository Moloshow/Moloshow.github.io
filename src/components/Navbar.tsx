import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false)
    if (href === '#resume') {
      // Allow default hash navigation for Resume
      return
    }
    
    // If we are currently on the resume page, let the default hash navigation go to home first
    if (window.location.hash === '#resume') {
      window.location.hash = '#home'
      setTimeout(() => {
        const target = document.querySelector(href)
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 100)
      return
    }

    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease-out 0s',
        padding: scrolled ? '0.3rem 0' : '0.8rem 0',
        background: scrolled ? 'rgba(31, 20, 17, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        boxShadow: scrolled ? '0px 10px 10px 0px rgba(20, 10, 5, 0.171)' : 'none',
      }}
    >
      <div
        className="section-container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 800,
            fontSize: '1.8rem',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          AA<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 400,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#resume"
            onClick={(e) => handleNavClick(e, '#resume')}
            style={{
              padding: '0.5rem 1.4rem',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 500,
              background: 'linear-gradient(135deg, #ea580c, #fb923c)',
              color: '#fff',
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
              boxShadow: '0 4px 15px rgba(249, 115, 22,0.2)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none' }}
          >
            View Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="hamburger-line" style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '300px' : '0',
          transition: 'max-height 0.3s ease',
          background: 'rgba(23, 16, 14, 0.96)',
          borderBottom: menuOpen ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
        <div className="section-container" style={{ display: 'flex', flexDirection: 'column', paddingTop: '0.5rem', paddingBottom: '1rem', gap: 0 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#resume" onClick={(e) => handleNavClick(e, '#resume')} style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
            View Resume →
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) { .hamburger { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}
