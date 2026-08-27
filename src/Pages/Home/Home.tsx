import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import portrait from "../../pics/kidanekal.png";
import resumeData from "../../data/resume-data";
import { portfolioProjects, type PortfolioProject } from "../../lib/portfolio";
import styles from "./Home.module.css";

const flagshipIds = ["link-emr", "safe-deal", "geez-ir"];

const projectLabels: Record<string, string> = {
  "link-emr": "Clinical systems",
  "safe-deal": "Transaction systems",
  "geez-ir": "Information retrieval",
};

export default function Home() {
  const flagshipProjects = flagshipIds
    .map((id) => portfolioProjects.find((project) => project.id === id))
    .filter((project): project is PortfolioProject => Boolean(project));
  const securityProject = portfolioProjects.find((project) => project.id === "whitehat");
  const currentRole = resumeData.experience.find((entry) => entry.current) ?? resumeData.experience[0];
  const education = resumeData.education[0];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.identity}>
            <p className={styles.eyebrow}>Software engineer / {resumeData.personal.location}</p>
            <h1>
              <span>Kidanekal</span>
              <span>Melkam Alem</span>
            </h1>
            <p className={styles.scope}>
              Product, frontend, backend, desktop, data, and delivery.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} to="/projects">
                Selected work <FiArrowUpRight />
              </Link>
              <a className={styles.secondaryAction} href={`mailto:${resumeData.personal.email}`}>
                <FiMail /> Email
              </a>
            </div>
          </div>

          <div className={styles.fidel} aria-hidden="true">ገ</div>

          <dl className={styles.capabilities}>
            <div><dt>Current</dt><dd>{currentRole.position} at {currentRole.company}</dd></div>
            <div><dt>Core stack</dt><dd>{resumeData.skills.languages.slice(0, 4).join(" / ")}</dd></div>
            <div><dt>Work</dt><dd>Products / Platforms / Systems</dd></div>
          </dl>
        </div>
      </section>

      <section className={styles.projectsSection} aria-labelledby="flagship-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Flagship projects</p>
            <h2 id="flagship-title">Three different constraints.</h2>
          </div>
          <Link to="/projects">All projects <FiArrowUpRight /></Link>
        </div>

        <div className={styles.projectGrid}>
          {flagshipProjects.map((project) => (
            <FlagshipProject key={project.id} project={project} />
          ))}
        </div>
      </section>

      {securityProject && (
        <section className={styles.trustSection} aria-labelledby="trust-title">
          <div className={styles.trustMark} aria-hidden="true">DISCLOSURE</div>
          <div className={styles.trustCopy}>
            <p className={styles.eyebrow}>Security practice</p>
            <h2 id="trust-title">Responsible vulnerability disclosure</h2>
            <p>{securityProject.description}</p>
          </div>
          <ul>
            {securityProject.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <Link to={`/projects/${securityProject.slug}`} aria-label={`Read ${securityProject.title}`}>
            Read disclosure <FiArrowUpRight />
          </Link>
        </section>
      )}

      <section className={styles.aboutSection} aria-labelledby="about-title">
        <figure className={styles.portrait}>
          <img src={portrait} alt={resumeData.personal.fullName} />
          <figcaption>{resumeData.personal.location}</figcaption>
        </figure>
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>About</p>
          <h2 id="about-title">{currentRole.position} at {currentRole.company}.</h2>
          <p>
            {education.degree} graduate from {education.institution}, GPA {education.gpa}, {education.honors}.
            Current work spans modular clinical software, transaction systems, desktop tools,
            ERP foundations, and applied information retrieval.
          </p>
          <Link to="/cvwrapper">View CV <FiArrowUpRight /></Link>
        </div>
      </section>

      <section className={styles.contactSection} aria-labelledby="contact-title">
        <p className={styles.eyebrow}>Contact</p>
        <h2 id="contact-title">{resumeData.personal.email}</h2>
        <a href={`mailto:${resumeData.personal.email}`}>
          Send email <FiArrowUpRight />
        </a>
      </section>
    </main>
  );
}

function FlagshipProject({ project }: { project: PortfolioProject }) {
  return (
    <article className={styles.projectCard} data-project={project.id}>
      <ProjectVisual project={project} />
      <div className={styles.projectMeta}>
        <span>{projectLabels[project.id] ?? "Software system"}</span>
        <span>{project.technologies.slice(0, 3).join(" / ")}</span>
      </div>
      <h3>{project.title}</h3>
      <p className={styles.problem}>{project.story?.problem ?? project.description}</p>
      <p className={styles.built}>{project.description}</p>
      <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        Case study <FiArrowUpRight />
      </Link>
    </article>
  );
}

function ProjectVisual({ project }: { project: PortfolioProject }) {
  if (project.id === "geez-ir") {
    return <div className={`${styles.projectVisual} ${styles.geezVisual}`} aria-hidden="true">ገ</div>;
  }

  if (project.id === "safe-deal") {
    return (
      <div className={`${styles.projectVisual} ${styles.ledgerVisual}`} aria-hidden="true">
        <span>ETB</span><i /><span>PROOF</span>
      </div>
    );
  }

  return (
    <div className={`${styles.projectVisual} ${styles.clinicalVisual}`} aria-hidden="true">
      <span>VISIT</span>
      <div><i>Vitals</i><i>Lab</i><i>Rx</i></div>
    </div>
  );
}
