import { ContactChannel } from '../domain/contact-channel';
import { Experience } from '../domain/experience';
import { Profile } from '../domain/profile';
import { Project } from '../domain/project';
import { SkillGroup } from '../domain/skill-group';
import type { PortfolioRepository } from '../application/portfolio-repository';

export class LocalPortfolioRepository implements PortfolioRepository {
  constructor(private lang: 'es' | 'en' = 'es') {}

  async loadProfile() {
    if (this.lang === 'en') {
      return new Profile(
        'Pedro Fernández',
        'Frontend Software Development | UX/UI Specialist',
        'Graphic Design Graduate with technical background in Engineering (URBE).',
        'I am a Graphic Design Graduate (UNICA) with a technical foundation in Computer Engineering. This combination allows me to blend visual sensitivity with programming logic to create digital products that not only look incredible but function perfectly. Empirical professional in constant evolution.',
        'Medellín, Colombia · Remote',
        [
          new ContactChannel('prfmaetre@gmail.com', 'mailto:prfmaetre@gmail.com', 'email'),
          new ContactChannel('LinkedIn', 'https://www.linkedin.com/in/pedro-fernandez-develop-frontend/', 'linkedin'),
          new ContactChannel('GitHub', 'https://github.com/PandaDesigner', 'github'),
          new ContactChannel('Portfolio', 'https://pandadesigners.com', 'other'),
        ],
      );
    }

    return new Profile(
      'Pedro Fernández',
      'Software Development Frontend | UX/UI Specialist',
      'Licenciado en Diseño Gráfico con formación técnica en Ingeniería (URBE).',
      'Soy Licenciado en Diseño Gráfico (UNICA) con una base técnica de Ingeniería en Computación. Esta combinación me permite unir la sensibilidad visual con la lógica de programación para crear productos digitales que no solo se ven increíbles, sino que funcionan a la perfección. Profesional empírico en constante evolución.',
      'Medellín, Colombia · Remote',
      [
        new ContactChannel('prfmaetre@gmail.com', 'mailto:prfmaetre@gmail.com', 'email'),
        new ContactChannel('LinkedIn', 'https://www.linkedin.com/in/pedro-fernandez-develop-frontend/', 'linkedin'),
        new ContactChannel('GitHub', 'https://github.com/PandaDesigner', 'github'),
        new ContactChannel('Portfolio', 'https://pandadesigners.com', 'other'),
      ],
    );
  }

  async loadExperiences() {
    const experiences = [
      {
        company: 'Vanguard Vision AI',
        role_es: 'Software Development Frontend',
        role_en: 'Software Development Frontend',
        period_es: 'Jun 2025 — Presente',
        period_en: 'Jun 2025 — Present',
        summary_es: 'Desarrollo de aplicaciones web fullstack con Next.js y backend integrado, priorizando interfaces complejas y lógica reutilizable.',
        summary_en: 'Development of fullstack web applications with Next.js and integrated backend, prioritizing complex interfaces and reusable logic.',
        highlights_es: ['Next.js con backend integrado', 'React + React Native / Expo', 'Testing unitario e integración con Jest'],
        highlights_en: ['Next.js with integrated backend', 'React + React Native / Expo', 'Unit and integration testing with Jest'],
      },
      {
        company: 'Mercado Libre',
        role_es: 'Frontend Developer',
        role_en: 'Frontend Developer',
        period_es: 'May 2024 — May 2025',
        period_en: 'May 2024 — May 2025',
        summary_es: 'Desarrollo de features frontend en una plataforma de alto tráfico con TypeScript, Redux y enfoque en robustez.',
        summary_en: 'Development of frontend features in a high-traffic platform with TypeScript, Redux, and a focus on robustness.',
        highlights_es: ['TypeScript en flujos críticos', 'Redux para estado global', 'Jest para prevenir regresiones'],
        highlights_en: ['TypeScript in critical flows', 'Redux for global state', 'Jest to prevent regressions'],
      },
      {
        company: 'Xcala',
        role_es: 'Software Development Frontend · UX/UI',
        role_en: 'Frontend Software Development · UX/UI',
        period_es: 'Oct 2022 — Jun 2025',
        period_en: 'Oct 2022 — Jun 2025',
        summary_es: 'Diseño y desarrollo de interfaces responsivas con React y TypeScript, con foco en dashboards y visualización de datos.',
        summary_en: 'Design and development of responsive interfaces with React and TypeScript, focused on dashboards and data visualization.',
        highlights_es: ['Dashboards con Chart.js', 'Colaboración con diseño y producto', 'React Hooks y TypeScript'],
        highlights_en: ['Dashboards with Chart.js', 'Collaboration with design and product', 'React Hooks and TypeScript'],
      },
      {
        company: 'Efigen Renewable Energy',
        role_es: 'Frontend Developer',
        role_en: 'Frontend Developer',
        period_es: 'Jul 2022 — Oct 2023',
        period_en: 'Jul 2022 — Oct 2023',
        summary_es: 'Desarrollo de interfaces web priorizando rendimiento y consistencia en componentes visuales y reportes.',
        summary_en: 'Development of web interfaces prioritizing performance and consistency in visual components and reports.',
        highlights_es: ['Chart.js para visualización', 'Integración con WordPress y Elementor', 'Responsive first'],
        highlights_en: ['Chart.js for visualization', 'WordPress and Elementor integration', 'Responsive first'],
      },
    ];

    return experiences.map(exp => new Experience(
      exp.company,
      this.lang === 'es' ? exp.role_es : exp.role_en,
      this.lang === 'es' ? exp.period_es : exp.period_en,
      this.lang === 'es' ? exp.summary_es : exp.summary_en,
      this.lang === 'es' ? exp.highlights_es : exp.highlights_en,
    ));
  }

