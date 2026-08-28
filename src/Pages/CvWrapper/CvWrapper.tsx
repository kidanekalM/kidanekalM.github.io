import { useState } from "react";
import Cv from "../Cv/Cv";
import resumeData from "../../data/resume-data";
import styles from "./CvWrapper.module.css";

const CvWrapper = () => {
  const [cvData, setCvData] = useState(resumeData);
  const [userPrompt, setUserPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCustomize = async () => {
    if (!userPrompt.trim()) {
      setError("Enter the role or changes you want to emphasize.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/cv-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: userPrompt,
          resume: cvData,
        }),
      });

      if (!res.ok) {
        throw new Error("AI request failed");
      }

      const newCv = await res.json();
      setCvData(newCv);
    } catch (err) {
      console.error(err);
      setError("Customization failed. Try a shorter, more specific prompt.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCvData(resumeData);
    setUserPrompt("");
    setError("");
  };

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>Resume</p>
          <h1>Experience, projects, and technical work.</h1>
        </div>
        <p>
          The print action below creates the prepared two-page PDF. Use the optional prompt to tailor emphasis before exporting.
        </p>
      </header>

      <section className={styles.customizer} aria-label="Customize resume">
        <label htmlFor="cv-prompt">Tailor this version</label>
        <div className={styles.controls}>
          <input
            id="cv-prompt"
            type="text"
            placeholder="Example: emphasize backend and healthcare platform work"
            value={userPrompt}
            onChange={(event) => setUserPrompt(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleCustomize();
            }}
          />
          <button className={styles.primary} onClick={handleCustomize} disabled={loading}>
            {loading ? "Customizing..." : "Customize"}
          </button>
          <button className={styles.secondary} onClick={handleReset} disabled={loading}>
            Reset
          </button>
        </div>
        {error && <p className={styles.error} role="alert">{error}</p>}
      </section>

      <section className={styles.document} aria-label="Resume preview">
        <Cv resume={cvData} />
      </section>
    </main>
  );
};

export default CvWrapper;
