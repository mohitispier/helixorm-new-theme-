export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL required' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Analyze this company website URL: ${url}

You MUST return ONLY a raw JSON object. No markdown. No backticks. No explanation. No text before or after. Start your response with { and end with }.

{
  "companyName": "Company name derived from the domain (capitalize properly)",
  "description": "Write 2-3 full sentences (minimum 300 characters) describing what this company does, who it serves, and what makes it unique. Be specific and professional.",
  "competitors": ["https://competitor1.com", "https://competitor2.com", "https://competitor3.com"]
}

Rules:
- description MUST be at least 300 characters long
- competitors must be 3 real URLs of direct competitors in the same industry
- Output ONLY the JSON, nothing else`
        }]
      })
    });

    const data = await response.json();

    // ── DEBUG: Log raw Claude response ──
    console.log('Claude raw response:', JSON.stringify(data, null, 2));

    const text = data.content?.[0]?.text?.trim() || '';

    // Try to extract JSON — handle cases where Claude adds extra text
    let result = {};
    try {
      // First try: direct parse (cleanest case)
      result = JSON.parse(text);
    } catch {
      // Second try: extract JSON block from text
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          result = JSON.parse(jsonMatch[0]);
        } catch (parseErr) {
          console.error('JSON parse failed:', parseErr.message);
          console.error('Raw text was:', text);
        }
      }
    }

    // ── Validate required fields ──
    if (!result.companyName || !result.description) {
      console.warn('Missing fields in result:', result);
      // Fallback: extract domain as company name
      const domain = url.replace(/https?:\/\//, '').replace(/www\./, '').split('/')[0];
      result.companyName = result.companyName || domain;
      result.description = result.description || '';
    }

    console.log('Final result being sent:', result);
    return res.status(200).json(result);

  } catch (err) {
    console.error('analyze handler error:', err);
    return res.status(500).json({ error: 'Analysis failed', details: err.message });
  }
}
