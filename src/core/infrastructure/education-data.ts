import type { Education } from '@/core/domain/education';

export function loadEducation(lang: 'es' | 'en'): Education[] {
  return lang === 'en' ? [
  {
    period: 'Aug 2026',
    title: 'Essential TypeScript for Frontend (OOP)',
    subtitle: 'Udemy',
    description: '7 hours · Credential UC-e373664b-cc65-4afa-bb2e-104d31f0abab'
  },
  {
    period: 'Dec 2023',
    title: 'TypeScript: Complete Guide',
    subtitle: 'Udemy',
    description: '9 hours · Credential UC-0ba668f1-86ed-48b2-a9bf-21b590ca8b48'
  },
  {
    period: 'Oct 2023',
    title: 'Modern JavaScript: Guide to Mastering the Language',
    subtitle: 'Udemy',
    description: '22.5 hours · Credential UC-658dc8a7-af20-425f-8216-21430122827e'
  },
  {
    period: '2019',
    title: 'UX/UI Design Certification',
    subtitle: 'Interaction Design Foundation',
    description: 'Specialization in user-centered design and advanced prototyping.'
  },
  {
    period: '2002 — 2008',
    title: 'Bachelor in Graphic Design',
    subtitle: 'UNICA - Cecilio Acosta Catholic University',
    description: 'Completed degree. Comprehensive training in visual communication, color theory, and editorial design.'
  },
  {
    period: 'Jul 2000 — Aug 2002',
    title: 'Incomplete university studies — Computer Engineering',
    subtitle: 'URBE — Rafael Belloso Chacín University',
    description: 'Six semesters completed. 42 of 102 courses passed. Degree not completed.'
  }
] : [
  {
    period: 'Ago 2026',
    title: 'TypeScript curso Esencial para el Frontend (Incluye POO)',
    subtitle: 'Udemy',
    description: '7 horas · Credencial UC-e373664b-cc65-4afa-bb2e-104d31f0abab'
  },
  {
    period: 'Dic 2023',
    title: 'TypeScript: Tu completa guía y manual de mano',
    subtitle: 'Udemy',
    description: '9 horas · Credencial UC-0ba668f1-86ed-48b2-a9bf-21b590ca8b48'
  },
  {
    period: 'Oct 2023',
    title: 'JavaScript Moderno: Guía para dominar el lenguaje',
    subtitle: 'Udemy',
    description: '22,5 horas · Credencial UC-658dc8a7-af20-425f-8216-21430122827e'
  },
  {
    period: '2019',
    title: 'Certificación en Diseño UX/UI',
    subtitle: 'Interaction Design Foundation',
    description: 'Especialización en diseño centrado en el usuario y prototipado avanzado.'
  },
  {
    period: '2002 — 2008',
    title: 'Licenciatura en Diseño Gráfico',
    subtitle: 'UNICA - Universidad Católica Cecilio Acosta',
    description: 'Carrera culminada. Formación integral en comunicación visual, teoría del color y diseño editorial.'
  },
  {
    period: 'Jul 2000 — Ago 2002',
    title: 'Estudios universitarios incompletos — Ingeniería en Computación',
    subtitle: 'URBE — Universidad Rafael Belloso Chacín',
    description: 'Seis semestres cursados. 42 de 102 materias aprobadas. Carrera no finalizada.'
  }
];
}
