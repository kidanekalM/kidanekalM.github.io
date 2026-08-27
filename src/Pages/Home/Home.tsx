import { Link } from "react-router-dom";
import { FiArrowUpRight, FiGithub, FiMapPin } from "react-icons/fi";
import portrait from "../../pics/kidanekal.png";
import resumeData from "../../data/resume-data";
import { portfolioCertifications, portfolioProjects, totalYearsExperience } from "../../lib/portfolio";
import styles from "./Home.module.css";

export default function Home() {
  const lead = portfolioProjects.find((project) => project.id === "link-emr") ?? portfolioProjects[0];
  const homepageProjectIds = [
    "opian-erp",
    "afa-text-to-speech",
    "geez-ir",
    "reporting-system",
    "ethio-tech-repository",
  ];
  const projects = homepageProjectIds
    .map((id) => portfolioProjects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.available}><span /> Available for ambitious software work</p>
        <p className={styles.intro}>Hello, I am {resumeData.personal.fullName.split(" ")[0]}.</p>
        <h1>I build software for <em>real systems</em> and real people.</h1>
        <p className={styles.summary}>{resumeData.personal.careerObjective}</p>
        <div className={styles.actions}>
          <Link className={styles.primary} to={`/projects/${lead.slug}`}>View featured work <FiArrowUpRight /></Link>
          <a className={styles.textLink} href={resumeData.personal.githubUrl} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
        </div>
      </div>
      <aside className={styles.portraitPanel}>
        <div className={styles.portrait}><img src={portrait} alt={resumeData.personal.fullName} /><span>01 / PROFILE</span></div>
        <p><FiMapPin /> {resumeData.personal.location}</p>
      </aside>
    </section>

    <section className={styles.stats} aria-label="Portfolio summary">
      <div><strong>{Math.max(totalYearsExperience, 1)}+</strong><span>Years building</span></div>
      <div><strong>{resumeData.projects.length}</strong><span>Projects shipped</span></div>
      <div><strong>{resumeData.certifications.length}</strong><span>Credentials</span></div>
      <blockquote>{resumeData.personal.workPhilosophy}</blockquote>
    </section>

    <section className={styles.section}>
      <SectionHeader number="01" label="Selected work" title="Engineering shaped by context, constraints, and outcomes." link="/projects" />
      <article className={styles.feature}>
        <div className={styles.featureVisual}><span>LINK</span><small>Healthcare operations / Ethiopia</small></div>
        <div className={styles.featureCopy}>
          <p className={styles.overline}>Featured case study</p><h3>{lead.title}</h3><p>{lead.description}</p>
          <ul>{lead.features.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
          <div className={styles.tags}>{lead.technologies.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
          <Link to={`/projects/${lead.slug}`}>Explore the system <FiArrowUpRight /></Link>
        </div>
      </article>
      <div className={styles.projectList}>{projects.map((project, index) =>
        <Link key={project.id} to={`/projects/${project.slug}`} className={styles.projectRow}>
          <small>{String(index + 2).padStart(2, "0")}</small>
          <div className={styles.thumb}>{project.image ? <img src={project.image} alt="" /> : project.title.slice(0, 2)}</div>
          <div><h3>{project.title}</h3><p>{project.description}</p></div>
          <span>{project.technologies.slice(0, 2).join(" / ")}</span><FiArrowUpRight />
        </Link>)}</div>
    </section>

    <section className={`${styles.section} ${styles.experience}`}>
      <SectionHeader number="02" label="Experience" title="Full-stack range, with a backend and systems mindset." />
      <div className={styles.aboutGrid}>
        <div className={styles.timeline}>{resumeData.experience.map((entry) => <article key={entry.company}>
          <small>{entry.startDate} - {entry.current ? "Present" : entry.endDate}</small>
          <div><h3>{entry.position}</h3><b>{entry.company} / {entry.location}</b><p>{entry.responsibilities[0]}</p></div>
        </article>)}</div>
        <aside className={styles.toolkit}><p className={styles.overline}>Core toolkit</p><h3>{resumeData.skills.languages.join(" / ")}</h3>
          <dl><div><dt>Frameworks</dt><dd>{resumeData.skills.frameworks.join(", ")}</dd></div><div><dt>Databases</dt><dd>{resumeData.skills.databases.join(", ")}</dd></div><div><dt>Focus</dt><dd>{resumeData.skills.concepts.join(", ")}</dd></div></dl>
        </aside>
      </div>
    </section>

    <section className={styles.section}>
      <SectionHeader number="03" label="Foundation" title="Education and continuous learning." link="/qualification" />
      <div className={styles.credentials}>
        <article className={styles.education}><small>{resumeData.education[0].endDate}</small><h3>{resumeData.education[0].degree}</h3><p>{resumeData.education[0].institution}</p><b>GPA {resumeData.education[0].gpa} / {resumeData.education[0].honors}</b></article>
        {portfolioCertifications.map((cert) => <article key={cert.id} className={styles.cert}>{cert.image && <img src={cert.image} alt="" />}<div><small>{cert.issueDate}</small><h3>{cert.title}</h3><span>{cert.issuer}</span></div></article>)}
      </div>
    </section>

    <section className={styles.contact}><p>Have a difficult problem worth solving?</p><h2>Let&apos;s build something <em>useful.</em></h2><a href={`mailto:${resumeData.personal.email}`}>{resumeData.personal.email} <FiArrowUpRight /></a></section>
  </main>;
}

function SectionHeader({ number, label, title, link }: { number: string; label: string; title: string; link?: string }) {
  return <header className={styles.sectionHeader}><div><span>{number}</span><p>{label}</p></div><h2>{title}</h2>{link && <Link to={link}>View all <FiArrowUpRight /></Link>}</header>;
}
