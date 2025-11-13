// src/scripts/reveal.ts
import { inView, animate } from "@motionone/dom";

console.log("reveal.ts geladen");

function reveal(el: HTMLElement) {
  // start state
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

// script draait zodra bundel geladen is (staat onderaan body)
document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(reveal);
