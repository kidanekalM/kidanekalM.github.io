import resumeData from "../../data/resume-data";

const Cv = () => {
  const printCV = () => {
    if (confirm("Print or save CV as PDF?")) {
      window.print();
    }
  };

  return (
    <>
      <div className="cv-toolbar">
        <button onClick={printCV}>🖨 Print / Save PDF</button>
      </div>

      <main id="cv-root">
        {/* SIDEBAR */}
        <aside className="cv-sidebar">
          <div className="sidebar-header">
            <h1>{resumeData.personal.fullName}</h1>
            <h2>{resumeData.personal.tagline}</h2>
          </div>

          <section>
            <h3>Contact</h3>
            <p>{resumeData.personal.location}</p>
            <p>{resumeData.personal.email}</p>
            <p>{resumeData.personal.phone}</p>
            <p>
              <a href={resumeData.personal.portfolioUrl}>Portfolio</a><br />
              <a href={resumeData.personal.githubUrl}>GitHub</a><br />
              <a href={resumeData.personal.linkedinUrl}>LinkedIn</a>
            </p>
          </section>

          <section>
            <h3>Skills</h3>
            <strong>Languages</strong>
            <p>{resumeData.skills.languages.join(", ")}</p>
            <strong>Frameworks</strong>
            <p>{resumeData.skills.frameworks.join(", ")}</p>
            <strong>Concepts</strong>
            <p>{resumeData.skills.concepts.join(", ")}</p>
          </section>

          <section>
            <h3>Languages</h3>
            {resumeData.languages.map(l => (
              <p key={l.name}>
                {l.name} — {l.proficiency}
              </p>
            ))}
          </section>
        </aside>

        {/* MAIN CONTENT */}
        <section className="cv-main">
          <div className="cv-section">
            <h3>Profile</h3>
            <p>{resumeData.personal.careerObjective}</p>
          </div>

          <div className="cv-section">
            <h3>Experience</h3>
            {resumeData.experience.map(exp => (
              <div key={exp.company} className="entry avoid-break">
                <div className="entry-header">
                  <strong>{exp.position}</strong>
                  <span>{exp.startDate} – {exp.current ? "Present" : exp.endDate}</span>
                </div>
                <div className="entry-sub">
                  {exp.company}, {exp.location}
                </div>
                <ul>
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="cv-section">
            <h3>Education</h3>
            {resumeData.education.map(edu => (
              <div key={edu.institution} className="entry avoid-break">
                <div className="entry-header">
                  <strong>{edu.degree}</strong>
                  <span>{edu.startDate} – {edu.endDate}</span>
                </div>
                <div className="entry-sub">
                  {edu.institution}
                </div>
                <p>GPA: {edu.gpa} · {edu.honors}</p>
              </div>
            ))}
          </div>
          <div className="cv-section">
  <h3>Selected Projects</h3>

  {resumeData.projects.slice(0, 3).map(project => (
    <div key={project.title} className="entry avoid-break">
      <strong>{project.title}</strong>

      <p className="project-desc">
        {project.description}
      </p>

      <p className="project-tech">
        {project.technologies.join(" · ")}
      </p>
    </div>
  ))}
</div>

        </section>
      </main>
    </>
  );
};

export default Cv;
