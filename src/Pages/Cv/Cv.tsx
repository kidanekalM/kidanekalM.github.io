import React from "react";
import resumeData from "../../data/resume-data";

const Cv: React.FC = () => {
  const handlePrint = () => {
    if (window.confirm("Print or save this CV as PDF?")) {
      window.print();
    }
  };

  return (
    <>
      <div className="cv-toolbar">
        <button onClick={handlePrint}>🖨 Print / Save PDF</button>
      </div>

      <main id="cv-print">
        {/* HEADER */}
        <header className="cv-header">
          <div className="header-left">
            <h1>{resumeData.personal.fullName}</h1>
            <h2>{resumeData.personal.tagline}</h2>
          </div>

          <div className="header-right">
            <div>{resumeData.personal.location}</div>
            <div>{resumeData.personal.email}</div>
            <div>{resumeData.personal.phone}</div>
            <div>
              <a href={resumeData.personal.portfolioUrl}>Portfolio</a> ·{" "}
              <a href={resumeData.personal.githubUrl}>GitHub</a> ·{" "}
              <a href={resumeData.personal.linkedinUrl}>LinkedIn</a>
            </div>
          </div>
        </header>

        {/* PROFILE */}
        <section className="cv-section">
          <h3>Profile</h3>
          <p className="profile-text">
            {resumeData.personal.careerObjective}
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="cv-section">
          <h3>Experience</h3>
          {resumeData.experience.map((exp) => (
            <div key={exp.company} className="cv-entry avoid-break">
              <div className="entry-header">
                <strong>{exp.position}</strong>
                <span className="entry-date">
                  {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                </span>
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
        </section>

        {/* EDUCATION */}
        <section className="cv-section">
          <h3>Education</h3>
          {resumeData.education.map((edu) => (
            <div key={edu.institution} className="cv-entry avoid-break">
              <div className="entry-header">
                <strong>{edu.degree}</strong>
                <span className="entry-date">
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>
              <div className="entry-sub">
                {edu.institution}, {edu.location}
              </div>
              <div className="entry-meta">
                GPA: {edu.gpa} · {edu.honors}
              </div>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section className="cv-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div>
              <strong>Languages</strong>
              <p>{resumeData.skills.languages.join(", ")}</p>
            </div>
            <div>
              <strong>Frameworks</strong>
              <p>{resumeData.skills.frameworks.join(", ")}</p>
            </div>
            <div>
              <strong>Databases</strong>
              <p>{resumeData.skills.databases.join(", ")}</p>
            </div>
            <div>
              <strong>Concepts</strong>
              <p>{resumeData.skills.concepts.join(", ")}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cv;
