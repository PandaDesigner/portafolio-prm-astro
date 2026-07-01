# AGENTS.md — Code Review Rules

> Reglas consumidas por **Gentleman Guardian Angel (`gga`)** al revisar diffs.
> Stack objetivo: Astro 7 · TypeScript strict · Tailwind CSS 4 · GSAP · Three.js.
> Arquitectura: Clean Architecture ligera en `src/core/{application,domain,infrastructure}`.

Si una regla entra en conflicto con la spec del proyecto (RFC/PRD/DOD en `docs/`), gana la spec. Si entra en conflicto con la realidad del diff (por ejemplo, fix urgente con workaround documentado), gana el comentario inline que lo justifique.

---

## 1. TypeScript

- `tsconfig.json` extiende `astro/tsconfigs/strict`. **Mantener `strict: true`**. No relajar flags.
- **`any` prohibido.** Usar `unknown` + type guard o genéricos.
- Preferir `interface` para shapes públicos/extendibles y `type` para uniones, intersecciones y aliases de función.
- Sin `var`. `const` por defecto, `let` solo cuando hay reasignación real.
- Evitar `as` abusivo. Si hace falta castear, encapsular en un type guard con nombre.
- Nullability explícita: preferir `T | null` explícito y narrowing en el call site, no `!` no-null assertions.
- No usar `// @ts-ignore` ni `// @ts-expect-error` sin comentario que justifique *por qué es inevitable*.
- Imports con alias `@/*` (definido en `tsconfig.json`). No usar relativos largos tipo `../../../components`.
- Exports nombrados por defecto para módulos. Un solo `export default` solo para componentes Astro/React que lo requieran.

## 2. Astro 7

- **Astro es server-first.** Por defecto, componentes `.astro` son estáticos. Marcar `client:*` solo cuando haya estado/eventos reales. No usar `client:load` por defecto.
- Usar `client:visible` para islands debajo del fold y `client:idle` para no críticos.
- **Content Collections** para datos tipados (`src/content/`). No leer JSON/YAML sueltos desde componentes.
- **View Transitions** con `<ClientRouter />` para navegaciones suaves. Mantener `transition:animate` coherente con el sistema de diseño.
- **Slots tipados** cuando el slot sea más que `any`. Usar `Slot` API correctamente.
- `Astro.props` tipado siempre con `interface Props` exportado.
- Evitar `is:inline` salvo casos justificados (rompe scoping de estilos y bundle).
- Imágenes con `<Image />` de `astro:assets` (optimización automática). No `<img>` crudas para contenido propio.
- Estilos en `<style>` scoped por componente. Estilos globales solo en `src/styles/global.css`.

## 3. Arquitectura (`src/core/`)

El proyecto usa Clean Architecture ligera:

```
src/core/
├── application/   # casos de uso, orquestación
├── domain/        # entidades y reglas de negocio puras
└── infrastructure/# adaptadores (APIs, storage, browser APIs)
```

- **`domain/`** no importa de `application/` ni de `infrastructure/`. Puro, sin `window`, `fetch`, `localStorage`, etc.
- **`infrastructure/`** depende de `domain/`, nunca al revés.
- **`application/`** orquesta. No contiene acceso directo a DOM ni a fetch; delega a puertos definidos en `domain/` e implementados en `infrastructure/`.
- Componentes `.astro` y UI viven en `src/components/` y `src/pages/`. No importan de `infrastructure/` directamente — pasan por `application/`.
- Si una pieza nueva no encaja en este mapa, proponer el cambio antes de meterla.

## 4. React 19 (si se usa)

- **React Compiler activado.** **No usar `useMemo`, `useCallback` ni `React.memo`** salvo que un profiler demuestre que falta.
- Componentes funcionales siempre. Sin `class`.
- `forwardRef` ya no es necesario en la mayoría de los casos; preferir `ref` como prop normal.
- Estado local con `useState`/`useReducer`. Para estado compartido cross-tree, considerar Context o store (Zustand) según el caso.
- Effects: declarar dependencias honestas. Si un effect necesita `[]` con valores externos, probablemente esté mal diseñado.

## 5. Tailwind CSS 4

- **No usar `var(--*)` dentro de `className`.** Definir tokens en `@theme` y consumirlos directamente como utilidades (`bg-surface`, `text-fg`, etc.).
- `@theme` en `src/styles/global.css` define la paleta y escala. Cambios de tokens van ahí, no inline.
- Evitar clases arbitrarias largas (`w-[347px]`). Si hace falta, suele ser un token nuevo.
- `cn` (o equivalente) para componer clases condicionales, no template strings de `clsx` sueltos.
- No duplicar tokens que ya existen en `@theme`.
- Dark mode con `data-theme` o `prefers-color-scheme`, según el patrón del proyecto. No usar `dark:` por defecto si ya hay tokens semánticos.

## 6. GSAP

- **Reglas duras:**
  - En React/Astro, usar `useGSAP()` con `gsap.context()` para cleanup automático.
  - Toda instancia/tween/timeline debe tener cleanup en `useEffect` return o `gsap.context().revert()`.
  - Registrar plugins (`ScrollTrigger`, `Flip`, etc.) una sola vez en el boot del proyecto.
