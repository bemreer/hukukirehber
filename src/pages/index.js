import { useState } from "react";

export default function Home() {
  // 🧠 STATE'LER
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // 🚀 SORUYU GÖNDEREN FONKSİYON
  const handleSubmit = async () => {
    if (!question.trim()) return;
    console.log("gönderiliyor...");

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.reply || "Cevap alınamadı.");
    } catch (error) {
      console.error("İstek hatası:", error);
      setAnswer("Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-800 font-sans">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Başlık */}
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-2">HukukiRehber</h1>
          <p className="text-gray-600">Yapay zekâ destekli hukuki bilgilendirme asistanı</p>
        </header>

        {/* Modül Kartları */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Kiracı Hakları", "İşten Çıkarma", "Trafik Cezaları"].map((modul, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-xl p-4 bg-white hover:shadow transition text-center"
            >
              {modul}
            </div>
          ))}
        </section>

        {/* Soru Girişi */}
        <section className="space-y-2">
          <label htmlFor="question" className="block text-sm font-medium">
            Hukuki sorunuzu yazın:
          </label>
          <textarea
            id="question"
            rows="4"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Örneğin: Ev sahibim evi boşaltmamı istiyor, ne yapmalıyım?"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Yanıtlanıyor..." : "Soruyu Gönder"}
          </button>
        </section>

        {/* AI Cevabı Kutusu */}
        <section className="p-4 border border-gray-300 rounded-lg bg-white min-h-[100px]">
          {answer ? <p>{answer}</p> : (
            <p className="text-sm text-gray-500 italic">Yanıt burada görünecek...</p>
          )}
        </section>

        {/* Uyarı */}
        <footer className="text-xs text-gray-500 text-center pt-8 border-t">
          Bu platform yalnızca bilgilendirme amaçlıdır. Avukat tavsiyesi yerine geçmez.
        </footer>
      </div>
    </main>
  );
}
