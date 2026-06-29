// Static portfolio content — exact copy from the design handoff appendix.
// No fetching; this is the single source of content truth for the overlay.

export const home = {
  nameplate: 'CRAY SYSTEM',
  eyebrow: 'SENIOR FULLSTACK ENGINEER',
  name: 'Cray',
  tagline: 'Building scalable products that ship.',
  sub: 'Based in Ho Chi Minh City. Working with teams worldwide.',
  ctaPrimary: 'See my work',
  ctaSecondary: 'Contact me',
  hint: '↕ Drag to explore · scroll to travel',
} as const;

export const about = {
  eyebrow: 'MERCURY · ABOUT',
  title: 'Senior Fullstack Engineer, 6+ years.',
  intro:
    "I'm Cray — a Senior Fullstack Engineer with 6+ years of experience designing and delivering scalable, high-performance web applications across SaaS, AI, and enterprise integration domains. Proven track record of owning end-to-end development — from architecture to deployment — across complex systems including real-time platforms, CRM/ERP integrations, and data-intensive applications using React, Next.js, Node.js, and TypeScript. Experienced leading cross-functional teams and mentoring engineers, driving technical excellence and consistent delivery.",
  pillars: [
    {
      title: 'Scalable systems design',
      body: 'Architecting distributed platforms for high-throughput, real-time applications.',
    },
    {
      title: 'Enterprise integration',
      body: 'Designing high-performance, secure middleware across CRM, ERP, and multi-tenant ecosystems.',
    },
    {
      title: 'Technical leadership',
      body: 'Driving architecture standards, mentoring engineers, enabling predictable delivery.',
    },
  ],
} as const;

export const aiWorkflow = {
  eyebrow: 'VENUS · AI WORKFLOW',
  headline: 'Ship 10× faster. Same code quality.',
  sub: 'AI removes the toil around engineering judgment — never replaces the judgment itself.',
  items: [
    {
      title: 'Shipping Velocity',
      metric: '10×',
      body: 'AI handles scaffolding, refactors, and tests — humans review and steer architecture.',
    },
    {
      title: 'Prototype to Production',
      metric: 'Same sprint',
      body: 'Feature prototypes built and validated within hours, then hardened to production-grade code in the same sprint — no throwaway work.',
    },
    {
      title: 'From Concept to Code',
      metric: 'Zero dead time',
      body: 'AI accelerates the full pipeline — from planning and design system to boilerplate and docs.',
    },
    {
      title: 'Ensured Quality',
      metric: '100% reviewed',
      body: 'AI output passes unit, integration, and e2e tests before a developer makes the final call. Same bar as fully human-written code.',
    },
  ],
} as const;

export const skills = {
  eyebrow: 'ASTEROID BELT · SKILLS',
  centerTitle: 'Skills',
  centerSub: '25 technologies · between Mars & Jupiter',
  list: [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'WebSocket',
    'REST API', 'Webhooks', 'PostgreSQL', 'MySQL', 'MongoDB', 'AWS',
    'Docker', 'CI/CD', 'Redux', 'TanStack Query', 'Zustand', 'Tailwind CSS',
    'Material UI', 'Framer Motion', 'Jest', 'Playwright', 'Claude AI',
    'Cursor AI', 'HTML5', 'CSS3',
  ],
} as const;

export interface Project {
  name: string;
  subtitle: string;
  date: string;
  role: string;
  description: string;
  bullets: string[];
  tech: string[];
}

export const work = {
  eyebrow: 'JUPITER · WORK',
  projects: [
    {
      name: 'Zeligate',
      subtitle: 'AI Hiring Platform',
      date: '2024–2026',
      role: 'Frontend Lead',
      description:
        'Led frontend architecture for an AI hiring platform. Built a streaming LLM assistant optimized for long-lived sessions and high-frequency state updates, improving stream smoothness ~3×. Real-time interview experiences with video, live chat, and assessment flows via Amazon Chime SDK.',
      bullets: [
        'Real-time AI hiring workflows in production',
        'Optimized streaming LLM rendering ~3× smoother',
        'Interview rooms via Chime SDK + Heygen avatar',
        'Frontend architecture standards adopted team-wide',
      ],
      tech: ['React', 'Next.js', 'TypeScript', 'Zustand', 'TanStack Query', 'WebSockets', 'Chime SDK'],
    },
    {
      name: 'Shade Systems',
      subtitle: 'ERP Integration',
      date: '2025–2026',
      role: 'Architect & Fullstack',
      description:
        'Middleware for reliable bidirectional sync between HarmoniQ ERP and Monday.com. Webhook-driven pipelines with Bull, Redis, AWS SQS; modular entity controllers, OAuth 2.0, multi-tenant subscriptions.',
      bullets: [
        'Bidirectional sync HarmoniQ ↔ Monday.com',
        'Webhook pipelines + Bull/Redis queues',
        'Modular controllers with validation & logging',
        'OAuth 2.0 + multi-tenant subscriptions',
      ],
      tech: ['Node.js', 'Express', 'Bull', 'Redis', 'OAuth 2.0', 'Webhooks', 'MySQL', 'Docker'],
    },
    {
      name: 'Monday Sinch',
      subtitle: 'SMS Platform',
      date: '2023–2026',
      role: 'Architect & Fullstack',
      description:
        'Full-stack Monday.com app for two-way SMS via Sinch and MessageMedia. Real-time embedded chat with threads, delivery states, unread sync; BullMQ + MySQL messaging.',
      bullets: [
        'Board-embedded real-time SMS',
        'Socket.IO flows with delivery states & threading',
        'Webhook orchestration for reliable delivery',
        'MySQL-backed conversation services',
      ],
      tech: ['React', 'TypeScript', 'MUI', 'Socket.IO', 'Node.js', 'BullMQ', 'MySQL'],
    },
    {
      name: 'Aarsleff',
      subtitle: 'Construction CMS',
      date: '2021–2022',
      role: 'Frontend Developer',
      description:
        'React/Next.js scheduling platform for workforce and heavy equipment across construction projects. Drag-and-drop scheduling, calendar planning, optimized state sync.',
      bullets: [
        'Drag-and-drop scheduling with optimistic updates',
        'Calendar interfaces over complex maps',
        'Optimized performance for large datasets',
        'Enterprise scheduling at scale',
      ],
      tech: ['React', 'TypeScript', 'TanStack Query', 'DnD Kit', 'Framer Motion'],
    },
  ] as Project[],
} as const;

