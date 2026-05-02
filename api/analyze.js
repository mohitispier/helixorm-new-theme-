export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL required' });

  const domain = url.replace(/https?:\/\//, '').replace(/www\./, '').split('/')[0];

  try {
    // ── STEP 1: Get companyName + competitors ──
    const infoRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 400,
        messages: [{
          role: 'user',
          content: `Given the website domain "${domain}", respond with ONLY this JSON (no markdown, no backticks, just raw JSON):
{"companyName":"Proper company name","competitors":["https://competitor1.com","https://competitor2.com","https://competitor3.com"]}`
        }]
      })
    });

    const infoData = await infoRes.json();
    const infoText = infoData.content?.[0]?.text?.trim() || '{}';
    let info = {};
    try {
      info = JSON.parse(infoText);
    } catch {
      const m = infoText.match(/\{[\s\S]*\}/);
      if (m) { try { info = JSON.parse(m[0]); } catch {} }
    }

    // ── STEP 2: Get description in a SEPARATE call ──
    const descRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: `Write a professional company description for "${info.companyName || domain}" (website: ${url}).

Write exactly 3 sentences covering: what they do, who they serve, and their key value. Be specific and professional. Return ONLY the plain description text — no JSON, no bullet points, no labels, nothing else.`
        }]
      })
    });

    const descData = await descRes.json();
    const description = descData.content?.[0]?.text?.trim() || '';

    const result = {
      companyName: info.companyName || domain,
      description: description,
      competitors: info.competitors || []
    };

    console.log('Final result:', JSON.stringify(result));
    return res.status(200).json(result);

  } catch (err) {
    console.error('analyze error:', err.message);
    return res.status(500).json({ error: 'Analysis failed', details: err.message });
  }
}
