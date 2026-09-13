// Presentation-only grouping for siteData.skills.
// This does not change the underlying skills list — it just tells the
// Skills section how to cluster the existing entries for display.
const skillGroups = [
  {
    label: "Languages",
    match: ["Java", "C++", "C", "JavaScript (ES6+)", "SQL"],
  },
  {
    label: "Frontend",
    match: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Backend",
    match: [
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "Swagger / OpenAPI",
    ],
  },
  {
    label: "Data",
    match: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    label: "UI/UX",
    match: ["UI/UX Design", "Wireframing", "Prototyping", "Figma"],
  },
  {
    label: "Tooling & Practice",
    match: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Agile SDLC",
      "Performance Optimization",
      "SEO Basics",
    ],
  },
];

export default skillGroups;
