export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { theme } = req.body;
  if (!theme) return res.status(400).json({ error: 'Theme is required' });

  const prompt = `Generate a creative hackathon project idea for the theme: "${theme}".

Respond with EXACTLY this format, each on its own line:
Title: <one catchy name>
Problem: <one sentence describing the problem>
Solution: <one sentence describing what you build>
Tech Stack: <comma-separated list of technologies>
Unique Feature: <one sentence on what makes it stand out>

Only output the 5 lines above, nothing else.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Gemini API error');

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!text) throw new Error('No response from Gemini');

    res.status(200).json({ text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
