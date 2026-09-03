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
  organization?: string;
  description: string;
  link?: string;
  repositoryUrl?: string;
  story?: {
    problem: string;
    constraint: string;
    contribution: string;
    decision: string;
    outcome: string;
  };
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
    tagline: "Full-Stack Software Developer | Products, Platforms & Systems",
    careerObjective:
      "I build reliable, maintainable software across web platforms, backend systems, desktop tools, developer infrastructure, and applied computing, turning real constraints into products people can use.",
    workPhilosophy:
      "Product, frontend, backend, data, testing, and delivery."
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
        "My primary Link contribution is its modular clinical platform: one shared patient-visit context with interchangeable tools and facility-level controls for enablement, role visibility, and workflow placement",
        "Contributing across three Opian products: Link, OpianERP, and the Pharmaceutical Manufacturer Information System",
        "Building OpianERP as a modular React and .NET business operations platform with feature-owned domains, typed API boundaries, and workflow automation",
        "Built a Pharmaceutical Manufacturer Information System aligned with Ethiopian FDA regulations",
        "Collaborating with clinicians and product teams using agile workflows",
        "Contributed to a full-stack healthcare operations platform spanning public onboarding, clinic administration, reception, triage, doctor workflows, cashier, lab, imaging, pharmacy, inpatient, logistics, and super-admin controls",
        "Worked across a layered backend architecture built around Link.Api, Link.Application, Link.Domain, and Link.Infrastructure, with a feature-oriented frontend supporting role-based dashboards and operational workflows",
        "Helped stabilize workflow contracts across frontend, backend query behavior, seed data, and test environments to keep queues, reporting, and endpoint behavior aligned"
      ],
      technologies: [
        "C#",
        ".NET 6/8",
        "Entity Framework",
        "SQL Server",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Vite",
        "Next.js",
        "REST APIs"
      ],
      achievements: [
        "Enabled interoperable patient data across clinics, hospitals, and labs",
        "Delivered low-bandwidth-optimized healthcare software",
        "Improved regulatory compliance for local pharmaceutical manufacturers",
        "Supported a production-scale healthcare platform with seeded environments, endpoint maps, Playwright coverage, and facility-scoped operations",
        "Strengthened consistency across queue propagation, reporting flows, and role-based workstreams as the platform matured from feature expansion into cross-system stabilization"
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
      repositoryUrl: "https://github.com/kidanekalM/IR_Project",
      description:
        "Dedicated Information Retrieval system for Ge'ez texts, featuring a custom stemmer and evaluated using precision, recall, and F1-score.",
      technologies: ["Python", "NLP", "Information Retrieval"],
      features: [
        "Custom Ge'ez stemmer",
        "Indexed Ge'ez corpus",
        "Precision/Recall/F1 evaluation"
      ],
      media: { images: ["GeezRetr.png"] },
      story: {
        problem: "Ge'ez texts are difficult to search because general-purpose retrieval tools do not account for the language's script and morphology.",
        constraint: "The work had to operate with a limited corpus and language resources while still producing measurable retrieval results.",
        contribution: "Built the retrieval pipeline, a custom Ge'ez stemmer, corpus indexing, search behavior, and evaluation workflow.",
        decision: "Use a dedicated information-retrieval pipeline and evaluate it directly with precision, recall, and F1 rather than relying on generic search behavior.",
        outcome: "Delivered a working Ge'ez search system with a custom linguistic preprocessing path and measurable retrieval performance."
      }
    },

    {
      id: "reporting-system",
      link: "https://pirs.vercel.app",
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
      repositoryUrl: "https://github.com/kidanekalM/Raster",
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
      link: "https://hafcom.vercel.app",
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
      repositoryUrl: "https://github.com/kidanekalM/CPU_Scheduling_Algorithm_Visualizer",
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
      repositoryUrl: "https://github.com/kidanekalM/Producer-and-Consumer",
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
      repositoryUrl: "https://github.com/kidanekalM/riddle",
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
      repositoryUrl: "https://github.com/kidanekalM/Yewef_Quanqua",
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
      repositoryUrl: "https://github.com/kidanekalM/nature-css",
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
      id: "safe-deal",
      title: "SafeDeal Hybrid Escrow",
      link: "https://safe-deal.vercel.app",
      repositoryUrl: "https://github.com/kidanekalM/SafeDeal",
      description:
        "A hybrid escrow platform for secure Ethiopian transactions, combining Chapa payments with blockchain-anchored records for transparent, auditable deal states.",
      technologies: ["Go", "React", "TypeScript", "PostgreSQL", "Ethereum", "RabbitMQ"],
      features: [
        "Milestone-based ETB escrow through Chapa",
        "Buyer, seller, and mediator workflows with dispute resolution",
        "Ethereum state anchoring, real-time WebSocket updates, and event-driven processing"
      ],
      story: {
        problem: "Online deals need a trusted way to hold and release Ethiopian Birr without asking users to treat cryptocurrency as the payment rail.",
        constraint: "The product has to preserve local payment compliance while creating an independent, tamper-resistant audit trail for each deal state.",
        contribution: "Designed and built the product flow across buyer, seller, mediator, milestone, dispute, payment, and real-time notification concerns.",
        decision: "Use Chapa for regulated ETB movement, then anchor transaction-state evidence to Ethereum while RabbitMQ and WebSockets coordinate asynchronous updates.",
        outcome: "Delivered a working public escrow product with auditable state transitions, milestone release, mediation, and separate live and source access."
      }
    },

    {
      id: "opian-erp",
      title: "Opian ERP",
      organization: "Opian Technologies",
      description:
        "A modular multi-tenant ERP platform with a React frontend and .NET backend for identity, HRM, workflow-driven operations, auditing, and tenant administration.",
      technologies: ["React", "TypeScript", "Vite", ".NET 9", "EF Core", "PostgreSQL", "Tailwind CSS", "TanStack Query"],
      features: [
        "Feature-owned modules with shared application shell boundaries",
        "Typed server-state and API client architecture",
        "Role, page, and action permissions with tenant-bound sessions",
        "Employee records, timesheets, leave requests, and approval workflows",
        "Versioned workflow engine, audit metadata, and SaaS tenant foundations",
        "Automated formatting, linting, build, test, and pull-request quality checks"
      ],
      story: {
        problem: "A growing ERP frontend can quickly become a shared-file bottleneck where teams overwrite one another and business behavior leaks into generic UI code.",
        constraint: "Multiple feature teams need independent ownership while permissions, accounting values, and lifecycle rules remain controlled by backend contracts.",
        contribution: "Established the frontend foundation, module ownership rules, shared shell boundaries, typed API access, server-state conventions, and quality gates.",
        decision: "Organize work by business feature, use TanStack Query for server state, and keep the shared application shell separate from module behavior.",
        outcome: "Created a maintainable ERP frontend foundation that supports parallel feature delivery with automated build, lint, formatting, and test checks."
      }
    },

    {
      id: "afa-text-to-speech",
      title: "AFA Text-to-Speech",
      link: "https://github.com/kidanekalM/text_to_speech",
      description:
        "A cross-platform floating desktop app that turns typed text into speech and routes the audio into meeting applications as virtual microphone input.",
      technologies: ["Electron", "JavaScript", "Swift", "C#", "Linux Audio"],
      features: [
        "Always-on-top desktop speaking interface",
        "Virtual audio routing through BlackHole, VB-CABLE, PipeWire, and PulseAudio",
        "Packaged Windows and Linux builds with diagnostics and setup flows"
      ],
      story: {
        problem: "People who cannot or do not want to speak in a meeting need typed speech to appear to conferencing software as microphone input, not just play through speakers.",
        constraint: "Virtual-audio installation and routing differ substantially across macOS, Windows, and Linux, and packaging must not promise drivers that are absent.",
        contribution: "Built the floating desktop interface, shared speech controller, platform-specific routing and driver checks, diagnostics, onboarding, and distributable builds.",
        decision: "Separate speech generation from audio routing and use each platform's established virtual device layer: BlackHole, VB-CABLE, or PipeWire/PulseAudio.",
        outcome: "Produced shareable Windows and Linux builds with setup diagnostics, while keeping unfinished platform capabilities explicit rather than hiding them."
      }
    },

    {
      id: "ethio-tech-repository",
      title: "Ethiopian Tech Services Directory",
      link: "https://ethio-tech-repo.vercel.app",
      description:
        "A curated, open developer directory for Ethiopian payment, messaging, hosting, fintech, and market-data services.",
      technologies: ["HTML", "Open Source", "Developer Documentation"],
      features: [
        "Locally relevant API and platform discovery",
        "Categorized payment, SMS, hosting, fintech, and data resources",
        "Contribution-friendly public repository"
      ]
    },

    {
      id: "efficiency-metric",
      title: "Efficiency Metric Calculator",
      repositoryUrl: "https://github.com/kidanekalM/Efficiency_Metric_Calculator",
      description:
        "An interactive implementation of a custom metric for comparing physical value by weight, cost, and volume.",
      technologies: ["JavaScript", "HTML", "CSS", "Applied Mathematics"],
      features: [
        "Weight-relative cost and volume comparison",
        "Browser-based calculation and result exploration",
        "Companion implementation for an original technical article"
      ]
    },

    {
      id: "link-emr",
      title: "Link — Multi-Facility EMR",
      organization: "Opian Technologies",
      description:
        "A modular clinical operations platform where vitals, consultation, lab, imaging, pharmacy, and other tools plug into one shared patient-visit context.",
      technologies: [".NET", "ASP.NET Core", "React", "Vite", "SQL Server", "Healthcare IT"],
      features: [
        "Shared patient-visit context used by interchangeable clinical modules",
        "Facility-controlled tool enablement, role visibility, and workflow placement",
        "Vitals, consultation, lab, imaging, and pharmacy tools built around the same visit model",
        "Planned clinician-controlled tool suggestions informed by usage patterns",
        "Interoperable patient records",
        "Low-bandwidth optimization",
        "Role-based workflows spanning reception, triage, doctor, cashier, lab, imaging, pharmacy, inpatient, logistics, and super-admin operations",
        "Layered architecture with Link.Api, Link.Application, Link.Domain, and Link.Infrastructure boundaries",
        "Facility-scoped operations, seeded environments, endpoint maps, and Playwright-backed workflow coverage",
        "Queue, reporting, and workflow contract stabilization across frontend and backend subsystems"
      ],
      story: {
        problem: "Clinical software becomes difficult to adapt when every workflow is hard-coded into one application, even though every tool operates on the same patient visit.",
        constraint: "Facilities need different clinical tools, role access, and screen placement while preserving one visit record, low-bandwidth operation, and consistent contracts across the frontend and backend.",
        contribution: "My primary contribution was shaping and implementing Link as a modular clinical platform: one shared visit context with interchangeable tools for vitals, consultation, lab, imaging, pharmacy, and future workflows, plus facility-level controls for enablement, visibility, and placement.",
        decision: "Treat each clinical capability as a module attached to a shared visit context, keep facility configuration outside module code, and reserve usage-based suggestions for a clinician-controlled recommendation layer.",
        outcome: "Established a platform direction where facilities can compose clinical workflows without rebuilding the application, while retaining Link's role-based queues, reporting, testing, and multi-facility operational scope."
      }
    },

    {
      id: "pharma",
      title: "Pharmaceutical Manufacturer Information System",
      organization: "Opian Technologies",
      repositoryUrl: "https://github.com/kidanekalM/ManufacturerSys",
      description:
        "Regulatory compliance platform for Ethiopian pharmaceutical manufacturers.",
      technologies: [".NET", "Next.js"],
      features: [
        "Drug batch tracking",
        "FDA-aligned workflows"
      ]
    },

    {
      id: "wake-cipher",
      title: "WAKE Cipher Experiment",
      repositoryUrl: "https://github.com/kidanekalM/WAKE",
      description:
        "Python study of word auto-key encryption, including key expansion, substitution-box generation, and reversible text transformation.",
      technologies: ["Python", "Cryptography", "Algorithms"],
      features: [
        "Auto-key generation from a user-supplied key",
        "Substitution-box construction and register updates",
        "Paired encryption and decryption flow"
      ]
    },

    {
      id: "opengl-cannon",
      title: "OpenGL Cannon Graphics Study",
      repositoryUrl: "https://github.com/kidanekalM/CannonGame",
      description:
        "A compact PyOpenGL experiment that constructs and rotates a cannon from low-level drawing primitives.",
      technologies: ["Python", "PyOpenGL", "Pygame", "Computer Graphics"],
      features: [
        "Triangle-fan circle construction",
        "Composed wheel and barrel geometry",
        "Keyboard-controlled transformation"
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
