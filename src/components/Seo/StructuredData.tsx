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

type StructuredDataProps = {
  organization?: OrganizationSchemaProps;
  website?: WebSiteSchemaProps;
  breadcrumbList?: BreadcrumbListSchemaProps;
  course?: CourseSchemaProps;
};

function StructuredData({
  organization,
  website,
  breadcrumbList,
  course,
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
