import React from "react";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";

const BASE_URL = "https://driverseddepot.com";

function Terms() {
  return (
    <div className="w-full max-w-[1100px] m-auto px-4 md:px-8 py-10 md:py-14 font-inter">
      <SeoHead
        title="Terms of Use | DriversEdDepot.com"
        description="Review the terms of use for DriversEdDepot.com."
        path="/terms"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Terms", item: BASE_URL + "/terms" },
          ],
        }}
      />

      <h1 className="text-[30px] md:text-[40px] font-semibold font-poppins text-black-main">
        Terms of Use
      </h1>
      <p className="mt-4 text-[16px] md:text-[18px] text-[#374151]">
        Effective date: February 21, 2026.
      </p>

      <div className="mt-8 space-y-6 text-[16px] md:text-[18px] text-[#374151]">
        <section>
          <h2 className="text-[22px] font-semibold text-black-main">Website Purpose</h2>
          <p className="mt-2">
            DriversEdDepot.com is an informational and affiliate marketing site that connects
            visitors with third-party drivers education providers.
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-semibold text-black-main">No Enrollment Guarantee</h2>
          <p className="mt-2">
            We do not guarantee acceptance, pricing, course availability, or provider outcomes.
            Provider terms and conditions control enrollment details.
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-semibold text-black-main">Accuracy</h2>
          <p className="mt-2">
            We aim to keep information accurate, but provider details may change without notice.
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-semibold text-black-main">Limitation of Liability</h2>
          <p className="mt-2">
            This site is provided on an &quot;as is&quot; basis. Use of this site and third-party links is
            at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-semibold text-black-main">Changes to Terms</h2>
          <p className="mt-2">
            We may update these terms periodically. Updated terms become effective when posted.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
