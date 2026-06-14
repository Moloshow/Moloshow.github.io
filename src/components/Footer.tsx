export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '2rem 0',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Arthur Aries · {new Date().getFullYear()}
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { href: 'https://github.com/Moloshow', label: 'GitHub' },
            { href: 'https://linkedin.com/in/arthur-aries', label: 'LinkedIn' },
            { href: 'mailto:arthur.aries@outlook.com', label: 'Email' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', opacity: 0.6 }}>
          Built with React + TS + Tailwind
        </p>
      </div>
    </footer>
  )
}
