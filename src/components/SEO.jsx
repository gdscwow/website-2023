import Head from "next/head";

const SEO = ({
  title,
  description,
  url,
  image,
  canonical,
  ogType,
  altText,
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content="GDSC WoW" />
      <meta name="copyright" content="Google Developers Student Clubs WOW" />
      <meta name="application-name" content="GDSC WoW" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/Assets/Images/ms-icon-144x144.png"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#ffffff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000000"
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={altText}></meta>
      <meta property="og:locale" content="en" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@gdscwow" />

      {/* Apple Web App Meta */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/Assets/Images/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/Assets/Images/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/Assets/Images/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/Assets/Images/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/Assets/Images/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/Assets/Images/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/Assets/Images/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/Assets/Images/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/Assets/Images/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/Assets/Images/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/Assets/Images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/Assets/Images/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/Assets/Images/favicon-16x16.png"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" href="https://gdscwow.live" hrefLang="x-default" />
    </Head>
  );
};

SEO.defaultProps = {
  title: "WOW 2023",
  description: "Google Developers Student Clubs WOW 2023",
  url: "https://gdscwow.live",
  image: "",
  altText: "GDSC WoW 2023",
  ogType: "Website",
  canonical: "process.env.NEXT_PUBLIC_SITE_URL",
};

export default SEO;
