import React from "react";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";
import { GUIDE_ARTICLES, getGuideBySlug, GuideArticle } from "@/data/guides";
import { getStateBySlug, StateOption } from "@/data/states";
import { trackSeoEvent } from "@/lib/analytics";

type Props = {
  guide: GuideArticle;
  state: StateOption;
};

const BASE_URL = "https://driverseddepot.com";

function GuidePage({ guide, state }: InferGetStaticPropsType<typeof getStaticProps>) {
  const handleProviderClick = () => {
    const providerName = state.provider_options[0]?.name ?? "myimprov";
    trackSeoEvent("affiliate_outbound_clicked", {
      placement: "guide_provider_link",
      state_name: state.name,
      state_slug: state.slug,
      provider: providerName,
      page_type: "guide",
    });
  };

  return (
    <div className="page-shell max-w-[1000px]">
      <SeoHead
        title={`${guide.title} | DriversEdDepot`}
        description={guide.description}
        path={`/guides/${guide.slug}`}
        keywords={[guide.primary_keyword, ...guide.secondary_keywords]}
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Guides", item: BASE_URL + "/guides" },
            { name: guide.title, item: BASE_URL + `/guides/${guide.slug}` },
          ],
        }}
        article={{
          headline: guide.h1,
          description: guide.description,
          url: BASE_URL + `/guides/${guide.slug}`,
          datePublished: guide.last_verified_at,
          dateModified: guide.last_verified_at,
          image: BASE_URL + "/assets/welcome-to-driverseddepot-header.png",
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-[14px] text-brand-muted"><Link href="/">Home</Link> / <Link href="/guides">Guides</Link> / {state.name}</nav><p className="section-kicker">{state.name} guide</p><h1 className="mt-3 text-[34px] md:text-[46px] leading-tight font-semibold font-poppins text-brand-navy">
        {guide.h1}
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        {guide.description}
      </p>

      <section className="mt-8 space-y-4 text-[16px] md:text-[18px] text-[#374151] font-inter">
        <p>
          This guide is for drivers comparing {state.name} online drivers ed, traffic school,
          and defensive-driving options before enrolling. Verify eligibility, timeline, and
          documentation requirements with official state and court resources.
        </p>
        <p>
          If you are comparing providers for {state.name}, use a structured process: confirm
          requirements, compare approved options, review delivery method, and keep proof of
          completion. This reduces the risk of choosing a course that does not match your goal.
        </p>
        <p>
          For ticket-dismissal use cases, court acceptance and deadlines are often the highest
          risk points. For insurance-discount use cases, the insurer decision is authoritative.
          In both paths, successful outcomes are usually tied to documentation quality and timing.
        </p>
        <p>
          If price is a major factor, compare the final checkout cost, certificate delivery,
          and approval status together. A budget-friendly option only helps when it matches
          the requirement you are trying to satisfy.
        </p>
      </section>

      <section className="mt-8 card-surface p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Next Step for {state.name}
        </h2>
        <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
          Continue to the state page to review source citations, eligibility summary, and
          provider links. You can also use the budget guide if total cost is your main filter.
        </p>
        <Link href={`/states/${state.slug}`} className="mt-3 inline-block text-brand-primary underline">
          Open {state.name} state page
        </Link>
        <Link
          href="/budget-drivers-ed-school"
          className="ml-0 mt-3 block text-brand-primary underline sm:ml-5 sm:inline-block"
        >
          Compare budget drivers ed options
        </Link>
      </section>

      <section className="mt-8 rounded-[20px] border border-blue-200 bg-blue-50 p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Provider Shortcut
        </h2>
        <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
          Affiliate disclosure: we may earn a commission from qualifying enrollments.
        </p>
        <a
          href={state.provider_options[0]?.affiliate_url ?? state.affiliateLink}
          rel={state.provider_options[0]?.rel ?? "sponsored noopener noreferrer"}
          target="_blank"
          onClick={handleProviderClick}
          className="btn-primary mt-5"
        >
          Open {state.provider_options[0]?.name ?? "provider"} for {state.name}
        </a>
      </section>

      <p className="mt-8 text-[14px] text-[#6b7280] font-inter">
        Last verified: {guide.last_verified_at}
      </p>
      <div className="mt-2 text-[14px] text-[#6b7280] font-inter">
        <p>Author: DriversEdDepot Editorial Team</p>
        <p>Reviewer: DriversEdDepot Compliance Review</p>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: GUIDE_ARTICLES.map((guide) => ({ params: { slug: guide.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { notFound: true };
  }

  const state = getStateBySlug(guide.state_slug);
  if (!state) {
    return { notFound: true };
  }

  return {
    props: {
      guide,
      state,
    },
  };
};

export default GuidePage;
