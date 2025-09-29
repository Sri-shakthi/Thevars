export default async function handler(req, res) {
  // CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const data = req.body;
    const endpoint = process.env.GOOGLE_SHEET_API_ENDPOINT;
    if (!endpoint) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      return res.status(500).json({ status: "error", message: "Missing GOOGLE_SHEET_API_ENDPOINT env var" });
    }

    const sheetResponse = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!sheetResponse.ok) {
      const errText = await sheetResponse.text();
      res.setHeader("Access-Control-Allow-Origin", "*");
      return res.status(502).json({ status: "error", message: "Google Sheets failed", detail: errText });
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json({ status: "success", message: "Quotation submitted to Google Sheet successfully!" });
  } catch (err) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(500).json({ status: "error", message: err.message });
  }
}


