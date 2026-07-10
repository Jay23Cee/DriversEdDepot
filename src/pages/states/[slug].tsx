import React from "react";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";
import { getStateBySlug, STATES_OF_UNITED, StateOption } from "@/data/states";
import { GUIDE_ARTICLES } from "@/data/guides";
import { trackSeoEvent } from "@/lib/analytics";

type Props = {
  state: StateOption;
};

const BASE_URL = "https://driverseddepot.com";

const formatIsoDate = (dateString: string) => {
  const parsedDate = new Date(dateString);
  if (Number.isNaN(parsedDate.valueOf())) {
    return dateString;
  }
  return parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

function StatePage({ state }: InferGetStaticPropsType<typeof getStaticProps>) {
  const relatedGuides = GUIDE_ARTICLES.filter((guide) => guide.state_slug === state.slug);

  const handleAffiliateClick = (providerName: string) => {
    trackSeoEvent("cta_clicked", {
      placement: "state_provider_card",
      state_name: state.name,
      state_slug: state.slug,
      provider: providerName,
      page_type: "state",
    });

    trackSeoEvent("affiliate_outbound_clicked", {
      placement: "state_provider_card",
      state_name: state.name,
      state_slug: state.slug,
      provider: providerName,
      page_type: "state",
    });
  };

  return (
    <div className="page-shell">
      <SeoHead
        title={`${state.name} Online Drivers Ed & Traffic School | DriversEdDepot`}
        description={`Compare ${state.name} online drivers ed, budget drivers ed school options, traffic school, ticket dismissal, insurance discount notes, and provider links.`}
        path={`/states/${state.slug}`}
        keywords={[state.primary_keyword, ...state.secondary_keywords]}
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "States", item: BASE_URL + "/states-online-drivers-ed" },
            { name: state.name, item: BASE_URL + `/states/${state.slug}` },
          ],
        }}
        article={{
          headline: `${state.name} Online Drivers Ed and Traffic School Guide`,
          description: `State-intent guide for ${state.name} online drivers ed, traffic school, ticket dismissal, insurance discount, and budget course comparison.`,
          url: BASE_URL + `/states/${state.slug}`,
          datePublished: state.last_verified_at,
          dateModified: state.last_verified_at,
          image: BASE_URL + "/assets/drivers-ed-hero-v2.png",
        }}
        faqPage={{
          items: state.faq_items,
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-[14px] font-medium text-brand-muted"><Link href="/">Home</Link> / <Link href="/states-online-drivers-ed">States</Link> / {state.name}</nav>
      <p className="section-kicker">State course guide</p>
      <h1 className="mt-3 text-[34px] md:text-[48px] leading-tight font-semibold font-poppins text-brand-navy">
        {state.name} Online Drivers Ed and Traffic School Guide
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Compare {state.name} online drivers ed, defensive driving, traffic school,
        ticket dismissal, and insurance-discount paths before you choose a provider.
      </p>
      <p className="mt-2 text-[15px] md:text-[16px] text-[#4b5563] font-inter">
        If you are searching for a budget drivers ed school option in {state.name}, use
        this page as a checklist for approval, timing, certificate delivery, and total price.
      </p>

      <section className="mt-8 rounded-[20px] border border-brand-line bg-brand-surface p-6 md:p-8 space-y-4">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Eligibility and Enrollment Snapshot
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#374151] font-inter">
          {state.eligibility_summary} This page is designed for users who are comparing
          legitimate online options before committing to a provider. Requirements can differ
          by court, DMV, insurer, and personal driving history.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#374151] font-inter">
          To avoid enrollment mistakes, confirm all requirements before checkout, including
          approved course format, seat-time expectations, completion deadline, and certificate
          delivery method. If your goal is ticket dismissal, court approval and deadline
          windows are usually the most important variables.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#374151] font-inter">
          If your goal is an insurance discount, verify policy-specific criteria with your
          insurer before purchase. Insurers may require specific completion evidence and may
          apply discount windows based on age, policy type, or defensive-driving program
          eligibility in {state.name}.
        </p>
      </section>

      <section className="mt-8 card-surface p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Budget-Friendly Drivers Ed in {state.name}
        </h2>
        <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
          A low advertised price is only useful if the course is accepted for your goal. When
          comparing {state.name} budget drivers ed school options, check the final checkout
          price, certificate fees, delivery timing, mobile access, approval status, and refund
          rules before enrolling.
        </p>
        <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
          For a broader price-focused checklist, review the{" "}
          <Link href="/budget-drivers-ed-school" className="text-brand-primary underline">
            budget drivers ed school guide
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card-surface p-6">
          <h3 className="text-[22px] font-semibold font-poppins text-black-main">
            Completion Path
          </h3>
          <ol className="mt-3 list-decimal pl-5 text-[16px] text-[#374151] space-y-2 font-inter">
            <li>Verify eligibility for your case in {state.name}.</li>
            <li>Choose a provider and confirm course approval requirements.</li>
            <li>Complete the course modules and pass final checks.</li>
            <li>Submit completion proof to the required destination.</li>
          </ol>
        </div>
        <div className="card-surface p-6">
          <h3 className="text-[22px] font-semibold font-poppins text-black-main">
            State Caveats
          </h3>
          <ul className="mt-3 list-disc pl-5 text-[16px] text-[#374151] space-y-2 font-inter">
            <li>Court-level rules may differ from statewide summaries.</li>
            <li>Insurance discount eligibility is policy dependent.</li>
            <li>Completion deadlines can invalidate otherwise valid certificates.</li>
            <li>Provider availability and course approvals can change.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-[20px] border border-blue-200 bg-blue-50 p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Course Provider Options
        </h2>
        <p className="mt-2 text-[16px] md:text-[18px] text-[#374151] font-inter">
          Affiliate disclosure: we may earn a commission when you complete a qualifying action.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {state.provider_options.map((provider) => (
            <a
              key={provider.name}
              href={provider.affiliate_url}
              rel={provider.rel}
              target="_blank"
              onClick={() => handleAffiliateClick(provider.name)}
              className="rounded-[14px] border border-brand-line bg-white-main p-5 shadow-sm hover:border-brand-primary"
            >
              <p className="text-[18px] font-semibold font-poppins text-black-main">
                {provider.name}
              </p>
              <p className="mt-1 text-[15px] text-[#4b5563] font-inter">
                Open provider enrollment details
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-8 card-surface p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          State Source and Verification
        </h2>
        <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
          Last verified: {formatIsoDate(state.last_verified_at)}
        </p>
        <p className="mt-1 text-[16px] md:text-[18px] text-[#374151] font-inter">
          Official source citation:{" "}
          <a
            href={state.dmv_source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary underline"
          >
            {state.dmv_source_url}
          </a>
        </p>
        <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
          You can also review our concise requirement matrix for all states and jump directly
          to {state.name} here:{" "}
          <Link href={`/state-requirements#${state.slug}`} className="text-brand-primary underline">
            {state.name} requirement row
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 card-surface p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-4">
          {state.faq_items.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-[18px] md:text-[20px] font-semibold font-poppins text-black-main">
                {faq.question}
              </h3>
              <p className="mt-1 text-[16px] md:text-[18px] text-[#374151] font-inter">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[16px] bg-white-cool p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Related State-Intent Guides
        </h2>
        {relatedGuides.length > 0 ? (
          <ul className="mt-4 list-disc pl-6 text-[16px] md:text-[18px] text-[#374151] font-inter space-y-2">
            {relatedGuides.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/guides/${guide.slug}`} className="text-brand-primary underline">
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-[16px] md:text-[18px] text-[#374151] font-inter">
            Browse all supporting guides in the{" "}
            <Link href="/guides" className="text-brand-primary underline">
              guide hub
            </Link>
            .
          </p>
        )}
      </section>

      <section className="mt-8 rounded-[16px] bg-black-main/5 p-6 md:p-8">
        <h2 className="text-[24px] md:text-[30px] font-semibold font-poppins text-black-main">
          Explore More State Hubs
        </h2>
        <ul className="mt-4 list-disc pl-6 text-[16px] md:text-[18px] text-[#374151] font-inter space-y-2">
          <li>
            <Link href="/states-online-drivers-ed" className="text-brand-primary underline">
              Online Drivers Ed by State
            </Link>
          </li>
          <li>
            <Link href="/states-ticket-dismissal" className="text-brand-primary underline">
              Ticket Dismissal State Hub
            </Link>
          </li>
          <li>
            <Link href="/states-insurance-discount" className="text-brand-primary underline">
              Insurance Discount State Hub
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-8 text-[14px] text-[#6b7280] font-inter">
        <p>Author: DriversEdDepot Editorial Team</p>
        <p>Reviewer: DriversEdDepot Compliance Review</p>
      </section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: STATES_OF_UNITED.map((state) => ({ params: { slug: state.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const state = getStateBySlug(slug);

  if (!state) {
    return { notFound: true };
  }

  return {
    props: {
      state,
    },
  };
};

export default StatePage;
