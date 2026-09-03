import resumeData from "../data/resume-data";
import {
  findProjectBySlug,
  portfolioCertifications,
  portfolioProjects,
} from "./portfolio";

const siteUrl = resumeData.personal.portfolioUrl.replace(/\/$/, "");
const defaultImage = `${siteUrl}/relentless.png`;
const defaultDescription =
  "Portfolio of Kidanekal Melkam Alem, a software engineer building web platforms, backend systems, desktop tools, and applied computing projects.";
const personReference = {
  "@type": "Person",
  name: resumeData.personal.fullName,
  url: siteUrl,
};

export interface SeoData {
  title: string;
  description: string;
  canonical: string;
  image: string;
  type: "website" | "article";
  robots: string;
  structuredData: Record<string, unknown>;
}

const cleanPath = (pathname: string) => {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, "").toLowerCase();
  return path || "/";
};

const routeUrl = (pathname: string) => `${siteUrl}${pathname === "/" ? "" : pathname}`;

export function getSeoData(pathname: string): SeoData {
  const path = cleanPath(pathname);
  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  const qualificationMatch = path.match(/^\/qualification\/([^/]+)$/);
  const base = {
    canonical: routeUrl(path),
    image: defaultImage,
    type: "website" as const,
    robots: "index,follow,max-image-preview:large",
  };

  if (path === "/adminsignin" || path.startsWith("/adminhome")) {
    return {
      ...base,
      title: `Portfolio Admin | ${resumeData.personal.fullName}`,
      description: "Private portfolio administration.",
      robots: "noindex,nofollow",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Portfolio Admin",
      },
    };
  }

  if (projectMatch) {
    const project = findProjectBySlug(projectMatch[1]);
    if (project) {
      return {
        ...base,
        title: `${project.title} | ${resumeData.personal.fullName}`,
        description: project.description,
        image: project.image ? `${siteUrl}${project.image}` : defaultImage,
        type: "article",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: project.title,
          description: project.description,
          url: routeUrl(`/projects/${project.slug}`),
          codeRepository: project.repositoryUrl,
          programmingLanguage: project.technologies,
          author: personReference,
        },
      };
    }
  }

  if (qualificationMatch) {
    const qualification = portfolioCertifications.find(
      (item) => item.slug === qualificationMatch[1] || item.id === qualificationMatch[1]
    );
    if (qualification) {
      return {
        ...base,
        title: `${qualification.title} | ${resumeData.personal.fullName}`,
        description: `${qualification.title}, issued by ${qualification.issuer} in ${qualification.issueDate}.`,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalCredential",
          name: qualification.title,
          recognizedBy: { "@type": "Organization", name: qualification.issuer },
          dateCreated: qualification.issueDate,
          credentialCategory: "Certification",
        },
      };
    }
  }

  const pages: Record<string, Pick<SeoData, "title" | "description" | "structuredData">> = {
    "/": {
      title: `${resumeData.personal.fullName} | Software Engineer`,
      description: defaultDescription,
      structuredData: {
        "@context": "https://schema.org",
        ...personReference,
        jobTitle: "Software Engineer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Addis Ababa",
          addressCountry: "ET",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: resumeData.education[0].institution,
        },
        sameAs: [resumeData.personal.githubUrl, resumeData.personal.linkedinUrl],
      },
    },
    "/projects": {
      title: `Projects | ${resumeData.personal.fullName}`,
      description: `Selected professional and personal software projects by ${resumeData.personal.fullName}.`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Software projects",
        url: routeUrl("/projects"),
        mainEntity: portfolioProjects.map((project) => ({
          "@type": "SoftwareSourceCode",
          name: project.title,
          url: routeUrl(`/projects/${project.slug}`),
        })),
      },
    },
    "/qualification": {
      title: `Qualifications | ${resumeData.personal.fullName}`,
      description: `${resumeData.personal.fullName}'s computer science education and technical certifications.`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Qualifications and certifications",
        url: routeUrl("/qualification"),
      },
    },
    "/text_to_speech": {
      title: `AFA Text-to-Speech | ${resumeData.personal.fullName}`,
      description: "A cross-platform desktop app that routes typed speech into meetings as virtual microphone input.",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "AFA Text-to-Speech",
        operatingSystem: "Windows, Linux",
        applicationCategory: "AccessibilityApplication",
        url: routeUrl("/text_to_speech"),
      },
    },
    "/cvwrapper": {
      title: `Resume | ${resumeData.personal.fullName}`,
      description: `${resumeData.personal.fullName}'s software engineering experience, education, skills, and selected projects.`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: `${resumeData.personal.fullName} resume`,
        url: routeUrl("/cvwrapper"),
        mainEntity: personReference,
      },
    },
  };

  const page = pages[path];
  if (page) {
    return { ...base, ...page };
  }

  return {
    ...base,
    title: `Page not found | ${resumeData.personal.fullName}`,
    description: "The requested page could not be found.",
    robots: "noindex,nofollow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Page not found",
    },
  };
}

export const prerenderRoutes = [
  "/",
  "/projects",
  ...portfolioProjects.map((project) => `/projects/${project.slug}`),
  "/qualification",
  ...portfolioCertifications.map((certification) => `/qualification/${certification.slug}`),
  "/text_to_speech",
  "/cvwrapper",
];

export const getRouteModule = (pathname: string) => {
  const path = cleanPath(pathname);
  if (path === "/") return "src/Pages/Home/Home.tsx";
  if (path.startsWith("/projects")) return "src/Pages/Projects/Projects.tsx";
  if (path.startsWith("/qualification")) return "src/Pages/Qualification/Qualification.tsx";
  if (path === "/text_to_speech") return "src/Pages/TextToSpeech/TextToSpeech.tsx";
  if (path === "/cvwrapper") return "src/Pages/CvWrapper/CvWrapper.tsx";
  return undefined;
};
