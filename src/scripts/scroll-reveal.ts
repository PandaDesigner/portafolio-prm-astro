// Scroll reveal animation - TypeScript vanilla
// Optimized for Astro View Transitions

function initScrollReveal() {
  const reveals = document.querySelectorAll<HTMLElement>('.reveal');
  
  if (reveals.length === 0) return;

  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  if (reduceMotion) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    // Reveal at the middle of the screen (50% from bottom)
    rootMargin: '0px 0px -50% 0px',
    threshold: 0, 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // isIntersecting will be true if any part of the element enters the top 50% of the viewport 
      // because of the negative rootMargin
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        // Al quitar la clase cuando sale del viewport inferior, se revierte la animación
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const viewpointMiddle = window.innerHeight * 0.5;

    // If the element is already above the midpoint or visible on load, show it immediately
    if (rect.top < viewpointMiddle) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });
}

// Support both standard load and Astro View Transitions
document.addEventListener('DOMContentLoaded', initScrollReveal);
document.addEventListener('astro:page-load', initScrollReveal);
