import { ContactChannel } from '../domain/contact-channel';
import { Experience } from '../domain/experience';
import { Profile } from '../domain/profile';
import { Project } from '../domain/project';
import { SkillGroup } from '../domain/skill-group';
import type { PortfolioRepository } from '../application/portfolio-repository';

export class LocalPortfolioRepository implements PortfolioRepository {
  async loadProfile() {
    return new Profile(
      'Pedro Fernández',
      'Frontend Engineer | UX/UI Designer | Web Architecture',
      'Diseño interfaces web con foco en UX, performance y arquitectura escalable.',
      'Combino diseño de interfaces, fundamentos de arquitectura y criterio de producto para construir experiencias claras, rápidas y confiables. Tengo 8+ años de experiencia en el ecosistema web moderno.',
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
    return [
      new Experience(
        'Vanguard Vision AI',
        'Frontend Engineer',
        'Jun 2025 — Presente',
        'Desarrollo de aplicaciones web fullstack con Next.js y backend integrado, priorizando interfaces complejas y lógica reutilizable.',
        ['Next.js con backend integrado', 'React + React Native / Expo', 'Testing unitario e integración con Jest'],
      ),
      new Experience(
        'Mercado Libre',
        'Frontend Developer',
        'May 2024 — May 2025',
        'Desarrollo de features frontend en una plataforma de alto tráfico con TypeScript, Redux y enfoque en robustez.',
        ['TypeScript en flujos críticos', 'Redux para estado global', 'Jest para prevenir regresiones'],
      ),
      new Experience(
        'Xcala',
        'Frontend Engineer · UX/UI',
        'Oct 2022 — Jun 2025',
        'Diseño y desarrollo de interfaces responsivas con React y TypeScript, con foco en dashboards y visualización de datos.',
        ['Dashboards con Chart.js', 'Colaboración con diseño y producto', 'React Hooks y TypeScript'],
      ),
      new Experience(
        'Efigen Renewable Energy',
        'Frontend Developer',
        'Jul 2022 — Oct 2023',
        'Desarrollo de interfaces web priorizando rendimiento y consistencia en componentes visuales y reportes.',
        ['Chart.js para visualización', 'Integración con WordPress y Elementor', 'Responsive first'],
      ),
    ];
  }

  async loadSkillGroups() {
    return [
      new SkillGroup('Frontend & Mobile', ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'JavaScript']),
      new SkillGroup('UI/UX & Design', ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Tailwind CSS', 'MUI']),
      new SkillGroup('Arquitectura & Estado', ['Redux', 'Zustand', 'React Query', 'Node', 'NestJS', 'WordPress']),
      new SkillGroup('Práctica profesional', ['Design Systems', 'Atomic Design', 'Testing', 'Remote work', 'Communication']),
    ];
  }

  async loadContactChannels() {
    return [
      new ContactChannel('Email directo', 'mailto:prfmaetre@gmail.com', 'email'),
      new ContactChannel('LinkedIn', 'https://www.linkedin.com/in/pedro-fernandez-develop-frontend/', 'linkedin'),
      new ContactChannel('GitHub', 'https://github.com/PandaDesigner', 'github'),
      new ContactChannel('Portfolio', 'https://pandadesigners.com', 'other'),
    ];
  }

  async loadCuratedProjects() {
    return [
      new Project(
        'react-nexjs',
        'Proyecto guitarra en JavaScript.',
        'https://github.com/PandaDesigner/react-nexjs',
        ['JavaScript', 'React'],
        0,
        'curated',
      ),
      new Project(
        'React-practica',
        'Práctica de React enfocada en fundamentos y repetición deliberada.',
        'https://github.com/PandaDesigner/React-practica',
        ['React', 'JavaScript'],
        0,
        'curated',
      ),
      new Project(
        'react-router-dom-6',
        'Exploración de routing con React Router v6.',
        'https://github.com/PandaDesigner/react-router-dom-6',
        ['React Router', 'JavaScript'],
        0,
        'curated',
      ),
      new Project(
        'react-todo-frontend-mentor',
        'Implementación de todo app basada en un reto de Frontend Mentor.',
        'https://github.com/PandaDesigner/react-todo-frontend-mentor',
        ['React', 'Frontend Mentor'],
        0,
        'curated',
      ),
      new Project(
        'typeScripts-proyect',
        'Proyecto de práctica en TypeScript.',
        'https://github.com/PandaDesigner/typeScripts-proyect',
        ['TypeScript'],
        0,
        'curated',
      ),
      new Project(
        'xcala-mui',
        'Base visual asociada a Xcala con enfoque en MUI.',
        'https://github.com/PandaDesigner/xcala-mui',
        ['MUI', 'UI'],
        0,
        'curated',
      ),
    ];
  }
}
