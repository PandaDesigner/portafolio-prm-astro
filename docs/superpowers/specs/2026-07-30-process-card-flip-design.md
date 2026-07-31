# Process Card Flip Design

## Goal
Show each process illustration in full and reveal a concise explanation when its card flips.

## Interaction
- A click or keyboard activation flips one process card in 3D.
- Moving the pointer out of the card returns it to its front face.
- On touch devices, a second tap returns the card to its front face because there is no pointer-leave event.
- Users with reduced-motion preferences see an immediate face change without a 3D animation.

## Layout
- Cards preserve the supplied 4:3 image composition using `object-fit: contain` within a cream surface.
- Front and back occupy the same fixed card footprint to avoid layout shift.
- The front contains only the complete illustration and a compact non-overlapping step marker; descriptive copy never sits above the image.
- The back contains the step title, a focused explanation, and an explicit return hint.
- The panel includes dedicated bottom padding and cards retain their full 4:3 ratio, so neither card faces nor illustrations are clipped at the lower edge.

## Implementation
- Replace the presentational card wrapper with a semantic button per process step.
- Use a per-card data attribute and a small client-side script to toggle `is-flipped` and `aria-pressed`.
- Use CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, and `backface-visibility`) and limit animation to `transform`.
- Preserve the existing responsive grid: four cards on desktop, two on tablet, one on mobile.

## Accessibility
- Buttons expose each action to keyboard users.
- Front/back labels are available to assistive technology without duplicate reading.
- Motion honors `prefers-reduced-motion`.

## Verification
- `npm run build` must pass.
- Check desktop click → flip → pointer leave → reset.
- Check keyboard activation and touch second-tap reset.
- Confirm all four supplied images are visible in their entirety.
