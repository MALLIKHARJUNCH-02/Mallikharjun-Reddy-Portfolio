/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        lg2: "970px",
      },
      colors: {
        paper: "#FAFAF8",
        "paper-dim": "#F1F0EB",
        ink: "#15161B",
        "ink-soft": "#585B66",
        "ink-faint": "#8C8F98",
        line: "#E4E2DA",
        "line-strong": "#D3D0C6",
        accent: "#1F6F63",
        "accent-soft": "#E8F0EE",
        "accent-ink": "#153F38",
      },
      fontFamily: {
        display: ["'General Sans'", "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21, 22, 27, 0.04)",
        "card-hover": "0 8px 24px rgba(21, 22, 27, 0.08)",
      },
      borderRadius: {
        DEFAULT: "6px",
        lg: "10px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
