import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt, resume } = req.body;

  if (!prompt || !resume) {
    return res.status(400).json({ error: "Missing prompt or resume" });
  }

  // Hard limits = safety
  if (prompt.length > 3000) {
    return res.status(413).json({ error: "Prompt too long" });
  }

  try {
    const aiPrompt = `
You are a CV customization assistant.

RULES:
- Return ONLY valid JSON
- Keep the SAME structure
- Improve clarity, relevance, and keywords
- Do NOT add fake experience
- Reorder or rephrase if helpful

USER REQUEST:
${prompt}

RESUME JSON:
${JSON.stringify(resume, null, 2)}
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: aiPrompt }] }],
        }),
      }
    );

    const data = await response.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    // Extra safety: ensure JSON
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");
    const cleanJson = text.slice(jsonStart, jsonEnd + 1);

    const parsed = JSON.parse(cleanJson);

    return res.status(200).json(parsed);
  } catch (err) {
    console.error("AI error:", err);
    return res.status(500).json({ error: "AI processing failed" });
  }
}
