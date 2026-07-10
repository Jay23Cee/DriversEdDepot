import Head from "next/head";

export type OrganizationSchemaProps = {
  name: string;
  url: string;
  logo: string;
  description?: string;
  sameAs?: string[];
};

export type WebSiteSchemaProps = {
  name: string;
  url: string;
  description?: string;
};

export type BreadcrumbListItem = {
  name: string;
  item: string;
};

export type BreadcrumbListSchemaProps = {
  items: BreadcrumbListItem[];
};

export type CourseSchemaProps = {
  name: string;
  description: string;
  url: string;
  providerName: string;
  providerUrl: string;
};

export type FaqSchemaItem = {
  question: string;
  answer: string;
};

export type FaqPageSchemaProps = {
  items: FaqSchemaItem[];
};

export type ArticleSchemaProps = {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
};

export type ItemListSchemaProps = {
  name: string;
  items: Array<{
    name: string;
    url: string;
  }>;
};

type StructuredDataProps = {
  organization?: OrganizationSchemaProps;
  website?: WebSiteSchemaProps;
  breadcrumbList?: BreadcrumbListSchemaProps;
  course?: CourseSchemaProps;
  faqPage?: FaqPageSchemaProps;
  article?: ArticleSchemaProps;
  itemList?: ItemListSchemaProps;
};

function StructuredData({
  organization,
  website,
  breadcrumbList,
  course,
  faqPage,
  article,
  itemList,
}: StructuredDataProps) {
  const scripts: Array<Record<string, unknown>> = [];

  if (organization) {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: organization.name,
      url: organization.url,
      logo: organization.logo,
      description: organization.description,
      sameAs: organization.sameAs,
    });
  }

  if (website) {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: website.name,
      url: website.url,
      description: website.description,
    });
  }

  if (breadcrumbList && breadcrumbList.items.length > 0) {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbList.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    });
  }

  if (course) {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.name,
      description: course.description,
      provider: {
        "@type": "Organization",
        name: course.providerName,
        sameAs: course.providerUrl,
      },
      url: course.url,
    });
  }

  if (faqPage && faqPage.items.length > 0) {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqPage.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (article) {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.headline,
      description: article.description,
      image: article.image,
      author: {
        "@type": "Organization",
        name: article.authorName ?? "DriversEdDepot Editorial Team",
      },
      publisher: {
        "@type": "Organization",
        name: "DriversEdDepot.com",
        logo: {
          "@type": "ImageObject",
          url: "https://driverseddepot.com/assets/logo.png",
        },
      },
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": article.url,
      },
    });
  }

  if (itemList && itemList.items.length > 0) {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: itemList.name,
      itemListElement: itemList.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    });
  }

  if (scripts.length === 0) {
    return null;
  }

  return (
    <Head>
      {scripts.map((schema, index) => (
        <script
          key={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}

export default StructuredData;
