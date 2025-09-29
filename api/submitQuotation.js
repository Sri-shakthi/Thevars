import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const data = req.body;

  try {
    // -------------------------------
    // 1️⃣ Google Sheets integration
    // -------------------------------
    const sheetResponse = await fetch(process.env.GOOGLE_SHEET_API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(sheetResponse, "sheetResponse")

    if (!sheetResponse.ok) {
        const errText = await sheetResponse.text();
        console.error("Google Sheets API Error:", errText);
        return res.status(500).json({ status: "error", message: "Google Sheets failed" });
    }

    res.status(200).json({ status: "success", message: "Quotation submitted to Google Sheet successfully!" });

  } catch (err) {
    console.error("Backend Error:", err);
    res.status(500).json({ status: "error", message: err.message });
  }
}