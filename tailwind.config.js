/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
      boxShadow: {
        glow: "0 0 0 2px rgba(59,130,246,.35), 0 8px 30px rgba(2,6,23,.55)",
      },
    },
  },
  plugins: [],
};
