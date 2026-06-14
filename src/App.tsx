import { useState, useEffect } from 'react'
import { ParticleBackground } from './components/ParticleBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ResumePage } from './components/ResumePage'

function App() {
  const [route, setRoute] = useState(window.location.hash || '#home')

  useEffect(() => {
    const handleHash = () => setRoute(window.location.hash || '#home')
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        {route === '#resume' ? (
          <ResumePage />
        ) : (
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
        )}
        <Footer />
      </div>
    </>
  )
}

export default App
