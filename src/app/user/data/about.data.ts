import { PROFILE } from './profile.data';

/**
 * ABOUT PAGE — bio, links, and skill boxes
 */

export const ABOUT = {
  sectionLabel: '01 — About',

  headline: 'Full-stack engineer across healthcare & ed-tech',

  bio:
    'I design and ship scalable web applications — from EHR integrations and AI-driven healthcare workflows to recruitment platforms and ed-tech products. Focused on clean architecture, performance, and real-world impact.',

  // Buttons on the left — resume uses PROFILE.resumeUrl
  links: [
    {
      label: 'LinkedIn',
      url: PROFILE.linkedinUrl,
      icon: 'fa-brands fa-linkedin-in',
      isGreenButton: false,
      openInNewTab: true,
    },
    {
      label: 'GitHub',
      url: PROFILE.githubUrl,
      icon: 'fa-brands fa-github',
      isGreenButton: false,
      openInNewTab: true,
    },
    {
      label: 'Resume',
      url: PROFILE.resumeUrl,
      icon: 'fa-solid fa-download',
      isGreenButton: true,
      openInNewTab: false,
      isDownload: true,
    },
  ],

  // Skill cards on the right — copy a block to add another skill group
  skills: [
    {
      title: 'Frontend',
      icon: 'fa-solid fa-code',
      items: ['Angular', 'React', 'TypeScript','JavaScript', 'Material UI', 'CSS3', 'PrimeNG'],
    },
    {
      title: 'Backend',
      icon: 'fa-solid fa-server',
      items: ['Node.js', 'Nest.js', 'Express', 'PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      title: 'DevOps',
      icon: 'fa-solid fa-cloud',
      items: ['AWS', 'Docker', 'CI/CD', 'Git', 'Netlify', 'Vercel', 'EC2', 'ECS'],
    },
    {
      title: 'Healthcare',
      icon: 'fa-solid fa-heart-pulse',
      items: ['HL7', 'FHIR', 'CCD', 'Mirth Connect', 'EHR/EMR', 'ICD/CPT' , 'ADT/DFT'],
    },
  ],
};
