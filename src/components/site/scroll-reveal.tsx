"use client";

import { useEffect } from "react";

/**
 * ScrollReveal
 *
 * Global client component that animates elements with the `.reveal` class
 * (fade-in + slide-up) as they scroll into the viewport.
 *
 * ── Hydration-safe strategy ──
 * The animation logic runs ENTIRELY inside `useEffect`, which executes
 * AFTER React hydration AND after the browser paints. Because no DOM
 * mutation happens during the hydration commit phase, React sees a
 * consistent tree between server and client — no hydration mismatch.
 *
 * Why `useEffect` (not `useLayoutEffect`): `useLayoutEffect` runs
 * synchronously during the commit phase, which React 19 may flag as a
 * hydration mismatch when it mutates class attributes. `useEffect` defers
 * the mutation to a separate tick after paint, cleanly separating it from
 * hydration.
 *
 * ── Progressive enhancement ──
 * The CSS (globals.css) only hides `.reveal` elements when `<html>` has the
 * `.js-ready` class. This component adds `.js-ready` during the effect, so:
 *   • Without JS / if JS fails → content stays fully visible (CSS default).
 *   • With JS → first paint shows all content visible, then the effect
 *     hides below-the-fold elements and reveals above-the-fold ones.
 *
 * Usage: drop `<ScrollReveal />` once near the root layout. Add the `reveal`
 * class (optionally with `delay-100` ... `delay-700`) to any element.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Fallback: reveal everything if no IntersectionObserver or reduced motion.
    if (!("IntersectionObserver" in window) || prefersReduced) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // 1. Activate the hidden state (CSS: `.js-ready .reveal { opacity: 0 }`).
    //    Runs after mount + paint, so it never triggers a hydration mismatch.
    document.documentElement.classList.add("js-ready");

    // 2. Reveal any `.reveal` element already in the viewport (above-the-fold).
    const viewportH = window.innerHeight;
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      if (rect.top < viewportH && rect.bottom > 0) {
        el.classList.add("is-visible");
      }
    });

    // 3. Observe remaining (below-the-fold) elements for scroll reveal.
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

    // 4. Re-scan when new content is added to the DOM (client re-renders).
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
