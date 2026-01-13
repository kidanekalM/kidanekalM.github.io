import React, { useState } from "react";
import Cv from "../Cv/Cv";
import resumeData from "../../data/resume-data";

const CvWrapper = () => {
  const [cvData, setCvData] = useState(resumeData);
  const [userPrompt, setUserPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCustomize = async () => {
    if (!userPrompt.trim()) {
      alert("Please enter a customization prompt");
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
      setError("Failed to customize CV. Try a simpler prompt.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCvData(resumeData);
    setUserPrompt("");
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(cvData, null, 2));
    alert("CV JSON copied");
  };

  return (
    <>
      <div className="cv-toolbar">
        <input
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="e.g. Optimize for AI/Robotics Master’s applications"
        />

        <button onClick={handleCustomize}>
          {loading ? "Customizing…" : "Customize"}
        </button>

        <button onClick={handleReset}>Reset</button>
        <button onClick={handleCopyJson}>Copy JSON</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Cv resume={cvData} />
    </>
  );
};

export default CvWrapper;
