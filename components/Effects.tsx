"use client";

import { useEffect } from "react";

/**
 * Global interaction layer: scroll progress, nav state, scroll-reveals,
 * animated counters, and subtle hero parallax. Runs once on mount and
 * queries the DOM rendered by the (server) section components.
 */
export default function Effects() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nav = document.getElementById("nav");
    const progress = document.getElementById("scrollProgress");

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      nav?.classList.toggle("nav--scrolled", y > 40);
      if (progress) {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + "%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>(".stat__num[data-count]")
    );

    const animateCount = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const dur = 1600;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        el.textContent = Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(tick);
    };

    const observers: IntersectionObserver[] = [];

    if (prefersReduced || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
      counters.forEach((el) => {
        el.textContent =
          (el.getAttribute("data-count") || "") +
          (el.getAttribute("data-suffix") || "");
      });
    } else {
      const revealIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              const delay = Math.min(i * 70, 280);
              window.setTimeout(() => entry.target.classList.add("in"), delay);
              revealIO.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => revealIO.observe(el));
      observers.push(revealIO);

      const countIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target as HTMLElement);
              countIO.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => countIO.observe(el));
      observers.push(countIO);
    }

    // Subtle hero glow parallax (desktop pointers only)
    const glow = document.querySelector<HTMLElement>(".hero__glow");
    let onPointer: ((e: PointerEvent) => void) | null = null;
    if (glow && !prefersReduced && window.matchMedia("(pointer:fine)").matches) {
      onPointer = (e: PointerEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        glow.style.transform = `translate(${x}px, ${y}px)`;
      };
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (onPointer) window.removeEventListener("pointermove", onPointer);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
