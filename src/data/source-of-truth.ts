// src/data/resume-data.ts

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
  startDate?: string;
  endDate?: string;
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
  url?: string;
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

// ========== YOUR ACTUAL DATA ==========

export const resumeData: ResumeData = {
  personal: {
    fullName: "Kidanekal Melkam Alem",
    location: "Addis Ababa, Ethiopia",
    email: "akidanekal@gmail.com",
    phone: "+251 922 335 151",
    portfolioUrl: "https://kidanekal.vercel.app",
    githubUrl: "https://github.com/kidanekalm",
    linkedinUrl: "https://linkedin.com/in/kidanekalm",
    tagline: "Software Developer | Healthcare & AI Solutions",
    careerObjective: "To build intelligent, ethical, and accessible software that solves pressing challenges in African contexts — particularly in healthcare, finance, and cultural preservation — while contributing to global knowledge as a developer-researcher.",
    workPhilosophy: "Code is a tool for dignity — not just efficiency."
  },

  education: [
    {
      degree: "BSc in Computer Science",
      institution: "HiLCoE School of Computer Science and Technology",
      location: "Addis Ababa, Ethiopia",
      startDate: "Jan 2021",
      endDate: "Sept 2025",
      gpa: "3.9/4.0",
      honors: "Graduated with Great Distinction",
      description: "Medium of instruction: English",
      relevantCourses: [
        "Algorithms",
        "Data Structures",
        "Operating Systems",
        "Machine Learning",
        "Software Engineering",
        "Databases",
        "Networking"
      ]
    }
  ],

  experience: [
    {
      position: "Software Developer",
      company: "Opian Technologies",
      location: "Addis Ababa, Ethiopia",
      startDate: "November 2024",
      endDate: "Present",
      current: true,
      responsibilities: [
        "Developing Link — a scalable, multi-facility Electronic Medical Record (EMR) system for the Ethiopian healthcare ecosystem",
        "Built and deployed a Pharmaceutical Manufacturer Information System using .NET (backend) and Next.js (frontend)",
        "Collaborate with clinicians, product managers, and QA teams in agile cycles"
      ],
      technologies: ["C#", ".NET 6/8", "Entity Framework", "SQL Server", "Next.js", "REST APIs", "Git"],
      achievements: [
        "Enabled interoperable patient data management across clinics, hospitals, and labs",
        "Allowed local pharma companies to register and track drug products per Ethiopian FDA requirements",
        "Delivered secure, accessible, and low-bandwidth-optimized software"
      ]
    },
    {
      position: "Backend Developer",
      company: "Perago Systems",
      location: "Addis Ababa, Ethiopia",
      startDate: "June 2024",
      endDate: "September 2024",
      current: false,
      responsibilities: [
        "Optimized backend services and data pipelines for high-traffic applications",
        "Applied Command Query Responsibility Segregation (CQRS) pattern",
        "Gained hands-on experience in event-driven architecture and performance tuning"
      ],
      technologies: ["C#", ".NET", "CQRS", "Event-Driven Architecture", "Performance Optimization"]
    }
  ],

  projects: [
    {
      id: "ai-escrow",
      title: "AI-Mediated Escrow Platform",
      description: "Full-stack platform for secure peer-to-peer transactions with AI-driven dispute mediation",
      startDate: "Jul 2025",
      endDate: "Oct 2025",
      technologies: ["Go", "Python", "React", "AI/ML"],
      features: [
        "Real-time chat and secure payment handling",
        "AI-driven dispute mediation based on transaction history",
        "Demonstrates applied AI in trust-sensitive contexts"
      ]
    },
    {
      id: "link-emr",
      title: "Link — Multi-Facility EMR System",
      description: "Contributing to Ethiopia's national digital health infrastructure",
      startDate: "2024",
      endDate: "Present",
      technologies: [".NET", "Next.js", "SQL Server", "Healthcare APIs"],
      features: [
        "Enables care continuity, public health reporting, and regulatory compliance",
        "Optimized for low-bandwidth, offline-capable environments",
        "Multi-facility patient data management"
      ]
    },
    {
      id: "geez-ir",
      title: "Geez Document Retrieval System",
      description: "Information Retrieval system for Ge'ez (ancient Ethiopian liturgical language)",
      technologies: ["Python", "NLP", "Information Retrieval"],
      features: [
        "Custom stemmer for Ge'ez language",
        "Corpus indexing and query engine",
        "Evaluated via precision/recall/F1-score metrics",
        "Supports cultural preservation and historical research"
      ]
    },
    {
      id: "reporting-system",
      title: "Reporting System",
      description: "Civic tech tool for community issue reporting in Ethiopia",
      technologies: ["JavaScript", "Google Maps API", "Geolocation"],
      features: [
        "Clusters reports by geography to reduce duplication",
        "Routes issues to relevant authorities",
        "Designed for accessibility and usability in Ethiopian urban contexts"
      ]
    },
    {
      id: "cpu-visualizer",
      title: "CPU Scheduling Algorithm Visualizer",
      description: "Interactive simulator for OS scheduling algorithms",
      technologies: ["JavaScript", "HTML/CSS", "Algorithms"],
      features: [
        "Simulates FCFS, SJF, Round Robin algorithms",
        "Uses queues and timing logic to model real process execution",
        "Interactive visualization of scheduling decisions"
      ]
    },
    {
      id: "whitehat-security",
      title: "White Hat Security Disclosure",
      description: "Responsible disclosure of critical vulnerability in clinical lab system",
      features: [
        "Identified and responsibly reported critical vulnerability",
        "Prevented potential exposure of thousands of medical records",
        "Demonstrates commitment to ethical security practices"
      ],
      technologies: ["Security", "Ethical Hacking", "Vulnerability Assessment"]
    },
    {
      id: "producer-consumer",
      title: "Producer-Consumer Simulator",
      description: "Demonstration of classic concurrency problem",
      technologies: ["JavaScript", "Concurrency"],
      features: [
        "Uses bounded buffer for process synchronization",
        "Prevents data loss in concurrent systems",
        "Visual feedback clarifies synchronization concepts"
      ]
    },
    {
      id: "amharic-encryption",
      title: "Amharic Spoken Encryption Algorithm",
      description: "Python implementation of traditional Ethiopian oral encryption",
      technologies: ["Python", "Cryptography", "String Manipulation"],
      features: [
        "Secret letter insertion between characters",
        "Vowels from previous character act as dynamic keys",
        "Inspired by traditional Ethiopian oral encryption practices"
      ]
    },
    {
      id: "realestate-management",
      title: "RealEstate Management System",
      description: "Desktop application for property management in Ethiopia",
      technologies: ["C#", ".NET", "Entity Framework", "SQL Server"],
      features: [
        "Property search and management system",
        "Large media files stored on filesystem with URLs in database",
        "Optimized performance for Ethiopian market"
      ]
    },
    {
      id: "perceptron-learning",
      title: "Perceptron Learning Algorithm",
      description: "Implementation of foundational neural network algorithm",
      technologies: ["Python", "Machine Learning"],
      features: [
        "Trained on Iris dataset",
        "Linear classifier learning decision boundaries",
        "Iterative weight updates implementation"
      ]
    }
  ],

  skills: {
    languages: ["C#", "JavaScript", "Python", "Go", "SQL", "HTML5", "CSS3"],
    frameworks: [".NET 6/8", "React", "Next.js", "Entity Framework", "ASP.NET Core"],
    databases: ["SQL Server", "SQLite"],
    tools: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman"],
    concepts: [
      "Microservices",
      "REST APIs",
      "CQRS",
      "ORM",
      "Algorithms",
      "Data Structures",
      "AI Fundamentals",
      "Concurrency",
      "Low-Bandwidth Optimization"
    ],
    security: ["Ethical hacking", "Vulnerability disclosure", "Secure coding practices"]
  },

  certifications: [
    {
      id: "google-ai",
      title: "Google AI Essentials",
      issuer: "Google",
      issueDate: "2024"
    },
    {
      id: "ai-fundamentals",
      title: "AI Fundamentals",
      issuer: "Great Learning",
      issueDate: "2024"
    },
    {
      id: "data-science",
      title: "Data Science",
      issuer: "Udemy",
      issueDate: "2024"
    },
    {
      id: "robotics-ai",
      title: "Robotics and AI",
      issuer: "Great Learning",
      issueDate: "2024"
    }
  ],

  languages: [
    {
      name: "English",
      proficiency: "Fluent"
    },
    {
      name: "Amharic",
      proficiency: "Native"
    },
    {
      name: "Ge'ez",
      proficiency: "Reading/Research"
    }
  ],

  availability: {
    citizenship: "Ethiopian",
    visaStatus: "Requires sponsorship for EU/US roles",
    englishProficiency: "Fluent (degree taught in English); IELTS/TOEFL may be required for some EU scholarships",
    availableFrom: "March 2026",
    preferredDuration: "6-month duration preferred for internships"
  }
};

