import SeoHead from "@/components/SeoHead";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();

  const modules = [
    { slug: "is-hukuku", title: "İş Hukuku", desc: "Çalışan hakları, fesih, tazminat" },
    { slug: "borclar-hukuku", title: "Borçlar Hukuku", desc: "Kira, alacak, tahliye" },
    { slug: "tuketici-hukuku", title: "Tüketici Hukuku", desc: "Ayıplı mal, iade, garanti" },
    { slug: "aile-hukuku", title: "Aile Hukuku", desc: "Boşanma, nafaka, velayet" },
    { slug: "trafik-hukuku", title: "Trafik Hukuku", desc: "Cezalar, kazalar, itirazlar" },
    { slug: "ceza-hukuku", title: "Ceza Hukuku", desc: "Savunma hakları, dava süreçleri" },
    { slug: "icra-ve-iflas-hukuku", title: "İcra ve İflas Hukuku", desc: "Haciz, icra, iflas işlemleri" },
    { slug: "vergi-hukuku", title: "Vergi Hukuku", desc: "Vergi cezaları, itirazlar" },
  ];

  return (
    <>
      <SeoHead
        title="Hukuki Rehber | Yapay Zeka Destekli Hukuk Rehberi"
        description="İş hukuku, kira sorunları, tüketici hakları ve daha fazlası için yapay zekâ destekli Türk Hukuku bilgilendirme platformu."
        url="https://hukukirehber.com"
        keywords="hukuk, yapay zeka, iş hukuku, kiracı hakları, trafik cezası, tüketici, avukat"
        image="https://hukukirehber.com/og-images/og-home.jpg"
      />

      <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-800 font-sans">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Başlık */}
          <header className="text-center">
            <h1 className="text-3xl font-bold mb-2">Hukuki Rehber</h1>
            <p className="text-gray-600">
              Yapay zekâ destekli hukuki bilgilendirme asistanı
            </p>
          </header>

          {/* Modül Kartları */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((modul, i) => (
              <div
                key={i}
                onClick={() => router.push(`/modules/${modul.slug}`)}
                className="border border-gray-300 rounded-xl p-4 bg-white hover:shadow-md transition cursor-pointer"
              >
                <h3 className="text-lg font-semibold">{modul.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{modul.desc}</p>
              </div>
            ))}
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
