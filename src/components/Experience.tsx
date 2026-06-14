import { ScrollReveal } from './ScrollReveal'

interface TimelineEvent {
  period: string
  role: string
  company: string
  type: 'work' | 'education' | 'rd'
  items: string[]
}

const events: TimelineEvent[] = [
  {
    period: '2025 – now',
    role: 'AimLab - Annotation platform',
    company: 'R&D - Technology & Strategy',
    type: 'rd',
    items: [
      'Desktop annotation tool with SAM 2 zero-shot segmentation (Docker microservice)',
      'Active learning loop: inference corrections feed back into the training dataset',
      'Watershed, smart brush, COCO/VOC/mask export',
    ],
  },
  {
    period: '2026',
    role: 'CV Engineer (Consultant) - Noremat',
    company: 'Technology & Strategy',
    type: 'work',
    items: [
      'Semantic segmentation pipeline (7 classes) for autonomous roadside mowing machines',
      'DeepLabV3+ / EfficientNet deployed on Jetson Orin NX via TensorRT FP16 + ROS 2',
      '10 FPS, <100ms end-to-end latency, ~75% mIoU - road/shoulder confusion –40%',
    ],
  },
  {
    period: '2025 – now',
    role: 'AimFlow - MLOps platform',
    company: 'Internal R&D',
    type: 'rd',
    items: [
      'Desktop app (Tauri + React + FastAPI + PyTorch) - full training-to-deployment loop',
      '15+ architectures, MLflow tracking, Optuna tuning, ONNX/Docker export',
    ],
  },
  {
    period: '2024 – 2025',
    role: 'CV Engineer (Consultant) - ARQUUS Defense',
    company: 'Technology & Strategy',
    type: 'work',
    items: [
      'Off-road path detection for military autonomous vehicles',
      'Benchmarked 15+ architectures, rewrote the training pipeline from scratch',
      '5 000+ image dataset cleaned from heterogeneous sources - <30ms inference',
    ],
  },
  {
    period: '2020 – 2024',
    role: 'CV & Embedded AI Engineer (Consultant) - Bosch',
    company: 'Technology & Strategy',
    type: 'work',
    items: [
      'Object detection on NXP i.MX 8 (NPU) and NVIDIA Jetson - YOLO, NanoDet',
      'Pseudo-labeling pipeline cut annotation effort by 50–80%',
      '<50ms latency in production',
    ],
  },
  {
    period: '2020',
    role: 'ML Intern - Alstom',
    company: 'Alstom',
    type: 'work',
    items: [
      'Slip-stick prediction for KZ8A locomotives (TensorFlow/Keras)',
      'Migrated C/Matlab codebase to Python',
    ],
  },
  {
    period: '2019',
    role: 'Software Intern - TokyoStay',
    company: 'TokyoStay',
    type: 'work',
    items: ['Web + Android platform for a Tokyo-based short-term rental startup'],
  },
  {
    period: '2016 – 2020',
    role: "Master's - AI & Deep Learning",
    company: "EISTI (now CY Tech), Pau, France - Diplôme d'Ingénieur",
    type: 'education',
    items: [],
  },
  {
    period: '2014 – 2016',
    role: 'Prépa intégrée',
    company: 'EPF, Montpellier',
    type: 'education',
    items: [],
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}>
      <div className="section-container">
        <ScrollReveal>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '3rem',
            }}
          >
            Experience
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {events.map((event, i) => (
            <ScrollReveal key={i} delay={(Math.min(i % 3, 5)) as 0 | 1 | 2 | 3 | 4 | 5}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '130px 1fr',
                  gap: '2rem',
                  paddingBottom: '2.5rem',
                  borderBottom: i < events.length - 1 ? '1px solid rgba(167,139,250,0.1)' : 'none',
                  marginBottom: i < events.length - 1 ? '2.5rem' : 0,
                }}
                className="timeline-row"
              >
                {/* Period */}
                <div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.85rem',
                      color: 'var(--accent)',
                      display: 'block',
                      paddingTop: '0.2rem',
                    }}
                  >
                    {event.period}
                  </span>
                  {event.type === 'rd' && (
                    <span
                      style={{
                        marginTop: '0.4rem',
                        display: 'inline-block',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        background: 'rgba(167,139,250,0.15)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      R&D
                    </span>
                  )}
                  {event.type === 'education' && (
                    <span
                      style={{
                        marginTop: '0.4rem',
                        display: 'inline-block',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        background: 'rgba(255,255,255,0.03)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      Education
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {event.role}
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: event.items.length > 0 ? '1rem' : 0 }}>
                    {event.company}
                  </p>
                  {event.items.length > 0 && (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {event.items.map((item) => (
                        <li
                          key={item}
                          style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            paddingLeft: '1.2rem',
                            position: 'relative',
                          }}
                        >
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </section>
  )
}
