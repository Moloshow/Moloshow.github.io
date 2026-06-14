export type Badge = 'Client Project' | 'R&D Project' | 'Personal' | 'Internship'

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  badge: Badge
  description: string
  context?: string
  approach?: string
  results?: string[]
  tech: string[]
  links?: ProjectLink[]
  image?: string
  logo?: string
  period?: string
}

export const professionalProjects: Project[] = [
  {
    id: 'aimflow',
    title: 'AimFlow',
    image: '/aimflow.PNG',
    subtitle: 'End-to-End MLOps Platform',
    badge: 'R&D Project',
    period: '2025 – Present',
    description:
      'A standalone desktop MLOps platform that automates the complete model lifecycle - from dataset management to Docker deployment - without relying on cloud infrastructure.',
    context:
      'As a CV consultant, I kept rebuilding the same manual setup at every project: training configs, experiment tracking, evaluation, export. No existing tool covered the full pipeline simply. AimFlow was born from that frustration.',
    approach:
      'Built as a desktop app (Tauri = Rust + React) to avoid server deployment issues. Python backend via FastAPI + PyTorch handles training and inference. A factory pattern supports 15+ architectures across detection (Faster R-CNN, RetinaNet, FCOS) and segmentation (DeepLabV3+, LR-ASPP). Hyperparameter tuning via Optuna, experiment tracking via MLflow, and export to ONNX/Docker for deployment.',
    results: [
      '15+ CV architectures supported out-of-the-box',
      'Full dataset-to-Docker-export workflow in one tool',
      'Real-time video inference in the UI for model validation',
      'YAML-based interactive config (no manual file editing)',
    ],
    tech: ['Tauri', 'Rust', 'React', 'TypeScript', 'Python', 'PyTorch', 'MLflow', 'Optuna', 'FastAPI', 'Docker', 'SQLite'],
    links: [{ label: 'Code on request', url: 'https://github.com/Moloshow' }],
  },
  {
    id: 'aimlab',
    title: 'AimLab',
    image: '/aimlab.PNG',
    subtitle: 'Interactive Semantic Annotation Platform',
    badge: 'R&D Project',
    period: '2025 – Present',
    description:
      'A standalone desktop annotation tool combining SAM 2 zero-shot segmentation, classical CV algorithms, and an active learning pipeline - designed to eliminate the biggest bottleneck in applied CV projects.',
    context:
      'Manual annotation was consuming massive chunks of every project. Existing tools (CVAT, LabelStudio) are heavyweight, web-based, and lack AI assistance. I needed something desktop-native, fast, and capable of closing the loop between annotation and training.',
    approach:
      'Same Tauri + React architecture as AimFlow for ecosystem consistency. SAM 2 (Meta AI) runs as a Dockerized microservice: click an object, it segments automatically. Watershed and smart brush fill classical CV gaps. FastAPI + SQLite manage annotation sessions. Active learning pipeline feeds corrected inferences back into the training dataset.',
    results: [
      'Zero-shot segmentation via SAM 2 - click to annotate complex shapes',
      'Active learning loop: inference corrections reinject into training',
      'Export in COCO, VOC, and mask formats',
      'Reduces annotation time by 50–80% vs. manual polygon tools',
    ],
    tech: ['Tauri', 'Rust', 'React', 'TypeScript', 'SAM 2', 'FastAPI', 'SQLite', 'Docker', 'OpenCV'],
  },
  {
    id: 'noremat',
    title: 'Noremat',
    logo: '/noremat.png',
    subtitle: 'Autonomous Roadside Mowing - Semantic Segmentation',
    badge: 'Client Project',
    period: '2026',
    description:
      'End-to-end semantic segmentation pipeline (7 classes) deployed on NVIDIA Jetson Orin NX for real-time lateral guidance of autonomous roadside mowing machines.',
    context:
      'Noremat builds professional road-clearing machines. Automating lateral guidance requires the machine to understand its environment in real-time - road, shoulder, vegetation, obstacles - under variable lighting, weather, and seasonal conditions.',
    approach:
      'Model: DeepLabV3+ with EfficientNet backbone for precision/speed balance. Built a proprietary 3,000+ image dataset enriched with zero-shot SAM labeling to accelerate annotation. Curated dataset specifically to reduce road/shoulder class confusion by 40%+. Deployed via ROS 2, TensorRT FP16, and Isaac ROS on Jetson Orin NX.',
    results: [
      '10 FPS stable real-time inference on Jetson Orin NX',
      '<100ms end-to-end latency (capture → guidance command)',
      '~75% mIoU on test benchmarks',
      'Road/shoulder confusion reduced by 40%+ through data curation',
    ],
    tech: ['PyTorch', 'DeepLabV3+', 'EfficientNet', 'TensorRT', 'ROS 2', 'Isaac ROS', 'SAM', 'NVIDIA Jetson Orin NX'],
  },
  {
    id: 'arquus',
    title: 'ARQUUS Defense',
    logo: '/arquus.png',
    subtitle: 'Off-Road Path Detection for Military Vehicles',
    badge: 'Client Project',
    period: '2024 – 2025',
    description:
      'Semantic segmentation system for autonomous path detection in unstructured military terrain (forests, mud, desert) where conventional road maps are useless.',
    context:
      'ARQUUS (Volvo Group subsidiary) develops autonomous military vehicles. The challenge: detect traversable paths in environments with no defined roads - forests, combat zones, off-road terrain. The existing codebase and dataset were both inadequate.',
    approach:
      'Exhaustive benchmark of 15+ architectures (PyTorch + SMP) for optimal precision/latency tradeoff. Selected DeepLabV3 + MobileNetV2 for embedded deployment. Rewrote the training, benchmarking, and evaluation pipeline from scratch. Curated a heterogeneous 5,000+ image dataset using automated double-filtering + manual review to eliminate environmental bias.',
    results: [
      '<30ms inference latency',
      'mIoU >0.70 on held-out test set',
      '15+ architectures benchmarked systematically',
      '5,000+ images cleaned and curated from heterogeneous sources',
    ],
    tech: ['PyTorch', 'SMP', 'DeepLabV3', 'MobileNetV2', 'OpenCV', 'Python'],
  },
  {
    id: 'bosch',
    title: 'Bosch',
    logo: '/bosch.png',
    subtitle: 'Real-Time Edge AI for Agricultural Machinery',
    badge: 'Client Project',
    period: '2020 – 2024',
    description:
      'Object detection models deployed on severely constrained embedded hardware (NXP i.MX 8 NPU + NVIDIA Jetson) for real-time agricultural applications.',
    context:
      "Bosch's agricultural division needed object detection on farm machines operating in real-time. The constraint: two very different hardware targets (NPU vs. GPU) and massive unlabeled image datasets that couldn't be annotated by hand.",
    approach:
      'Selected YOLO and NanoDet for their compactness and speed. Implemented pseudo-labeling algorithms to exploit large volumes of unlabeled agricultural images. Intensive profiling to optimize FPS/Memory/Latency tradeoffs. Progressive migration to ONNX + quantization for NPU deployment on NXP i.MX 8.',
    results: [
      '<50ms end-to-end latency in production',
      '50–80% reduction in manual annotation via pseudo-labeling',
      'Deployment on two distinct hardware architectures (NPU + GPU)',
    ],
    tech: ['YOLO', 'NanoDet', 'TensorRT', 'ONNX', 'NXP i.MX 8', 'NVIDIA Jetson', 'OpenCV', 'Python'],
  },
  {
    id: 'alstom',
    title: 'Alstom',
    logo: '/alstom.png',
    subtitle: 'Wheel Slip-Stick Prediction for KZ8A Locomotives',
    badge: 'Internship',
    period: '2020',
    description:
      'Embedded ML models to predict and mitigate wheel slip-stick anomalies on Alstom/Kazakhstan KZ8A freight locomotives, preventing rail infrastructure damage.',
    context:
      'Slip-stick phenomena (wheel spin/lock) damage both rolling stock and rail infrastructure. Alstom needed a predictive embedded model to detect and mitigate these events before they occur.',
    approach:
      'Migrated legacy C/Matlab codebase to Python for rapid experimentation. Applied unsupervised sensor analysis (K-Means, t-SNE) to identify anomaly patterns. Designed and trained dense neural networks (TensorFlow/Keras) to predict anomaly severity over 20–100ms prediction horizons.',
    results: [
      'Anomaly prediction over 20–100ms horizons',
      'Legacy codebase modernized from C/Matlab to Python',
      'Unsupervised pattern discovery on raw sensor data',
    ],
    tech: ['TensorFlow', 'Keras', 'scikit-learn', 'K-Means', 't-SNE', 'Python'],
  },
  {
    id: 'tokyostay',
    title: 'TokyoStay',
    logo: '/tokyostay.png',
    subtitle: 'Web & Android Rental Platform',
    badge: 'Internship',
    period: '2019',
    description:
      'Responsive web platform and companion Android application for a Japanese startup serving international apartment renters in Tokyo.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Java', 'Android'],
  },
]

