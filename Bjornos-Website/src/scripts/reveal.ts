// Lightweight scroll/fade-in animations using Motion One
// Usage: add data-reveal and optional data-delay attributes to elements.
//
// Example:
//   <div data-reveal data-delay="0.1">...</div>
//
import { inView, animate } from "@motionone/dom";

function reveal(el: HTMLElement) {
  // Initial state (also backed by Tailwind's CSS animations as fallback)
  el.style.opacity = "0";
  el.style.transform = "translateY(12px)";

  inView(
    el,
    () => {
      const delay = Number(el.getAttribute("data-delay") || 0);
      animate(
        el,
        { opacity: [0, 1], transform: ["translateY(12px)", "translateY(0)"] },
        { duration: 0.7, easing: "ease-out", delay }
      );
    },
    { margin: "-10% 0px" }
  );
}

// Run immediately (script is loaded at end of body in Layout.astro)
document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(reveal);
