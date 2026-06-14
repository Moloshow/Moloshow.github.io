import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Setup worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export function ResumePage() {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN')
  const [size, setSize] = useState<'short' | 'long'>('short')
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    window.scrollTo(0, 0)
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const pdfFile = `/ARIES_Arthur_${lang === 'EN' ? 'Resume' : 'CV'}${size === 'short' ? '_short' : ''}.pdf`

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Controls */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.03)', padding: '1rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => setLang('EN')} style={{ padding: '0.5rem 1rem', background: lang === 'EN' ? 'var(--accent)' : 'rgba(255,255,255,0.05)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, transition: '0.2s' }}>English</button>
          <button onClick={() => setLang('FR')} style={{ padding: '0.5rem 1rem', background: lang === 'FR' ? 'var(--accent)' : 'rgba(255,255,255,0.05)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, transition: '0.2s' }}>Français</button>
        </div>
        
        <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)', margin: '0 0.5rem' }} />

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => setSize('short')} style={{ padding: '0.5rem 1rem', background: size === 'short' ? 'var(--text-primary)' : 'rgba(255,255,255,0.05)', color: size === 'short' ? 'var(--bg-primary)' : '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, transition: '0.2s' }}>1 Page</button>
          <button onClick={() => setSize('long')} style={{ padding: '0.5rem 1rem', background: size === 'long' ? 'var(--text-primary)' : 'rgba(255,255,255,0.05)', color: size === 'long' ? 'var(--bg-primary)' : '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, transition: '0.2s' }}>Detailed (2 Pages)</button>
        </div>

        <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)', margin: '0 0.5rem' }} />

        <a href={pdfFile} download style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1.25rem', background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, transition: '0.2s', boxShadow: '0 4px 15px rgba(124,58,237,0.3)' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
          <svg style={{ width: '18px', height: '18px', marginRight: '0.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <div style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.5)', background: '#fff', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
        <Document 
          file={pdfFile} 
          loading={<div style={{ color: 'var(--bg-primary)', padding: '5rem', fontWeight: 500 }}>Loading Resume...</div>}
        >
          <Page pageNumber={1} width={Math.min(width * 0.9, 900)} renderTextLayer={false} renderAnnotationLayer={false} />
          {size === 'long' && (
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px dashed #ccc' }}>
              <Page pageNumber={2} width={Math.min(width * 0.9, 900)} renderTextLayer={false} renderAnnotationLayer={false} />
            </div>
          )}
        </Document>
      </div>

    </div>
  )
}
