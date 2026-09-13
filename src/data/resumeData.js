// All resume content lives here as plain JS data.
// Edit this file to update what's shown on the /resume page — no JSX changes needed.

const resumeData = {
  name: "Chilukuri Mallikharjun Reddy",
  contact: {
    phone: "+91 7036513724",
    email: "mkreddychilukuri075@gmail.com",
    location: "Kottagudem, Andhra Pradesh, 521230",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mallikharjun-reddy-chilukuri-754b92241" },
      { label: "GitHub", url: "https://github.com/MALLIKHARJUNCH-02" },
      { label: "Portfolio", url: "/" },
    ],
  },

  summary:
    "Full-Stack Web Developer skilled in React.js, JavaScript (ES6+), HTML5, CSS3, Node.js, Express.js, and MongoDB. Experienced in building responsive web applications, REST API integrations, and deploying scalable solutions on Vercel. Certified in Google UX Design with strong UI/UX, wireframing, prototyping, and problem-solving skills.",

  technicalSkills: [
    {
      category: "Programming Languages",
      items: ["Java", "C", "JavaScript (ES6+)"],
    },
    {
      category: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      category: "Databases & Query Languages",
      items: ["SQL", "PostgreSQL", "MongoDB Atlas", "MySQL"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Postman", "VS Code", "Vercel"],
    },
    {
      category: "UI/UX Design",
      items: ["Figma", "Wireframing", "Prototyping"],
    },
    {
      category: "Concepts",
      items: ["Responsive Design", "Cross-Browser Compatibility", "Debugging", "Agile SDLC", "SEO Basics"],
    },
  ],

  coreStrengths: [
    "Practical application of concepts through full-stack projects and internships.",
    "Clean, efficient coding style with focus on maintainability and best practices.",
    "Strong communication, teamwork, and continuous learning mindset.",
  ],

  projects: [
    {
      title: "SpiceSprint – Food & Grocery Delivery App",
      links: [
        { label: "Source Code", url: "https://github.com/MALLIKHARJUNCH-02/spicesprint-fe-be.git" },
        { label: "Live", url: "https://spice-sprint.vercel.app/" },
      ],
      bullets: [
        "Developed a responsive React app for grocery delivery with user authentication and cross-device support.",
        "Building backend APIs with Node.js/Express while frontend is deployed on Vercel; actively enhancing backend.",
      ],
    },
    {
      title: "Online Test Platform – MERN Stack (MongoDB, Express, React, Node.js)",
      links: [
        { label: "Source Code", url: "https://github.com/MALLIKHARJUNCHILUKURI-02/Online-Test-Platform-React-App-.git" },
      ],
      bullets: [
        "Developed a secure online exam platform with login, random MCQs, and auto-submit features.",
        "Tested features across scenarios, debugged issues, and ensured accurate real-time scoring.",
      ],
    },
  ],

  internships: [
    {
      role: "UI/UX Intern",
      company: "Xavirgin (OPC) Private Limited",
      date: "Mar 2026 – Jun 2026",
      bullets: ["Designing UI/UX flows and responsive interfaces for mobile and desktop applications."],
    },
    {
      role: "Web Development Intern",
      company: "Unified Mentor Pvt Ltd",
      date: "Feb 2025 – Mar 2025",
      bullets: ["Worked on building and optimizing full-stack applications."],
    },
  ],

  education: [
    {
      institution: "Lakireddy Bali Reddy College of Engineering, Mylavaram, India",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      date: "Graduated 04/2024",
      detail: "CGPA: 7.66",
    },
    {
      institution: "Sri Gayatri Junior College, Guntupalli, India",
      degree: "Intermediate",
      date: "2018 – 2020",
      detail: "CGPA: 8.78",
    },
  ],

  certifications: [
    "Google UX Design Professional Certificate",
    "IBM – Full Stack Software Developer",
    "Career Essentials in Software Development by Microsoft and LinkedIn",
  ],
};

export default resumeData;
