# PRD: Portfolio profesional moderno

## 1. Objetivo

Crear una web personal premium para posicionar el perfil como Frontend Engineer / UX/UI Designer, mostrar experiencia real y convertir visitas en contactos concretos.

## 2. Usuario objetivo

- Recruiters técnicos
- Hiring managers
- Líderes de producto / diseño
- Contactos profesionales que lleguen desde GitHub o LinkedIn

## 3. Propuesta de valor

Frontend con foco en UX, performance y arquitectura web escalable.

## 4. Dirección visual

### Concepto
Editorial-tech, oscuro, elegante y muy pulido.

### Principios UI
- Tipografía con contraste: display con carácter + body legible
- Fondo profundo con gradientes sutiles y textura fina
- Cards con glassmorphism controlado
- Jerarquía fuerte en hero y experiencia
- Animación sobria, nunca decorativa de más

### Sensación buscada
Premium, técnica, confiable, moderna.

## 5. Arquitectura del contenido

### Secciones
1. Hero
2. About
3. Experience
4. Skills
5. Projects
6. Contact

### Navegación
- Scroll natural
- CTA fijo a contacto
- Transiciones suaves entre secciones/páginas

## 6. MVP funcional

### Hero
- Nombre, rol y propuesta diferencial
- CTA principal y secundario
- Resumen con 8+ años de experiencia
- Animación de entrada

### About
- Resumen breve
- Enfoque profesional y forma de trabajar

### Experience
- Timeline con roles y logros reales
- Énfasis en impacto: performance, UX, escalabilidad

### Skills
- Hard skills agrupadas por dominio
- Soft skills destacadas sin ruido

### Projects
- Repositorios relevantes desde GitHub
- Cards con nombre, descripción, estrellas y tags
- Prioridad a repos pinned y trabajos representativos

### Contact
- Email, LinkedIn y GitHub
- CTA directo para contacto profesional

## 7. Reglas de UX

- Una sola idea fuerte por bloque
- CTA visible siempre
- Animaciones con propósito
- Mobile first
- Lectura rápida en menos de 30 segundos

## 8. Stack propuesto

- Astro para SSR/SSG y performance
- Tailwind CSS para estilos
- Motion para microinteracciones
- View Transitions para navegación fluida
- GitHub API para proyectos

## 9. Modelo de contenido con POO

### Entidades
- `Profile`
- `Experience`
- `Project`
- `SkillGroup`
- `ContactChannel`

### Casos de uso
- `LoadProfile`
- `LoadFeaturedProjects`
- `BuildPortfolioSections`

### Objetivo del modelo
Separar datos, reglas y presentación para mantener el portfolio escalable y fácil de extender.

## 10. Métricas de éxito

- Carga rápida
- Navegación clara en móvil
- CTA de contacto visible
- Repositorios bien priorizados
- Narrativa profesional coherente
- Copy alineado con datos públicos reales