- **ScrollTrigger:**
  - Usar `gsap.matchMedia()` para variantes responsive y `prefers-reduced-motion`.
  - `markers: true` solo en dev. No commitear con markers activos.
  - Cleanup explícito con `ScrollTrigger.getAll().forEach(t => t.kill())` en unmount cuando no se use `useGSAP`.
- Sin animaciones que muevan `top/left/width/height` (layout thrashing). Siempre `transform` y `opacity`.
- `will-change` solo durante la animación activa, no permanente.

## 7. Three.js

- **Lifecycle correcto:**
  - Crear `renderer`, `scene`, `camera`, `geometry`, `material` en `mount`.
  - Dispose explícito en `unmount`: `geometry.dispose()`, `material.dispose()`, `renderer.dispose()`, `texture.dispose()` para cada textura cargada.
  - Cancelar `requestAnimationFrame` en cleanup.
- Usar `useThree` (R3F) o refs para acceder al contexto. No globales.
- Pixel ratio con cap (`Math.min(window.devicePixelRatio, 2)`).
- `ResizeObserver` para canvas, no solo `resize` event.
- Texturas: configurar `colorSpace`, `anisotropy`, y nunca olvidar `texture.dispose()`.
- Shaders custom: `#version` correcto, `precision highp float;`, y validar que compile en el primer frame.

## 8. Performance web (Core Web Vitals)

- **LCP**: hero image y heading principal en el HTML inicial. No esperar a `client:*` para el contenido above-the-fold.
- **INP**: handlers de interacción livianos. Cálculo pesado → Web Worker o diferir a `requestIdleCallback`.
- **CLS**: reservar dimensiones para imágenes, embeds, fuentes (`font-display: swap` + `size-adjust`). No insertar contenido que empuje layout.
- Bundle: imports dinámicos (`import()`) para rutas pesadas (CV PDF, three.js, etc.).
- Imágenes con `<Image />` y `loading="lazy"` (excepto LCP).
- Fuentes con `preload` para las críticas.
- Sin librerías pesadas (`lodash` completo, `moment`) — preferir `date-fns`, `es-toolkit`, nativos.

## 9. Accesibilidad

- Semántica HTML primero. `<button>` para acciones, `<a>` para navegación, `<nav>`, `<main>`, `<section>` con `aria-label` cuando haga falta.
- Imágenes con `alt` descriptivo o `alt=""` si son decorativas. Nunca `alt` faltante.
- Focus visible. No `outline: none` sin reemplazo accesible.
- Contraste mínimo WCAG AA. Tokens en `@theme` ya deben cumplir.
- Respetar `prefers-reduced-motion`: en GSAP, variantes `gsap.matchMedia({ '(prefers-reduced-motion: reduce)': ... })`.
- Formularios con `<label>` asociado, mensajes de error con `aria-live`.
- Idioma: `lang="es"` o `lang="en"` según `src/i18n/` convention. Verificar `<html lang>`.

## 10. Internacionalización (`src/i18n/`)

- Toda copy de usuario pasa por el sistema i18n. **No strings hardcodeados en componentes.**
- Mantener paridad entre locales. Si agregás una clave a `es`, agregarla a `en` (u otros locales activos).
- No concatenar traducciones con template strings que rompan orden de palabras en otros idiomas.

## 11. Estructura y naming

- Componentes Astro: `PascalCase.astro`. Un componente por archivo.
- Hooks/utilities: `camelCase.ts`.
- Constantes globales: `SCREAMING_SNAKE_CASE` en `src/core/domain/constants.ts` o similar.
- Subcarpeta `sections/` en `components/` para secciones de página (Hero, About, etc.).
- Tests (cuando se sumen): `*.test.ts` junto al archivo o en `__tests__/` adyacente.
- No crear archivos sueltos en la raíz. Todo bajo `src/`.

## 12. Git y commits

- Mensajes en inglés, imperativo, ≤72 chars en subject. Body opcional con *qué* y *por qué*.
- Un commit por unidad lógica de cambio. No commits tipo "wip" o "fix stuff".
- No commitear `dist/`, `.astro/`, `node_modules/` (verificar `.gitignore`).

## 13. Anti-patrones a bloquear siempre

- `console.log` olvidados en producción (excepto logs explícitos con prefijo).
- `dangerouslySetInnerHTML` sin sanitización.
- `fetch` sin `try/catch` ni manejo de estado de error.
- Timeouts mágicos sin comentario (`setTimeout(fn, 1000)` sin razón).
- Estado global implícito via singletons fuera de `core/`.
- TODO/FIXME sin ticket o comentario que explique *qué falta*.
- Código muerto: branches `if (false)`, funciones no usadas, imports sin uso.

---

## Cómo invocar el review

```bash
gga run                  # revisa el diff staged + unstaged
gga run --staged         # solo staged
gga run --base main      # contra una base específica
```

Provider configurado en `.gga`: `claude`. Timeout 300s. Modo strict activo (falla ante respuesta ambigua).

Si `gga run` falla por algo distinto a "Rules file not found", leer el stderr antes de cambiar config — suele ser el provider o el timeout.
