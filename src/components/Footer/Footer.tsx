import resumeData from "../../data/resume-data";
import styles from "./style.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div>
          <p className={styles.heading}>{resumeData.personal.fullName}</p>
          <p className={styles.tagline}>{resumeData.personal.tagline}</p>
        </div>

        <div className={styles.links}>
          <a className={styles.link} href={`mailto:${resumeData.personal.email}`}>
            {resumeData.personal.email}
          </a>
          <a className={styles.link} href={resumeData.personal.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={styles.link} href={resumeData.personal.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className={styles.link} href={resumeData.personal.portfolioUrl} target="_blank" rel="noreferrer">
            Website
          </a>
        </div>

        <p className={styles.copy}>© {year} {resumeData.personal.fullName}</p>
      </div>
    </footer>
  );
}
