import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";

const moduleInfo = [
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    desc: "Çalışan ve işveren hakları, fesih, tazminat gibi konularda genel bilgilendirme.",
    staticInfo: [
      "İşçi ile işveren ilişkilerini düzenleyen hukuk dalıdır.",
      "İşten çıkarma, tazminat, izinler, çalışma saatleri gibi konuları kapsar.",
      "4857 sayılı İş Kanunu temel mevzuat kaynağıdır.",
    ],
    exampleQuestions: [
      "İşten çıkarıldım ama gerekçe belirtilmedi. Bu yasal mı?",
      "3 yıldır çalışıyorum, tazminat hakkım var mı?",
      "Haftalık çalışma süresi ne kadar olmalı?",
    ],
  },
  {
    slug: "borclar-hukuku",
    title: "Borçlar Hukuku",
    desc: "Sözleşmeler, kira, alacak verecek gibi borç ilişkilerini kapsar.",
    staticInfo: [
      "Borç ilişkilerini düzenleyen temel hukuk dalıdır.",
      "Kira sözleşmeleri, satış sözleşmeleri, tazminat gibi konuları içerir.",
      "6098 sayılı Türk Borçlar Kanunu geçerlidir.",
    ],
    exampleQuestions: [
      "Ev sahibi kirayı artırmak istiyor, kabul etmek zorunda mıyım?",
      "Sözleşmesiz borç verdim, nasıl geri alabilirim?",
      "Kira süresi dolmadan evden çıkabilir miyim?",
    ],
  },
  {
    slug: "tuketici-hukuku",
    title: "Tüketici Hukuku",
    desc: "Ayıplı mal, garanti, cayma hakkı gibi tüketici haklarına ilişkin genel bilgilendirme.",
    staticInfo: [
      "Tüketicilerin mal ve hizmet satın alırken sahip oldukları hakları düzenler.",
      "6502 sayılı Tüketicinin Korunması Hakkında Kanun geçerlidir.",
      "Garanti, iade, ayıplı mal, cayma hakkı gibi konuları kapsar.",
    ],
    exampleQuestions: [
      "Aldığım ürün bozuk çıktı, iade etmek istiyorum. Ne yapmalıyım?",
      "İnternetten aldığım ürünü kaç gün içinde iade edebilirim?",
      "Ürün garanti süresi içinde bozuldu, satıcı ne yapmak zorunda?",
    ],
  },
  // diğer modüller...
];


export default function ModulePage() {
  const router = useRouter();
  const { slug } = router.query;

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const current = moduleInfo.find((m) => m.slug === slug);

  if (!current) return <p className="p-10">Modül bulunamadı.</p>;

  const handleSubmit = async () => {
    setLoading(true);
    setAnswer("");

    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        moduleTitle: current.title,
      }),
    });

    const data = await res.json();
    setAnswer(data.reply || "Cevap alınamadı.");
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>{current.title} | HukukiRehber</title>
        <meta name="description" content={current.desc} />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen px-6 py-10 text-gray-800 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Başlık */}
          <h1 className="text-3xl font-bold">{current.title}</h1>
          <p className="text-gray-600">{current.desc}</p>

          {/* Bilgilendirme Kutusu */}
          <section className="bg-white border border-gray-300 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{current.title} Nedir?</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              {current.staticInfo.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Örnek Sorular */}
          <section className="bg-white border border-gray-300 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Örnek Sorular</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              {current.exampleQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </section>

          {/* Soru Girişi */}
          <section className="space-y-2">
            <label htmlFor="question" className="block text-sm font-medium">
              Sorunuzu yazın:
            </label>
            <textarea
              id="question"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Örneğin: ${current.exampleQuestions?.[0] || ""}`}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              {loading ? "Gönderiliyor..." : "Soruyu Gönder"}
            </button>
          </section>

          {/* Cevap Kutusu */}
          {answer && (
            <section className="p-4 border border-gray-300 rounded-lg bg-white">
              <p className="text-sm">{answer}</p>
            </section>
          )}

        </div>
      </main>
    </>
  );
}
