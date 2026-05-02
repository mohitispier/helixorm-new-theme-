export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL required' });

  // ── FIX 1: https:// missing ho toh add karo ──
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  const domain = url.replace(/https?:\/\//, '').replace(/www\./, '').split('/')[0];

  // ── STEP 1: Website content fetch karo ──
  let websiteContent = '';
  try {
    const siteRes = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Helix/1.0)' },
      signal: AbortSignal.timeout(8000)
    });
    const html = await siteRes.text();
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 3000);
    websiteContent = text;
    console.log('Website fetched OK, length:', websiteContent.length);
  } catch (err) {
    console.warn('Website fetch failed:', err.message);
    websiteContent = `Company website domain: ${domain}`;
  }

  try {
    // ── FIX 2: Sahi model name use karo ──
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Based on this website content from "${url}", extract company information.

WEBSITE CONTENT:
${websiteContent}

Return ONLY this raw JSON (no markdown, no backticks, start with { end with }):
{
  "companyName": "Real brand name from content (NOT the domain URL)",
  "description": "Write 3 full sentences describing what this company does, who they serve, and their value. Must be minimum 200 characters.",
  "competitors": ["https://competitor1.com", "https://competitor2.com", "https://competitor3.com"]
}`
        }]
      })
    });

    const claudeData = await claudeRes.json();
    console.log('Claude HTTP status type:', claudeData.type, '| stop_reason:', claudeData.stop_reason);

    const text = claudeData.content?.[0]?.text?.trim() || '';
    console.log('Claude raw text:', text.slice(0, 400));

    let result = {};
    try {
      result = JSON.parse(text);
    } catch {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) { try { result = JSON.parse(m[0]); } catch (e) { console.error('Parse error:', e.message); } }
    }

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
