import React from "react";
import SeoHead from "@/components/Seo/SeoHead";
import StructuredData from "@/components/Seo/StructuredData";

const BASE_URL = "https://driverseddepot.com";
const CONTACT_EMAIL = "support@driverseddepot.com";

function ContactPage() {
  return (
    <div className="w-full max-w-[960px] m-auto px-4 md:px-8 py-10 md:py-14">
      <SeoHead
        title="Contact DriversEdDepot | Editorial and Data Corrections"
        description="Contact DriversEdDepot for content corrections, affiliate disclosures, and partnership inquiries."
        path="/contact"
      />
      <StructuredData
        breadcrumbList={{
          items: [
            { name: "Home", item: BASE_URL + "/" },
            { name: "Contact", item: BASE_URL + "/contact" },
          ],
        }}
      />

      <h1 className="text-[30px] md:text-[42px] leading-tight font-semibold font-poppins text-black-main">
        Contact DriversEdDepot
      </h1>
      <p className="mt-3 text-[16px] md:text-[18px] text-[#374151] font-inter">
        Use this contact point for state-data corrections, policy questions, and editorial
        feedback.
      </p>

      <div className="mt-8 rounded-[14px] border border-[#e5e7eb] p-6 md:p-8 space-y-3 font-inter">
        <p className="text-[16px] md:text-[18px] text-[#374151]">
          Email:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-primary underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="text-[16px] md:text-[18px] text-[#374151]">
          For fastest handling, include the page URL, issue summary, and any official source
          links you want us to review.
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
