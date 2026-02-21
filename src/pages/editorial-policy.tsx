import React from "react";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";

const BASE_URL = "https://driverseddepot.com";

function EditorialPolicyPage() {
  return (
    <div className="w-full max-w-[1000px] m-auto px-4 md:px-8 py-10 md:py-14">
      <SeoHead
        title="Editorial Policy | DriversEdDepot"
        description="Learn how DriversEdDepot creates, reviews, and updates state-intent drivers ed content."
        path="/editorial-policy"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Editorial Policy", item: BASE_URL + "/editorial-policy" },
          ],
        }}
      />

      <h1 className="text-[30px] md:text-[42px] leading-tight font-semibold font-poppins text-black-main">
        Editorial Policy
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        DriversEdDepot content is designed for people comparing online drivers education
        options by state. We optimize for clarity, source transparency, and update cadence.
      </p>

      <div className="mt-8 space-y-6 text-[16px] md:text-[18px] text-[#374151] font-inter">
        <section>
          <h2 className="text-[22px] md:text-[28px] font-semibold font-poppins text-black-main">
            Content Creation Standards
          </h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>State-intent keyword mapping is established before drafting.</li>
            <li>Each page includes a specific user intent and conversion path.</li>
            <li>Affiliate relationships are disclosed near outbound actions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[22px] md:text-[28px] font-semibold font-poppins text-black-main">
            Source and Verification
          </h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>State summary pages include source links to official resources.</li>
            <li>Each state page includes a visible last-verified date.</li>
            <li>Reported issues are reviewed and updated on a rolling basis.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[22px] md:text-[28px] font-semibold font-poppins text-black-main">
            Author and Reviewer Attribution
          </h2>
          <p className="mt-3">
            Default attribution on state and guide pages:
            <br />
            Author: DriversEdDepot Editorial Team
            <br />
            Reviewer: DriversEdDepot Compliance Review
          </p>
        </section>
      </div>
    </div>
  );
}

export default EditorialPolicyPage;
