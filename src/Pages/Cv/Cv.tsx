import React from "react";

export interface ResumeData {
  personal: {
    fullName: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    portfolioUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    careerObjective: string;
  };
  skills: {
    languages: string[];
    frameworks: string[];
    concepts: string[];
  };
  languages: { name: string; proficiency: string }[];
  experience: {
    company: string;
    location: string;
    position: string;
    startDate: string;
    endDate?: string;
    current?: boolean;
    responsibilities: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    honors?: string;
  }[];
  projects: {
    id: string;
    title: string;
    link?: string;
    description: string;
    technologies: string[];
    features?: string[];
  }[];
}

interface CvProps {
  resume: ResumeData;
}

const Cv: React.FC<CvProps> = ({ resume }) => {
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
            <h1>{resume.personal.fullName}</h1>
            <h2>{resume.personal.tagline}</h2>
          </div>

          <section>
            <h3>Contact</h3>
            <p>📍 {resume.personal.location}</p>
            <p>✉️ {resume.personal.email}</p>
            <p>📞 {resume.personal.phone}</p>
            <p>
              🌐 <a href={resume.personal.portfolioUrl}>Portfolio</a><br />
              🐱 <a href={resume.personal.githubUrl}>GitHub</a><br />
              🔗 <a href={resume.personal.linkedinUrl}>LinkedIn</a>
            </p>
          </section>

          <section>
            <h3>Skills</h3>
            <strong>Languages</strong>
            <p>{resume.skills.languages.join(", ")}</p>
            <strong>Frameworks</strong>
            <p>{resume.skills.frameworks.join(", ")}</p>
            <strong>Concepts</strong>
            <p>{resume.skills.concepts.join(", ")}</p>
          </section>

          <section>
            <h3>Languages</h3>
            {resume.languages.map((l) => (
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
            <p>{resume.personal.careerObjective}</p>
          </div>

          <div className="cv-section">
            <h3>Experience</h3>
            {resume.experience.map((exp) => (
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
            {resume.education.map((edu) => (
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
            {resume.projects.slice(0, 3).map((project) => (
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
          body, html {
            margin: 0;
            padding: 0;
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
            float: left;
            margin: 0;
            padding: 20px;
            height: auto !important;
            background-color: #1f2937 !important;
            color: #f9fafb !important;
          }
          .cv-main {
            margin: 0;
            padding: 20px;
            background: white !important;
            width: calc(100% - 280px);
            float: left;
          }
          a[href^="tel"], a[href^="mailto"], a[href^="http"] {
            color: inherit !important;
            text-decoration: none !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Cv;
