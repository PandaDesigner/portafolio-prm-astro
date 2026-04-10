# RFC: Arquitectura técnica del portfolio

## 1. Problema técnico a resolver

La información profesional está fragmentada entre CV, GitHub y redes. Se requiere una base técnica simple, mantenible y rápida para consolidar esa narrativa en una sola experiencia web usando datos públicos reales como fuente primaria.

## 2. Diseño y solución propuesta

### Presentación
- Astro como framework principal
- Secciones compuestas por bloques reutilizables
- View Transitions para navegación suave
- Motion para entrada, hover y reveal

### Modelo POO

**Dominio**
- `Profile`: nombre, rol, bio, enlaces
- `Experience`: empresa, cargo, periodo, logros
- `Project`: repo, descripción, stack, métricas
- `SkillGroup`: categoría y lista de habilidades
- `ContactChannel`: tipo, valor, URL

**Aplicación**
- `LoadProfileUseCase`
- `LoadExperienceUseCase`
- `LoadFeaturedProjectsUseCase`
- `BuildHomePageUseCase`

**Infraestructura**
- `GitHubRepositoryAdapter`
- `ProfileRepositoryAdapter`
- `ContactLinkAdapter`

### Fuente de verdad
- Perfil GitHub público `PandaDesigner`
- README del perfil para experiencia, skills y contacto
- Repos pinned para selección inicial de proyectos

### Flujo
1. Astro renderiza la página.
2. Los casos de uso obtienen y normalizan datos.
3. Los adaptadores integran GitHub y fallback local.
4. La UI consume modelos listos para render.

## 3. Decisiones técnicas clave

- **Astro:** mejor performance base y excelente fit para portfolio.
- **POO en dominio:** separa contenido, reglas y presentación.
- **Tailwind:** velocidad de iteración y consistencia visual.
- **Motion:** animación declarativa sin sobrecargar la experiencia.
- **View Transitions:** continuidad visual entre vistas.

## 4. Alternativas descartadas

- **SPA pura:** peor SEO y mayor costo de carga inicial.
- **WordPress:** más peso del necesario para este caso.
- **Animación excesiva:** distrae de la narrativa profesional.

## 5. Riesgos y mitigación

- **Riesgo:** sobrecargar la UI con efectos.
  - Mitigación: limitar animación a puntos de énfasis.
- **Riesgo:** datos GitHub inconsistentes.
  - Mitigación: fallback local y selección curada de repos pinned.
- **Riesgo:** docs desalineados con implementación.
  - Mitigación: mantener PRD, RFC y DoD como fuente de verdad.
