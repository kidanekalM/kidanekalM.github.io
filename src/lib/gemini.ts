const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function customizeResumeWithGemini(prompt: string, resume: any) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-preview:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
You are an expert CV optimizer.

RULES:
- Keep the SAME JSON structure
- Do NOT invent experience
- Reorder, rewrite, emphasize keywords
- Optimize for the user's goal

User Prompt:
${prompt}

Resume JSON:
${JSON.stringify(resume, null, 2)}

Return ONLY valid JSON.
`
              }
            ]
          }
        ]
      })
    }
  );

  const data = await res.json();

  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) throw new Error("No AI response");

  // VERY IMPORTANT: extract JSON safely
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");

  return JSON.parse(text.slice(jsonStart, jsonEnd + 1));
}
