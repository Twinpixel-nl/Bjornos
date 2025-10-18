/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2.5rem"
      }
    },
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        accent: {
          DEFAULT: "#FF5E00" // Kosmisch oranje
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 94, 0, 0.2)"
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out both",
        "fade-up": "fade-up 0.8s ease-out both",
        "soft-pulse": "soft-pulse 3s ease-in-out infinite"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
