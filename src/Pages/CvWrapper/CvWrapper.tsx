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
      <div style={{ padding: "10px", background: "#f3f4f6", display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Enter custom CV prompt…"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          style={{ flex: 1, padding: "6px 10px", borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button onClick={handleCustomize} style={{ padding: "6px 12px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: 4 }}>
          {loading ? "Generating…" : "Customize"}
        </button>
        <button onClick={handleReset} style={{ padding: "6px 12px", border: "1px solid #ccc", borderRadius: 4 }}>
          Reset
        </button>
      </div>


      <Cv resume={cvData} />
    </>
  );
};

export default CvWrapper;
