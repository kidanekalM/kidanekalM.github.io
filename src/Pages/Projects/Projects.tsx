import { Link, useParams } from "react-router-dom";
import { featuredProjects, findProjectBySlug, portfolioProjects } from "../../lib/portfolio";
import styles from "./styles.module.css";

export default function Projects() {
  const { slug } = useParams();
  const selectedProject = findProjectBySlug(slug);

  if (selectedProject) {
    return (
      <main className={styles.page}>
        <section className={styles.detailHero}>
          <div className={styles.detailCopy}>
            <p className={styles.eyebrow}>Project Detail</p>
            <h1>{selectedProject.title}</h1>
            <p className={styles.description}>{selectedProject.description}</p>

            <div className={styles.tagList}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

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
                  Open link
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
        <h1>Selected builds across healthcare, civic tech, systems, and frontend work.</h1>
        <p className={styles.description}>
          Every project card below is generated from the same portfolio JSON that drives the
          broader site, with media resolved against the repo assets.
        </p>
      </section>

      <section className={styles.grid}>
        {portfolioProjects.map((project) => (
          <Link key={project.id} to={`/projects/${project.slug}`} className={styles.card}>
            {project.image ? (
              <img className={styles.cardMedia} src={project.image} alt={project.title} />
            ) : project.video ? (
              <video className={styles.cardMedia} src={project.video} muted playsInline preload="metadata" />
            ) : (
              <div className={styles.cardFallback}>{project.title.slice(0, 2)}</div>
            )}

            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className={styles.moreSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Featured</p>
          <h2>A few high-signal projects worth opening first.</h2>
        </div>
        <div className={styles.compactList}>
          {featuredProjects.map((project) => (
            <Link key={project.id} to={`/projects/${project.slug}`} className={styles.compactItem}>
              <span>{project.title}</span>
              <small>{project.technologies.slice(0, 2).join(" · ")}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
