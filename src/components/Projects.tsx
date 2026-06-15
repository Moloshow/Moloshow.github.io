import { useEffect } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { ProjectCard } from './ProjectCard'
import { professionalProjects, personalProjects } from '../data/projects'

export function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -20px 0px' }
    )
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Projects
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '3.5rem', maxWidth: '700px', lineHeight: 1.8 }}>
              A mix of <span className="orange-text">client work, internal R&amp;D, and side projects.</span> The client projects are under NDA so the code
              isn't public, but I can talk through everything in detail.
            </p>
          </div>
        </ScrollReveal>

        {/* Professional */}
        <div style={{ marginBottom: '3rem' }}>
          <ScrollReveal>
            <p
              style={{
                fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(251, 146, 60,0.15)',
              }}
            >
              Professional
            </p>
          </ScrollReveal>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            {professionalProjects.map((project, i) => {
              const isLargeRow = i < 2 || i >= 5; // Aimflow/Aimlab (0,1) and Internships (5,6)
              return (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={i} 
                  style={{ 
                    flex: isLargeRow ? '1 1 calc(50% - 1.25rem)' : '1 1 calc(33.333% - 1.25rem)', 
                    minWidth: '290px', 
                    maxWidth: isLargeRow ? '600px' : '400px' 
                  }} 
                />
              );
            })}
          </div>
        </div>

        {/* Personal */}
        <div>
          <ScrollReveal>
            <p
              style={{
                fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(251, 146, 60,0.15)',
              }}
            >
              Personal
            </p>
          </ScrollReveal>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            {personalProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} style={{ flex: '1 1 calc(50% - 1.25rem)', minWidth: '290px', maxWidth: '600px' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

