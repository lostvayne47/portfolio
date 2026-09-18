import { useEffect } from "react";

// Content is visible before JS; entrances run once and never gate navigation.
export default function useEntranceMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const register = () =>
      document
        .querySelectorAll(
          ".section-heading, .project-card, .skill-group, .experience-item, .about-copy, .credentials",
        )
        .forEach((element) => {
          if (element.dataset.motionObserved) return;
          element.dataset.motionObserved = "true";
          observer.observe(element);
        });
    register();
    const changes = new MutationObserver(register);
    changes.observe(document.getElementById("main"), {
      childList: true,
      subtree: true,
    });
    return () => {
      observer.disconnect();
      changes.disconnect();
    };
  }, []);
}
