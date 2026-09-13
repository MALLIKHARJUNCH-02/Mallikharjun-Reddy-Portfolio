import { link } from "framer-motion/client";

// data/site.js
const siteData = {
  name: "Chilukuri Mallikharjun Reddy",
  designation: "Full Stack Developer | Java & MERN | UI/UX-Driven",
  tagLine: "Turning ideas into scalable web applications and intuitive digital experiences",
  resume: "/resume.pdf",
  about: `Building scalable, high-performance web applications with Java, Spring Boot, React.js, and thoughtful UI/UX.`,
  aboutme: `a passionate Full Stack Developer focused on building clean, scalable, and user-centric web applications.
I work across both Java and JavaScript ecosystems, with hands - on experience in Java, Spring Boot, Spring Data JPA, 
REST APIs, React.js, Node.js, and Express.js, supported by databases such as MySQL, PostgreSQL, and MongoDB.
Alongside development, I have a strong interest in UI/ UX design, with experience in design thinking, user research, 
wireframing, prototyping, and creating intuitive digital experiences.I enjoy bridging the gap between design and development
 to build products that are not only functional and efficient but also easy to use. I’m continuously strengthening my skills
  in full - stack development, SQL, Data Structures & Algorithms, and software engineering practices.I enjoy solving 
  problems, exploring new technologies, collaborating with teams, and turning ideas into meaningful digital products.`,

  skills: [
    // ⭐ Java Full Stack
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "REST APIs",
    "SQL",
    "MySQL",
    "Python",

    // ⭐ Frontend
    "JavaScript (ES6+)",
    "React.js",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",

    // ⭐ Backend / MERN
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",

    // ⭐ API & Security
    "JWT Authentication",
    "Swagger / OpenAPI",
    "Postman",

    // ⭐ UI/UX
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "Figma",

    // ⭐ Development Tools
    "Git",
    "GitHub",
    "VS Code",

    // ⭐ Programming Languages
    "C++",
    "C",

    // ⭐ Development Practices
    "Agile SDLC",
    "Performance Optimization",
    "SEO Basics"
  ],

  education: [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Lakireddy Balireddy College of Engineering",
      affiliated: "Jawaharlal Nehru Technological University Kakinada (JNTUK)",
      year: "2020 - 2024",
      cgpa: "7.66",
      description: "Graduated with strong foundation in electronics, programming, and web development."
    },
    {
      degree: "Intermediate",
      institution: "Sri Gayatri Junior college, Guntupalli, India",
      year: "2018 - 2020",
      cgpa: "8.7",
    }
  ],

  certifications: [
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      year: "Dec 2025",
      link: "https://link-vault-two-mauve.vercel.app/Google_UX_Design_Professional_Certificate.pdf"
    },
    {
      title: "IBM - Full Stack Software Developer",
      issuer: "IBM",
      year: "Oct 2025",
      link: "https://link-vault-two-mauve.vercel.app/IBM_Full_Stack_Software_Developer.pdf"
    },
    // {
    //   title: "Tata - GenAI Powered Data Analytics Job Simulation",
    //   issuer: "Forage",
    //   year: "Aug 2025"
    // },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      year: "Mar 2025",
      link: "https://link-vault-two-mauve.vercel.app/TheCompleteFull-StackWebDevelopmentBootcamp.pdf"
    },
    {
      title: "Learn Programming with Java- An Interactive Way (Infosys Springboard)",
      issuer: "Infosys Springboard",
      year: "Oct 2024",
      link: "https://link-vault-two-mauve.vercel.app/Learn_Programming_with_Java-An_Interactive.pdf"
    },
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      issuer: "Microsoft ",
      year: "Jul 2024",
      link: "https://link-vault-two-mauve.vercel.app/CareerEssentialsinGenerativeAIbyMicrosoftandLinkedIn.pdf"
    },
    {
      title: "Career Essentials in Software Development by Microsoft and Linkedln",
      issuer: "Microsoft ",
      year: "Jun 2024",
      link: "https://link-vault-two-mauve.vercel.app/CareerEssentialsinSoftwareDevelopmentbyMicrosoftandLinkedIn.pdf"
    },
    // {
    //   title: "Participant: Gesture Controlled Robot Workshop (JNTU Kakinada)",
    //   issuer: "JNTUK ",
    //   year: "Mar 2023"
    // },
    {
      title: "Soft Skills Course (The Hindu Group, Step by Hindu)",
      issuer: "The Hindu",
      year: "Mar 2023",
      link: "https://link-vault-two-mauve.vercel.app/step_by_hindu.pdf"
    }
  ],

  internships: [
    {
      "role": "UI/UX Intern",
      "company": "XAVIRGIN (OPC) PRIVATE LIMITED",
      "startDate": "2026-03-07",
      "endDate": "2026-06-28",
      "description": "Designing and improving user interfaces for internal company products, focusing on usability, layout structure, and user experience."
    },
    {
      role: "Web Development Intern",
      company: "Unified Mentor",
      startDate: "2025-02-15",
      endDate: "2025-3-15",
      description: "Worked on building and optimizing full-stack applications."
    },
    {
      role: "Networking Essentials & Packet Tracer",
      company: "CISCO-AICTE Virtual Internship (2023)",
      description: "Completed hands-on networking labs and Packet Tracer simulations."
    },
    // {
    //   role: "Internet of Things (IoT) Internship",
    //   company: "SRC e-Solutions, Vijayawada",
    //   description: "Built IoT prototypes and explored sensor integration with cloud platforms."
    // }
  ],

  // experience: [
  //   {
  //     role: "Full Stack Intern",
  //     company: "TechNova Solutions",
  //     type:"Full Time",
  //     fromMonth: "Apr",
  //     fromYear: "2024",
  //     toMonth: "Present",
  //     toYear: "",
  //     description: "Developed scalable front-end features and REST APIs using MERN stack.",
  //   },
  //    {
  //     role: "Web Developer",
  //     company: "Unified Mentor",
  //     type: "Contract",
  //     fromMonth: "Jan",
  //     fromYear: "2024",
  //     toMonth: "Mar",
  //     toYear: "2024",
  //     description: "Worked on building and optimizing full-stack web applications.",
  //   },
  // ],

  projects: [
    {
      title: "Learnosphere – EdTech Platform (UI/UX Case Study)",
      description: "A UX-focused EdTech design case study exploring habit-based learning through calm interfaces, StudyLoop calendars, and reflection-driven insights.",
      link: "https://github.com/MALLIKHARJUNCH-02/LearnoSphere.git",
      livelink: "https://www.figma.com/proto/E1jINB5D1LBXmfwWlmm9cq/LearnoSphere-Design?node-id=0-2626&p=f&t=2oESIU4P9DKvLPGz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A2227   "
    },
    {
      title: "SpiceSprint – Full Stack Grocery Delivery App (In Progress)",
      description: "Full-stack grocery delivery app using React, Node.js, Express, MongoDB, and Bootstrap with secure authentication, responsive UI, and deployed backend on Render and frontend on Vercel; actively developing features like order management and delivery tracking.",
      link: "https://github.com/MALLIKHARJUNCH-02/spicesprint-fe-be.git",
      livelink: "https://spice-sprint.vercel.app/"
    },
    {
      title: "Online Test Platform",
      description: "A scalable MERN-based online exam platform with JWT authentication, real-time countdown, dynamic questions, automatic submission, and instant scoring.",
      link: "https://github.com/MALLIKHARJUNCHILUKURI-02/Online-Test-Platform-React-App-.git"
    },
    {
      title: "CDM Restaurant Website",
      description: "A full-stack restaurant platform with secure login, menu management, 24-hour sessions, PostgreSQL data persistence, and email support via Nodemailer.",
      link: "https://github.com/MALLIKHARJUNCHILUKURI-02/CDM---Delights"
    },
    {
      title: "To-Do List Application",
      description: "A CRUD-enabled task manager built with Node.js, Express, EJS, and PostgreSQL to offer intuitive widget-based user experience.",
      link: "https://github.com/MALLIKHARJUNCH-02/to_do_list"
    },
    {
      title: "Shop Finder — Brewery Locator Web App",
      description: "A brewery locator web app integrating OpenBreweryDB API with secure HTTPS, Node.js, Express, and dynamic JavaScript-driven UI.",
      link: "https://github.com/MALLIKHARJUNCHILUKURI-02/Brewery-Shop-Finder"
    },
    {
      title: "Blog Platform (CDM Blog: Express Yourself Freely)",
      description: "A full-stack blogging site built with Node.js, Express, and EJS focused on clean UI, dynamic content handling, and smooth navigation.",
      link: "https://github.com/MALLIKHARJUNCH-02/blog_backend"
    },
    {
      title: "Netflix Clone",
      description: "A responsive front-end Netflix replica designed with HTML and CSS, emphasizing modular layout and cross-device compatibility.",
      link: "https://github.com/MALLIKHARJUNCHILUKURI-02/netflix-clone"
    },
  ],

  contact: {
    email: "mkreddychilukuri075@gmail.com",
    zohoemail: "mallikharjunreddy@zohomail.in",
    primaryPhone: "+91 7036513724",
    secondaryPhone: "+91 7799153109",
    linkedin: "https://www.linkedin.com/in/mallikharjun-reddy-chilukuri-754b92241",
    github: "https://github.com/MALLIKHARJUNCH-02"
  }
};


export default siteData;
