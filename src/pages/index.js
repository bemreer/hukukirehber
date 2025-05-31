import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const modules = [
    {
      title: "Kiracı Hakları",
      description: "Ev sahibi-kiracı ilişkileri, tahliye, depozito iadesi gibi konular.",
      path: "/modules/kiraci-haklari",
    },
    {
      title: "İşten Çıkarma & Çalışan Hakları",
      description: "Tazminat, ihbar süresi, işe iade, fazla mesai konularında bilgilendirme.",
      path: "/modules/isten-cikarma",
    },
    {
      title: "Trafik Cezaları",
      description: "Trafik cezalarına itiraz, araç çekilmesi, radar cezaları gibi konular.",
      path: "/modules/trafik-cezalari",
    },
  ];

  return (
    <>
      <Head>
        <title>Hukuki Rehber | Yapay Zekâ Destekli Hukuk Platformu</title>
        <meta
          name="description"
          content="Yapay zekâ destekli Türkçe hukuk bilgilendirme platformu. Kiracı hakları, işten çıkarma, trafik cezaları ve daha fazlası."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hukukirehber" />
        <meta property="og:description" content="Yapay zekâ destekli Türkçe hukuk danışmanlık platformu. Hemen soru sorun." />
        <meta property="og:url" content="https://hukukirehber.com" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800 font-sans">
        <div className="max-w-3xl mx-auto space-y-10">
          <header className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Hukuki Rehber</h1>
            <p className="text-gray-600 text-lg">
              Yapay zekâ destekli Türkçe hukuk bilgilendirme platformu
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {modules.map((modul, i) => (
              <Link key={i} href={modul.path}>
                <div className="cursor-pointer border border-gray-300 rounded-xl p-6 bg-white hover:shadow-md transition space-y-2">
                  <h2 className="text-xl font-semibold">{modul.title}</h2>
                  <p className="text-sm text-gray-600">{modul.description}</p>
                </div>
              </Link>
            ))}
          </section>

          <footer className="text-xs text-gray-500 text-center pt-8 border-t">
            Bu platform yalnızca bilgilendirme amaçlıdır. Avukat tavsiyesi yerine geçmez.
          </footer>
        </div>
      </main>
    </>
  );
}
