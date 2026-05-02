export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL required' });

  const domain = url.replace(/https?:\/\//, '').replace(/www\./, '').split('/')[0];

  // ── STEP 1: Actual website ka content fetch karo ──
  let websiteContent = '';
  try {
    const siteRes = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Helix/1.0)' },
      signal: AbortSignal.timeout(8000)
    });
    const html = await siteRes.text();
    // HTML se sirf text extract karo (tags hata do)
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 3000); // First 3000 chars kaafi hain
    websiteContent = text;
    console.log('Website fetched, content length:', websiteContent.length);
  } catch (err) {
    console.warn('Website fetch failed:', err.message);
    websiteContent = `Domain: ${domain}`;
  }

  try {
    // ── STEP 2: Claude ko real content do ──
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
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
          content: `Based on this website content from "${url}", extract company information.

WEBSITE CONTENT:
${websiteContent}

Return ONLY this raw JSON (no markdown, no backticks, start with { end with }):
{
  "companyName": "Proper company name (NOT the domain, extract from content)",
  "description": "Write 3 full sentences about what this company does, who they serve, and their key value. Minimum 200 characters.",
  "competitors": ["https://competitor1.com", "https://competitor2.com", "https://competitor3.com"]
}

Rules:
- companyName: Extract the real brand name from content, not the domain URL
- description: Must be 3 sentences, minimum 200 characters, based on actual content
- competitors: 3 real competitor URLs in same industry`
        }]
      })
    });

    const claudeData = await claudeRes.json();
    console.log('Claude status:', claudeData.type, '| stop_reason:', claudeData.stop_reason);

    const text = claudeData.content?.[0]?.text?.trim() || '';
    console.log('Claude raw text:', text.slice(0, 300));

    let result = {};
    try {
      result = JSON.parse(text);
    } catch {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) {
        try { result = JSON.parse(m[0]); } catch (e) {
          console.error('JSON parse failed:', e.message);
        }
      }
    }

    // Fallbacks
    result.companyName = result.companyName || domain;
    result.description = result.description || '';
    result.competitors = result.competitors || [];

    console.log('Final result:', JSON.stringify(result));
    return res.status(200).json(result);

  } catch (err) {
    console.error('Claude API error:', err.message);
    return res.status(500).json({ error: 'Analysis failed', details: err.message });
  }
}
