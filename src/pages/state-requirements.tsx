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
    <div className="w-full max-w-[1200px] m-auto px-4 md:px-8 py-10 md:py-14">
      <SeoHead
        title="State Requirement Matrix | DriversEdDepot"
        description="View concise online drivers ed requirement snapshots by state, including eligibility summary, keyword map, and source links."
        path="/state-requirements"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "State Requirement Matrix", item: BASE_URL + "/state-requirements" },
          ],
        }}
      />

      <h1 className="text-[30px] md:text-[44px] leading-tight font-semibold font-poppins text-black-main">
        State Requirement Matrix
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Lightweight state snapshots for online drivers ed planning. Always verify details
        with official state resources and local court guidance before enrollment.
      </p>

      <div className="mt-4 rounded-[12px] border border-[#fde68a] bg-[#fffbeb] p-4 text-[15px] md:text-[16px] text-[#78350f] font-inter">
        Refresh policy: this matrix is reviewed monthly. If you spot a mismatch, use our{" "}
        <Link href="/contact" className="underline text-[#92400e]">
          contact page
        </Link>{" "}
        so we can verify and update quickly.
      </div>

      <div className="mt-8 overflow-x-auto rounded-[12px] border border-[#e5e7eb]">
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
