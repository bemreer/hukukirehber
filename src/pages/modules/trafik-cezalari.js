import Head from "next/head";
import { useState } from "react";

export default function TrafikCezalari() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: `Trafik cezaları bağlamında bir kullanıcı şöyle soruyor: ${question}`,
      }),
    });

    const data = await res.json();
    setAnswer(data.reply || "Cevap alınamadı.");
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Trafik Cezaları | Hukukirehber</title>
        <meta name="description" content="Trafik cezası itirazı, araç çekme, radar cezaları hakkında ücretsiz yapay zekâ destekli hukuki bilgilendirme alın." />
        <meta property="og:title" content="Trafik Cezaları" />
        <meta property="og:description" content="Yapay zekâ ile trafik cezası ve itiraz süreçleri hakkında bilgi alın." />
        <meta property="og:url" content="https://hukukirehber.com/modules/trafik-cezalari" />
      </Head>

      <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-800 font-sans">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Trafik Cezaları</h1>
          <p className="text-gray-600">Trafik cezası itirazı, araç çekilmesi, radar cezaları gibi konularda sorularınızı buradan yöneltebilirsiniz.</p>

          <textarea
            rows={4}
            placeholder="Sorunuzu yazın..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Soruyu Gönder"}
          </button>

          {answer && (
            <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-white">
              <p className="whitespace-pre-wrap">{answer}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
