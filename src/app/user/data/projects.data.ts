/**
 * PROJECTS (Work section) — one object per project
 *
 * Required: id, title, role, period, description, url
 * Image: use "image" path OR "emoji" if no logo
 * imageBg: background behind logo (usually '#ffffff')
 * tags: optional list of tech names
 * featured: true = highlighted row (optional)
 */

export const PROJECTS = [
  {
    id: 'puickfuel',
    title: 'QuickFuel',
    role: 'Senior Full Stack Developer',
    period: 'March 2026 – Present',
    description:
      'An enterprise-grade fuel management and POS platform powering multi-site retail across Australia. Developed resilient edge-to-cloud data pipelines that sync forecourt hardware, back-office administration, and corporate head offices in real time, ensuring zero-downtime transaction processing.',
    url: 'https://www.quickfuel.com.au/',
    image: 'assets/images/quickfuel.jpg',
    imageBg: '#ffffff',
    tags: ['Angular', '.Net', 'MySQL', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'sanb-job',
    title: 'SANB Job',
    role: 'Senior Full Stack Developer',
    period: 'Jan 2026 – March 2026',
    description:
      'A full-stack recruitment ecosystem built with React and Nest.js, connecting job-seekers and employers. Uses Prisma ORM with PostgreSQL for type-safe, high-performance data management including applicant tracking and job metadata.',
    url: 'https://sanbjob.com',
    image: 'assets/images/SANB-JOB.jpeg',
    imageBg: '#ffffff',
    tags: ['React', 'Nest.js', 'Prisma', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'docnow-ehr',
    title: 'DocNow EHR',
    role: 'Senior Full Stack Developer',
    period: 'Dec 2019 – Dec 2025',
    description:
      'An EHR platform built on the MEAN stack with AI-driven healthcare workflows. Integrates with MatrixCare, PointClickCare, NextGen, and automates document management, patient records, and billing.',
    url: 'https://docnow.ai',
    image: 'assets/images/dnlogo.jpeg',
    imageBg: '#ffffff',
    tags: ['Angular', 'Node.js', 'MongoDB', 'Healthcare'],
    featured: true,
  },
  {
    id: 'mindcare-pakistan',
    title: 'MindCare Pakistan',
    role: 'Full Stack Developer',
    period: 'Web Application',
    description:
      'A therapist finder platform connecting people with qualified mental health professionals. Features real-time search filtering, responsive design, and therapist profiles with contact details.',
    url: 'https://mindcare-therapist.netlify.app',
    emoji: '🧠',
    imageBg: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
    tags: ['MongoDB', 'TypeScript', 'REST API'],
  },
  {
    id: 'nearpeer',
    title: 'NearPeer – EdTech Platform',
    role: 'Associate Software Engineer',
    period: 'Apr 2019 – Dec 2019',
    description:
      'A Pakistani online education platform offering recorded lectures, live classes, mock tests, and peer discussions across Pakistan and the Middle East.',
    url: 'https://nearpeer.org/',
    image: 'assets/images/nearpeerLogo.jpeg',
    imageBg: '#ffffff',
    tags: ['AngularJS', 'Sails.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'ptrack',
    title: 'pTrack',
    role: 'Personal Project',
    period: 'Android Application',
    description:
      'An Android app tracking user movement in real time via GPS on Google Maps. Includes SQLite offline storage, route history, and optimized polling to reduce battery usage.',
    url: 'https://github.com/itsAliXH/ptrack',
    image: 'assets/images/ptrackLogo.png',
    imageBg: '#ffffff',
    tags: ['Java', 'Android', 'SQLite', 'Google Maps'],
  },
  {
    id: 'ecure-health',
    title: 'eCureHealth',
    role: 'Personal Project',
    period: 'Android Application',
    description:
      'A healthcare Android app with patient and doctor portals, plus a directory of hospitals and clinics with location services.',
    url: 'https://github.com/itsAliXH/eCure',
    image: 'assets/images/ecureHealth.jpeg',
    imageBg: '#ffffff',
    tags: ['Java', 'SQLite', 'Firebase'],
  },
  {
    id: 'journey-engine',
    title: 'Journey Engine',
    role: 'Personal Project',
    period: 'Microservice',
    description:
      'A Node.js microservice tracking patient journeys through hospital workflows — labs, screenings, and other care touchpoints.',
    url: 'https://github.com/itsAliXH/revelAI-journey-engine',
    image: 'assets/images/JS-logo.png',
    imageBg: '#f8fafc',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  // {
  //   id: 'portfolio',
  //   title: 'Portfolio',
  //   role: 'Personal Project',
  //   period: '2025',
  //   description:
  //     'A portfolio built with Angular to practice modern framework patterns and showcase professional work.',
  //   url: 'https://github.com/itsAliXH/angular-portfolio',
  //   image: 'assets/images/logo3.webp',
  //   imageBg: '#ffffff',
  //   tags: ['Angular', 'TypeScript'],
  // },
];
