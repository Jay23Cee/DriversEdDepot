import React from "react";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";

const BASE_URL = "https://driverseddepot.com";

function AffiliateDisclosure() {
  return (
    <div className="page-shell max-w-[900px] font-inter">
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

      <p className="section-kicker">Transparency</p><h1 className="mt-3 text-[34px] md:text-[46px] font-semibold font-poppins text-brand-navy">
        Affiliate Disclosure
      </h1>
      <p className="mt-4 text-[16px] md:text-[18px] text-[#374151]">
        Effective date: February 21, 2026.
      </p>

      <div className="card-surface mt-8 space-y-5 p-6 text-[16px] leading-8 text-brand-muted md:p-8 md:text-[18px]">
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
