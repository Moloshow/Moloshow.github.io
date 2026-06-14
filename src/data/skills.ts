export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
  color: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '{ }',
    color: '#60a5fa',
    skills: ['Python', 'C', 'C++', 'TypeScript', 'GDScript', 'Java'],
  },
  {
    title: 'AI & Computer Vision',
    icon: '◈',
    color: '#818cf8',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'SMP', 'SAM / SAM 2', 'DeepLabV3+', 'YOLO', 'NanoDet', 'EfficientNet', 'MobileNetV2', 'Faster R-CNN', 'RetinaNet'],
  },
  {
    title: 'Embedded & Deployment',
    icon: '⬡',
    color: '#34d399',
    skills: ['NVIDIA Jetson Orin NX', 'NXP i.MX 8', 'TensorRT', 'ONNX', 'ROS 2', 'Isaac ROS', 'GStreamer', 'FP16 Quantization'],
  },
  {
    title: 'MLOps & Tools',
    icon: '⚙',
    color: '#fbbf24',
    skills: ['MLflow', 'Optuna', 'Docker', 'FastAPI', 'Linux', 'Git', 'SQLite', 'Tauri', 'React', 'Vite'],
  },
  {
    title: 'Other',
    icon: '✦',
    color: '#f472b6',
    skills: ['Godot Engine', 'Android (Java/Kotlin)', 'Linear Programming', 'K-Means', 't-SNE', 'Pseudo-Labeling'],
  },
]

export const certifications = [
  'IBM Data Science Professional Certificate',
  'IBM Applied AI Professional Certificate',
  'UC Irvine - IoT & Embedded Systems Specialization',
]
