import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HM5M8E4M8E"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HM5M8E4M8E');
            `,
          }}
        />
        {/* SEO Temel Meta Etiketleri */}
        <meta name="description" content="Yapay zekâ destekli Türkçe hukuk bilgilendirme platformu. Kiracı hakları, işten çıkarma, trafik cezaları ve daha fazlası için ücretsiz destek alın." />
        <meta name="keywords" content="hukuk, kiracı hakları, işten çıkarma, trafik cezası, avukat, danışmanlık, Türkiye hukuku, yapay zeka hukuk" />
        <meta name="author" content="Hukukirehber" />
        <meta name="robots" content="index, follow" />

        {/* Sosyal Medya Önizleme (Open Graph) */}
        <meta property="og:title" content="Hukukirehber" />
        <meta property="og:description" content="Türkçe yapay zekâ destekli hukuki bilgilendirme asistanı. Ücretsiz ve anonim destek alın." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://hukukirehber.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Kartı */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hukukirehber" />
        <meta name="twitter:description" content="Türkçe yapay zekâ destekli hukuki bilgilendirme asistanı." />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
