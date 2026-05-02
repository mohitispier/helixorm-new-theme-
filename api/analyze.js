// pages/api/analyze.js (Next.js) ya api/analyze.js (Vercel)
export default async function handler(req, res) {
  const { url } = req.body;
  
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY, // .env me rakho
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: `Analyze ${url} and return JSON with companyName, description, competitors[]` }]
    })
  });
  
  const data = await response.json();
  res.json(data);
}
