import { useState } from 'react'
import type { Project, Badge } from '../data/projects'

// Clean SVG project thumbnails - no icons, just abstract geometry per category
function ProjectThumb({ badge, image, logo }: { badge: Badge; image?: string; logo?: string }) {
  if (logo) {
    return (
      <div style={{ height: '140px', width: '100%', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)', padding: '1.5rem' }}>
        <img 
          src={logo} 
          alt={`${badge} company logo`} 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'grayscale(0.2) opacity(0.9)' }} 
        />
      </div>
    )
  }

  if (image) {
    return (
      <div style={{ height: '160px', width: '100%', overflow: 'hidden', flexShrink: 0, position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <img 
          src={image} 
          alt={`${badge} project thumbnail`} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} 
        />
      </div>
    )
  }

  const palettes: Record<Badge, { line: string; bg: string }> = {
    'Client Project': { line: '#facc15', bg: 'rgba(250,204,21,0.04)' },
    'R&D Project':    { line: '#f43f5e', bg: 'rgba(244,63,94,0.04)' },
    'Personal':       { line: '#a8a29e', bg: 'rgba(168,162,158,0.04)' },
    'Internship':     { line: '#2dd4bf', bg: 'rgba(45,212,191,0.04)' },
  }
  const p = palettes[badge]

  return (
    <div
      style={{
        height: '140px',
        background: p.bg,
        borderBottom: `1px solid rgba(255,255,255,0.04)`,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <svg
        viewBox="0 0 380 140"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      >
        {/* Simple grid lines */}
        {[40, 80, 120, 160, 200, 240, 280, 320].map((x) => (
          <line key={x} x1={x} y1={0} x2={x} y2={140} stroke={p.line} strokeOpacity="0.07" strokeWidth="1" />
        ))}
        {[30, 60, 90, 120].map((y) => (
          <line key={y} x1={0} y1={y} x2={380} y2={y} stroke={p.line} strokeOpacity="0.07" strokeWidth="1" />
        ))}
        {/* One accent line */}
        <line x1={0} y1={100} x2={380} y2={30} stroke={p.line} strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 6" />
      </svg>
    </div>
  )
}

function BadgePill({ badge }: { badge: Badge }) {
  const styles: Record<Badge, React.CSSProperties> = {
    'Client Project': { color: '#facc15', background: 'rgba(250,204,21,0.08)', border: '1px solid rgba(250,204,21,0.2)' },
    'R&D Project':    { color: '#f43f5e', background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.2)' },
    'Personal':       { color: '#a8a29e', background: 'rgba(168,162,158,0.08)', border: '1px solid rgba(168,162,158,0.2)' },
    'Internship':     { color: '#2dd4bf', background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.2)' },
  }
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.2rem 0.6rem',
        borderRadius: '4px',
        fontSize: '0.68rem',
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        ...styles[badge],
      }}
    >
      {badge}
    </span>
  )
}

export function ProjectCard({ project, index, style }: { project: Project; index: number; style?: React.CSSProperties }) {
  const [expanded, setExpanded] = useState(false)
  const delay = (index % 3) as 0 | 1 | 2 | 3 | 4 | 5

  return (
    <div
      className="card reveal"
      style={{ display: 'flex', flexDirection: 'column', transitionDelay: `${delay * 0.08}s`, ...style }}
      id={`project-${project.id}`}
    >
      <ProjectThumb badge={project.badge} image={project.image} logo={project.logo} />

      <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <BadgePill badge={project.badge} />
          {project.period && (
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
              {project.period}
            </span>
          )}
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.2rem' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
          {project.subtitle}
        </p>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1, marginBottom: '1rem' }}>
          {project.description}
        </p>

        {/* Expand */}
        {(project.context || project.approach || project.results) && (
          <>
            <button
              className="expand-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show less' : 'More details'}
              <span style={{ marginLeft: '0.25rem', display: 'inline-block', transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'none' }}>↓</span>
            </button>
            <div style={{ overflow: 'hidden', maxHeight: expanded ? '700px' : '0', transition: 'max-height 0.4s ease' }}>
              <div style={{ paddingTop: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {project.context && (
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Context</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{project.context}</p>
                  </div>
                )}
                {project.approach && (
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Approach</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{project.approach}</p>
                  </div>
                )}
                {project.results && project.results.length > 0 && (
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Results</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {project.results.map((r) => (
                        <li key={r} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, paddingLeft: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--text-muted)' }}>–</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Stack */}
        <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 500,
                background: 'rgba(251, 146, 60,0.05)',
                color: 'var(--text-muted)',
                border: '1px solid rgba(251, 146, 60,0.12)',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div style={{ marginTop: '0.875rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
