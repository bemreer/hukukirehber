// components/SeoHead.js
import Head from "next/head";

export default function SeoHead({
  title,
  description,
  url = "",
  image = "/og-image.jpg",
  keywords = "", // ← opsiyonel eklendi
}) {
  console.log("title:", title);
  console.log("description:", description);
  console.log("url:", url);
  console.log("image:", image);
  console.log("keywords:", keywords);
  return (
    <Head>
      <title>{title} | HukukiRehber</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="HukukiRehber" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
