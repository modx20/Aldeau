import { useEffect } from 'react';

export function useScrollReveal(): void {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')
    );

    if (targets.length === 0) {
      return;
    }

    const revealInView = () => {
      const vh = window.innerHeight || 800;
      for (const el of targets) {
        if (el.classList.contains('is-in')) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh * 0.96) {
          el.classList.add('is-in');
        }
      }
    };

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );

    targets.forEach((el) => observer.observe(el));
    revealInView();

    window.addEventListener('scroll', revealInView, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', revealInView);
    };
  }, []);
}