export interface Job {
  company: string;
  date: string;
  role: string;
  type: string;
  location: string;
  mode: string;
  tech: string[];
}

export const experience = {
  eyebrow: 'SATURN · EXPERIENCE',
  headline: 'Built and shipped. Across domains.',
  sub: '6+ years across AI, SaaS, and enterprise integration.',
  jobs: [
    {
      company: 'Zeligate',
      date: 'Mar 2024–Mar 2026',
      role: 'Senior Frontend Engineer / Frontend Lead',
      type: 'Full-time',
      location: 'Gold Coast, Australia',
      mode: 'Remote',
      tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'TanStack Query', 'WebSockets', 'MUI', 'AWS Chime'],
    },
    {
      company: 'Upstream',
      date: 'Aug 2022–Apr 2026',
      role: 'Fullstack Developer / Frontend Lead',
      type: 'Contract',
      location: 'Fyshwick, Australia',
      mode: 'Remote',
      tech: ['Node.js', 'React', 'TypeScript', 'Bull', 'Redis', 'AWS SQS', 'Socket.IO', 'MySQL', 'TanStack Query'],
    },
    {
      company: 'Spritely Apps',
      date: 'Nov 2022–Jan 2024',
      role: 'Frontend Developer',
      type: 'Contract',
      location: 'Robina, Australia',
      mode: 'Remote',
      tech: ['React', 'TypeScript', 'MUI', 'TanStack Query', 'Redux', 'Jest'],
    },
    {
      company: 'Kodebaze',
      date: 'Oct 2021–Nov 2022',
      role: 'Frontend Developer',
      type: 'Full-time',
      location: 'Copenhagen, Denmark',
      mode: 'Remote',
      tech: ['React', 'Next.js', 'Framer Motion', 'DnD Kit', 'Azure Fluent UI'],
    },
    {
      company: 'Cyberlogitec',
      date: 'May 2020–Sep 2021',
      role: 'Web Developer',
      type: 'Full-time',
      location: 'Ho Chi Minh City, Vietnam',
      mode: 'On-site',
      tech: ['React', 'Node.js', 'REST API', 'PostgreSQL', 'MUI'],
    },
  ] as Job[],
} as const;

export const contact = {
  eyebrow: 'NEPTUNE · EDGE OF THE SYSTEM',
  headline: "Building something ambitious? Let's talk.",
  cta: '⌁ Transmit a signal',
  footer: 'Designed & built with love · © 2026',
  rows: [
    { label: 'Email', value: 'ngochaiitech@gmail.com', href: 'mailto:ngochaiitech@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/simplecray', href: 'https://linkedin.com/in/simplecray' },
    { label: 'GitHub', value: 'github.com/simplecray', href: 'https://github.com/simplecray' },
    { label: 'Phone', value: '(+84) 375-911-341', href: 'tel:+84375911341' },
    { label: 'Location', value: 'Ho Chi Minh City, Vietnam', href: null },
  ],
} as const;

export const credits = {
  title: 'Credits & attribution',
  intro: 'Planet and star textures used in this scene are from public, CC-BY sources.',
  items: [
    {
      label: 'Planet & moon textures',
      detail: 'Solar System Scope — solarsystemscope.com/textures (CC BY 4.0)',
      href: 'https://www.solarsystemscope.com/textures/',
    },
    {
      label: 'Reference imagery',
      detail: 'NASA / JPL public-domain planetary imagery',
      href: 'https://images.nasa.gov/',
    },
    {
      label: 'Fonts',
      detail: 'Space Grotesk, Inter, JetBrains Mono (Google Fonts, OFL)',
      href: 'https://fonts.google.com/',
    },
  ],
} as const;
