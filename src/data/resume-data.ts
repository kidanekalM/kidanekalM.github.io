// ================= TYPES =================

export interface ResumeData {
  personal: PersonalInfo;
  education: Education[];
  experience: WorkExperience[];
  projects: Project[];
  skills: TechnicalSkills;
  certifications: Certification[];
  languages: Language[];
  availability: AvailabilityInfo;
}

export interface PersonalInfo {
  fullName: string;
  location: string;
  email: string;
  phone: string;
  portfolioUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  tagline: string;
  careerObjective: string;
  workPhilosophy: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: string;
  description: string;
  relevantCourses: string[];
}

export interface WorkExperience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  features: string[];
  media?: {
    images?: string[];
    videos?: string[];
  };
}

export interface TechnicalSkills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
  concepts: string[];
  security: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
}

export interface Language {
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Reading/Research';
}

export interface AvailabilityInfo {
  citizenship: string;
  visaStatus: string;
  englishProficiency: string;
  availableFrom: string;
  preferredDuration: string;
}

// ================= DATA =================

export const resumeData: ResumeData = {
  personal: {
    fullName: "Kidanekal Melkam Alem",
    location: "Addis Ababa, Ethiopia",
    email: "akidanekal@gmail.com",
    phone: "+251 922 335 151",
    portfolioUrl: "https://kidanekal.vercel.app",
    githubUrl: "https://github.com/kidanekalm",
    linkedinUrl: "https://linkedin.com/in/kidanekalm",
    tagline: "Software Developer | Healthcare, AI & Civic Tech",
    careerObjective:
      "To build ethical, resilient, and context-aware software systems that solve real problems in African healthcare, governance, and finance, while growing as a globally competent developer-researcher.",
    workPhilosophy:
      "Code is a tool for dignity — not just efficiency."
  },

  education: [
    {
      degree: "BSc in Computer Science",
      institution: "HiLCoE School of Computer Science and Technology",
      location: "Addis Ababa, Ethiopia",
      startDate: "Jan 2021",
      endDate: "Sept 2025",
      gpa: "3.9/4.0",
      honors: "Great Distinction",
      description: "Program taught fully in English.",
      relevantCourses: [
        "Algorithms & Data Structures",
        "Operating Systems",
        "Software Engineering",
        "Machine Learning",
        "Databases",
        "Computer Networks"
      ]
    }
  ],

  experience: [
    {
      position: "Software Developer",
      company: "Opian Technologies",
      location: "Addis Ababa, Ethiopia",
      startDate: "Nov 2024",
      endDate: "Present",
      current: true,
      responsibilities: [
        "Developing Link — a scalable multi-facility EMR system for Ethiopian healthcare",
        "Built a Pharmaceutical Manufacturer Information System aligned with Ethiopian FDA regulations",
        "Collaborating with clinicians and product teams using agile workflows"
      ],
      technologies: [
        "C#",
        ".NET 6/8",
        "Entity Framework",
        "SQL Server",
        "Next.js",
        "REST APIs"
      ],
      achievements: [
        "Enabled interoperable patient data across clinics, hospitals, and labs",
        "Delivered low-bandwidth-optimized healthcare software",
        "Improved regulatory compliance for local pharmaceutical manufacturers"
      ]
    },
    {
      position: "Backend Developer",
      company: "Perago Systems",
      location: "Addis Ababa, Ethiopia",
      startDate: "Jun 2024",
      endDate: "Sep 2024",
      current: false,
      responsibilities: [
        "Worked on backend performance optimization",
        "Applied CQRS and event-driven design patterns"
      ],
      technologies: [
        "C#",
        ".NET",
        "CQRS",
        "Event-Driven Architecture"
      ]
    }
  ],

  // ================= PROJECTS (SOURCE OF TRUTH) =================

  projects: [
    {
      id: "geez-ir",
      title: "Geez Document Retrieval System",
      link: "https://geezsearch.streamlit.app",
      description:
        "Dedicated Information Retrieval system for Ge'ez texts, featuring a custom stemmer and evaluated using precision, recall, and F1-score.",
      technologies: ["Python", "NLP", "Information Retrieval"],
      features: [
        "Custom Ge'ez stemmer",
        "Indexed Ge'ez corpus",
        "Precision/Recall/F1 evaluation"
      ],
      media: { images: ["GeezRetr.png"] }
    },

    {
      id: "reporting-system",
      title: "Civic Reporting System",
      description:
        "Location-based civic reporting platform that clusters community issues and routes them to relevant authorities.",
      technologies: ["JavaScript", "Google Maps API", "Geolocation"],
      features: [
        "Geographic clustering",
        "Duplicate report reduction",
        "Authority routing"
      ],
      media: { images: ["thumbnail.jpg"], videos: ["pirsvid.mp4"] }
    },

    {
      id: "graphics-simulator",
      title: "Raster Graphics Simulator",
      description:
        "Sandbox environment for experimenting with raster graphics algorithms and rendering trade-offs.",
      technologies: ["JavaScript", "Computer Graphics"],
      features: [
        "Rasterization experiments",
        "Performance visualization"
      ],
      media: { images: ["raster.jpg"], videos: ["rastervid.mp4"] }
    },

    {
      id: "hafcom",
      title: "HaFCoM Corporate Website",
      description:
        "Official website for an Ethiopian construction and architectural firm.",
      technologies: ["React"],
      features: [
        "Project showcase",
        "Service catalog",
        "Client-facing design"
      ],
      media: { images: ["hafcom.jpg"], videos: ["hafcomvid.mp4"] }
    },

    {
      id: "fastfood",
      title: "Fast Food Restaurant Management System",
      description:
        "Queue-based system for coordinating kitchen workflows in fast-paced restaurants.",
      technologies: ["C#", ".NET"],
      features: [
        "Order lifecycle tracking",
        "Event-driven updates"
      ],
      media: { images: ["fastfood.jpg"], videos: ["fastfood.mp4"] }
    },

    {
      id: "cpu",
      title: "CPU Scheduling Algorithm Visualizer",
      description:
        "Interactive simulator for FCFS, SJF, and Round Robin scheduling algorithms.",
      technologies: ["JavaScript", "Algorithms"],
      features: [
        "Preemptive & non-preemptive modes",
        "Queue-based simulation"
      ],
      media: { images: ["cpupic.jpg"], videos: ["cpuvid.mp4"] }
    },

    {
      id: "producer-consumer",
      title: "Producer–Consumer Simulator",
      description:
        "Visual simulator of concurrency synchronization using a bounded buffer.",
      technologies: ["JavaScript", "Concurrency"],
      features: [
        "Process synchronization",
        "Race condition prevention"
      ],
      media: { images: ["prodcon.jpg"], videos: ["prodvid.mp4"] }
    },

    {
      id: "riddle",
      title: "River Crossing Riddle",
      description:
        "JavaScript implementation of a classic logic puzzle using state transitions.",
      technologies: ["JavaScript"],
      features: ["State management", "Logic validation"],
      media: { images: ["riddle.jpg"], videos: ["riddlevid.mp4"] }
    },

    {
      id: "amharic-encryption",
      title: "Amharic Spoken Encryption Algorithm",
      description:
        "Python implementation of traditional Ethiopian oral encryption techniques.",
      technologies: ["Python", "Cryptography"],
      features: ["Dynamic vowel keys", "String transformation"]
    },

    {
      id: "whitehat",
      title: "White Hat Security Disclosure",
      description:
        "Responsible disclosure of a critical vulnerability in a medical lab system.",
      technologies: ["Security"],
      features: [
        "Vulnerability identification",
        "Ethical disclosure"
      ],
      media: { images: ["whitehat.jpg"] }
    },

    {
      id: "css-gallery",
      title: "CSS Projects Gallery",
      description:
        "Collection of CSS experiments focused on layout, animation, and responsiveness.",
      technologies: ["CSS"],
      features: ["Animations", "Responsive layouts"],
      media: { images: ["cssNat.jpg"], videos: ["cssvid.mp4"] }
    },

    {
      id: "realestate",
      title: "Real Estate Management System",
      description:
        "Desktop property management system optimized for Ethiopian use cases.",
      technologies: ["C#", ".NET", "SQL Server"],
      features: [
        "Filesystem-based media storage",
        "ORM-backed data access"
      ],
      media: { images: ["realpic.jpg"] }
    },

    {
      id: "perceptron",
      title: "Perceptron Learning Algorithm",
      description:
        "Implementation of a foundational neural network trained on the Iris dataset.",
      technologies: ["Python", "Machine Learning"],
      features: ["Linear classification", "Iterative learning"],
      media: { images: ["percPic.png"] }
    },

    {
      id: "link-emr",
      title: "Link — Multi-Facility EMR",
      description:
        "National-scale EMR platform for Ethiopian clinics, hospitals, and labs.",
      technologies: [".NET", "Next.js", "Healthcare IT"],
      features: [
        "Interoperable patient records",
        "Low-bandwidth optimization"
      ]
    },

    {
      id: "pharma",
      title: "Pharmaceutical Manufacturer Information System",
      description:
        "Regulatory compliance platform for Ethiopian pharmaceutical manufacturers.",
      technologies: [".NET", "Next.js"],
      features: [
        "Drug batch tracking",
        "FDA-aligned workflows"
      ]
    }
  ],

  skills: {
    languages: ["C#", "JavaScript", "Python", "Go", "SQL"],
    frameworks: [".NET", "React", "Next.js"],
    databases: ["SQL Server", "SQLite"],
    tools: ["Git", "Postman", "VS Code"],
    concepts: [
      "Algorithms",
      "Data Structures",
      "Concurrency",
      "CQRS",
      "Low-Bandwidth Systems"
    ],
    security: [
      "Ethical Hacking",
      "Responsible Disclosure",
      "Secure Coding"
    ]
  },

  certifications: [
    { id: "prompt", title: "Prompt Design", issuer: "Google Vertex AI", issueDate: "2024" },
    { id: "ai", title: "AI Fundamentals", issuer: "Great Learning", issueDate: "2024" },
    { id: "ds", title: "Data Science", issuer: "Udemy", issueDate: "2024" },
    { id: "robotics", title: "Robotics and AI", issuer: "Great Learning", issueDate: "2024" }
  ],

  languages: [
    { name: "Amharic", proficiency: "Native" },
    { name: "English", proficiency: "Fluent" },
    { name: "Ge'ez", proficiency: "Reading/Research" }
  ],

  availability: {
    citizenship: "Ethiopian",
    visaStatus: "Requires sponsorship",
    englishProficiency: "Fluent (degree taught in English)",
    availableFrom: "March 2026",
    preferredDuration: "6 months"
  }
};

export default resumeData;
