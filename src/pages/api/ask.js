import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Yalnızca POST isteklerine izin verilir." });
  }

  const { question } = req.body;

  if (!question || question.trim().length < 5) {
    return res.status(400).json({ error: "Geçerli bir soru girin." });
  }

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // 🧠 Burayı değiştirdik
        messages: [
          {
            role: "system",
            content:
              "Sen bir Türk hukuk bilgilendirme asistanısın. Sade Türkçe ile yardımcı ol.",
          },
          {
            role: "user",
            content: question,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await openaiRes.json();

    if (!data.choices || !data.choices[0]) {
      console.error("OpenAI yanıtı:", data);
      return res.status(500).json({ error: "Yanıt alınamadı." });
    }

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("Sunucu hatası:", error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
}
