import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  opacity: number
  opacitySpeed: number
  opacityDir: number
}

const PARTICLE_COUNT = 160
const SPEED = 0.05           // Very slow drift (like the original)
const MIN_OPACITY = 0.05
const MAX_OPACITY = 0.55
const ANIM_SPEED = 0.004     // Opacity pulse speed

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    function init() {
      resize()
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        // Mostly drift rightward, slight random vertical offset — matches direction: "right"
        vx: SPEED + Math.random() * SPEED * 0.5,
        vy: (Math.random() - 0.5) * SPEED * 0.3,
        opacity: Math.random() * (MAX_OPACITY - MIN_OPACITY) + MIN_OPACITY,
        opacitySpeed: ANIM_SPEED + Math.random() * ANIM_SPEED,
        opacityDir: Math.random() > 0.5 ? 1 : -1,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      for (const p of particles) {
        // Move rightward
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges (particles reappear on the left when they exit right)
        if (p.x > canvas!.width + 5) p.x = -5
        if (p.x < -5) p.x = canvas!.width + 5
        if (p.y > canvas!.height + 5) p.y = -5
        if (p.y < -5) p.y = canvas!.height + 5

        // Pulse opacity
        p.opacity += p.opacitySpeed * p.opacityDir
        if (p.opacity >= MAX_OPACITY) { p.opacity = MAX_OPACITY; p.opacityDir = -1 }
        if (p.opacity <= MIN_OPACITY) { p.opacity = MIN_OPACITY; p.opacityDir = 1 }

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, 1, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(240, 235, 255, ${p.opacity})`
        ctx!.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    init()
    draw()

    window.addEventListener('resize', resize)

    // Click: push 1 particle near cursor (like the original mode: "push")
    function onClick(e: MouseEvent) {
      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx: SPEED + Math.random() * SPEED * 0.5,
        vy: (Math.random() - 0.5) * SPEED * 0.3,
        opacity: MAX_OPACITY,
        opacitySpeed: ANIM_SPEED + Math.random() * ANIM_SPEED,
        opacityDir: -1,
      })
      // Keep count reasonable
      if (particles.length > PARTICLE_COUNT + 50) particles.splice(0, 1)
    }
    window.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
