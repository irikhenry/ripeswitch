import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.ripeswitch.com";
const DEFAULT_DESCRIPTION =
  "Active ripening control, built into paper. Extends produce shelf life without plastics, electronics, or coatings.";
const DEFAULT_IMAGE = `${SITE_URL}/website_og.png`;

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown>;
}

export function Seo({ title, description, path = "/", image, noIndex, jsonLd }: SeoProps) {
  const metaDescription = description ?? DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const metaImage = image ?? DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="RipeSwitch" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {jsonLd ? (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      ) : null}
    </Helmet>
  );
}
