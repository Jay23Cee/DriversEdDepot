import React from "react";
import Link from "next/link";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";
import { GUIDE_ARTICLES } from "@/data/guides";

const BASE_URL = "https://driverseddepot.com";

function GuideHubPage() {
  return (
    <div className="page-shell">
      <SeoHead
        title="Drivers Ed, Traffic School & Defensive Driving Guides | DriversEdDepot"
        description="Read state-intent guides on online drivers ed, budget course comparison, ticket dismissal eligibility, and insurance discount use cases."
        path="/guides"
        keywords={[
          "drivers ed guides",
          "online drivers ed guide",
          "traffic school guide",
          "defensive driving guide",
          "budget drivers ed",
        ]}
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Guides", item: BASE_URL + "/guides" },
          ],
        }}
        itemList={{
          name: "Drivers ed state guides",
          items: GUIDE_ARTICLES.map((guide) => ({
            name: guide.title,
            url: BASE_URL + `/guides/${guide.slug}`,
          })),
        }}
      />

      <p className="section-kicker">Practical resources</p><h1 className="mt-3 text-[34px] md:text-[48px] leading-tight font-semibold font-poppins text-brand-navy">
        Drivers Ed State Guides
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Supporting content for online drivers ed, budget course comparison, traffic school,
        ticket dismissal, and insurance-discount decisions before enrollment.
      </p>

      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {GUIDE_ARTICLES.map((guide) => (
          <li key={guide.slug} className="card-surface p-6">
            <p className="text-[13px] uppercase tracking-wide text-[#6b7280] font-medium">
              {guide.state_name}
            </p>
            <Link
              href={`/guides/${guide.slug}`}
              className="mt-1 block text-[19px] leading-6 font-semibold font-poppins text-black-main hover:text-brand-primary"
            >
              {guide.title}
            </Link>
            <p className="mt-2 text-[15px] text-[#4b5563] font-inter">{guide.description}</p>
            <p className="mt-2 text-[13px] text-[#6b7280] font-inter">
              Last verified: {guide.last_verified_at}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuideHubPage;
