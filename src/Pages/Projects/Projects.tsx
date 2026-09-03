import { Link, useParams } from "react-router-dom";
import {
  findProjectBySlug,
  portfolioProjects,
  type PortfolioProject,
} from "../../lib/portfolio";
import styles from "./styles.module.css";

export default function Projects() {
  const { slug } = useParams();
  const selectedProject = findProjectBySlug(slug);
  const professionalOrder = ["link-emr", "opian-erp", "pharma"];
  const professionalProjects = portfolioProjects
    .filter((project) => project.organization)
    .sort((left, right) => professionalOrder.indexOf(left.id) - professionalOrder.indexOf(right.id));
  const personalProjects = portfolioProjects.filter((project) => !project.organization);

  if (selectedProject) {
    return (
      <main className={styles.page}>
        <section className={styles.detailHero}>
          <div className={styles.detailCopy}>
            <p className={styles.eyebrow}>
              {selectedProject.organization ?? "Personal project"}
            </p>
            <h1>{selectedProject.title}</h1>
            <p className={styles.description}>{selectedProject.description}</p>

            <div className={styles.tagList}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <p className={styles.featureLabel}>What it does</p>
            <ul className={styles.featureList}>
              {selectedProject.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Link className={styles.primaryAction} to="/projects">
                Back to all projects
              </Link>
              {selectedProject.link && (
                <a
                  className={styles.secondaryAction}
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open live project
                </a>
              )}
              {selectedProject.repositoryUrl && (
                <a
                  className={styles.secondaryAction}
                  href={selectedProject.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View source
                </a>
              )}
            </div>
          </div>

          <div className={styles.mediaPanel}>
            {selectedProject.video ? (
              <video
                className={styles.media}
                src={selectedProject.video}
                controls
                playsInline
                preload="metadata"
              />
            ) : selectedProject.image ? (
              <img className={styles.media} src={selectedProject.image} alt={selectedProject.title} />
            ) : (
              <div className={styles.mediaFallback}>{selectedProject.title.slice(0, 2)}</div>
            )}
          </div>
        </section>

        {selectedProject.story && (
          <section className={styles.caseStudy} aria-labelledby="case-study-title">
            <header className={styles.caseStudyHeader}>
              <p className={styles.eyebrow}>Inside the build</p>
              <h2 id="case-study-title">Problem, constraints, decisions, and outcome.</h2>
              <p>What changed and why</p>
            </header>
            <div className={styles.storyGrid}>
              <article><span>01</span><p>Problem</p><h3>{selectedProject.story.problem}</h3></article>
              <article><span>02</span><p>Constraint</p><h3>{selectedProject.story.constraint}</h3></article>
              <article><span>03</span><p>My contribution</p><h3>{selectedProject.story.contribution}</h3></article>
              <article><span>04</span><p>Technical decision</p><h3>{selectedProject.story.decision}</h3></article>
              <article className={styles.outcome}><span>05</span><p>Outcome</p><h3>{selectedProject.story.outcome}</h3></article>
            </div>
          </section>
        )}

        <section className={styles.moreSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>More Work</p>
            <h2>Other projects from the same portfolio.</h2>
          </div>

          <div className={styles.grid}>
            {portfolioProjects
              .filter((project) => project.slug !== selectedProject.slug)
              .slice(0, 6)
              .map((project) => (
                <Link key={project.id} to={`/projects/${project.slug}`} className={styles.card}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className={styles.cardMedia} />
                  ) : (
                    <div className={styles.cardFallback}>{project.title.slice(0, 2)}</div>
                  )}
                  <div className={styles.cardBody}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.listHero}>
        <p className={styles.eyebrow}>Projects</p>
        <h1>Products, platforms, tools, simulations, and applied systems.</h1>
        <p className={styles.description}>
          Professional work at Opian Technologies and independent projects from my public GitHub.
        </p>
      </section>

      <section className={styles.projectGroup} aria-labelledby="opian-projects-title">
        <header className={styles.groupHeader}>
          <div>
            <p className={styles.eyebrow}>Professional work</p>
            <h2 id="opian-projects-title">Work at Opian Technologies.</h2>
          </div>
          <p>Link, OpianERP, and the Pharmaceutical Manufacturer Information System.</p>
        </header>
        <div className={styles.grid}>
          {professionalProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className={styles.projectGroup} aria-labelledby="personal-projects-title">
        <header className={styles.groupHeader}>
          <div>
            <p className={styles.eyebrow}>Independent work</p>
            <h2 id="personal-projects-title">Personal projects.</h2>
          </div>
          <p>Experiments and products built outside my work at Opian Technologies.</p>
        </header>
        <div className={styles.grid}>
          {personalProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

    </main>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.card}>
      {project.image ? (
        <img className={styles.cardMedia} src={project.image} alt={project.title} />
      ) : project.video ? (
        <video className={styles.cardMedia} src={project.video} muted playsInline preload="metadata" />
      ) : (
        <div className={styles.cardFallback}>{project.title.slice(0, 2)}</div>
      )}

      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.contextTag}>{project.organization ?? "Personal project"}</span>
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}