export const personalProjects: Project[] = [
  {
    id: 'flavoria',
    title: 'Flavoria',
    image: '/flavoria.png',
    subtitle: '2D Monster-Collecting Dungeon Crawler',
    badge: 'Personal',
    description:
      'A complete 2D dungeon crawler game featuring monster collection mechanics, designed as an exploration of OOP architecture, state machines, and AI behavior systems.',
    approach:
      'Built in Godot Engine with GDScript. Entity architecture uses state machines for all characters. Custom AI behaviors for enemies, NPCs, and capturable monsters. Complete combat, exploration, and progression systems.',
    tech: ['Godot', 'GDScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/Moloshow' }],
  },
  {
    id: 'rugby-optimizer',
    title: 'Top 14 Fantasy Rugby Optimizer',
    image: '/lagrandemelee.png',
    subtitle: 'Constraint-Based Team Optimizer',
    badge: 'Personal',
    description:
      'Algorithm to maximize fantasy rugby (La Grande Mêlée) team scores under strict constraints - budget, position requirements, player availability (injuries, suspensions).',
    approach:
      'Linear programming / heuristic optimization in Python. Ingests player stats, pricing, and availability data. Solves the constrained optimization problem to find the provably best possible team composition.',
    tech: ['Python', 'Linear Programming'],
    links: [{ label: 'GitHub', url: 'https://github.com/Moloshow' }],
  },
  {
    id: 'crypto-bot',
    title: 'Crypto Trading Bot',
    subtitle: 'Automated Bitcoin Day-Trading (5-min charts)',
    badge: 'Personal',
    description:
      'Automated trading bot operating on Bitcoin with 5-minute candlestick data, featuring technical analysis signals, automated execution, and risk management.',
    approach:
      'Real-time data ingestion from exchange APIs. Technical analysis on 5-min OHLCV data. Automated entry/exit signal generation. Capital and risk management logic. Execution via exchange API.',
    tech: ['Python', 'REST APIs', 'Technical Analysis'],
    links: [{ label: 'GitHub', url: 'https://github.com/Moloshow' }],
  },
]
