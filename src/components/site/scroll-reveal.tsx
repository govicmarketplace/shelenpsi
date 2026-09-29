"use client";

import { useEffect } from "react";

/**
 * ScrollReveal
 *
 * Global client component that observes every element with the `.reveal`
 * class and adds the `.is-visible` class when it scrolls into the viewport.
 * The actual animation (fade-in + slide-up) is defined in CSS (globals.css).
 *
 * Usage: drop `<ScrollReveal />` once near the root layout. Then add the
 * `reveal` class (optionally with `delay-100` ... `delay-700`) to any
 * element you want to animate on scroll.
 *
 * - Respects `prefers-reduced-motion` (makes everything visible immediately).
 * - Uses a MutationObserver to pick up `.reveal` elements added dynamically
 *   (e.g. after client-side re-renders).
 * - Each element animates only once (observer is disconnected after reveal).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Fallback: if IntersectionObserver isn't available, reveal everything.
    if (!("IntersectionObserver" in window) || prefersReduced) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      {
        // Trigger when ~15% of the element is visible, slightly before fully in view.
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const scan = () => {
      document
        .querySelectorAll(".reveal:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    };

    scan();

    // Re-scan when new content is added to the DOM (client re-renders, etc.)
    const mutationObserver = new MutationObserver(() => {
      scan();
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