// ========== HELPER FUNCTIONS ==========

export function getFeaturedProjects(count: number = 3): Project[] {
  const featuredIds = ["ai-escrow", "link-emr", "geez-ir"];
  return resumeData.projects.filter(project => featuredIds.includes(project.id));
}

export function getExperienceYears(): number {
  const start = new Date("2024-06-01"); // June 2024
  const now = new Date();
  return Math.round((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25 * 100)) / 10;
}

export function formatDateRange(start: string, end: string): string {
  return `${start} – ${end}`;
}

export function getAllTechnologies(): string[] {
  const { skills, projects, experience } = resumeData;
  const allTech = new Set<string>();
  
  // Add from skills
  Object.values(skills).flat().forEach(tech => allTech.add(tech));
  
  // Add from projects
  projects.forEach(project => {
    project.technologies.forEach(tech => allTech.add(tech));
  });
  
  // Add from experience
  experience.forEach(exp => {
    exp.technologies.forEach(tech => allTech.add(tech));
  });
  
  return Array.from(allTech).sort();
}

// ========== FORMATTING FOR DIFFERENT USES ==========

export const resumeFormats = {
  // For one-page resume
  condensed: () => {
    return {
      personal: resumeData.personal,
      education: resumeData.education,
      experience: resumeData.experience.slice(0, 2), // Last 2 jobs
      projects: getFeaturedProjects(3),
      skills: resumeData.skills,
      certifications: resumeData.certifications.slice(0, 2)
    };
  },

  // For full CV
  detailed: () => {
    return resumeData;
  },

  // For JSON Resume standard (jsonresume.org)
  jsonResume: () => {
    return {
      basics: {
        name: resumeData.personal.fullName,
        label: resumeData.personal.tagline,
        email: resumeData.personal.email,
        phone: resumeData.personal.phone,
        url: resumeData.personal.portfolioUrl,
        location: {
          city: resumeData.personal.location.split(',')[0],
          country: "Ethiopia"
        },
        profiles: [
          {
            network: "GitHub",
            username: resumeData.personal.githubUrl.split('/').pop(),
            url: resumeData.personal.githubUrl
          },
          {
            network: "LinkedIn",
            username: resumeData.personal.linkedinUrl.split('/').pop(),
            url: resumeData.personal.linkedinUrl
          }
        ]
      },
      work: resumeData.experience.map(exp => ({
        name: exp.company,
        position: exp.position,
        startDate: exp.startDate,
        endDate: exp.current ? undefined : exp.endDate,
        summary: exp.responsibilities.join(' '),
        highlights: exp.achievements || []
      })),
      education: resumeData.education.map(edu => ({
        institution: edu.institution,
        area: edu.degree,
        studyType: "Bachelor",
        startDate: edu.startDate,
        endDate: edu.endDate,
        gpa: edu.gpa,
        courses: edu.relevantCourses
      })),
      projects: resumeData.projects.map(proj => ({
        name: proj.title,
        description: proj.description,
        highlights: proj.features,
        keywords: proj.technologies,
        startDate: proj.startDate,
        endDate: proj.endDate
      })),
      skills: Object.entries(resumeData.skills).map(([category, items]) => ({
        name: category,
        keywords: items
      })),
      certifications: resumeData.certifications.map(cert => ({
        name: cert.title,
        issuer: cert.issuer,
        date: cert.issueDate
      })),
      languages: resumeData.languages.map(lang => ({
        language: lang.name,
        fluency: lang.proficiency
      }))
    };
  },

  // For LinkedIn summary
  linkedInSummary: () => {
    return `
${resumeData.personal.tagline}

📍 ${resumeData.personal.location}
📧 ${resumeData.personal.email}
📱 ${resumeData.personal.phone}
🌐 ${resumeData.personal.portfolioUrl}

${resumeData.personal.careerObjective}

💼 EXPERIENCE:
${resumeData.experience.map(exp => 
  `• ${exp.position} at ${exp.company} (${formatDateRange(exp.startDate, exp.current ? 'Present' : exp.endDate)})`
).join('\n')}

🎓 EDUCATION:
${resumeData.education.map(edu => 
  `• ${edu.degree} from ${edu.institution} (GPA: ${edu.gpa}, ${edu.honors})`
).join('\n')}

🛠️ TECHNICAL SKILLS:
• Languages: ${resumeData.skills.languages.join(', ')}
• Frameworks: ${resumeData.skills.frameworks.join(', ')}
• Databases: ${resumeData.skills.databases.join(', ')}

${resumeData.personal.workPhilosophy}
    `.trim();
  },

  // For markdown (README, etc)
  markdown: () => {
    return `# ${resumeData.personal.fullName}

## Contact
- **Email**: ${resumeData.personal.email}
- **Phone**: ${resumeData.personal.phone}
- **Location**: ${resumeData.personal.location}
- **Portfolio**: ${resumeData.personal.portfolioUrl}
- **GitHub**: ${resumeData.personal.githubUrl}
- **LinkedIn**: ${resumeData.personal.linkedinUrl}

## Experience
${resumeData.experience.map(exp => `
### ${exp.position} at ${exp.company}
*${formatDateRange(exp.startDate, exp.current ? 'Present' : exp.endDate)} | ${exp.location}*

${exp.responsibilities.map(r => `- ${r}`).join('\n')}

**Technologies**: ${exp.technologies.join(', ')}
`).join('\n')}

## Education
${resumeData.education.map(edu => `
### ${edu.degree}
*${edu.institution}*  
*${formatDateRange(edu.startDate, edu.endDate)} | ${edu.location}*

- GPA: ${edu.gpa} (${edu.honors})
- ${edu.description}
- **Relevant Courses**: ${edu.relevantCourses.join(', ')}
`).join('\n')}

## Skills
${Object.entries(resumeData.skills).map(([category, items]) => `
**${category.charAt(0).toUpperCase() + category.slice(1)}**: ${items.join(', ')}
`).join('\n')}
    `.trim();
  }
};

// ========== EXPORTS ==========

export default resumeData;
