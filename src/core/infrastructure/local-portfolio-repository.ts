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
        'Frontend & Mobile Developer | React · Next.js · TypeScript · React Native | UX/UI | Playwright | Clean Architecture',
        'Frontend and mobile developer with UX/UI and digital graphic design experience.',
        'Frontend developer with 5+ years of experience, 8+ years in UX/UI, and 15+ years in digital graphic design. I build accessible, user-centered web and mobile products with React, Next.js, Astro, React Native, and TypeScript.',
        'Bello, Antioquia, Colombia · Remote',
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
      'Frontend & Mobile Developer | React · Next.js · TypeScript · React Native | UX/UI | Playwright | Clean Architecture',
      'Desarrollador frontend y móvil con experiencia en UX/UI y diseño gráfico digital.',
      'Desarrollador frontend con más de 5 años de experiencia, más de 8 años en UX/UI y más de 15 años en diseño gráfico digital. Creo productos web y móviles accesibles y centrados en el usuario con React, Next.js, Astro, React Native y TypeScript.',
      'Bello, Antioquia, Colombia · Remote',
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
        role_es: 'Desarrollador de front-end',
        role_en: 'Frontend Developer',
        period_es: 'Jul 2025 — Jul 2026',
        period_en: 'Jul 2025 — Jul 2026',
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
        role_es: 'Diseñador UX/UI',
        role_en: 'UX/UI Designer',
        period_es: 'Oct 2022 — Jun 2025',
        period_en: 'Oct 2022 — Jun 2025',
        summary_es: 'Diseño y desarrollo de interfaces responsivas con React y TypeScript, con foco en dashboards y visualización de datos.',
        summary_en: 'Design and development of responsive interfaces with React and TypeScript, focused on dashboards and data visualization.',
        highlights_es: ['Dashboards con Chart.js', 'Colaboración con diseño y producto', 'React Hooks y TypeScript'],
        highlights_en: ['Dashboards with Chart.js', 'Collaboration with design and product', 'React Hooks and TypeScript'],
      },
      {
        company: 'SirBuho',
        role_es: 'Desarrollador web',
        role_en: 'Web Developer',
        period_es: 'Abr 2021 — Jun 2022',
        period_en: 'Apr 2021 — Jun 2022',
        summary_es: 'Mantenimiento y desarrollo de sitios web con PHP y WordPress, incluyendo plugins personalizados y páginas a medida.',
        summary_en: 'Website maintenance and development with PHP and WordPress, including custom plugins and bespoke pages.',
        highlights_es: ['PHP y WordPress', 'Plugins personalizados y páginas a medida', 'Figma y skeletons de iOS'],
        highlights_en: ['PHP and WordPress', 'Custom plugins and bespoke pages', 'Figma and iOS skeletons'],
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
        name: 'Calculator JS Vanilla',
        desc_es: 'Calculadora funcional construida con JavaScript vanilla, HTML y CSS. Implementa operaciones matemáticas básicas con manejo de estado.',
        desc_en: 'Functional calculator built with vanilla JavaScript, HTML and CSS. Implements basic math operations with state management.',
        url: 'https://calculator-js-vanilla.netlify.app/',
        tags: ['JavaScript', 'HTML', 'CSS', 'Vanilla'],
      },
      {
        name: 'She-Hulk React',
        desc_es: 'Landing page temática de She-Hulk desarrollada con React. Diseño responsive con animaciones y efectos visuales.',
        desc_en: 'She-Hulk themed landing page developed with React. Responsive design with animations and visual effects.',
        url: 'https://she-hulk-react.netlify.app/',
        tags: ['React', 'CSS', 'Responsive', 'Animation'],
      },
      {
        name: 'Shopping Cart React',
        desc_es: 'Carrito de compras funcional con React. Gestión de estado para productos, cantidades y cálculo de totales en tiempo real.',
        desc_en: 'Functional shopping cart with React. State management for products, quantities and real-time total calculation.',
        url: 'https://shopping-card-react-prfmaetre.netlify.app/',
        tags: ['React', 'State Management', 'E-commerce'],
      },
      {
        name: 'Snake JS Game',
        desc_es: 'Clásico juego de la serpiente implementado en JavaScript vanilla. Lógica de juego, detección de colisiones y sistema de puntuación.',
        desc_en: 'Classic Snake game implemented in vanilla JavaScript. Game logic, collision detection and scoring system.',
        url: 'https://snake-js-pedro.netlify.app/',
        tags: ['JavaScript', 'Game Dev', 'Canvas', 'Vanilla'],
      },
      {
        name: 'Todo App - Frontend Mentor',
        desc_es: 'Aplicación de tareas basada en desafío de Frontend Mentor. Filtros por estado, drag & drop y diseño pixel-perfect.',
        desc_en: 'Task app based on Frontend Mentor challenge. State filters, drag & drop and pixel-perfect design.',
        url: 'https://todo-react-frontend-mentor.netlify.app/',
        tags: ['React', 'Frontend Mentor', 'Drag & Drop'],
      },
      {
        name: 'Formulario React',
        desc_es: 'Formulario multi-step con validación en tiempo real. Manejo de errores, estados de carga y feedback visual al usuario.',
        desc_en: 'Multi-step form with real-time validation. Error handling, loading states and visual feedback to the user.',
        url: 'https://formulario-react-prfmaestre.netlify.app/',
        tags: ['React', 'Forms', 'Validation', 'UX'],
      },
      {
        name: 'Clientes Dashboard',
        desc_es: 'Panel de administración de clientes con CRUD completo. Tabla de datos, filtros y gestión de registros.',
        desc_en: 'Customer management dashboard with full CRUD. Data tables, filters and record management.',
        url: 'https://jazzy-cranachan-9f9ae5.netlify.app/clientes',
        tags: ['React', 'Dashboard', 'CRUD', 'Data Table'],
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
