import resumeData, { type Certification, type Project } from "../data/resume-data";

type AssetMap = Record<string, string>;

const projectAssetModules = import.meta.glob("../Pages/Projects/unstructured_content/img/*", {
  eager: true,
  as: "url",
}) as AssetMap;

const qualificationAssetModules = import.meta.glob("../Pages/Qualification/pics/*", {
  eager: true,
  as: "url",
}) as AssetMap;

const basename = (path: string) => path.split("/").pop() ?? path;

const projectAssetsByName = Object.fromEntries(
  Object.entries(projectAssetModules).map(([path, value]) => [basename(path), value])
);

const qualificationAssetsByName = Object.fromEntries(
  Object.entries(qualificationAssetModules).map(([path, value]) => [basename(path), value])
);

const projectMediaAliases: Record<string, string> = {
  "cpuvid.mp4": "CPU Scheduling Algorithm Visualizer - CSAV — Mozilla Firefox 2024-06-07 10-11-13.mp4",
  "prodvid.mp4": "Producer and Consumer Simulator — Mozilla Firefox 2024-06-07 10-13-33.mp4",
  "riddlevid.mp4": "Riddle_🐅_🐐_🥬_—_Mozilla_Firefox_2023_04_16_01_23_21.mp4",
  "cssvid.mp4": "CSS Nature — Mozilla Firefox 2024-06-14 08-57-09.mp4",
  "rastervid.mp4": "Raster — Mozilla Firefox 2024-06-24 09-29-34.mp4",
  "hafcomvid.mp4": "HAFCOM Design Build Deliver — Mozilla Firefox 2024-06-10 09-12-05.mp4",
};

const certificationImageAliases: Record<string, string> = {
  "Prompt Design": "prompt-design-in-vertex-ai-skill-badge.png",
  "AI Fundamentals": "AI fund.png",
  "Data Science": "data Sci.png",
  "Robotics and AI": "RoboticsAI.jpg",
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const resolveProjectAsset = (fileName?: string) => {
  if (!fileName) {
    return "";
  }

  const actualName = projectMediaAliases[fileName] ?? fileName;
  return projectAssetsByName[actualName] ?? "";
};

const resolveQualificationAsset = (title: string) => {
  const actualName = certificationImageAliases[title];
  return actualName ? qualificationAssetsByName[actualName] ?? "" : "";
};

export interface PortfolioProject extends Project {
  slug: string;
  image: string;
  video: string;
}

export interface PortfolioCertification extends Certification {
  slug: string;
  image: string;
}

export const portfolioProjects: PortfolioProject[] = resumeData.projects.map((project) => ({
  ...project,
  slug: slugify(project.id || project.title),
  image: resolveProjectAsset(project.media?.images?.[0]),
  video: resolveProjectAsset(project.media?.videos?.[0]),
}));

export const featuredProjects = portfolioProjects.slice(0, 6);

export const portfolioCertifications: PortfolioCertification[] = resumeData.certifications.map(
  (certification) => ({
    ...certification,
    slug: slugify(certification.id || certification.title),
    image: resolveQualificationAsset(certification.title),
  })
);

export const findProjectBySlug = (slug?: string) =>
  portfolioProjects.find((project) => project.slug === slug || project.id === slug);

export const totalYearsExperience = new Date().getFullYear() - 2024;

export default resumeData;
