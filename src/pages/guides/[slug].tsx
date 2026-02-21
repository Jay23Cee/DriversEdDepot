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
    <div className="w-full max-w-[1000px] m-auto px-4 md:px-8 py-10 md:py-14">
      <SeoHead
        title={`${guide.title} | DriversEdDepot`}
        description={guide.description}
        path={`/guides/${guide.slug}`}
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Guides", item: BASE_URL + "/guides" },
            { name: guide.title, item: BASE_URL + `/guides/${guide.slug}` },
          ],
        }}
      />

      <h1 className="text-[30px] md:text-[42px] leading-tight font-semibold font-poppins text-black-main">
        {guide.h1}
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        {guide.description}
      </p>

      <section className="mt-8 space-y-4 text-[16px] md:text-[18px] text-[#374151] font-inter">
        <p>
          This guide targets the keyword <strong>{guide.primary_keyword}</strong> and focuses
          on practical decisions users make before enrolling. Drivers should verify eligibility,
          timeline, and documentation requirements with official state and court resources.
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
          Supporting terms for this page include {guide.secondary_keywords.join(", ")}. We use
          this cluster to align page intent with user needs while keeping the content focused on
          reliable, action-oriented guidance rather than generic filler copy.
        </p>
      </section>

      <section className="mt-8 rounded-[14px] border border-[#e5e7eb] p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Next Step for {state.name}
        </h2>
        <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
          Continue to the state page to review source citations, eligibility summary, and
          provider links.
        </p>
        <Link href={`/states/${state.slug}`} className="mt-3 inline-block text-brand-primary underline">
          Open {state.name} state page
        </Link>
      </section>

      <section className="mt-8 rounded-[14px] bg-white-cool p-6 md:p-8">
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
          className="mt-4 inline-block text-brand-primary underline text-[16px] md:text-[18px]"
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
