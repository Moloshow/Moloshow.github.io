import { ScrollReveal } from './ScrollReveal'

interface SkillIcon { 
  slug: string; 
  label: string;
  type?: 'skillicon' | 'simpleicon' | 'local';
  color?: string;
}
interface Category {
  title: string
  icons: SkillIcon[]
  pills?: string[]
}

const CATEGORIES: Category[] = [
  // First row
  {
    title: 'Languages',
    icons: [
      { slug: 'python',  label: 'Python' },
      { slug: 'cpp',     label: 'C / C++' },
      { slug: 'ts',      label: 'TypeScript' },
      { slug: 'rust',    label: 'Rust' },
    ],
  },
  {
    title: 'AI & CV Frameworks',
    icons: [
      { slug: 'pytorch',        label: 'PyTorch' },
      { slug: 'tensorflow',     label: 'TensorFlow' },
      { slug: 'opencv',         label: 'OpenCV' },
      { slug: 'cuda',           label: 'CUDA',           type: 'local' },
      { slug: 'albumentations', label: 'Albumentations', type: 'local' },
      { slug: 'onnx',           label: 'ONNX',           type: 'simpleicon', color: '005C9A' },
    ],
    pills: [],
  },
  {
    title: 'Embedded & Deployment',
    icons: [
      { slug: 'docker', label: 'Docker' },
      { slug: 'linux',  label: 'Linux' },
      { slug: 'ros',    label: 'ROS 2' },
      { slug: 'nvidia', label: 'NVIDIA',     type: 'simpleicon', color: '76B900' },
      { slug: 'nxp',    label: 'NXP i.MX 8', type: 'simpleicon', color: 'FFB600' },
    ],
  },
  // Second row (Models)
  {
    title: 'Object Detection',
    icons: [],
    pills: ['YOLOv8 / YOLOv10', 'NanoDet', 'Faster R-CNN', 'MobileNet-SSD'],
  },
  {
    title: 'Semantic & Instance Segmentation',
    icons: [],
    pills: ['SAM 2', 'DeepLabV3+', 'SegFormer', 'Mask2Former', 'U-Net', 'FastSAM'],
  },
  {
    title: 'Foundation & Zero-Shot Models',
    icons: [],
    pills: ['DINOv2', 'CLIP', 'Grounding DINO', 'ViT', 'SigLIP', 'Florence-2'],
  },
  // Third row (Backend & App)
  {
    title: 'Backend & Infrastructure',
    icons: [
      { slug: 'git',      label: 'Git' },
      { slug: 'fastapi',  label: 'FastAPI' },
      { slug: 'sqlite',   label: 'SQLite' },
      { slug: 'postgres', label: 'PostgreSQL' },
    ],
  },
  {
    title: 'Apps & Frontend',
    icons: [
      { slug: 'html',          label: 'HTML' },
      { slug: 'css',           label: 'CSS' },
      { slug: 'react',         label: 'React' },
      { slug: 'materialui',    label: 'Material UI' },
      { slug: 'tauri',         label: 'Tauri' },
      { slug: 'androidstudio', label: 'Android' },
      { slug: 'godot',         label: 'Godot' },
    ],
  },
]

function SkillCard({ slug, label, type = 'skillicon', color = 'ffffff' }: SkillIcon) {
  const src = type === 'skillicon'
    ? `https://skillicons.dev/icons?i=${slug}`
    : type === 'simpleicon'
      ? `https://cdn.simpleicons.org/${slug}/${color}`
      : `/icons/${slug}.svg`

  return (
    <div className="tech-icon-card" title={label}>
      <img
        src={src}
        alt={label}
        width={38}
        height={38}
        loading="lazy"
        style={{ display: 'block' }}
      />
      <span style={{
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        textAlign: 'center',
        lineHeight: 1.3,
        marginTop: '0.4rem',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </div>
  )
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding section-alt"
      style={{ borderTop: '1px solid rgba(167,139,250,0.08)' }}
    >
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
            }}>
              Stack
            </h2>
            <p style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '3rem', 
              lineHeight: 1.8,
              maxWidth: '700px'
            }}>
              Day-to-day: <span className="orange-text">Python, PyTorch, OpenCV, TensorRT, ROS 2.</span> TypeScript/React for internal tooling.
            </p>
          </div>
        </ScrollReveal>

        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '3rem 2rem', 
            width: '100%',
            maxWidth: '1050px',
            margin: '0 auto',
            alignItems: 'start'
          }}
        >
          {CATEGORIES.map((cat, i) => (
            <div key={cat.title} style={{ width: '300px', flexGrow: 1, maxWidth: '320px' }}>
              <ScrollReveal delay={(Math.min(i, 5)) as 0|1|2|3|4|5}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {/* Category label */}
                <div style={{ minHeight: '4rem', display: 'flex', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
                  <h3 style={{
                    display: 'inline-block',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid rgba(167,139,250,0.2)',
                    textAlign: 'center',
                    margin: 0,
                    lineHeight: 1.3
                  }}>
                    {cat.title}
                  </h3>
                </div>

              {/* Icon row */}
              {cat.icons && cat.icons.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.65rem', marginBottom: cat.pills ? '1.25rem' : 0 }}>
                  {cat.icons.map((icon) => (
                    <SkillCard key={icon.slug} {...icon} />
                  ))}
                </div>
              ) : null}

              {/* Overflow pills */}
              {cat.pills && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                  {cat.pills.map((t) => (
                    <span key={t} style={{
                      padding: '0.3rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      background: 'rgba(167,139,250,0.05)',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(167,139,250,0.12)',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
              </div>
            </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
