import myImage from "../assets/my.jpeg"

export const personalInfo = {
  name: "Dilanjan Ranmalinda",
  title: "Full-Stack Software Engineer",
  email: "dilanjanranmalinda98@gmail.com",
  location: "Sri Lanka",
  phone: "+94 778609574",
  linkedin: "https://www.linkedin.com/in/dilanjan-ranmalinda-20756525b/",
  github: "https://github.com/dilanjanranmalinda",
  bio: "Passionate Full-Stack Software Engineer with hands-on experience across the full development lifecycle. I specialize in building modern web applications using React, Node.js, and cloud technologies. Currently working at DigitalX Labs, I bring strong problem-solving skills and a commitment to delivering innovative digital solutions.",
  avatar: myImage,
  resumeUrl: "/Dilanjan-Ranmalinda.pdf"
}

export const experience = [
  {
    id: 1,
    role: "Full-Stack Software Engineer",
    company: "DigitalX (Pvt) Ltd",
    period: "June 2025 – Present",
    location: "Colombo, Sri Lanka",
    description: [
      "Leading full-stack development of client projects using MERN stack",
      "Architecting scalable solutions and mentoring junior developers",
      "Implementing CI/CD pipelines and improving deployment workflows"
    ]
  },
  {
    id: 2,
    role: "Associate Full-Stack Software Engineer",
    company: "DigitalX (Pvt) Ltd",
    period: "April 2024 – June 2025",
    location: "Colombo, Sri Lanka",
    description: [
      "Built and maintained web applications using React, Node.js, and PHP/Laravel",
      "Developed RESTful APIs and integrated third-party services",
      "Collaborated with cross-functional teams to deliver client requirements"
    ]
  },
  {
    id: 3,
    role: "Intern Software Engineer",
    company: "ZMessenger (PVT) LTD",
    period: "July 2023 – April 2024",
    location: "Sri Lanka",
    description: [
      "Assisted in developing messaging platform features",
      "Gained foundational experience in full-stack development",
      "Worked with Java, PHP, and database management"
    ]
  }
]

export const education = [
  {
    id: 1,
    degree: "Master of Information Technology (MIT)",
    institution: "Uva Wellassa University",
    period: "Present",
    description: "Pursuing advanced studies in Information Technology"
  },
  {
    id: 2,
    degree: "B.Tech. in Information Technology & Communication(Second Class Upper Division)",
    institution: "SIBA Campus",
    period: "Graduated",
    description: "Specialized in Information and Communication Technology"
  }
]

export const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "PHP"] },
  { category: "Frontend", items: ["React", "HTML5/CSS3", "Tailwind CSS", "Bootstrap", "Material UI"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Laravel", "FastAPI", "REST APIs"] },
  { category: "Database", items: ["MongoDB", "MySQL", "SQLite", "Firebase"] },
  { category: "Tools & Platforms", items: ["Git/GitHub", "GitLab", "VS Code", "Linux", "Docker"] },
  { category: "Mobile", items: ["Android Studio", "Java/Kotlin", "React Native"] },
  { category: "Design", items: ["Adobe Photoshop", "Canva", "UI/UX Design"] },
  { category: "Other", items: ["Jira", "Confluence", "Slack", "Power BI"] }
]

export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  category: "web" | "mobile" | "widget" | "fullstack"
  preview?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sportway.lk",
    description: "A comprehensive sports betting and gaming platform with real-time odds, multi-game support, and secure payment integration. Built with modern React architecture.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    live: "https://sportway.lk",
    category: "fullstack",
    preview: "https://img.icons8.com/fluency/96/sports-mode.png"
  },
  {
    id: 2,
    title: "Lucky1",
    description: "A feature-rich gaming application with interactive UI, real-time game mechanics, and user progression system. Includes leaderboard and reward management.",
    tech: ["React", "JavaScript", "Node.js", "Firebase"],
    live: "https://lucky1.lk",
    category: "web",
    preview: "https://img.icons8.com/fluency/96/clover.png"
  },
  {
    id: 3,
    title: "Bid2Win",
    description: "An online auction and bidding platform enabling users to participate in live auctions, place bids, and win items. Features real-time bid updates.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    live: "https://bid2win.lks",
    category: "fullstack",
    preview: "https://img.icons8.com/fluency/96/auction.png"
  },
  {
    id: 4,
    title: "AdStudio",
    description: "A digital advertising management platform for creating, managing, and tracking ad campaigns with analytics dashboard and reporting tools.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    live: "https://adstudio.cloud/",
    category: "web",
    preview: "https://img.icons8.com/fluency/96/advertising.png"
  },
  {
    id: 5,
    title: "OY Exports",
    description: "OY Exports Pvt Ltd specializes in manufacturing premium garments for private labels, proudly serving clients worldwide from our headquarters in Sri Lanka.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    live: "https://oyexport.com/",
    category: "web",
    preview: "https://img.icons8.com/fluency/96/advertising.png"
  },
  {
    id: 6,
    title: "Task Tracker",
    description: "A project management application with task tracking, team collaboration, kanban board, and workflow automation features.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    github: "https://github.com/dilanjanranmalinda/TaskFlow",
    category: "fullstack",
    preview: "https://img.icons8.com/fluency/96/task.png"
  },
  {
    id: 7,
    title: "Meemure Village Camping website",
    description: "A tourism and travel companion app showcasing Meemure village with location guides, cultural insights, and trip planning features.",
    tech: ["TypeScript", "React Native", "Node.js"],
    github: "https://github.com/dilanjanranmalinda/meemure-app",
    category: "mobile",
    preview: "https://img.icons8.com/fluency/96/travel.png"
  },
  {
    id: 8,
    title: "React Widgets Library",
    description: "A collection of reusable React widgets and components including charts, data tables, modals, forms, and interactive UI elements.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    category: "widget",
    preview: "https://img.icons8.com/fluency/96/widget.png"
  },
  {
    id: 9,
    title: "Student Management System",
    description: "A comprehensive student management app with CRUD operations, attendance tracking, grade management, and reporting features.",
    tech: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com/dilanjanranmalinda/StudentManagementApp",
    category: "mobile",
    preview: "https://img.icons8.com/fluency/96/student.png"
  },
  {
    id: 10,
    title: "Employee Management API",
    description: "A robust REST API for employee management with authentication, role-based access, and comprehensive CRUD operations.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/dilanjanranmalinda/employee-api",
    category: "fullstack",
    preview: "https://img.icons8.com/fluency/96/employee.png"
  },
  {
    id: 11,
    title: "Election Vote Web App",
    description: "A real-time voting application with live result tracking, user authentication, and secure polling system.",
    tech: ["JavaScript", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/dilanjanranmalinda/Vote",
    category: "fullstack",
    preview: "https://img.icons8.com/fluency/96/vote.png"
  }
]
