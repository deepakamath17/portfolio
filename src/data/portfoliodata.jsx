import edutrackImg from "../assets/edutrack.png";
import aspireImg from "../assets/aspire.png";
export const portfolioData = {
  name: "Deepa Kamath A G",
  shortName: "Deepa",
  role: "MCA Student",
  tagline: "Building Practical, User-Centric & Adaptive Digital Solutions.",
  profileImage: "/profile.jpg.jpeg",
  description:
    "I am an MCA student passionate about web development, database-driven applications, and building scalable platforms that solve real-world academic and skill-development challenges.",

  about: `I am currently pursuing my Master of Computer Applications (MCA) at Rajagiri College, having completed my Bachelor of Computer Applications (BCA) from SCMS School of Technology and Management.

 creating secure and interactive web applications using PHP, MySQL, HTML, CSS, JavaScript, python django react and node.js. My project experience spans building centralized academic monitoring systems and AI-based adaptive learning platforms.`,

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Rajagiri College of Social Sciences ",
      duration: "Currently Pursuing",
      description:
        "Focusing on advanced computer science applications, modern software development, web frameworks, and system architecture.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "SCMS School of Technology and Management",
      duration: "Completed",
      description:
        "Completed with CGPA 8.86/10. Gained a strong foundation in computer applications, database management systems, web development, and programming logic.",
    },
  ],
skills: [
  { name: "HTML5 & CSS3", category: "Frontend", level: "Intermediate" },
  { name: "JavaScript", category: "Frontend", level: "Intermediate" },
  { name: "React", category: "Frontend", level: "Beginner / Learning" },
  { name: "Python", category: "Backend", level: "Intermediate" },
  { name: "C", category: "Programming Languages", level: "Intermediate" },
  { name: "C++", category: "Programming Languages", level: "Intermediate" },
  { name: "Java", category: "Programming Languages", level: "Intermediate" },
  { name: "PHP", category: "Backend", level: "Intermediate" },
  { name: "Node.js & Express", category: "Backend", level: "Beginner / Learning" },
  { name: "MySQL / SQL", category: "Database", level: "Intermediate" },
  { name: "VS Code", category: "Tools", level: "Basic Usage" },
  { name: "XAMPP", category: "Tools", level: "Basic Usage" },
  { name: "phpMyAdmin", category: "Tools", level: "Basic Usage" },
  { name: "Google Chrome DevTools", category: "Tools", level: "Basic Usage" },
  { name: "Git & GitHub", category: "Tools", level: "Basic Usage" },
],

  projects: [
    {
      id: "aspire",
      title: "Aspire Learn",
      category: "Skill Development Platform",
      description:
        "A centralized, intelligent, and learner-centric platform for skill enhancement. Features personalized learning paths, AI-driven skill assessments, adaptive course progression, and automated digital certification.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/deepakamath17/Aspire",
      image: aspireImg,
      features: [
        "Single Login with Role-Based Access (Admin, Mentor, Learner)",
        "AI-Based Assessments & Skill Classification (Beginner, Intermediate, Advanced)",
        "Mastery-Based Module Progression & Level-Specific Content Delivery",
        "Online Examinations with Automated Evaluation & Instant Results",
        "Integrated Digital Certificate Generation & Centralized Analytics"
      ],
      screenshots: [
        { image: aspireImg, title: "Aspire Learn Platform Interface" }
      ]
    },
    {
      id: "edutrack",
      title: "Edu Tracker",
      category: "Academic Performance Monitoring System",
      description:
        "A centralized web system designed to streamline management, monitoring, and sharing of student academic performance across colleges for internal marks, attendance, and learning resources.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/deepakamath17/edutracker",
      image: edutrackImg,
      features: [
        "Multi-Role Access Control for Administrators, Faculty, Students, and Parents",
        "Hour-wise Subject Attendance Tracking & Internal Mark Calculation",
        "Faculty Resource Sharing & Assignment Submission Portal",
        "Real-Time Student Progress Tracking & Parental Monitoring Dashboards",
        "Consolidated & Role-Specific Downloadable Academic Reports"
      ],
      screenshots: [
        { image: edutrackImg, title: "Edu Tracker Dashboard Overview" }
      ]
    },
  ],

  social: {
    github: "https://github.com/deepakamath17",
    linkedin: "https://www.linkedin.com/in/deepa-kamath-a-g/",
  },

  email: "alungaldeepa@gmail.com", // Replace with your actual email address
};