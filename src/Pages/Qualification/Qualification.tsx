import { Link, useParams } from "react-router-dom";
import resumeData from "../../data/resume-data";
import { portfolioCertifications, slugify } from "../../lib/portfolio";
import styles from "./Qualification.module.css";

export default function Qualification() {
  const { slug } = useParams();
  const selectedCertification = portfolioCertifications.find(
    (certification) => certification.slug === slug || certification.id === slug
  );

  if (selectedCertification) {
    return (
      <main className={styles.page}>
        <section className={styles.detailCard}>
          {selectedCertification.image && (
            <img
              src={selectedCertification.image}
              alt={selectedCertification.title}
              className={styles.detailImage}
            />
          )}
          <div className={styles.detailCopy}>
            <p className={styles.eyebrow}>Certification</p>
            <h1>{selectedCertification.title}</h1>
            <p>{selectedCertification.issuer}</p>
            <p>Issued {selectedCertification.issueDate}</p>
            <Link className={styles.backLink} to="/qualification">
              Back to all qualifications
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Qualifications</p>
        <h1>Education, certifications, and foundational training.</h1>
        <p className={styles.description}>
          Structured from the same resume JSON so the qualifications page stays aligned with the
          portfolio and CV.
        </p>
      </section>

      <section className={styles.educationCard}>
        <p className={styles.eyebrow}>Education</p>
        <h2>{resumeData.education[0].degree}</h2>
        <p>{resumeData.education[0].institution}</p>
        <p>
          {resumeData.education[0].startDate} - {resumeData.education[0].endDate}
        </p>
        <p>GPA {resumeData.education[0].gpa} · {resumeData.education[0].honors}</p>
        <div className={styles.courseList}>
          {resumeData.education[0].relevantCourses.map((course) => (
            <span key={course}>{course}</span>
          ))}
        </div>
      </section>

      <section className={styles.grid}>
        {portfolioCertifications.map((certification) => (
          <Link
            key={certification.id}
            to={`/qualification/${slugify(certification.id || certification.title)}`}
            className={styles.card}
          >
            {certification.image && (
              <img
                src={certification.image}
                alt={certification.title}
                className={styles.cardImage}
              />
            )}
            <div>
              <h3>{certification.title}</h3>
              <p>{certification.issuer}</p>
              <small>{certification.issueDate}</small>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
