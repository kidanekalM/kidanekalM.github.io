import resumeData from "../../data/resume-data";

const Cv = () => {
  const printCV = () => {
      window.print();
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
            <p>📍 {resumeData.personal.location}</p>
            <p>✉️ {resumeData.personal.email}</p>
            <p>📞 {resumeData.personal.phone}</p>
            <p>
              🌐 <a href={resumeData.personal.portfolioUrl}>Portfolio</a><br />
              🐱 <a href={resumeData.personal.githubUrl}>GitHub</a><br />
              🔗 <a href={resumeData.personal.linkedinUrl}>LinkedIn</a>
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
            {resumeData.languages.map((l) => (
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
            {resumeData.experience.map((exp) => (
              <div key={exp.company} className="entry avoid-break">
                <div className="entry-header">
                  <strong>{exp.position}</strong>
                  <span>
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
          </div>

          <div className="cv-section">
            <h3>Education</h3>
            {resumeData.education.map((edu) => (
              <div key={edu.institution} className="entry avoid-break">
                <div className="entry-header">
                  <strong>{edu.degree}</strong>
                  <span>
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <div className="entry-sub">{edu.institution}</div>
                <p>GPA: {edu.gpa} · {edu.honors}</p>
              </div>
            ))}
          </div>

          <div className="cv-section">
            <h3>Selected Projects</h3>
            {resumeData.projects.slice(0, 3).map((project) => (
              <div key={project.id} className="entry avoid-break project-entry">
                <strong>{project.title}</strong>
                {project.link && (
                  <span> — <a href={project.link}>{project.link}</a></span>
                )}
                <p className="project-desc">{project.description}</p>
                <p className="project-tech">
                  {project.technologies.join(" · ")}
                </p>
                {project.features && (
                  <ul>
                    {project.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        /* GENERAL LAYOUT */
        #cv-root {
          display: flex;
          font-family: 'Inter', sans-serif;
          color: #111827;
          background: #f3f4f6;
          min-height: 100vh;
        }

        .cv-sidebar {
          width: 280px;
          padding: 30px 20px;
          background-color: #1f2937;
          color: #f9fafb;
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex-shrink: 0;
          position: sticky;
          top: 0;
          height: 100vh;
        }

        .sidebar-header h1 {
          font-size: 22px;
          margin-bottom: 4px;
          color: #fbbf24;
        }

        .sidebar-header h2 {
          font-size: 14px;
          font-weight: 400;
          color: #d1d5db;
          margin-bottom: 20px;
        }

        .cv-sidebar h3 {
          font-size: 12px;
          color: #fbbf24;
          text-transform: uppercase;
          margin-bottom: 6px;
          border-bottom: 1px solid #374151;
          padding-bottom: 2px;
        }

        .cv-sidebar a {
          color: #fbbf24;
          text-decoration: none;
        }
        .cv-sidebar a:hover {
          text-decoration: underline;
        }

        .cv-main {
          flex: 1;
          padding: 40px 50px;
          background: #fff;
        }

        .cv-toolbar {
          text-align: right;
          padding: 10px 50px;
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
        }

        .cv-toolbar button {
          padding: 6px 12px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .cv-toolbar button:hover {
          background-color: #1d4ed8;
        }

        h3 {
          font-size: 14px;
          margin-top: 20px;
          margin-bottom: 10px;
          color: #111827;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2px;
        }

        .entry-header {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .entry-sub {
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 6px;
        }

        .project-desc {
          font-size: 13px;
          margin: 4px 0;
        }

        .project-tech {
          font-size: 11px;
          color: #6b7280;
        }

        ul {
          padding-left: 20px;
          margin: 4px 0;
        }

        .avoid-break {
          page-break-inside: avoid;
        }

        /* PRINT FRIENDLY */
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .cv-toolbar {
            display: none;
          }
          #cv-root {
            flex-direction: row !important;
          }
          .cv-sidebar {
            position: relative !important;
            width: 280px;
            height: auto;
            float: left;
          }
          .cv-main {
            margin-left: 280px;
            padding: 20px !important;
            background: white !important;
          }
          a {
            color: #fbbf24 !important;
            text-decoration: underline !important;
          }
        }
          @media print {
  /* Force exact colors and remove default browser margins */
  body, html {
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Remove smart links */
  a[href^="tel"], a[href^="mailto"], a[href^="http"] {
    color: inherit !important;
    text-decoration: none !important;
    -webkit-text-security: none !important;
  }

  .cv-toolbar {
    display: none;
  }

  #cv-root {
    flex-direction: row !important;
  }

  /* Sidebar fixed on left */
  .cv-sidebar {
    position: relative !important;
    width: 280px;
    float: left;
    margin: 0;
    padding: 20px;
    height: auto !important;
    background-color: #1f2937 !important; /* preserve color */
    color: #f9fafb !important;
  }

  /* Main content next to sidebar */
  .cv-main {
    margin: 0;
    padding: 20px;
    background: white !important;
    width: calc(100% - 280px);
    float: left;
  }

  /* Avoid breaking inside entries */
  .avoid-break {
    page-break-inside: avoid;
  }

  h3, p, ul, li, strong, span {
    
  }
}
  @media print {
  @page {
    size: A4;
    margin: 0; /* full-page content */
  }

  body, html {
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}


      `}</style>
    </>
  );
};

export default Cv;
