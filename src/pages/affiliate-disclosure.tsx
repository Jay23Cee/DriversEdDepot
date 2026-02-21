import React from "react";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";

const BASE_URL = "https://driverseddepot.com";

function AffiliateDisclosure() {
  return (
    <div className="w-full max-w-[1100px] m-auto px-4 md:px-8 py-10 md:py-14 font-inter">
      <SeoHead
        title="Affiliate Disclosure | DriversEdDepot.com"
        description="Read the affiliate disclosure for DriversEdDepot.com."
        path="/affiliate-disclosure"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Affiliate Disclosure", item: BASE_URL + "/affiliate-disclosure" },
          ],
        }}
      />

      <h1 className="text-[30px] md:text-[40px] font-semibold font-poppins text-black-main">
        Affiliate Disclosure
      </h1>
      <p className="mt-4 text-[16px] md:text-[18px] text-[#374151]">
        Effective date: February 21, 2026.
      </p>

      <div className="mt-8 space-y-5 text-[16px] md:text-[18px] text-[#374151]">
        <p>
          DriversEdDepot.com participates in affiliate marketing programs. This means we may
          receive compensation when users click certain links and complete qualifying actions
          on provider websites.
        </p>
        <p>
          Affiliate relationships do not increase your cost. Compensation helps support this
          website and allows us to continue publishing course comparison resources.
        </p>
        <p>
          We recommend users independently verify provider details, state approval status, and
          pricing before enrollment.
        </p>
      </div>
    </div>
  );
}

export default AffiliateDisclosure;
