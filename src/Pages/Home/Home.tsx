import { Link } from "react-router-dom";
import portrait from "../../pics/kidanekal.png";
import resumeData from "../../data/resume-data";
import {
  featuredProjects,
  portfolioCertifications,
  totalYearsExperience,
} from "../../lib/portfolio";
import styles from "./Home.module.css";

function Home() {
  const currentRole = resumeData.experience[0];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Developer Portfolio</p>
          <h1 className={styles.title}>
            Building resilient software for healthcare, AI, and real-world operations.
          </h1>
          <p className={styles.summary}>{resumeData.personal.careerObjective}</p>

          <div className={styles.actions}>
            <Link className={styles.primaryAction} to="/projects">
              Explore Projects
            </Link>
            <a
              className={styles.secondaryAction}
              href={resumeData.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <dl className={styles.metrics}>
            <div>
              <dt>Current Focus</dt>
              <dd>{currentRole.company}</dd>
            </div>
            <div>
              <dt>Projects</dt>
              <dd>{resumeData.projects.length}</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{Math.max(totalYearsExperience, 1)}+ years</dd>
            </div>
          </dl>
        </div>

        <aside className={styles.heroCard}>
          <img className={styles.portrait} src={portrait} alt={resumeData.personal.fullName} />
          <p className={styles.cardLabel}>Now Building</p>
          <h2>{currentRole.position}</h2>
          <p>{currentRole.responsibilities[0]}</p>
          <ul className={styles.stackList}>
            {currentRole.technologies.slice(0, 5).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Selected Work</p>
          <h2>Projects with product intent, not placeholder demos.</h2>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              {project.image ? (
                <img className={styles.projectMedia} src={project.image} alt={project.title} />
              ) : (
                <div className={styles.projectFallback}>{project.title.slice(0, 2)}</div>
              )}
              <div className={styles.projectBody}>
                <div className={styles.projectMeta}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link className={styles.textLink} to={`/projects/${project.slug}`}>
                  Open project
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.dualSection}>
        <div className={styles.panel}>
          <p className={styles.sectionLabel}>Experience</p>
          <h2>Recent work shaped by operational constraints and system design.</h2>
          <div className={styles.timeline}>
            {resumeData.experience.map((entry) => (
              <article key={`${entry.company}-${entry.position}`} className={styles.timelineItem}>
                <div className={styles.timelineMeta}>
                  <span>{entry.startDate} - {entry.current ? "Present" : entry.endDate}</span>
                  <span>{entry.location}</span>
                </div>
                <h3>{entry.position}</h3>
                <p className={styles.company}>{entry.company}</p>
                <p>{entry.responsibilities[0]}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.panel}>
          <p className={styles.sectionLabel}>Capabilities</p>
          <h2>Practical engineering across backend, frontend, and delivery.</h2>
          <div className={styles.skillBlocks}>
            <div>
              <h3>Languages</h3>
              <p>{resumeData.skills.languages.join(" · ")}</p>
            </div>
            <div>
              <h3>Frameworks</h3>
              <p>{resumeData.skills.frameworks.join(" · ")}</p>
            </div>
            <div>
              <h3>Databases</h3>
              <p>{resumeData.skills.databases.join(" · ")}</p>
            </div>
            <div>
              <h3>Concepts</h3>
              <p>{resumeData.skills.concepts.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Credentials</p>
          <h2>Education and certifications that support the work.</h2>
        </div>

        <div className={styles.credentialsLayout}>
          <article className={styles.educationCard}>
            <p className={styles.cardLabel}>Education</p>
            <h3>{resumeData.education[0].degree}</h3>
            <p>{resumeData.education[0].institution}</p>
            <p>
              {resumeData.education[0].startDate} - {resumeData.education[0].endDate}
            </p>
            <p>GPA {resumeData.education[0].gpa} · {resumeData.education[0].honors}</p>
          </article>

          <div className={styles.certGrid}>
            {portfolioCertifications.map((certification) => (
              <article key={certification.id} className={styles.certCard}>
                {certification.image && (
                  <img src={certification.image} alt={certification.title} className={styles.certImage} />
                )}
                <div>
                  <h3>{certification.title}</h3>
                  <p>{certification.issuer}</p>
                  <span>{certification.issueDate}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
