import React, { useRef, useState } from "react";

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
    technologies?: string[];
    achievements?: string[];
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
  const cvRootRef = useRef<HTMLElement | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const featuredHealthcareProject = resume.projects.find(
    (project) => project.id === "link-emr"
  );

  const printCV = async () => {
    const cvRoot = cvRootRef.current;

    if (!cvRoot || isExporting) {
      return;
    }

    setIsExporting(true);

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidthMm = pdf.internal.pageSize.getWidth();
      const pageHeightMm = pdf.internal.pageSize.getHeight();
      const pageWidthPx = 794;
      const pageHeightPx = 1123;
      const sidebar = cvRoot.querySelector<HTMLElement>(".cv-sidebar");
      const main = cvRoot.querySelector<HTMLElement>(".cv-main");

      if (!sidebar || !main) {
        return;
      }

      const exportHost = document.createElement("div");
      exportHost.style.position = "fixed";
      exportHost.style.left = "-20000px";
      exportHost.style.top = "0";
      exportHost.style.width = `${pageWidthPx}px`;
      exportHost.style.background = "#ffffff";
      exportHost.style.zIndex = "-1";
      document.body.appendChild(exportHost);

      const sidebarWidthPx = 245;
      const mainWidthPx = pageWidthPx - sidebarWidthPx;

      const createPage = () => {
        const page = document.createElement("div");
        page.style.width = `${pageWidthPx}px`;
        page.style.height = `${pageHeightPx}px`;
        page.style.display = "grid";
        page.style.gridTemplateColumns = `${sidebarWidthPx}px ${mainWidthPx}px`;
        page.style.background = "#ffffff";
        page.style.overflow = "hidden";
        page.style.fontFamily = "Inter, Arial, sans-serif";
        page.style.color = "#111827";

        const sidebarClone = sidebar.cloneNode(true) as HTMLElement;
        sidebarClone.style.position = "static";
        sidebarClone.style.top = "auto";
        sidebarClone.style.height = "100%";
        sidebarClone.style.width = `${sidebarWidthPx}px`;
        sidebarClone.style.margin = "0";
        sidebarClone.style.padding = "28px 20px";
        sidebarClone.style.borderRight = "1px solid #374151";
        sidebarClone.style.boxSizing = "border-box";
        sidebarClone.style.backgroundColor = "#1f2937";
        sidebarClone.style.color = "#f9fafb";
        sidebarClone.style.fontSize = "12px";
        sidebarClone.style.lineHeight = "1.4";

        const mainPage = document.createElement("div");
        mainPage.style.height = `${pageHeightPx}px`;
        mainPage.style.padding = "28px 26px";
        mainPage.style.boxSizing = "border-box";
        mainPage.style.overflow = "hidden";
        mainPage.style.background = "#ffffff";
        mainPage.style.color = "#111827";
        mainPage.style.fontSize = "13px";
        mainPage.style.lineHeight = "1.45";

        page.appendChild(sidebarClone);
        page.appendChild(mainPage);
        exportHost.appendChild(page);

        return { page, mainPage };
      };

      const sectionUnits = Array.from(
        main.querySelectorAll<HTMLElement>(".cv-section")
      ).flatMap((section) => {
        const children = Array.from(section.children) as HTMLElement[];
        const heading = children[0];
        const contentItems = children.slice(1);

        if (contentItems.length === 0) {
          return [];
        }

        return contentItems.map((item, index) => {
          const unit = document.createElement("div");
          unit.className = "avoid-break";

          if (index === 0 && heading) {
            unit.appendChild(heading.cloneNode(true));
          }

          unit.appendChild(item.cloneNode(true));
          return unit;
        });
      });

      let { mainPage } = createPage();
      let pageNumber = 0;

      for (const unit of sectionUnits) {
        const candidate = unit.cloneNode(true) as HTMLElement;
        mainPage.appendChild(candidate);

        if (mainPage.scrollHeight > mainPage.clientHeight && mainPage.children.length > 1) {
          mainPage.removeChild(candidate);
          ({ mainPage } = createPage());
          mainPage.appendChild(candidate);
        }
      }

      const pages = Array.from(exportHost.children) as HTMLElement[];

      for (const page of pages) {
        const canvas = await html2canvas(page, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          windowWidth: pageWidthPx,
          windowHeight: pageHeightPx,
        });

        const pageImage = canvas.toDataURL("image/png");

        if (pageNumber > 0) {
          pdf.addPage();
        }

        pdf.addImage(pageImage, "PNG", 0, 0, pageWidthMm, pageHeightMm);
        pageNumber += 1;
      }

      document.body.removeChild(exportHost);
      pdf.save("Kidanekal-Melkam-Alem-CV.pdf");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      <div className="cv-toolbar">
        <button onClick={printCV}>🖨 Print / Save PDF</button>
      </div>

      <main id="cv-root" ref={cvRootRef}>
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
              🌐 <a href={resume.personal.portfolioUrl}>{resume.personal.portfolioUrl}</a><br />
              🐱 <a href={resume.personal.githubUrl}>{resume.personal.githubUrl}</a><br />
              🔗 <a href={resume.personal.linkedinUrl}>{resume.personal.linkedinUrl}</a>
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
                {"technologies" in exp && Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
                  <p className="entry-meta">
                    Technologies: {exp.technologies.join(" · ")}
                  </p>
                )}
                {"achievements" in exp && Array.isArray(exp.achievements) && exp.achievements.length > 0 && (
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={`achievement-${i}`}>{achievement}</li>
                    ))}
                  </ul>
                )}
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
            {featuredHealthcareProject && (
              <div className="entry avoid-break project-entry featured-project">
                <strong>Featured Healthcare Platform: {featuredHealthcareProject.title}</strong>
                <p className="project-desc">{featuredHealthcareProject.description}</p>
                <p className="project-tech">
                  {featuredHealthcareProject.technologies.join(" · ")}
                </p>
                {featuredHealthcareProject.features && (
                  <ul>
                    {featuredHealthcareProject.features.map((feature, idx) => (
                      <li key={`featured-${idx}`}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
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
          width: 100%;
          box-sizing: border-box;
        }

        .cv-sidebar {
          width: 280px;
          box-sizing: border-box;
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
          box-sizing: border-box;
          min-width: 0;
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

        .entry-meta {
          font-size: 11px;
          color: #4b5563;
          margin: 6px 0 0;
        }

        .featured-project {
          padding: 12px 14px;
          margin-bottom: 14px;
          background: #eff6ff;
          border-left: 4px solid #2563eb;
          border-radius: 6px;
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
          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            min-height: 100%;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            background: white !important;
          }
          body {
            overflow: visible !important;
          }
          .cv-toolbar {
            display: none;
          }
          #cv-root {
            display: grid !important;
            grid-template-columns: 220px 1fr;
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw !important;
            min-height: 100vh !important;
            background: white !important;
            margin: 0 !important;
          }
          .cv-sidebar {
            position: static !important;
            width: auto !important;
            margin: 0;
            padding: 16px 10px;
            height: auto !important;
            background-color: #1f2937 !important;
            color: #f9fafb !important;
            break-inside: avoid;
            page-break-inside: avoid;
            border-right: 1px solid #374151;
          }
          .cv-main {
            margin: 0;
            padding: 16px 10px;
            background: white !important;
            width: auto !important;
            min-width: 0;
          }
          a[href^="tel"], a[href^="mailto"], a[href^="http"] {
            color: inherit !important;
            text-decoration: none !important;
          }
          .featured-project {
            background: #eff6ff !important;
          }
          .entry-header {
            gap: 12px;
            align-items: baseline;
          }
          .entry-header span {
            flex-shrink: 0;
            text-align: right;
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
