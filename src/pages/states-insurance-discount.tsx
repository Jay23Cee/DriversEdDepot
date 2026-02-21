import React from "react";
import Link from "next/link";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";
import StateHubList from "@/components/State/StateHubList";
import { STATES_OF_UNITED } from "@/data/states";

const BASE_URL = "https://driverseddepot.com";

function StatesInsuranceDiscountPage() {
  return (
    <div className="w-full max-w-[1100px] m-auto px-4 md:px-8 py-10 md:py-14">
      <SeoHead
        title="Insurance Discount Drivers Ed by State | DriversEdDepot"
        description="Browse state pages focused on insurance-discount use cases for online drivers education."
        path="/states-insurance-discount"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            {
              name: "Insurance Discount States",
              item: BASE_URL + "/states-insurance-discount",
            },
          ],
        }}
      />

      <h1 className="text-[30px] md:text-[44px] leading-tight font-semibold font-poppins text-black-main">
        Insurance Discount Drivers Ed by State
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Insurer discount policies vary by state and provider. Start with your state page,
        then confirm details directly with your carrier before enrolling.
      </p>

      <div className="mt-8">
        <StateHubList states={STATES_OF_UNITED} />
      </div>

      <p className="mt-8 text-[16px] md:text-[18px] text-[#374151] font-inter">
        For state-by-state snapshots, see the{" "}
        <Link href="/state-requirements" className="text-brand-primary underline">
          requirement matrix
        </Link>
        . For deeper examples, review the{" "}
        <Link href="/guides" className="text-brand-primary underline">
          topical guides
        </Link>
        .
      </p>
    </div>
  );
}

export default StatesInsuranceDiscountPage;
