export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sadece POST isteği kabul edilir." });
  }

  const { question, moduleTitle } = req.body;

  if (!question || !moduleTitle) {
    return res.status(400).json({ error: "Soru veya modül başlığı eksik." });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Sen bir Türk hukuk uzmanısın. Sadece "${moduleTitle}" alanında, kullanıcıdan gelen soruya detaylı ve mevzuata dayalı açıklamalar yap. 
            Yanıtlarında gereksiz tekrar yapma, sade ama özgün ol. 
            Türk mevzuatına referans verebilir, örnek durumlarla açıklayabilirsin. 
            Yanıtın kullanıcıya gerçekten yardımcı olacak şekilde uygulanabilir ve öğretici olsun.
            Eğer soruda eksik bilgi varsa, kullanıcıya daha fazla bilgi sormaktan çekinme.`,
          },
          {
            role: "user",
            content: question,
          },
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    res.status(200).json({ reply });
  } catch (error) {
    console.error("API hatası:", error);
    res.status(500).json({ error: "Sunucu hatası" });
  }
}
