import Head from "next/head";

type Props = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  keywords?: string[];
  imageAlt?: string;
};

const BASE_URL = "https://driverseddepot.com";
const DEFAULT_IMAGE = "/assets/welcome-to-driverseddepot-header.png";

function SeoHead({
  title,
  description,
  path,
  imagePath = DEFAULT_IMAGE,
  keywords = [],
  imageAlt = "DriversEdDepot online drivers education resource",
}: Props) {
  const canonicalUrl = `${BASE_URL}${path}`;
  const imageUrl = `${BASE_URL}${imagePath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      <meta name="author" content="DriversEdDepot.com" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="DriversEdDepot.com" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Head>
  );
}

export default SeoHead;
