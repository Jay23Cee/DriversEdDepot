import React from "react";
import Link from "next/link";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";
import StateHubList from "@/components/State/StateHubList";
import { STATES_OF_UNITED } from "@/data/states";

const BASE_URL = "https://driverseddepot.com";

const BUDGET_FAQS = [
  {
    question: "Is DriversEdDepot a budget drivers ed school?",
    answer:
      "No. DriversEdDepot is an independent guide that helps visitors compare online drivers ed, traffic school, and defensive driving options by state.",
  },
  {
    question: "How do I find a lower-cost online drivers ed option?",
    answer:
      "Start with your state, confirm approval requirements, compare total price, check certificate delivery fees, and review refund terms before enrolling.",
  },
  {
    question: "Can budget traffic school dismiss a ticket?",
    answer:
      "Only if the court or licensing authority accepts that course for your case. Verify approval and deadlines before paying for any course.",
  },
];

function BudgetDriversEdSchoolPage() {
  return (
    <div className="page-shell max-w-[1120px]">
      <SeoHead
        title="Budget Drivers Ed School Options by State | DriversEdDepot"
        description="Compare budget drivers ed school options, online traffic school, and defensive driving paths by state before choosing a provider."
        path="/budget-drivers-ed-school"
        keywords={[
          "budget drivers ed school",
          "cheap drivers ed online",
          "affordable online drivers ed",
          "budget traffic school",
          "drivers ed by state",
        ]}
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            {
              name: "Budget Drivers Ed School",
              item: BASE_URL + "/budget-drivers-ed-school",
            },
          ],
        }}
        faqPage={{ items: BUDGET_FAQS }}
        itemList={{
          name: "Budget drivers ed school options by state",
          items: STATES_OF_UNITED.map((state) => ({
            name: `${state.name} online drivers ed`,
            url: BASE_URL + `/states/${state.slug}`,
          })),
        }}
      />

      <p className="section-kicker">Budget course research</p>
      <h1 className="mt-3 max-w-4xl font-poppins text-[34px] font-semibold leading-tight text-brand-navy md:text-[50px]">
        Budget Drivers Ed School Options by State
      </h1>
      <p className="mt-4 max-w-3xl text-[17px] leading-8 text-brand-muted md:text-[19px]">
        Use this guide to compare price-conscious online drivers ed, traffic school, and
        defensive driving options without skipping the approval checks that matter most.
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Approval", "Confirm the course fits your state, court, DMV, or insurer rules."],
          ["Total price", "Check listed price, processing fees, certificate fees, and add-ons."],
          ["Timing", "Review course length, deadline rules, and certificate delivery speed."],
          ["Access", "Confirm phone, tablet, desktop, and browser requirements before checkout."],
        ].map(([title, body]) => (
          <article key={title} className="card-surface p-5">
            <h2 className="font-poppins text-[19px] font-semibold text-brand-ink">{title}</h2>
            <p className="mt-2 text-[15px] leading-7 text-brand-muted">{body}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-[20px] border border-brand-line bg-brand-surface p-6 md:p-8">
        <h2 className="font-poppins text-[26px] font-semibold text-brand-navy md:text-[34px]">
          Start with your state
        </h2>
        <p className="mt-3 max-w-3xl text-[16px] leading-7 text-brand-muted md:text-[18px]">
          A budget-friendly course still needs to match the rule you are trying to satisfy.
          Choose your state first, then verify details before leaving for a provider.
        </p>
        <div className="mt-6">
          <StateHubList states={STATES_OF_UNITED} />
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1fr,360px]">
        <div className="card-surface p-6 md:p-8">
          <h2 className="font-poppins text-[24px] font-semibold text-brand-navy md:text-[30px]">
            What to compare before paying
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-[16px] leading-7 text-brand-muted">
            <li>Whether the course is accepted for your exact use case.</li>
            <li>The final checkout price after optional services and delivery fees.</li>
            <li>How quickly completion proof is sent and where it is sent.</li>
            <li>Refund, reschedule, and expiration rules if your deadline changes.</li>
          </ul>
        </div>
        <aside className="rounded-[18px] border border-amber-200 bg-amber-50 p-6">
          <h2 className="font-poppins text-[22px] font-semibold text-brand-navy">
            Price is not the only filter
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-brand-muted">
            The cheapest drivers ed or traffic school option can still be the wrong choice if
            it is not accepted by the authority that controls your requirement.
          </p>
          <Link href="/state-requirements" className="mt-4 inline-block font-semibold text-brand-primary underline">
            Review state requirements
          </Link>
        </aside>
      </section>

      <section className="mt-10 card-surface p-6 md:p-8">
        <h2 className="font-poppins text-[24px] font-semibold text-brand-navy md:text-[30px]">
          Budget Drivers Ed FAQ
        </h2>
        <div className="mt-5 space-y-4">
          {BUDGET_FAQS.map((item) => (
            <div key={item.question}>
              <h3 className="font-poppins text-[18px] font-semibold text-brand-ink">
                {item.question}
              </h3>
              <p className="mt-1 text-[16px] leading-7 text-brand-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BudgetDriversEdSchoolPage;
