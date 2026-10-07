import { loadEducation } from '@/core/infrastructure/education-data';
import { ContactChannel } from '@/core/domain/contact-channel';
import { Experience } from '@/core/domain/experience';
import { Profile } from '@/core/domain/profile';
import { Project } from '@/core/domain/project';
import { SkillGroup } from '@/core/domain/skill-group';
import type { PortfolioRepository } from '@/core/application/portfolio-repository';


interface RawExperience {
  company: string;
  role_es: string;
  role_en: string;
  period_es: string;
  period_en: string;
  summary_es: string;
  summary_en: string;
  highlights_es: string[];
  highlights_en: string[];
  endYear: number;
  endMonth: number;
  startYear: number;
  startMonth: number;
}

interface RawProject {
  name: string;
  desc_es: string;
  desc_en: string;
  url: string;
  tags: string[];
}

export class LocalPortfolioRepository implements PortfolioRepository {
  constructor(private lang: 'es' | 'en' = 'es') {}

  async loadEducation() {
    return loadEducation(this.lang);
  }

  async loadProfile() {
    if (this.lang === 'en') {
      return new Profile(
        'Pedro Fernández',
        'Full-Stack Developer | Frontend · Java Backend · Harness Engineering',
        'Frontend-focused full-stack developer with Java backend, UX/UI and digital design experience.',
        "Full-stack developer with a frontend focus and 6+ years of software development experience. Builds web and mobile products with Angular, React, Next.js and Ionic, complemented by Java and Spring Boot backend work at Efigen and Epsilon Software Solutions. Experienced in REST APIs, Docker and AI-assisted development using TDD, SDD and API contracts.",
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
      'Desarrollador Fullstack | Frontend · Backend Java · Harness Engineering',
      'Desarrollador fullstack con foco frontend y experiencia en backend Java, UX/UI y diseño digital.',
      "Desarrollador fullstack con foco frontend y más de 6 años de experiencia en desarrollo de software. Construye productos web y móviles con Angular, React, Next.js e Ionic, complementados con backend Java y Spring Boot en Efigen y Epsilon Software Solutions. Experiencia con APIs REST, Docker y desarrollo asistido por IA mediante TDD, SDD y contratos de API.",
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
    const experiences: RawExperience[] = [
      {
            "company": "Vanguard Vision AI",
            "role_es": "Desarrollo Fullstack | Frontend, Mobile e IA",
            "role_en": "Full-Stack Development | Frontend, Mobile & AI",
            "period_es": "Jul 2025 – Jul 2026",
            "period_en": "Jul 2025 – Jul 2026",
            "summary_es": "Desarrollo de aplicaciones web y móviles híbridas escalables con Angular 17+, Ionic y TypeScript, con foco en rendimiento y mantenibilidad.",
            "summary_en": "Developed scalable web and hybrid mobile applications with Angular 17+, Ionic and TypeScript, focused on performance and maintainability.",
            "highlights_es": [
                  "Desarrollo e integración de APIs REST con TypeScript y uso de Docker en los flujos de desarrollo.",
                  "Aplicación de TDD y SDD con contratos de API en OpenSpec; uso de Claude Code, Codex, OpenCode y Pi para scaffolding, generación de pruebas y refactorización."
            ],
            "highlights_en": [
                  "Developed and integrated REST APIs using TypeScript and used Docker in development workflows.",
                  "Applied TDD and SDD practices with OpenSpec API contracts; used Claude Code, Codex, OpenCode and Pi for scaffolding, test generation and refactoring."
            ],
            "endYear": 2026,
            "endMonth": 7,
            "startYear": 2025,
            "startMonth": 7
      },
      {
            "company": "Mercado Libre",
            "role_es": "Ingeniero Frontend",
            "role_en": "Frontend Engineer",
            "period_es": "May 2024 – May 2025",
            "period_en": "May 2024 – May 2025",
            "summary_es": "Desarrollo de interfaces de e-commerce de alto tráfico y optimización de Core Web Vitals para mejorar el rendimiento frontend.",
            "summary_en": "Developed high-traffic e-commerce interfaces and optimized Core Web Vitals to improve frontend performance.",
            "highlights_es": [
                  "Participación en el equipo de Mercado Play, construyendo experiencias de streaming y video en un entorno de despliegue continuo."
            ],
            "highlights_en": [
                  "Contributed to the Mercado Play team, building streaming and video experiences in a continuous-deployment environment."
            ],
            "endYear": 2025,
            "endMonth": 5,
            "startYear": 2024,
            "startMonth": 5
      },
      {
            "company": "Efigen Renewable Energy",
            "role_es": "Desarrollador Web y UX/UI | Desarrollo Fullstack",
            "role_en": "Web Developer & UX/UI | Full-Stack Development",
            "period_es": "Jul 2022 – Oct 2023",
            "period_en": "Jul 2022 – Oct 2023",
            "summary_es": "Desarrollo de funcionalidades backend con Java y Spring Boot y APIs REST como parte de soluciones web fullstack.",
            "summary_en": "Developed Java and Spring Boot backend functionality and REST APIs as part of full-stack web solutions.",
            "highlights_es": [
                  "Trabajo con bases de datos y Docker junto con componentes frontend reutilizables, conectando requerimientos de negocio con la entrega técnica."
            ],
            "highlights_en": [
                  "Worked with databases and Docker alongside reusable frontend components, connecting business requirements with technical delivery."
            ],
            "endYear": 2023,
            "endMonth": 10,
            "startYear": 2022,
            "startMonth": 7
      },
      {
            "company": "Xcala",
            "role_es": "Desarrollador Frontend y UX/UI",
            "role_en": "Frontend Developer & UX/UI",
            "period_es": "Ene 2021 – Jul 2023",
            "period_en": "Jan 2021 – Jul 2023",
            "summary_es": "Diseño y desarrollo de flujos transaccionales y de onboarding para productos fintech y de mercados alternativos, combinando diseño visual en Figma con implementaciones seguras en React.js.",
            "summary_en": "Designed and developed transactional and onboarding flows for Fintech and alternative market products, bridging visual design (Figma) with secure React.js implementations.",
            "highlights_es": [
                  "Equilibrio entre seguridad bancaria e interfaces fluidas, aplicando Atomic Design en equipos Agile Scrum."
            ],
            "highlights_en": [
                  "Balanced banking security with frictionless user interfaces, applying Atomic Design principles within Agile Scrum teams."
            ],
            "endYear": 2023,
            "endMonth": 7,
            "startYear": 2021,
            "startMonth": 1
      },
      {
            "company": "SirBuho",
            "role_es": "Desarrollador Web",
            "role_en": "Web Developer",
            "period_es": "2020 – 2021",
            "period_en": "2020 – 2021",
            "summary_es": "Desarrollo y mantenimiento de sitios web con PHP y WordPress, incluidos plugins personalizados y páginas a medida.",
            "summary_en": "Developed and maintained PHP and WordPress websites, including custom plugins and bespoke pages.",
            "highlights_es": [],
            "highlights_en": [],
            "endYear": 2021,
            "endMonth": 0,
            "startYear": 2020,
            "startMonth": 0
      },
      {
            "company": "Epsilon Software Solutions",
            "role_es": "Full-Stack Developer",
            "role_en": "Full-Stack Developer",
            "period_es": "2018 – 2020",
            "period_en": "2018 – 2020",
            "summary_es": "Desarrollo de soluciones web fullstack con Java y Spring Boot, incluyendo APIs REST e integraciones frontend.",
            "summary_en": "Developed full-stack web solutions with Java and Spring Boot, including REST APIs and frontend integrations.",
            "highlights_es": [
                  "Trabajo con bases de datos y Docker como parte del desarrollo backend y la entrega de aplicaciones."
            ],
            "highlights_en": [
                  "Worked with databases and Docker as part of backend development and application delivery."
            ],
            "endYear": 2020,
            "endMonth": 0,
            "startYear": 2018,
            "startMonth": 0
      }
];

    experiences.sort((a, b) => b.endYear - a.endYear || b.endMonth - a.endMonth || b.startYear - a.startYear || b.startMonth - a.startMonth);

    return experiences.map(exp => new Experience(
      exp.company,
      this.lang === 'es' ? exp.role_es : exp.role_en,
      this.lang === 'es' ? exp.period_es : exp.period_en,
      this.lang === 'es' ? exp.summary_es : exp.summary_en,
      this.lang === 'es' ? exp.highlights_es : exp.highlights_en,
    ));
  }

  async loadSkillGroups() {
    return [
      new SkillGroup(this.lang === 'en' ? "Full-Stack Core" : "Fullstack", ["Java", "Spring Boot", "REST APIs", "TypeScript", "JavaScript", "Angular 17+", "React", "Next.js", "Ionic", "React Native", "Node.js", "NestJS", "Express", "Python / FastAPI"]),
      new SkillGroup(this.lang === 'en' ? "Architecture and Quality" : "Arquitectura y Calidad", ["DDD", "Hexagonal Architecture", "TDD", "SDD", "OpenSpec", "OpenAPI", "BFF architecture"]),
      new SkillGroup(this.lang === 'en' ? "Development Tools" : "Herramientas de Desarrollo", ["Docker", "Git", "Claude Code", "Codex", "OpenCode", "Pi", "AI-assisted workflows"]),
      new SkillGroup(this.lang === 'en' ? 'UX/UI and Design' : 'UX/UI y Diseño', ['Figma', 'Atomic Design', 'Design Systems']),
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
    const projects: RawProject[] = [
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