  async loadSkillGroups() {
    if (this.lang === 'en') {
      return [
        new SkillGroup('Frontend & Mobile', ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'JavaScript']),
        new SkillGroup('UI/UX & Design', ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Tailwind CSS', 'MUI']),
        new SkillGroup('Architecture & State', ['Redux', 'Zustand', 'React Query', 'Node', 'NestJS', 'WordPress']),
        new SkillGroup('Professional Practice', ['Design Systems', 'Atomic Design', 'Testing', 'Remote work', 'Communication']),
      ];
    }

    return [
      new SkillGroup('Frontend & Mobile', ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'JavaScript']),
      new SkillGroup('UI/UX & Design', ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Tailwind CSS', 'MUI']),
      new SkillGroup('Arquitectura & Estado', ['Redux', 'Zustand', 'React Query', 'Node', 'NestJS', 'WordPress']),
      new SkillGroup('Práctica profesional', ['Design Systems', 'Atomic Design', 'Testing', 'Remote work', 'Communication']),
    ];
  }

  async loadContactChannels() {
    if (this.lang === 'en') {
      return [
        new ContactChannel('Direct Email', 'mailto:prfmaetre@gmail.com', 'email'),
        new ContactChannel('LinkedIn', 'https://www.linkedin.com/in/pedro-fernandez-develop-frontend/', 'linkedin'),
        new ContactChannel('GitHub', 'https://github.com/PandaDesigner', 'github'),
        new ContactChannel('Portfolio', 'https://pandadesigners.com', 'other'),
      ];
    }

    return [
      new ContactChannel('Email directo', 'mailto:prfmaetre@gmail.com', 'email'),
      new ContactChannel('LinkedIn', 'https://www.linkedin.com/in/pedro-fernandez-develop-frontend/', 'linkedin'),
      new ContactChannel('GitHub', 'https://github.com/PandaDesigner', 'github'),
      new ContactChannel('Portfolio', 'https://pandadesigners.com', 'other'),
    ];
  }

  async loadCuratedProjects() {
    const projects = [
      {
        name: 'react-nexjs',
        desc_es: 'Proyecto guitarra en JavaScript.',
        desc_en: 'Guitar project built with JavaScript.',
        url: 'https://github.com/PandaDesigner/react-nexjs',
        tags: ['JavaScript', 'React'],
      },
      {
        name: 'React-practica',
        desc_es: 'Práctica de React enfocada en fundamentos y repetición deliberada.',
        desc_en: 'React practice focused on fundamentals and deliberate repetition.',
        url: 'https://github.com/PandaDesigner/React-practica',
        tags: ['React', 'JavaScript'],
      },
      {
        name: 'react-router-dom-6',
        desc_es: 'Exploración de routing con React Router v6.',
        desc_en: 'Routing exploration with React Router v6.',
        url: 'https://github.com/PandaDesigner/react-router-dom-6',
        tags: ['React Router', 'JavaScript'],
      },
      {
        name: 'react-todo-frontend-mentor',
        desc_es: 'Implementación de todo app basada en un reto de Frontend Mentor.',
        desc_en: 'Todo app implementation based on a Frontend Mentor challenge.',
        url: 'https://github.com/PandaDesigner/react-todo-frontend-mentor',
        tags: ['React', 'Frontend Mentor'],
      },
      {
        name: 'typeScripts-proyect',
        desc_es: 'Proyecto de práctica en TypeScript.',
        desc_en: 'Practice project in TypeScript.',
        url: 'https://github.com/PandaDesigner/typeScripts-proyect',
        tags: ['TypeScript'],
      },
      {
        name: 'xcala-mui',
        desc_es: 'Base visual asociada a Xcala con enfoque en MUI.',
        desc_en: 'Visual base associated with Xcala with a focus on MUI.',
        url: 'https://github.com/PandaDesigner/xcala-mui',
        tags: ['MUI', 'UI'],
      },
    ];

    return projects.map(p => new Project(
      p.name,
      this.lang === 'es' ? p.desc_es : p.desc_en,
      p.url,
      p.tags,
      0,
      'curated',
    ));
  }
}
