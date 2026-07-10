import React from "react";
import Link from "next/link";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";
import { STATES_OF_UNITED } from "@/data/states";

const BASE_URL = "https://driverseddepot.com";

const formatDate = (dateString: string) => {
  const parsedDate = new Date(dateString);
  if (Number.isNaN(parsedDate.valueOf())) {
    return dateString;
  }
  return parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

function StateRequirementsPage() {
  return (
    <div className="page-shell max-w-[1200px]">
      <SeoHead
        title="Online Drivers Ed State Requirements Matrix | DriversEdDepot"
        description="View online drivers ed, traffic school, ticket dismissal, and budget course requirement snapshots by state with source links."
        path="/state-requirements"
        keywords={[
          "online drivers ed state requirements",
          "traffic school requirements by state",
          "drivers ed requirement matrix",
          "budget drivers ed requirements",
        ]}
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "State Requirement Matrix", item: BASE_URL + "/state-requirements" },
          ],
        }}
        itemList={{
          name: "Online drivers ed state requirements",
          items: STATES_OF_UNITED.map((state) => ({
            name: `${state.name} online drivers ed requirements`,
            url: BASE_URL + `/states/${state.slug}`,
          })),
        }}
      />

      <p className="section-kicker">Compliance reference</p><h1 className="mt-3 text-[34px] md:text-[48px] leading-tight font-semibold font-poppins text-brand-navy">
        State Requirement Matrix
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Lightweight state snapshots for online drivers ed, traffic school, ticket dismissal,
        insurance-discount, and budget course planning. Always verify details with official
        state resources and local court guidance before enrollment.
      </p>

      <div className="mt-6 rounded-[14px] border border-amber-200 bg-amber-50 p-5 text-[15px] md:text-[16px] text-amber-900 font-inter">
        Refresh policy: this matrix is reviewed monthly. If you spot a mismatch, use our{" "}
        <Link href="/contact" className="underline text-[#92400e]">
          contact page
        </Link>{" "}
        so we can verify and update quickly.
      </div>

      <p className="mt-5 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Comparing price first? Use the{" "}
        <Link href="/budget-drivers-ed-school" className="text-brand-primary underline">
          budget drivers ed school guide
        </Link>{" "}
        after checking your state requirement row.
      </p>

      <div className="mt-8 overflow-x-auto rounded-[16px] border border-brand-line shadow-sm">
        <table className="w-full min-w-[980px] border-collapse">
          <thead className="bg-white-cool">
            <tr>
              <th className="text-left p-3 text-[14px] md:text-[15px] font-semibold">State</th>
              <th className="text-left p-3 text-[14px] md:text-[15px] font-semibold">
                Primary Keyword
              </th>
              <th className="text-left p-3 text-[14px] md:text-[15px] font-semibold">
                Eligibility Snapshot
              </th>
              <th className="text-left p-3 text-[14px] md:text-[15px] font-semibold">
                Last Verified
              </th>
              <th className="text-left p-3 text-[14px] md:text-[15px] font-semibold">
                Official Source
              </th>
            </tr>
          </thead>
          <tbody>
            {STATES_OF_UNITED.map((state) => (
              <tr key={state.slug} id={state.slug} className="border-t border-[#f3f4f6]">
                <td className="p-3 align-top text-[14px] md:text-[15px]">
                  <Link href={`/states/${state.slug}`} className="text-brand-primary underline">
                    {state.name}
                  </Link>
                </td>
                <td className="p-3 align-top text-[14px] md:text-[15px]">{state.primary_keyword}</td>
                <td className="p-3 align-top text-[14px] md:text-[15px]">
                  {state.eligibility_summary}
                </td>
                <td className="p-3 align-top text-[14px] md:text-[15px]">
                  {formatDate(state.last_verified_at)}
                </td>
                <td className="p-3 align-top text-[14px] md:text-[15px]">
                  <a
                    href={state.dmv_source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary underline"
                  >
                    Source
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StateRequirementsPage;
