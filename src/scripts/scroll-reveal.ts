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
    // Reveal a bit before it fully enters viewport (-10% from bottom)
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1, // Slightly higher threshold for more intentional feel
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // We only reveal once by default
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

// Support both standard load and Astro View Transitions
document.addEventListener('DOMContentLoaded', initScrollReveal);
document.addEventListener('astro:page-load', initScrollReveal);
