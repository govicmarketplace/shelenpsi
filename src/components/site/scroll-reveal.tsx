"use client";

import { useEffect } from "react";

/**
 * ScrollReveal
 *
 * Global client component that observes every element with the `.reveal`
 * class and adds the `.is-visible` class when it scrolls into the viewport.
 * The actual animation (fade-in + slide-up) is defined in CSS (globals.css).
 *
 * IMPORTANT — Progressive enhancement strategy:
 *  • The CSS only hides `.reveal` elements when `<html>` has the `.js-ready`
 *    class (added by an inline head script before paint).
 *  • So if JS fails or is disabled, content stays visible — no blank page.
 *  • On mount, this component SYNCHRONOUSLY reveals any `.reveal` element
 *    already inside the viewport (prevents a flash of invisible content for
 *    above-the-fold elements), then sets up an IntersectionObserver for the
 *    remaining (below-the-fold) elements.
 *
 * Usage: drop `<ScrollReveal />` once near the root layout. Then add the
 * `reveal` class (optionally with `delay-100` ... `delay-700`) to any
 * element you want to animate on scroll.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Fallback: reveal everything immediately if no IntersectionObserver or
    // the user prefers reduced motion.
    if (!("IntersectionObserver" in window) || prefersReduced) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // 1. Synchronously reveal any `.reveal` element already in the viewport.
    //    This runs right after hydration, minimizing (but not fully
    //    eliminating) the brief moment where above-the-fold content is
    //    hidden by the `.js-ready .reveal` CSS rule.
    const viewportH = window.innerHeight;
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      if (rect.top < viewportH && rect.bottom > 0) {
        el.classList.add("is-visible");
      }
    });

    // 2. Observe the remaining (below-the-fold) elements.
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

    // 3. Re-scan when new content is added to the DOM (client re-renders).
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
