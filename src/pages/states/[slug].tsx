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
    <div className="w-full max-w-[1100px] m-auto px-4 md:px-8 py-10 md:py-14">
      <SeoHead
        title={`${state.name} Online Drivers Ed | DriversEdDepot`}
        description={`Find online drivers ed options in ${state.name}. Review eligibility, ticket-dismissal use cases, insurance discount notes, and provider links.`}
        path={`/states/${state.slug}`}
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "States", item: BASE_URL + "/states-online-drivers-ed" },
            { name: state.name, item: BASE_URL + `/states/${state.slug}` },
          ],
        }}
        course={{
          name: `${state.name} Online Drivers Ed Selection Guide`,
          description: `State-intent course selection guide for ${state.name} including eligibility, completion flow, and provider options.`,
          url: BASE_URL + `/states/${state.slug}`,
          providerName: "DriversEdDepot.com",
          providerUrl: BASE_URL,
        }}
      />

      <h1 className="text-[30px] md:text-[44px] leading-tight font-semibold font-poppins text-black-main">
        {state.name} Online Drivers Ed Courses
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Primary keyword target: <strong>{state.primary_keyword}</strong>
      </p>
      <p className="mt-1 text-[15px] md:text-[16px] text-[#4b5563] font-inter">
        Supporting terms: {state.secondary_keywords.join(" • ")}
      </p>

      <section className="mt-8 bg-white-cool rounded-[16px] p-6 md:p-8 space-y-4">
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

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="rounded-[14px] border border-[#e5e7eb] p-5">
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
        <div className="rounded-[14px] border border-[#e5e7eb] p-5">
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

      <section className="mt-8 rounded-[16px] bg-brand-primary/10 p-6 md:p-8">
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
              className="rounded-[12px] border border-[#fed7aa] bg-white-main p-4 hover:border-brand-primary transition-colors"
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

      <section className="mt-8 rounded-[16px] border border-[#e5e7eb] p-6 md:p-8">
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

      <section className="mt-8 rounded-[16px] border border-[#e5e7eb] p-6 md:p-8">
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
